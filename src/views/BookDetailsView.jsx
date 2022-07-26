import { withApiState } from 'services/ApiState';
import { useFetch } from 'Hooks/useFetch';
import { useSlug } from 'Hooks/useSlug';
import { getBook } from 'services/FetchApi';

import PageHeading from 'components/PageHeading';
import Pending from 'components/Pending';
import BookView from 'components/BookView';

function BookDetailsViewNoState({ apiState }) {
  // useSlug - custom hook, which returns slugged data from URL params, in which was written the title of book or the name of author
  const book = useFetch(apiState, getBook, useSlug('slug'));

  /* Chaining operator 
  -- console.log(location?.state?.from) 

  the same as:

  -- if(location && location.state && location.state.from) {
        console.log(location.state.from)
     }
  */

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

const BookDetailsView = withApiState(BookDetailsViewNoState);
export default BookDetailsView;
