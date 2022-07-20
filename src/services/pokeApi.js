import axios from 'axios';

const fetchPokemon = async (name, abortController) => {
  return await (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal: abortController})).data;
}

export const pokeApi = {
    fetchPokemon
};