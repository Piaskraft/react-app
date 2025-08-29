// Szukajka – zawsze jako małe litery
export const selectSearchString = (state) =>
  (state.searchString || '').toLowerCase();

// Kolumna po id
export const selectColumnById = (state, id) =>
  state.columns.find((c) => String(c.id) === String(id));

// Karta po id
export const selectCardById = (state, id) =>
  state.cards.find((c) => String(c.id) === String(id));

// Karty dla kolumny + filtr z wyszukiwarki
export const selectCardsForColumn = (state, columnId) => {
  const s = selectSearchString(state);
  return state.cards.filter(
    (c) =>
      String(c.columnId) === String(columnId) &&
      c.title.toLowerCase().includes(s)
  );
};

// Zgodnie z Twoim importem w Column.js:
export const getFilteredCardsForColumn = selectCardsForColumn;
// I alias, gdyby gdzieś była literówka w nazwie:
export const getfilteredCardsForColumn = selectCardsForColumn;
// Wszystkie kolumny (do List.js)
export const selectAllColumns = (state) => state.columns;
export const getAllColumns = selectAllColumns; // alias pod Twoje importy

