// IMPORTY NA GÓRZE
import { columns as initialColumnsData } from '../data/columns';

const ADD_COLUMN = 'app/columns/ADD_COLUMN';
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

// start z danych z modułu 14 (zachowujemy ikony)
const initialState = initialColumnsData.map(c => ({
  id: c.id,
  title: c.title,
  icon: c.icon || 'book',
}));

// generujemy kolejne id jako string (zgodnie z 14)
const nextId = (state) => {
  const max = state.reduce((m, c) => {
    const n = parseInt(String(c.id), 10);
    return Number.isNaN(n) ? m : Math.max(m, n);
  }, 0);
  return String(max + 1);
};

export default function columnsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_COLUMN: {
      const title = (action.payload?.title || '').trim();
      const icon = action.payload?.icon || 'book';
      if (!title) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, title, icon }];
    }
    default:
      return state;
  }
}
