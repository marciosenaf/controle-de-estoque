import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredProducts: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_PRODUCTS(state, action) {
            const { products, search } = action.payload;
            const tempProducts = products.filter(
                (product) =>
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.category.toLowerCase().includes(search.toLowerCase())
            );

            state.filteredProducts = tempProducts;
        },
    },
});

export const { FILTER_PRODUCTS } = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     filteredSaless: [],
// };

// const filterSlice = createSlice({
//     name: "filter",
//     initialState,
//     reducers: {
//         FILTER_SALESS(state, action) {
//             const { saless, search } = action.payload;
//             const tempSaless = saless.filter(
//                 (sales) =>
//                 sales.name.toLowerCase().includes(search.toLowerCase()) ||
//                 sales.category.toLowerCase().includes(search.toLowerCase())
//             );

//             state.filteredSaless = tempSaless;
//         },
//     },
// });

// export const { FILTER_SALESS } = filterSlice.actions;

// export const selectFilteredSaless = (state) => state.filter.filteredSaless;

// export default filterSlice.reducer;
