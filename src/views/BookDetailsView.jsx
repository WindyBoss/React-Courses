import { useSlug } from 'Hooks/useSlug';

import PageHeading from 'components/PageHeading';
import Pending from 'components/Pending';
import BookView from 'components/BookView';

import { fetchBookById } from 'redux/books/booksOperation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bookSelectors } from 'redux/books/booksSlice';
import { fetchAuthors } from 'redux/authors/authorsOperations';

function BookDetailsView() {
  const dispatch = useDispatch();
  const bookId = Number(useSlug('slug'));

  const book = useSelector(state => bookSelectors.getBookById(state, bookId));
  const status = useSelector(bookSelectors.getFetchStatus);
  const error = useSelector(bookSelectors.getError);

  useEffect(() => {
    dispatch(fetchBookById(bookId));
    dispatch(fetchAuthors());
  }, [bookId, dispatch]);

  return (
    <>
      {status === 'loading' && <Pending />}
      {status === 'success' && (
        <BookView book={book}>
          <PageHeading text={book.title} />
        </BookView>
      )}
      {status === 'failed' && <p>{error}</p>}
    </>
  );
}

export default BookDetailsView;
