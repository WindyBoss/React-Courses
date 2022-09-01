import { nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import prepareAddTodo from './prepareAddTodo';

/*
* Async Thunk Redux
& The idea is based on the creation of separate async function which is called when the action reach dispatch redux stage, and after the result is returned to reducer.
It is quite similar to axios
*/

const BASE_URL = 'http://localhost:3004/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async() => {
    const response = await axios.get(BASE_URL);
    return response.data;
});

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async initialTodo => {
        const response = await axios.post(
            BASE_URL,
            prepareAddTodo(initialTodo, nanoid)
        );
        return response.data;
    }
);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async id => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

export const toggleComplete = createAsyncThunk(
    'todos/toggleComplete',
    async todo => {
        const response = await axios.patch(`${BASE_URL}/${todo.id}`, todo);
        return response.data;
    }
);