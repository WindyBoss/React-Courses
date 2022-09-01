import { createSlice } from '@reduxjs/toolkit';

import {
    toggleComplete,
    fetchTodos,
    addNewTodo,
    deleteTodo,
} from './todo-operations';

const initialState = {
    todos: [],
    status: 'idle', //^ -> created by author state machine:  'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    filter: '',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setFilter(state, { payload }) {
            console.log(state);
            state.filter = payload;
        },
    },
    // Instead of reducers is used extraReducers with builder and syntax addCase, which change the state in redux
    extraReducers(builder) {
        builder
            .addCase(toggleComplete.fulfilled, (state, { payload }) => {
                const newTodos = state.todos.map(todo => {
                    if (todo.id === payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                });
                state.todos = [...newTodos];
            })
            .addCase(fetchTodos.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = state.todos.concat(action.payload);
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, { payload }) => {
                state.todos = state.todos.filter(todo => todo.id !== payload);
            });
    },
});

export const { setFilter } = todoSlice.actions;

export default todoSlice.reducer;