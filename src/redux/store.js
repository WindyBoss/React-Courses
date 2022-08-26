/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "reduxjs-toolkit-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "reduxjs-toolkit-persist";

import currencyReducer from "./currency/currencySlice";
import cartReducer from "./cart/cartSlice";

const persistConfigCurrency = {
    key: "currency",
    storage: storage,
};

const persistConfigCart = {
    key: "cart",
    storage: storage,
};

const rootReducer = combineReducers({
    currency: persistReducer(persistConfigCurrency, currencyReducer),
    cart: persistReducer(persistConfigCart, cartReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                /* ignore persistance actions */
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };