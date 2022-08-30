import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { fetchTodos } from './redux/todo/todoSlice';
import { Toaster } from 'react-hot-toast';

// store.dispatch(fetchTodos());

ReactDOM.render( <
    React.StrictMode >
    <
    Provider store = { store } >
    <
    App / >
    <
    Toaster / >
    <
    /Provider>{' '} <
    /React.StrictMode>,
    document.getElementById('root')
);
