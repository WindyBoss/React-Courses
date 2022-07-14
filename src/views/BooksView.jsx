import { useFetch } from '../../src/Hooks/useFetch';
import { getBooks } from 'services/FetchApi';
import { withApiState } from 'services/ApiState';
import ListRender from 'components/ListRender';
import Pending from 'components/Pending';
import PageHeading from 'components/PageHeading';

function BooksViewNoState({ apiState }) {
  const books = useFetch(apiState, getBooks);
  return (
    <>
      <PageHeading text="Books" />
      {apiState.isPending() && <Pending />}
      {apiState.isSuccess() && <ListRender list={books} />}
      {apiState.isError() && <p>Ops something went wrong</p>}
    </>
  );
}

export const BooksView = withApiState(BooksViewNoState);
