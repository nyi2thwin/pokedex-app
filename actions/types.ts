import {IPokemon} from '../interfaces';

export const ADD_POKEMON = 'ADD_POKEMON';
export interface IActionAddPlace {
  type: string;
  payload: IPokemon;
}
