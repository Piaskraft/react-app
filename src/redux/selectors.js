// src/redux/selectors.js
export const getSearchString = (state) => state.searchString;
export const getAllColumns = (state) => state.columns;

export const getCardsForColumn = (state, columnId) =>
  state.cards.filter(c => String(c.columnId) === String(columnId));

export const getFilteredCardsForColumn = (state, columnId) => {
  const q = state.searchString.trim().toLowerCase();
  const cards = getCardsForColumn(state, columnId);
  return q ? cards.filter(c => c.title.toLowerCase().includes(q)) : cards;
};
