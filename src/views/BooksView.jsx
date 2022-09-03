import { TextField } from '@mui/material';
import { useEffect } from 'react';

import ListRender from 'components/ListRender';
import Pending from 'components/Pending';
import PageHeading from 'components/PageHeading';

import { fetchBooks } from 'redux/books/booksOperation';
import { useDispatch, useSelector } from 'react-redux';

import { bookSelectors } from 'redux/books/booksSlice';
import { setFilter } from 'redux/books/booksSlice';

function BooksView() {
  const dispatch = useDispatch();

  const books = useSelector(bookSelectors.getFilteredBooks);
  const status = useSelector(bookSelectors.getFetchStatus);
  const error = useSelector(bookSelectors.getError);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Books" />

      {status === 'loading' && <Pending />}
      {status === 'success' && (
        <>
          <TextField
            onChange={handleChange}
            label="find book"
            variant="outlined"
          />
          <ListRender list={books} />
        </>
      )}
      {status === 'failed' && <p>{error}</p>}
    </>
  );
}
export default BooksView;
