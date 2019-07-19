import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';

const rootReducer = combineReducers({
  listPage: pokemonReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
export type AppState = ReturnType<typeof rootReducer>;
