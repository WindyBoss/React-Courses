import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthors } from 'services/FetchApi';

export const fetchAuthors = createAsyncThunk(
    'authors/fetchAuthors',
    // * rejectWithValue - redux AsyncThunk error handler function
    async(_, { rejectWithValue }) => {
        try {
            const authors = await getAuthors();
            return authors;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);