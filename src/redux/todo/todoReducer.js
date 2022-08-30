import { createReducer } from '@reduxjs/toolkit';
import {
    GET_TODOS_REQUESTED,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILED,
    TOGGLE_TODO,
} from './todoActions';

const initialState = {
    todos: [],
    status: 'idle', //^ -> created by author state machine:  'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const todosReducer = createReducer(initialState, builder => {
    builder
        .addCase(GET_TODOS_REQUESTED, (state, action) => {
            state.status = 'loading';
        })
        .addCase(GET_TODOS_SUCCESS, (state, action) => {
            state.status = 'succeeded';
            state.todos = state.todos.concat(action.todos);
        })
        .addCase(GET_TODOS_FAILED, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(TOGGLE_TODO, (state, { payload }) => {
            const newTodos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            state.todos = [...newTodos];
        });
});

export const selectAllTodos = state => state.todos.todos;
export const getTodoStatus = state => state.todos.status;
export const getTodoError = state => state.todos.error;

export default todosReducer;
