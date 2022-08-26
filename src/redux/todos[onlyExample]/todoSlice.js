import { createSlice } from '@reduxjs/toolkit';

import todos from 'data/todos.json';

import { addTodoPrepare } from './todoPrepare';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [...todos], filter: '' },
    reducers: {
        addTodo: {
            reducer(state, { payload }) {
                state.todos.push(payload);
            },
            prepare(payload) {
                return addTodoPrepare(payload);
            },
        },

        deleteTodo: (state, { payload }) => {
            return {
                ...state,
                todos: [...state.todos.filter(({ id }) => id !== payload)],
            };
        },

        toggleTodo: (state, { payload }) => {
            return {
                ...state,
                todos: [
                    ...state.todos.map(todo =>
                        todo.id === payload ? {...todo, completed: !todo.completed } : todo
                    ),
                ],
            };
        },

        setFilter: (state, { payload }) => {
            return {
                ...state,
                filter: payload
            };
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;