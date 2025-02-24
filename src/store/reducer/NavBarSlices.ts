import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavBarState {
    value: number;
}

const initialState: NavBarState = {
    value: 0,
};

const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setValue } = navBarSlice.actions;
export default navBarSlice.reducer;
