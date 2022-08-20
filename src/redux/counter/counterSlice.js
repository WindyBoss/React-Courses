import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeValue: (state, { payload }) => {
            state.value += payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeValue } = counterSlice.actions;

export default counterSlice.reducer;
