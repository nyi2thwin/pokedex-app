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
        pokemons: state.pokemons.concat(action.payload),
      };
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
