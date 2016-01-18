export function selectBook (book) {
  // selectBook is an ActionCreator; it needs to returnan action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}