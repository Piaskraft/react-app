// src/redux/selectors.js

// 1) wszystkie kolumny
export const getAllColumns = (state) => state.columns;

// 2) karty przefiltrowane po kolumnie + frazie wyszukiwania
export const getFilteredCardsForColumn = (state, columnId) => {
  const { cards, searchString } = state;

  // mały, lokalny helper (żeby nie bawić się w importy utils)
  const contains = (src, q) =>
    String(src).toLowerCase().includes(String(q).toLowerCase());

  return cards.filter(
    (card) => card.columnId === columnId && contains(card.title, searchString)
  );
};
