import { createSlice } from '@reduxjs/toolkit';

import { theme } from 'theme';

const initialState = { theme: theme.light };
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setCurrentTheme(state, { payload }) {
            console.log(payload);
            console.log(theme[payload]);
            state.theme = theme[payload];
        },
    },
});

export const showTheme = state => state.theme;

export const { setCurrentTheme } = themeSlice.actions;

export default themeSlice.reducer;
