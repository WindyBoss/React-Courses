import axios from 'axios';
axios.defaults.baseURL = "https://62bb30927bdbe01d5299696e.mockapi.io/";

export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};

export const createPublications = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublications = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};