import { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonPendingView from './PokemonPendingView';
import PokemonDataView from './PokemonDataView';
import PokemonFallBackView from './PokemonErrorView';
import { IdleWrapper } from './Pokemon.styled';

import { pokeApi } from '../../services/pokemonFetch';

/*
* The next variable is used for state machine. Instead of using conditions, based on the state, it is better to use state machine
* for deacreasing the number of conditional statements & make code more readable.
*/
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default class PokemonInfo extends Component {

  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  static defaultProps = {
    pokemonName: '',
  }

  abortController = new AbortController(); // => is used for clearing fetch in componentWillUnmount, if the component is unmounted


  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
        pokeApi.fetchPokemon(nextName, this.abortController) // ==> abortController must be added as second argument to the fetch
          .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }))
    };
  };

  componentWillUnmount() {
    this.abortController.abort(); // => is used for clearing fetch in componentWillUnmount, if the component is unmounted
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName, colors } = this.props;

    if (status === 'idle') {
      return <IdleWrapper colors={colors}>Text Pokemon Name</IdleWrapper>;
    }

    if (status === 'pending') {
      return <PokemonPendingView isPending={true} pokemonName={pokemonName} colors={colors}/>;
    }

    if (status === 'rejected') {
      return <PokemonFallBackView message={error.message} colors={colors}/>;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} colors={colors}/>;
    }
  };
};

PokemonInfo.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  pokemonName: PropTypes.string
};
