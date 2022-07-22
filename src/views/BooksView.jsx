import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

import { useFetch } from '../../src/Hooks/useFetch';
import { getBooks } from 'services/FetchApi';
import { withApiState } from 'services/ApiState';
import ListRender from 'components/ListRender';
import Pending from 'components/Pending';
import PageHeading from 'components/PageHeading';
import { useDebounce } from '../Hooks/useDebounced';

function BooksViewNoState({ apiState }) {
  const fetchedBooks = useFetch(apiState, getBooks);
  const [query, setQuery] = useDebounce(500, true); // custom hook that returns query string from URL
  const [books, setBooks] = useState(null);

  const searchQuery = query.get('query') ? query.get('query') : '';
  
  const handleChange = e => {
    console.log(e.target.value);
    e.target.value !== '' ? setQuery({ query: e.target.value }) : setQuery();
  };

  useEffect(() => {
    setBooks(fetchedBooks && fetchedBooks.filter(book => book.title.includes(searchQuery)));
  }, [fetchedBooks, searchQuery]);

  return (
    <>
      <PageHeading text="Books" />
      {apiState.isPending() && <Pending />}
      {apiState.isSuccess() && (
        <>
          <TextField
            onChange={handleChange}
            label="find book"
            variant="outlined"
          />
          {books && <ListRender list={books} />}
        </>
      )}
      {apiState.isError() && <p>Ops something went wrong</p>}
    </>
  );
}
const BooksView = withApiState(BooksViewNoState);
export default BooksView;
