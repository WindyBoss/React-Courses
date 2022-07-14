import axios from 'axios';
axios.defaults.baseURL = "https://62bb30927bdbe01d5299696e.mockapi.io/";

export const getPublications = async ( abortController ) => {
  const response = await axios.get('/publications', { signal: abortController });
  return response.data;
};

export const createPublications = async ( data, abortController ) => {
  const response = await axios.post('/publications', data, { signal: abortController });
  return response.data;
};

export const deletePublications = async ( id, abortController ) => {
  const response = await axios.delete(`/publications/${id}`, { signal: abortController });
  return response.data;
};