import React from 'react';
import { useParams } from 'react-router-dom';

import { withApiState } from 'services/ApiState';
import { getAuthor } from 'services/FetchApi';
import { useFetch } from '../Hooks/useFetch';
import ListRender from 'components/ListRender/ListRender';

function AuthorDetailsViewNoState({ apiState }) {
  const { authorId } = useParams();
  const author = useFetch(apiState, getAuthor, authorId);
  return (
    <>
      {author && (
        <div>
          <h2>{author.name}</h2>
          <ul>
            <ListRender list={author.books} redirect="books" />
          </ul>
        </div>
      )}
    </>
  );
}

export const AuthorDetailsView = withApiState(AuthorDetailsViewNoState);
