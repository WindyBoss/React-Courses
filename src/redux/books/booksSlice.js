import {
    createSlice,
    createEntityAdapter,
    createSelector,
} from '@reduxjs/toolkit';
import {
    fetchBooks,
    fetchBooksByAuthorId,
    fetchBookById,
} from './booksOperation';

const booksAdapter = createEntityAdapter({
    selectId: book => book.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const bookSlice = createSlice({
    name: 'books',
    initialState: booksAdapter.getInitialState({
        status: 'idle',
        filter: '',
        error: '',
    }),
    reducers: {
        setFilter(state, { payload }) {
            state.filter = payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBooks.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                booksAdapter.upsertMany(state, action.payload);
                state.status = 'success';
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchBooksByAuthorId.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchBooksByAuthorId.fulfilled, (state, action) => {
                booksAdapter.upsertMany(state, action.payload);
                state.status = 'success';
            })
            .addCase(fetchBooksByAuthorId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchBookById.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchBookById.fulfilled, (state, action) => {
                booksAdapter.upsertMany(state, action.payload.books);
                state.status = 'success';
            })
            .addCase(fetchBookById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

const selectors = booksAdapter.getSelectors(state => state.books);
selectors.getFilter = state => state.books.filter;
selectors.getFetchStatus = state => state.books.status;

selectors.getFilteredBooks = createSelector(
    [selectors.selectAll, selectors.getFilter],
    (allBooks, filter) => allBooks.filter(book => book.title.includes(filter))
);

selectors.getBookByAuthor = createSelector(
    [selectors.selectAll, (_, authorId) => authorId],
    (allBooks, authorId) => allBooks.filter(book => book.authorId === authorId)
);

selectors.getBookById = createSelector(
    [selectors.selectAll, (_, bookId) => bookId],
    (allBooks, bookId) => allBooks.find(book => book.id === bookId)
);

selectors.getError = state => state.books.error;

export const bookSelectors = selectors;
export const { setFilter } = bookSlice.actions;

export default bookSlice.reducer;