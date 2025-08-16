import { createStore, combineReducers } from 'redux';
import searchStringReducer from './searchStringReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  searchString: searchStringReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});

// Redux DevTools (jeśli są w przeglądarce)
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devtools);
export default store;
