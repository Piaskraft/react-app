import { createStore, combineReducers } from 'redux';
import searchStringReducer from './searchStringReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import listsReducer from './listsReducer';



const rootReducer = combineReducers({
  searchString: searchStringReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  lists: listsReducer,
});

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devtools);
export default store;


// --- ACTION CREATORS ---
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = (value) => ({ type: 'UPDATE_SEARCHSTRING', payload: value });
export const addList = (payload) => ({ type: 'app/lists/ADD_LIST', payload });