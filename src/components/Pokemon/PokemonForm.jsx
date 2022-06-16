import { Component } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { Button, FormWrapper, InputWrapper } from './Pokemon.styled';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
    pokemonNameValid: false,
  };

  validatePokemonName(pokemonName) {
    if (pokemonName.length > 0 && typeof(pokemonName) === 'string') { // => Check the type of data
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
          <InputWrapper type="text"
            name='pokemonName'
            value={this.state.pokemonName}
            onChange={(e) => this.handleNameChange(e)}
            colors={colors}
            placeholder='Type pokemon name'/>
          <Button type='submit' colors={colors}>
            Find Pokemon
          </Button>
        </FormWrapper>
      </>
    );
  };
};


PokemonForm.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
