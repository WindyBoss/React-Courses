import React, { Component, useState } from 'react';
import { PokemonFormClass, PokemonFormHooks } from '../components/Pokemon/PokemonForm';
import { PokemonInfoHooksState, PokemonInfoClassState } from '../components/Pokemon/PokemonInfo';

import { PokemonContainer } from '../components/Pokemon/Pokemon.styled';
import { themeContext } from "context/authContext";

class PokemonClass extends Component {
  state = {
    pokemonName: '',
  };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;

    return (
        <themeContext.Consumer>
        {({mainTheme}) => (    
            <PokemonContainer style={{margin: '20px'}}>
            <PokemonFormClass
                onSubmit={this.handleSubmit}
                colors={mainTheme.colors}
            />
                <PokemonInfoHooksState
                pokemonName={pokemonName}
                colors={mainTheme.colors}
                />
            </PokemonContainer>
        )}
        </themeContext.Consumer>      
    );
  };
};

function PokemonHooks () {
    const [ pokemonName, setPokemonName ] = useState('');
  
    const handleSubmit = pokemonName => {
        setPokemonName( pokemonName );
    };
  
    return (
        <themeContext.Consumer>
        {({mainTheme}) => (    
            <PokemonContainer style={{margin: '20px'}}>
                <PokemonFormHooks
                    onSubmit={handleSubmit}
                    colors={mainTheme.colors}
                />
                <PokemonInfoClassState
                    pokemonName={pokemonName}
                    colors={mainTheme.colors}
                />
            </PokemonContainer>
        )}
        </themeContext.Consumer>      
    );
};
  

export const Pokemon = () => {
    return (
        <div style={{ display: 'flex'}}>
            <PokemonClass/>
            <PokemonHooks/>
        </div>
    );
};


