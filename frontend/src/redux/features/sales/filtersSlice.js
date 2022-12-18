import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredProducts: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_PRODUCTS(state, action) {
            const { sales, search } = action.payload;
            const tempProducts = sales.filter(
                (sales) =>
                sales.name.toLowerCase().includes(search.toLowerCase()) ||
                sales.category.toLowerCase().includes(search.toLowerCase())
            );

            state.filteredProducts = tempProducts;
        },
    },
});

export const { FILTER_PRODUCTS } = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;