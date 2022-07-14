import React from 'react';
import { useParams } from 'react-router-dom';

import { withApiState } from 'services/ApiState';
import { getAuthor } from 'services/FetchApi';
import { useFetch } from '../Hooks/useFetch';
import ListRender from 'components/ListRender/ListRender';

function AuthorDetailsViewNoState({ apiState }) {
  
  /*
  * The structure of URL line:
  _______H_O_S_T_____________Static_Params_______Dynamic_Params_____JSON_Expansion________H_A_S_H__
  |                     |     |         |            | |            |             |      |        |
  http://localhost:4040/       authors/               1             ?_embed=books        #comments

  http://localhost:4040/authors/1?_embed=books#comments
  */

  // useParams - hook of react-router-dom, which returns all dynamic params as object. For example { authorId: 2, bookSort: 'descending' }
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
