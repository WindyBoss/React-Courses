import { Component, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { FormWrapper } from './Pokemon.styled';

import { ButtonStyled, TextFieldStyled } from "components/globalStyles";


export class PokemonFormClass extends Component {
  state = {
    pokemonName: '',
    pokemonNameValid: false,
  };

  validatePokemonName(pokemonName) {
    if (pokemonName.length > 0 && typeof(pokemonName) === 'string') {
      return pokemonName;
    }
    return '';
  }

  handleNameChange = e => {
    this.setState({ pokemonName: this.validatePokemonName(e.currentTarget.value.toLowerCase()), pokemonNameValid: true });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { pokemonName } = this.state;

    if (pokemonName.trim() === '') {
      return toast('Type pokemon name');
    };

    this.props.onSubmit(pokemonName);
    this.setState({ pokemonName: '', pokemonNameValid: false });
  };

  render() {
    const { colors } = this.props;
    return (
      <>
        <FormWrapper
          onSubmit={this.handleSubmit}
          colors={colors}>
          <TextFieldStyled type="text"
            name='pokemonName'
            value={this.state.pokemonName}
            onChange={(e) => this.handleNameChange(e)}
            colors={colors}
            label='Pokemon name'/>
          <ButtonStyled type='submit' colors={colors} addFeat={{maxHeight: '55px'}}>
            Find Pokemon
          </ButtonStyled>
        </FormWrapper>
      </>
    );
  };
};

PokemonFormClass.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};


export function PokemonFormHooks ({colors, onSubmit}) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonNameValid, setPokemonNameValid] = useState(false);

  function validatePokemonName(pokemonName) {
    if (pokemonName.length > 0 && typeof(pokemonName) === 'string') {
      setPokemonNameValid(true);
      return pokemonName;
    }
    return '';
  }

  const handleNameChange = e => {
    setPokemonName(validatePokemonName(e.currentTarget.value.toLowerCase()))
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      return toast('Type pokemon name');
    };

    if (pokemonNameValid) {
      onSubmit(pokemonName);
      setPokemonName(validatePokemonName(''))
      setPokemonNameValid(false);  
    };
  };

  return (
    <>
      <FormWrapper
        onSubmit={handleSubmit}
        colors={colors}>
        <TextFieldStyled type="text"
          name='pokemonName'
          value={pokemonName}
          onChange={(e) => handleNameChange(e)}
          colors={colors}
          label='Pokemon name'/>
        <ButtonStyled type='submit' colors={colors} addFeat={{maxHeight: '55px'}}>
            Find Pokemon
        </ButtonStyled>
      </FormWrapper>
    </>
  );
};