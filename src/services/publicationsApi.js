import axios from 'axios';

axios.defaults.baseURL = "https://62140f1689fad53b1f099ceb.mockapi.io/api/v3";

export const getPublications = async () => {
  const response = await axios.get('/articles');
  return response.data;
};


export const createPublications = async data => {
  const response = await axios.post('/articles', data);
  return response.data;
}

export const deletePublications = async id => {
  const response = await axios.delete(`/articles/${id}`);
  return response.data;
}
