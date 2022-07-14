import PropTypes from 'prop-types';

import PokemonDataView from "./PokemonDataView";
import { FormWrapper } from '../../styles/Pokemon.styled';

import { LinearProgressStyled } from '../../../../components/CommonComponents';

export default function PokemonPendingView({ pokemonName, colors, isPending }) {

  const pokemon = {
    name: `Looking for ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}`,
    sprites: {
      front_default: <LinearProgressStyled colors={colors} addFeat={{      
        minWidth: '100%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        height: ' 30px',
        borderRadius: '5px',
    }}/>
    },
    stats: [],
  };

  return (
    <FormWrapper colors={colors} role='alert'>
      <PokemonDataView pokemon={pokemon} isPending={isPending} colors={colors} pending={true}/>
    </FormWrapper>
  );
};

PokemonPendingView.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  pokemonName: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
};