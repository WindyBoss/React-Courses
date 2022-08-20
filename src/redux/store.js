import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import todoReducer from './todos/todoSlice';
import { todoReducer, loading } from './todos/todoReducer';
import counterReducer from './counter/counterSlice';
import storage from 'reduxjs-toolkit-persist/lib/storage'; // defaults to localStorage for web
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'reduxjs-toolkit-persist';

// import { todoReducer } from './todos/todoReducer';

import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistClickConfig = {
    key: 'clicks',
    storage: storage,
};

const rootReducer = combineReducers({
    todoList: persistReducer(persistConfig, todoReducer),
    counter: persistReducer(persistClickConfig, counterReducer),
    loading: loading,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                /* ignore persistance actions */
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: defaultEnhancers => {
        console.log(defaultEnhancers);
        return defaultEnhancers;
    },
});

const persistor = persistStore(store);

export { store, persistor };