// useParams - hook of react-router-dom, which returns all dynamic params as object. For example { authorId: 2, bookSort: 'descending' }
import { useParams } from 'react-router-dom';

export const useSlug = id => {
  return useParams()[id].match(/[0-9a-z]+$/)[0];
};
