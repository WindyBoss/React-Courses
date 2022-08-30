import { createAction } from '@reduxjs/toolkit';

export const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const getTodos = createAction(GET_TODOS_REQUESTED);
export const toggleTodo = createAction(TOGGLE_TODO);
