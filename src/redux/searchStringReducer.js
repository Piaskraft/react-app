const SET_SEARCH_STRING = 'app/search/SET_SEARCH_STRING';

export const setSearchString = (payload) => ({ type: SET_SEARCH_STRING, payload });

const initialState = '';

export default function searchStringReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return action.payload;
    default:
      return state;
  }
}
