/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: { label: "USD", symbol: "$", __typename: "Currency" },
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency(state, { payload }) {
            state.currency = payload;
        },
    },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;