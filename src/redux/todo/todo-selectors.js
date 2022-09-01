import { createSelector } from '@reduxjs/toolkit';

/* 
* Instead of adding the functions to components it is better to create selectors as middleware between store and component.
Such approach helps to serve code in better way, especially if in necessary to make changes in global state.
*/

export const selectAllTodos = state => state.todos.todos;
export const getTodoStatus = state => state.todos.status;
export const getTodoError = state => state.todos.error;
export const getFilter = state => state.todos.filter;

export const getTodoCount = state => {
    const todos = selectAllTodos(state);
    return todos.length;
};

// createSelector memorizes the function and optimize the redux state management by decreasing the number of using function
// (the same as useMemo or memo in component), and save against all connected to state component re-render
export const getCompleteNumber = createSelector([selectAllTodos], todos => {
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

export const getVisibleTodos = createSelector(
    [selectAllTodos, getFilter],
    (todos, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return todos.filter(
            ({ name, description }) =>
            name.toLowerCase().includes(normalizedFilter) ||
            description.toLowerCase().includes(normalizedFilter)
        );
    }
);

export const getIncompleteNumber = state => {
    const todos = selectAllTodos(state);
    const inCompletedTodos = todos.filter(todo => !todo.completed);

    return inCompletedTodos.length;
};

export const getFilteredNumber = state => {};