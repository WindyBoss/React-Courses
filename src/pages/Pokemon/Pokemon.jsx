import React, { useState, useContext } from 'react';
import { PokemonFormHooks } from './components/PokemonForm';
import { PokemonInfoHooksState } from './components/PokemonInfo';

import { PokemonContainer } from './styles/Pokemon.styled';
import { themeContext } from 'context/authContext';

export function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');

  const { mainTheme } = useContext(themeContext);

  const handleSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };

  return (
    <PokemonContainer style={{ margin: '20px' }}>
      <PokemonFormHooks onSubmit={handleSubmit} colors={mainTheme.colors} />
      <PokemonInfoHooksState
        pokemonName={pokemonName}
        colors={mainTheme.colors}
      />
    </PokemonContainer>
  );
}
