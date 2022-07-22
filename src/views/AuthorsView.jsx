import { getAuthors } from 'services/FetchApi';
import { withApiState } from 'services/ApiState';

import { useFetch } from '../../src/Hooks/useFetch';

import ListRender from 'components/ListRender';
import Pending from 'components/Pending';
import PageHeading from 'components/PageHeading';

function AuthorsViewNoState({ apiState }) {
  const authors = useFetch(apiState, getAuthors);

  return (
    <>
      <PageHeading text="Authors" />
      {apiState.isPending() && <Pending />}
      {apiState.isSuccess() && <ListRender list={authors} />}
      {apiState.isError() && <p>Ops something went wrong</p>}
    </>
  );
}

const AuthorsView = withApiState(AuthorsViewNoState);
export default AuthorsView;
