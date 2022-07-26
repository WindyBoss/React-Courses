import React from 'react';

import { withApiState } from 'services/ApiState';
import { getAuthor } from 'services/FetchApi';
import { useFetch } from 'Hooks/useFetch';
import { useSlug } from 'Hooks/useSlug';

import ListRender from 'components/ListRender/ListRender';

function AuthorDetailsViewNoState({ apiState }) {
  /*
  * The structure of URL line:
  _______H_O_S_T_____________Static_Params_______Dynamic_Params_____JSON_Expansion________H_A_S_H__
  |                     |     |         |            | |            |             |      |        |
  http://localhost:4040/       authors/               1             ?_embed=books        #comments

  http://localhost:4040/authors/1?_embed=books#comments
  */

  const author = useFetch(apiState, getAuthor, useSlug('slugAuthors'));

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
const AuthorDetailsView = withApiState(AuthorDetailsViewNoState);

export default AuthorDetailsView;
