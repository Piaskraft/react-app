// src/redux/todosReducer.js
const FETCH_START   = 'todos/fetchStart';
const FETCH_SUCCESS = 'todos/fetchSuccess';
const FETCH_ERROR   = 'todos/fetchError';

// THUNK: pobierz 5 przykładowych TODO
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_START });
  try {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_ERROR, payload: String(err.message || err) });
  }
};

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export default function todosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, status: 'loading', error: null };
    case FETCH_SUCCESS:
      return { ...state, status: 'succeeded', items: action.payload, error: null };
    case FETCH_ERROR:
      return { ...state, status: 'failed', error: action.payload || 'Error' };
    default:
      return state;
  }
}
