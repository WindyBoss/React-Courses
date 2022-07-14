import { useParams } from 'react-router-dom';

import { withApiState } from 'services/ApiState';
import { useFetch } from '../../src/Hooks/useFetch';
import { getBook } from 'services/FetchApi';

import PageHeading from 'components/PageHeading';
import Pending from 'components/Pending';
import BookView from 'components/BookView';

function BookDetailsViewNoState({ apiState }) {
  const book = useFetch(apiState, getBook, useParams().bookId);

  return (
    <>
      {apiState.isPending() && <Pending />}
      {apiState.isSuccess() && (
        <BookView book={book}>
          <PageHeading text={book.title} />
        </BookView>
      )}
      {apiState.isError() && <p>Ops something went wrong</p>}
    </>
  );
}

export const BookDetailsView = withApiState(BookDetailsViewNoState);
