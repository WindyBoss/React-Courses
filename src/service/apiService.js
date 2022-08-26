// * This apiService is build on the base of RTK Query - Redux Toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


/*
? necessary elements:
^ createApi
^ fetchBaseQuery
^ builder (query ot mutation)
^ providesTags/invalidatesTags
^ endpoint methods

* The Main concept:
RTK Query is the concept the API connect, where all logic is based inside createApi.
It is similar to axios lib, where you can add base url in baseQuery.

^ Additionally is necessary to add reducerPath and !!! must match with the reducer name inside store
^ tagTypes also must match with providesTags & invalidatesTags
^ CreateApi creates the hook methods based on endPoints
^ builder.query - used for fetch data (no changes) / builder.mutation - used for change data (push, patch, delete)

& It is possible to transform the response with method "transformResponse"

*/
export const todoApi = createApi({
    reducerPath: 'todoList',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
    tagTypes: ['Todos'],
    endpoints: builder => ({
        getTodos: builder.query({
            query: () => '/todos',
            transformResponse: res => res.sort((a, b) => b.name - a.name),
            providesTags: ['Todos'],
        }),
        addTodo: builder.mutation({
            query: todo => ({
                url: '/todos',
                method: 'POST',
                body: {...todo, completed: false },
            }),
            invalidatesTags: ['Todos'],
        }),
        updateTodo: builder.mutation({
            query: todo => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: {...todo, completed: !todo.completed },
            }),
            transformResponse: (response, meta, arg) => response,
            invalidatesTags: ['Todos'],
        }),
        getTodo: builder.query({
            query: id => `/todos/${id}`,
        }),
        deleteTodo: builder.mutation({
            query: id => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id,
            }),
            transformResponse: response => response,
            invalidatesTags: ['Todos'],
        }),
    }),
});

export default todoApi;

// Hook endpoints methods
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useGetTodoQuery,
} = todoApi;