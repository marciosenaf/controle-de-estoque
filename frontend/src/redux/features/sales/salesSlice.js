import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import salesService from "../sales/salesService";
import { toast } from "react-toastify";

const initialState = {
    sales: null,
    saless: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    totalStoreValue: 0,
    outOfStock: 0,
    category: [],
};

// Create New Sales
export const createSales = createAsyncThunk(
    "sales/create",
    async (formData, thunkAPI) => {
        try {
            return await salesService.createSales(formData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all saless
export const getSaless = createAsyncThunk(
    "sales/getAll",
    async (_, thunkAPI) => {
        try {
            return await salesService.getSales();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete a Sales
export const deleteSales = createAsyncThunk(
    "sales/delete",
    async (id, thunkAPI) => {
        try {
            return await salesService.deleteSales(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get a Sales
export const getSales = createAsyncThunk(
    "sales/getSales",
    async (id, thunkAPI) => {
        try {
            return await salesService.getSales(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);
// Update Sales
export const updateSales = createAsyncThunk(
    "sales/updateSales",
    async ({ id, formData }, thunkAPI) => {
        try {
            return await salesService.updateSales(id, formData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            const saless = action.payload;
            const array = [];
            saless.map((item) => {
                const { price, quantity } = item;
                const salesValue = price * quantity;
                return array.push(salesValue);
            });
            const totalValue = array.reduce((a, b) => {
                return a + b;
            }, 0);
            state.totalStoreValue = totalValue;
        },
        CALC_OUTOFSTOCK(state, action) {
            const saless = action.payload;
            const array = [];
            saless.map((item) => {
                const { quantity } = item;

                return array.push(quantity);
            });
            let count = 0;
            array.forEach((number) => {
                if (number === 0 || number === "0") {
                    count += 1;
                }
            });
            state.outOfStock = count;
        },
        CALC_CATEGORY(state, action) {
            const saless = action.payload;
            const array = [];
            saless.map((item) => {
                const { category } = item;

                return array.push(category);
            });
            const uniqueCategory = [...new Set(array)];
            state.category = uniqueCategory;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSales.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createSales.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.saless.push(action.payload);
                toast.success("Sales added successfully");
            })
            .addCase(createSales.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(getSaless.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSaless.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.saless = action.payload;
            })
            .addCase(getSaless.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(deleteSales.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteSales.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("Sales deleted successfully");
            })
            .addCase(deleteSales.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(getSales.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSales.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.sales = action.payload;
            })
            .addCase(getSales.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
            .addCase(updateSales.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateSales.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("Sales updated successfully");
            })
            .addCase(updateSales.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            });
    },
});

export const { CALC_STORE_VALUE, CALC_OUTOFSTOCK, CALC_CATEGORY } =
    salesSlice.actions;

export const selectIsLoading = (state) => state.sales.isLoading;
export const selectSales = (state) => state.sales.sales;
export const selectTotalStoreValue = (state) => state.sales.totalValue;
export const selectOutOfStock = (state) => state.sales.outOfStock;
export const selectCategory = (state) => state.sales.category;

export default salesSlice.reducer;
