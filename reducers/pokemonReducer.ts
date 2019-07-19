import {ADD_POKEMON} from '../actions/types';

const initialState = {
  pokemonName: '',
  pokemons: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      let newState = {
        ...state,
        pokemons: [action.payload, ...state.pokemons],
      };
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
