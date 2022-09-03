import React from 'react';

import { useSlug } from 'Hooks/useSlug';
import { fetchBooksByAuthorId } from 'redux/books/booksOperation';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelectors } from 'redux/books/booksSlice';
import { authorsSelectors } from 'redux/authors/authorsSlice';

import ListRender from 'components/ListRender/ListRender';
import { useEffect } from 'react';
import Pending from 'components/Pending';

function AuthorDetailsView() {
  const dispatch = useDispatch();

  const authorId = Number(useSlug('slugAuthors'));
  const status = useSelector(bookSelectors.getFetchStatus);
  const error = useSelector(bookSelectors.getError);

  const authorName = useSelector(state =>
    authorsSelectors.getAuthorName(state, authorId)
  );

  const books = useSelector(state =>
    bookSelectors.getBookByAuthor(state, authorId)
  );

  useEffect(() => {
    dispatch(fetchBooksByAuthorId(authorId));
  }, [authorId, dispatch]);

  return (
    <>
      {status === 'loading' && <Pending />}
      {status === 'success' && (
        <div>
          <h2>{authorName}</h2>
          <ListRender list={books} redirect="books" />
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
    </>
  );
}

export default AuthorDetailsView;
