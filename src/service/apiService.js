import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const todoApi = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Post'],
    endpoints: build => ({
        getTodos: build.query({
            query: () => 'todos',
        }),
    }),
    // endpoints: builder => ({
    //     getAllTodos: builder.query({
    //         query: () => ({
    //             url: 'todos',
    //             method: 'GET',
    //         }),
    //         providesTags: result => console.log(result),
    //         // result ? [
    //         //     ...result.map(({ id }) => ({
    //         //         type: 'Todo',
    //         //         id,
    //         //     })),
    //         //     { type: 'Todo', id: 'LIST' },
    //         // ] : [{ type: 'Todo', id: 'LIST' }],
    //     }),

    //     addTodo: builder.mutation({
    //         query: body => ({
    //             url: 'todos',
    //             method: 'POST',
    //             body,
    //         }),
    //     }),
    //     toggleComplete: builder.mutation({
    //         query: ({ id, ...patch }) => ({
    //             url: `todos/${id}`,
    //             method: 'PUT',
    //             body: patch,
    //         }),
    //     }),
    //     deleteTodo: builder.mutation({
    //         query: id => ({
    //             url: `todos/${id}`,
    //             method: 'DELETE',
    //         }),
    //     }),
    // }),
});

export const { useGetTodosQuery } = todoApi;
console.log(todoApi);

export const getTodos = async() => {
    const { data } = await axios.get('http://localhost:3000/todos');
    return data;
};

export const postTodos = async todo => {
    const { data } = await axios.post('http://localhost:3000/todos', todo);
    return data;
};

export const deleteTodos = async todoId => {
    const { data } = await axios.delete('http://localhost:3000/todos', todoId);
    return data;
};