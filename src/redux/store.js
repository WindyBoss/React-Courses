import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todo/todoReducer';
import themeReducer from './theme/themeSlice';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { toggleTodoSaga } from './sagas/index';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    todos: todoReducer,
    theme: themeReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(sagaMiddleware)
        // .concat(toggleTodoSaga)
        .concat(logger),
});

sagaMiddleware.run(rootSaga);
