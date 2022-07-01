function fetchPokemon(name, abortController) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {signal: abortController.signal})
      .then(res => {
        if (res.ok) {
          return res.json();
        };
  
        return Promise.reject(
          new Error(`Everything went wrong, no pokemon with name "${name}"`),
        );
      });
  };
  
export const pokeApi = {
    fetchPokemon
};