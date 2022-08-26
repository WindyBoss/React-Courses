import { createAction } from '@reduxjs/toolkit';
import { addTodoPrepare } from './todoPrepare';

const addTodo = createAction('todos/addTodo', addTodoPrepare);
const deleteTodo = createAction('todos/deleteTodo');
const toggleTodo = createAction('todos/toggleTodo');
const filter = createAction('todos/filter');

export const fetchTodoRequest = createAction('todos/fetchTodoRequest');
export const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
export const fetchTodoError = createAction('todos/fetchTodoError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const toggleCompleteRequest = createAction(
    'todos/toggleCompleteRequest'
);
export const toggleCompleteSuccess = createAction(
    'todos/toggleCompleteSuccess'
);
export const toggleCompleteError = createAction('todos/toggleCompleteError');

export { addTodo, deleteTodo, toggleTodo, filter };