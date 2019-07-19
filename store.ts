import {createStore, combineReducers} from 'redux';
import pokemonReducer from './reducers/pokemonReducer';

const rootReducer = combineReducers({
  listPage: pokemonReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
export type AppState = ReturnType<typeof rootReducer>;
