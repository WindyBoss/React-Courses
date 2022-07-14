import { useState, useEffect } from 'react';

import PokemonPendingView from './state/PokemonPendingView';
import PokemonDataView from './state/PokemonDataView';
import PokemonFallBackView from './state/PokemonErrorView';
import { IdleWrapper } from '../styles/Pokemon.styled';

import { withApiState } from 'services/ApiState';

import { pokeApi } from '../../../services/pokeApi';

function PokemonInfoHooks({ apiState, pokemonName, colors }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  console.log(apiState);
  console.log(pokemonName);

  useEffect(() => {
    const abortController = new AbortController();

    if (pokemonName !== '') {
      apiState.pending();
      pokeApi
        .fetchPokemon(pokemonName, abortController)
        .then(pokemon => {
          setPokemon(pokemon);
          apiState.success();
        })
        .catch(error => {
          setError(error);
          apiState.error();
        });
    }

    return () => {
      abortController.abort();
    };
  }, [pokemonName, apiState]);

  return (
    <>
      {apiState.isIdle() && (
        <IdleWrapper colors={colors}>Text Pokemon Name</IdleWrapper>
      )}
      {apiState.isPending() && (
        <PokemonPendingView
          isPending={true}
          pokemonName={pokemonName}
          colors={colors}
        />
      )}
      {apiState.isSuccess() && (
        <PokemonDataView pokemon={pokemon} colors={colors} />
      )}
      {apiState.isError() && (
        <PokemonFallBackView message={error.message} colors={colors} />
      )}
    </>
  );
}

export const PokemonInfoHooksState = withApiState(PokemonInfoHooks);
