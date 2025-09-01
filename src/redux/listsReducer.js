// src/redux/listsReducer.js
const ADD_LIST = 'app/lists/ADD_LIST';

export const addList = (payload) => ({ type: ADD_LIST, payload });

const initialState = [
  { id: '1', title: 'Things to do...', description: 'Interesting things I want to check out' },
  { id: '2', title: 'Test list',       description: 'Lorem Ipsum' },
];

const nextId = (state) => {
  const max = state.reduce((m, l) => Math.max(m, parseInt(String(l.id), 10) || 0), 0);
  return String(max + 1);
};

export default function listsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_LIST: {
      const title = (action.payload?.title || '').trim();
      const description = (action.payload?.description || '').trim();
      if (!title) return state;
      const id = nextId(state);
      return [...state, { id, title, description }];
    }
    default:
      return state;
  }
}
