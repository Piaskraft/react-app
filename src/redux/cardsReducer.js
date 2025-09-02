// src/redux/cardsReducer.js
// IMPORTY NA GÓRZE
import { columns as dataColumns } from '../data/columns';

// --- TYPY AKCJI ---
const ADD_CARD = 'app/cards/ADD_CARD';                     // dodaj kartę (namespaced)
const ADD_CARD_LEGACY = 'ADD_CARD';                        // zgodność wsteczna
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';               // ⟵ NOWE: usuń kartę

// --- ACTION CREATORS ---
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (id) => ({ type: TOGGLE_CARD_FAVORITE, payload: id });
export const removeCard = (id) => ({ type: REMOVE_CARD, payload: id }); // ⟵ NOWE

// --- STAN POCZĄTKOWY (spłaszczamy karty z modułu 14) ---
const initialState = dataColumns.flatMap(col =>
  (col.cards || []).map(card => ({
    id: card.id,
    columnId: col.id,
    title: card.title,
    desc: card.desc || '',
    isFavorite: false,
  }))
);

// --- POMOCNICZE: kolejne id jako string ---
const nextId = (state) => {
  const max = state.reduce((m, c) => {
    const n = parseInt(String(c.id), 10);
    return Number.isNaN(n) ? m : Math.max(m, n);
  }, 0);
  return String(max + 1);
};

// --- REDUCER ---
export default function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CARD: {
      const title = (action.payload?.title || '').trim();
      const columnId = action.payload?.columnId;
      if (!title || !columnId) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, columnId, title, isFavorite: false }];
    }

    // Zgodność wsteczna — jeśli gdzieś jeszcze leci 'ADD_CARD'
    case ADD_CARD_LEGACY: {
      const title = (action.payload?.title || '').trim();
      const columnId = action.payload?.columnId;
      if (!title || !columnId) return state;
      const id = action.payload?.id ?? nextId(state);
      return [...state, { id, columnId, title, isFavorite: false }];
    }

    case TOGGLE_CARD_FAVORITE: {
      return state.map(card =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    }

    // ⟵ USUWANIE KARTY
    case REMOVE_CARD: {
      const idToRemove = String(action.payload);
      return state.filter(card => String(card.id) !== idToRemove);
    }

    default:
      return state;
  }
}
