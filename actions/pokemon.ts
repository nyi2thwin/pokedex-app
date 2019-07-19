import {Dispatch, ActionCreator} from 'redux';
import {ADD_POKEMON, IActionAddPlace} from './types';
import {IPokemon} from '../interfaces';
import {searchPokemon} from '../api';

const addPokemon = (pokemon: IPokemon): IActionAddPlace => {
  return {
    type: ADD_POKEMON,
    payload: pokemon,
  };
};

export const thunkSearchPokemon = (name: string) => {
  return function(dispatch) {
    searchPokemon(name).then(pokemon => {
      dispatch(addPokemon(pokemon));
    });
  };
};
