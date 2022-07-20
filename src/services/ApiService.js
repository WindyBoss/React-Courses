import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer 4330ebfabc654a6992c2aa792f3173a3'; // axios global setups

export const fetchArticles = ({ searchQuery = '', numberedCurrentPage = 1, pageSize = 5 }, abortController) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${numberedCurrentPage}`, { signal: abortController.signal }
    )
    .then(response => response.data.articles);
};
