import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// * redux persist (localStorage redux lib)
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
import storage from 'reduxjs-toolkit-persist/lib/storage';

// * redux state logger lib
import logger from 'redux-logger';

// * import all reducers here
import apiService from 'service/apiService';
import counterReducer from './counter/counterSlice';

/*
* creation persist reducer configuration
& storage key
& white & black lists
*/

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistClickConfig = {
    key: 'clicks',
    storage: storage,
};

// * Combination of all reducers in one
const rootReducer = combineReducers({
    // * here todoList: - must match with reducerPath inside apiService RTK query
    todoList: persistReducer(persistConfig, apiService.reducer),
    counter: persistReducer(persistClickConfig, counterReducer),
});

/*
* store configuration
& reducers
& middlewares (use concat to combine multiple middlewares) - [add RTK query middleware too here]
*/
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        .concat(apiService.middleware)
        .concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: defaultEnhancers => {
        console.log(defaultEnhancers);
        return defaultEnhancers;
    },
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };