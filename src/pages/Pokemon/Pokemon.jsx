import React, { useContext } from 'react';
import { PokemonFormHooks } from './components/PokemonForm';
import { PokemonInfoHooksState } from './components/PokemonInfo';

import { PokemonContainer } from './styles/Pokemon.styled';
import { themeContext } from 'context/authContext';
import { useSearchParams } from 'react-router-dom';

export function Pokemon() {

  const { mainTheme } = useContext(themeContext);

  let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = pokemonName => {
    setSearchParams({ search: pokemonName });
  };

  return (
    <PokemonContainer style={{ margin: '20px' }}>
      <PokemonFormHooks onSubmit={handleSubmit} colors={mainTheme.colors} />
      <PokemonInfoHooksState
        colors={mainTheme.colors}
      />
    </PokemonContainer>
  );
}
