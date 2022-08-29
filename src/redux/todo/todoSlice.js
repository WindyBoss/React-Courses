import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import prepareAddTodo from './prepareAddTodo';

/*
* Async Thunk Redux
& The idea is based on the creation of separate async function which is called when the action reach dispatch redux stage, and after the result is returned to reducer.
It is quite similar to axios
*/

const BASE_URL = 'http://localhost:3004/todos';

const initialState = {
    todos: [],
    status: 'idle', //^ -> created by author state machine:  'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

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

const todoSlice = createSlice({
    name: 'todos',
    initialState,
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

// This functions returns the state elements
export const selectAllTodos = state => state.todos.todos;
export const getTodoStatus = state => state.todos.status;
export const getTodoError = state => state.todos.error;

export default todoSlice.reducer;
