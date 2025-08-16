// IMPORTY NA GÓRZE
import { columns as dataColumns } from '../data/columns';

const ADD_CARD = 'app/cards/ADD_CARD';
export const addCard = (payload) => ({ type: ADD_CARD, payload }); // { columnId, title }

// spłaszczamy karty z danych 14 do tablicy
const initialState = dataColumns.flatMap(col =>
  (col.cards || []).map(card => ({
    id: card.id,                 // utrzymujemy typ/id jak w 14 (zwykle string)
    columnId: col.id,
    title: card.title,
    desc: card.desc || '',
  }))
);

// kolejne id jako string
const nextId = (state) => {
  const max = state.reduce((m, c) => {
    const n = parseInt(String(c.id), 10);
    return Number.isNaN(n) ? m : Math.max(m, n);
  }, 0);
  return String(max + 1);
};

export default function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CARD: {
      const title = (action.payload?.title || '').trim();
      const columnId = action.payload?.columnId;
      if (!title || !columnId) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, columnId, title }];
    }
    default:
      return state;
  }
}
