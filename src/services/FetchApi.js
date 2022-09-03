import axios from 'axios';

const BASE_URL = 'http://localhost:4040/';

const getAuthors = async() => {
    return await (
        await axios.get(`${BASE_URL}authors`)
    ).data;
};

const getBooks = async() => {
    return await (
        await axios.get(`${BASE_URL}books?_expand=author`)
    ).data;
};

const getBooksByAuthorId = async authorId => {
    return await (
        await axios.get(`${BASE_URL}books?authorId=${authorId}`)
    ).data;
};

const getBook = async bookId => {
    return await (
        await axios.get(`${BASE_URL}books/${bookId}?_expand=author`)
    ).data;
};

export { getAuthors, getBooks, getBook, getBooksByAuthorId };