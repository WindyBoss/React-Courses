import axios from 'axios';

const BASE_URL = 'http://localhost:4040/';



// embed & expand - two features of json server, which is used here as npm package
// embed & expand - helps to increase the information gained by server by connecting two separate arrays usually using id as the main connection point

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
