import ListRender from 'components/ListRender';
import PageHeading from 'components/PageHeading';
import { fetchAuthors } from 'redux/authors/authorsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authorsSelectors } from 'redux/authors/authorsSlice';
import Pending from 'components/Pending';

function AuthorsView() {
  const authors = useSelector(authorsSelectors.selectAll);
  const dispatch = useDispatch();
  const status = useSelector(authorsSelectors.getFetchStatus);
  const error = useSelector(authorsSelectors.getError);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Authors" />
      {status === 'loading' && <Pending />}
      {status === 'success' && <ListRender list={authors} />}
      {status === 'failed' && <p>{error}</p>}
    </>
  );
}

export default AuthorsView;
