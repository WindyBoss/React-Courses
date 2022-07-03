import { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PokemonPendingView from './PokemonPendingView';
import PokemonDataView from './PokemonDataView';
import PokemonFallBackView from './PokemonErrorView';
import { IdleWrapper } from './Pokemon.styled';

import { withApiState } from 'services/ApiState';

import { pokeApi } from '../../services/pokeApi';

class PokemonInfoClass extends Component {
  state = {
    pokemon: null,
    error: null,
  };

  static defaultProps = {
    pokemonName: '',
  };

  abortController = new AbortController();

  componentDidUpdate(prevProps, _) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    const { apiState } = this.props;

    if (prevName !== nextName) {
      apiState.pending();
      pokeApi.fetchPokemon(nextName, this.abortController)
        .then(pokemon => {
          this.setState({ pokemon});
          apiState.success();
        })
        .catch(error => {
          this.setState({ error });
          apiState.error();
        });
    };
  };

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { pokemon, error } = this.state;
    const { pokemonName, colors, apiState } = this.props;

    return (
      <>
        { apiState.isIdle() && <IdleWrapper colors={colors}>Text Pokemon Name</IdleWrapper> }
        { apiState.isPending() && <PokemonPendingView isPending={true} pokemonName={pokemonName} colors={colors}/> }
        { apiState.isSuccess() && <PokemonDataView pokemon={pokemon} colors={colors}/> }
        { apiState.isError() && <PokemonFallBackView message={error.message} colors={colors}/> }
      </>
    );
  }  
};

PokemonInfoClass.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  pokemonName: PropTypes.string
};

function PokemonInfoHooks ({apiState, pokemonName, colors}) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  console.log(apiState);
  console.log(pokemonName);

  useEffect(() => {
    const abortController = new AbortController();

    if(pokemonName !== '') {
      apiState.pending();
      pokeApi.fetchPokemon(pokemonName, abortController)
      .then(pokemon => {
        setPokemon(pokemon);  // First is necessary to set Pokemon and after that to render interface, or it will show errors
        apiState.success();
      })
      .catch(error => {
        setError(error);
        apiState.error()
      });
    }

    return () => {
      abortController.abort();
    };
  }, [pokemonName, apiState]);

  return (
    <>
    { apiState.isIdle() && <IdleWrapper colors={colors}>Text Pokemon Name</IdleWrapper> }
    { apiState.isPending() && <PokemonPendingView isPending={true} pokemonName={pokemonName} colors={colors}/> }
    { apiState.isSuccess() && <PokemonDataView pokemon={pokemon} colors={colors}/> }
    { apiState.isError() && <PokemonFallBackView message={error.message} colors={colors}/> }
    </>
  );
};

export const PokemonInfoClassState = withApiState(PokemonInfoClass);
export const PokemonInfoHooksState = withApiState(PokemonInfoHooks);