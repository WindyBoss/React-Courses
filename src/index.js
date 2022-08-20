import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import ThemeProvider from 'context/themeProvider';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { todoApi } from './service/apiService';

ReactDOM.render( <
    React.StrictMode >
    <
    ApiProvider api = { todoApi } >
    <
    PersistGate loading = { 'loading...' }
    persistor = { persistor } >
    <
    ThemeProvider >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>{' '} <
    Toaster / >
    <
    /ThemeProvider>{' '} <
    /PersistGate>{' '} <
    /ApiProvider>{' '} <
    /React.StrictMode>,
    document.getElementById('root')
);
