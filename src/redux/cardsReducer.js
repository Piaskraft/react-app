// IMPORTY NA GÓRZE
import { columns as dataColumns } from '../data/columns';

const ADD_CARD = 'app/cards/ADD_CARD';                     // wariant namespaced
const ADD_CARD_LEGACY = 'ADD_CARD';                        // wariant z store.js
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';   // ★ NOWA AKCJA

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (id) => ({ type: TOGGLE_CARD_FAVORITE, payload: id }); // ★ CREATOR

// spłaszczamy karty z danych 14 do tablicy
const initialState = dataColumns.flatMap(col =>
  (col.cards || []).map(card => ({
    id: card.id,
    columnId: col.id,
    title: card.title,
    desc: card.desc || '',
    isFavorite: false,  // ★ dodajemy flagę
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
    // NOWE dodawanie kart (namespaced)
    case ADD_CARD: {
      const title = (action.payload?.title || '').trim();
      const columnId = action.payload?.columnId;
      if (!title || !columnId) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, columnId, title, isFavorite: false }];
    }

    // ZGODNOŚĆ WSTECZNA: jeśli gdzieś leci 'ADD_CARD' bez prefiksu (np. z store.js)
    case ADD_CARD_LEGACY: {
      const title = (action.payload?.title || '').trim();
      const columnId = action.payload?.columnId;
      if (!title || !columnId) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, columnId, title, isFavorite: false }];
    }

    // Toggle ulubionej karty
    case TOGGLE_CARD_FAVORITE: {
      return state.map(card =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    }

    default:
      return state;
  }
}
