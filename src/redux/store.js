import { configureStore, combineReducers } from '@reduxjs/toolkit';

import bookReducer from './books/booksSlice';
import authorsReducer from './authors/authorsSlice';

const rootReducer = combineReducers({
    books: bookReducer,
    authors: authorsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export { store };