// src/redux/searchStringReducer.js
const UPDATE_SEARCHSTRING = 'app/search/UPDATE_SEARCHSTRING';

// ACTION CREATOR (eksportujemy do komponentów)
export const updateSearchString = (value) => ({
  type: UPDATE_SEARCHSTRING,
  payload: value,
});

// REDUCER
export default function searchStringReducer(state = '', action = {}) {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return (action.payload ?? '').toString();
    default:
      return state;
  }
}
