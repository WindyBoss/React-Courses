import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBook, getBooks, getBooksByAuthorId } from 'services/FetchApi';
import { schema, normalize } from 'normalizr';

/*
* normalizr
- library for custom data normalizing, which prevents data duplication
- schema - constructor - which create the schema for each individual entity, which possess the data types (
  1. Entity - schema entity object
  2. Array - schema Array
  3. Object - schema Object
  4. Others...
)

& it is better to start adding entities' schema's from the lowest level (the entity without other entities inside) and combine it to bigger schemas

*/

const authorEntity = new schema.Entity('authors');
const bookEntity = new schema.Entity('books', {
    author: authorEntity,
});

// const bookEntities = new schema.Array(bookEntity);

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async(_, { rejectWithValue }) => {
        try {
            const books = await getBooks();
            return books;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchBooksByAuthorId = createAsyncThunk(
    'books/fetchBooksByAuthorId',
    async(authorId, { rejectWithValue }) => {
        try {
            const books = await getBooksByAuthorId(authorId);
            return books;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchBookById = createAsyncThunk(
    'books/fetchBookById',
    async(bookId, { rejectWithValue }) => {
        try {
            const book = await getBook(bookId);
            // Here normalized data added
            const { entities } = normalize(book, bookEntity);
            return entities;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);