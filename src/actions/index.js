export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";

export const booksLoaded = (newBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks,
});

export const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

export const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: bookId,
  };
};
