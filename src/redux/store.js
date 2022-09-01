import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todoReducer } from './todo';
import themeReducer from './theme/themeSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    theme: themeReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});