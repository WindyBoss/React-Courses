import { useState } from 'react';
import toast from 'react-hot-toast';

import { FormWrapper } from '../styles/Pokemon.styled';

import { ButtonStyled, TextFieldStyled } from 'components/CommonComponents';

export function PokemonFormHooks({ colors, onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonNameValid, setPokemonNameValid] = useState(false);

  function validatePokemonName(pokemonName) {
    if (pokemonName.length > 0 && typeof pokemonName === 'string') {
      setPokemonNameValid(true);
      return pokemonName;
    }
    return '';
  }

  const handleNameChange = e => {
    setPokemonName(validatePokemonName(e.currentTarget.value.toLowerCase()));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      return toast('Type pokemon name');
    }

    if (pokemonNameValid) {
      onSubmit(pokemonName);
      setPokemonName(validatePokemonName(''));
      setPokemonNameValid(false);
    }
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit} colors={colors}>
        <TextFieldStyled
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={e => handleNameChange(e)}
          colors={colors}
          label="Pokemon name"
        />
        <ButtonStyled
          type="submit"
          colors={colors}
          addFeat={{ maxHeight: '55px' }}
        >
          Find Pokemon
        </ButtonStyled>
      </FormWrapper>
    </>
  );
}
