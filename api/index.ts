import axios from 'axios';
import {IPokemon} from '../interfaces';

const apiHost = 'https://pokeapi.co/api/v2/';

export const searchPokemon = (nameOrId: String): Promise<IPokemon> => {
  return new Promise(resolve => {
    axios({
      method: 'get',
      url: `${apiHost}pokemon/${nameOrId}/`,
    })
      .then(response => {
        let pokemon = {
          id: response.data.id,
          name: response.data.name,
          imageUrl: response.data.sprites.front_default,
        };
        resolve(pokemon);
      })
      .catch(error => {
        let pokemon404 = {
          id: 0,
          name: '404',
          imageUrl: '404',
        };
        resolve(pokemon404);
      });
  });
};
