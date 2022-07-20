import axios from 'axios';
axios.defaults.baseURL = 'https://62bb30927bdbe01d5299696e.mockapi.io/';

export const getPublications = async abortController => {
  return await (
    await axios.get('/publications', { signal: abortController })
  ).data;
};

export const createPublications = async (data, abortController) => {
  return await (
    await axios.post('/publications', data, { signal: abortController })
  ).data;
};

export const deletePublications = async (id, abortController) => {
  const { data } = await axios.delete(`/publications/${id}`, { signal: abortController })
  return data;
};


export const getPublication = async (id, abortController) => {
  return await (
    await axios.get(`/publications/${id}`, { signal: abortController })
  ).data;
};