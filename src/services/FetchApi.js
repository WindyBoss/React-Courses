import axios from 'axios';

const BASE_URL = 'http://localhost:4040/';

const getAuthors = async () => {
  return await (
    await axios.get(`${BASE_URL}authors?_embed=books`)
  ).data;
};

const getBooks = async () => {
  return await (
    await axios.get(`${BASE_URL}books`)
  ).data;
};

const getBook = async bookId => {
  return await (
    await axios.get(`${BASE_URL}books/${bookId}?_expand=author`)
  ).data;
};

const getAuthor = async authorId => {
  return await (
    await axios.get(`${BASE_URL}authors/${authorId}?_embed=books`)
  ).data;
};

export { getAuthors, getBooks, getBook, getAuthor };
