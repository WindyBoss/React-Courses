
/*
* It is a good practice to add the fetch API in separate file
*/

function fetchPokemon(name, abortController) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {signal: abortController.signal}) // ==> AbortController.signal is used to cut fetch if component is unmounted
    .then(res => {
      if (res.ok) { // if response from server is successful it return object with feature 'ok'
        return res.json();
      };

      return Promise.reject(
        new Error(`Everything went wrong, no pokemon with name "${name}"`), // if response from server is not successful it is better to return error with message
      );
    });
};

export const pokeApi = {
  fetchPokemon
};

