import {
    createSlice,
    createEntityAdapter,
    createSelector,
} from '@reduxjs/toolkit';
import { fetchAuthors } from './authorsOperations';

import { fetchBookById } from 'redux/books/booksOperation';

/*
* createEntityAdapter - abstract function for spreading data against duplicates.
For example authors possess data about books and books possess data about authors, so it helps to remove data duplicates

^ createEntityAdapter possess it own API:
1. getInitialState - brings initial state (if is necessary to add additional state param, add object as callback)
2. getSelectors - returns couple of integrated selectors (
  a. selectAll - return all data in state as Array
  b. selectById - return specific data selected by Id
  c. selectTotal - return total number of items in state
  d. selectEntities - return all data in state as Object with keys 'item.id'
  e. selectIds - return all indexes of items in state as Array
)
3. For changing state createEntityAdapter possess it own state functions (
  a. addOne - add one item to state (like Array.push)
  b. addMany - add many items to state (like Array.push)
  c. setOne - set one item to state or replace - leaves only one
  d. setMany - set many items to state or replace - leaves only added
  e. setAll - replace all items in state
  f. removeOne - remove one item from state by Id
  g. removeMany - remove many items from state by Id (add array of Id's)
  h. removeAll - remove all items from state
  i. updateOne - update one item in state by id (accept an object containing a new value)
  j. updateMany - update many items in state by id (accept an array of object containing a new value)
  k. upsertOne - add only unique item to state
  l. upsertMany - add many unique items to state
)
*/

const authorsAdapter = createEntityAdapter({
    selectId: author => author.id,
    // additionally it can sort data
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const authorsSlice = createSlice({
    name: 'books',
    initialState: authorsAdapter.getInitialState({
        status: 'idle',
    }),
    extraReducers: builder => {
        builder
            .addCase(fetchAuthors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAuthors.fulfilled, (state, action) => {
                authorsAdapter.upsertMany(state, action.payload);
                state.status = 'success';
            })
            .addCase(fetchAuthors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchBookById.fulfilled, (state, action) => {
                authorsAdapter.upsertMany(state, action.payload.authors);
            });
    },
});

const selectors = authorsAdapter.getSelectors(state => state.authors);
selectors.getFetchStatus = state => state.authors.status;


/*
* createSelector - a redux abstract function, which helps to memorize the selectors and helps against components rerendering
Takes:
1. array of dependencies
2. inline callback function with return
*/

selectors.getAuthorName = createSelector(
    [selectors.selectAll, (_, authorId) => authorId],
    (allAuthors, authorId) => {
        const author = allAuthors.find(author => author.id === authorId);
        return author && author.name;
    }
);

selectors.getError = state => state.authors.error;

export const authorsSelectors = selectors;

export default authorsSlice.reducer;