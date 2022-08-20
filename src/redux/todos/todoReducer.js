import { createReducer } from '@reduxjs/toolkit';
// import { addTodo, deleteTodo, toggleTodo } from './todoActions';

import {
    fetchTodoRequest,
    fetchTodoSuccess,
    fetchTodoError,
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoError,
    toggleCompleteRequest,
    toggleCompleteSuccess,
    toggleCompleteError,
} from './todoActions';


/*
* reducer with builder Example
 export const todoReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTodo, (state, { payload }) => {
            state.push(payload);
        })
        .addCase(deleteTodo, (state, { payload }) => [
            ...state.filter(({ id }) => id !== payload),
        ])
        .addCase(toggleTodo, (state, { payload }) =>
            state.map(todo =>
                todo.id === payload ? {...todo, completed: !todo.completed } : todo
            )
        )
        .addDefaultCase(state => {
            return state;
        });
});
*/

export const todoReducer = createReducer({ todos: [] }, {
    [addTodoSuccess]: (state, { payload }) => {
        state.todos.push(payload);
    },
    [deleteTodoSuccess]: (state, { payload }) => {
        return { todos: [...state.todos.filter(({ id }) => id !== payload)] };
    },
    [toggleCompleteSuccess]: (state, { payload }) => {
        return {
            todos: [
                ...state.todos.map(todo =>
                    todo.id === payload ? {...todo, completed: !todo.completed } : todo
                ),
            ],
        };
    },
});

export const loading = createReducer(false, {
    [addTodoRequest]: () => true,
    [addTodoSuccess]: () => false,
    [addTodoError]: () => false,
    [fetchTodoRequest]: () => true,
    [fetchTodoSuccess]: () => false,
    [fetchTodoError]: () => false,
    [deleteTodoRequest]: () => true,
    [deleteTodoSuccess]: () => false,
    [deleteTodoError]: () => false,
    [toggleCompleteRequest]: () => true,
    [toggleCompleteSuccess]: () => false,
    [toggleCompleteError]: () => false,
});

/*

* reducer without REST API
export const todoReducer = createReducer({ todos: [] }, {
    [addTodo]: (state, { payload }) => {
        state.todos.push(payload);
    },
    [deleteTodo]: (state, { payload }) => {
        return { todos: [...state.todos.filter(({ id }) => id !== payload)] };
    },
    [toggleTodo]: (state, { payload }) => {
        return {
            todos: [
                ...state.todos.map(todo =>
                    todo.id === payload ? {...todo, completed: !todo.completed } : todo
                ),
            ],
        };
    },
});

export { addTodo, deleteTodo, toggleTodo };

*/