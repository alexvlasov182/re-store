export const BOOKS_LOADED = "BOOKS_LOADED";

export const booksLoaded = (newBooks) => ({
  type: BOOKS_LOADED,
  payload: newBooks,
});

export const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

export const booksError = (error) => {
  return {
    type: "BOOKS_ERROR",
    payload: error,
  };
};
