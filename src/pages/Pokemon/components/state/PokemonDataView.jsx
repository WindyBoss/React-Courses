import PropTypes from 'prop-types';

import { FormWrapper, PokemonName, PokemonInfoContainer, PokemonImage, PendingContainer, PokemonStats } from '../../styles/Pokemon.styled';

export default function PokemonDataView({ pokemon, colors, isPending }) {
  return (
    <FormWrapper colors={colors}>
      {
        isPending ?
        <PendingContainer> {pokemon.sprites.front_default} </PendingContainer> :
        <PokemonImage
        src={pokemon.sprites.front_default}
        width='200'
        alt={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        />
      } 
      <PokemonInfoContainer>
      <PokemonName>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</PokemonName>
      <PokemonStats>
        {pokemon.stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}

      </PokemonStats>
      </PokemonInfoContainer>
    </FormWrapper>
  );
};

PokemonDataView.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.any.isRequired,
    }).isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      stat: PropTypes.objectOf(PropTypes.string).isRequired,
      base_stat: PropTypes.number.isRequired,
    })).isRequired
  }).isRequired,
};