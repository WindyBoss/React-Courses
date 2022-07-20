import PokemonPendingView from './state/PokemonPendingView';
import PokemonDataView from './state/PokemonDataView';
import PokemonFallBackView from './state/PokemonErrorView';
import { IdleWrapper } from '../styles/Pokemon.styled';

import { withApiState } from 'services/ApiState';
import { pokeApi } from 'services/pokeApi';

import { useFetch } from 'hooks';
import { useSearchParams } from 'react-router-dom';

function PokemonInfoHooks({ apiState, colors }) {
  let [searchParams] = useSearchParams();

  const pokemonName = searchParams.get('search');

  const { state } = useFetch({
    fetchFunc: pokeApi.fetchPokemon,
    apiState: apiState,
    firstRenderCheck: true,
    addProp: pokemonName,
  });

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
        <PokemonDataView pokemon={state} colors={colors} />
      )}
      {apiState.isError() && (
        <PokemonFallBackView
          message={`Sorry, something went wrong`}
          colors={colors}
        />
      )}
    </>
  );
}

export const PokemonInfoHooksState = withApiState(PokemonInfoHooks);
