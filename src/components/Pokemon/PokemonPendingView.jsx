import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import PokemonDataView from "./PokemonDataView";
import { FormWrapper } from './Pokemon.styled';

export default function PokemonPendingView({ pokemonName, colors, isPending }) {

  /*
  * The next code is an example of a React skeleton, which is used to replace the fetched element, until the data will come from server & element will be rendered.
  * Ussually it is build from the same element as received from the server object
  */
  const pokemon = {
    name: `Looking for ${pokemonName[0].toUpperCase() + pokemonName.slice(1)}`,
    sprites: {
      front_default: <TailSpin
        ariaLabel="loading-indicator"
        height={80}
        width={80}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color={colors.btnTextColor}
      />
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
