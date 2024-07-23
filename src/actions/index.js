export const BOOKS_LOADED = "BOOKS_LOADED";

export const booksLoaded = (newBooks) => ({
  type: BOOKS_LOADED,
  payload: newBooks,
});
