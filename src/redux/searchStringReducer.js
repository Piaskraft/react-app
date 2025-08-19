// src/redux/searchStringReducer.js
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';

export default function searchStringReducer(state = '', action = {}) {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return (action.payload ?? '').toString();
    default:
      return state;
  }
}
