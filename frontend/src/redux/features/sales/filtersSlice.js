import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredSaless: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_SALESS(state, action) {
            const { saless, search } = action.payload;
            const tempSaless = saless.filter(
                (sales) =>
                sales.name.toLowerCase().includes(search.toLowerCase()) ||
                sales.category.toLowerCase().includes(search.toLowerCase())
            );

            state.filteredSaless = tempSaless;
        },
    },
});

export const { FILTER_SALESS } = filterSlice.actions;

export const selectFilteredPoducts = (state) => state.filter.filteredSaless;

export default filterSlice.reducer;
