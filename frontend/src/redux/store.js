import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";
import salesReducer from "./features/sales/salesSlice";
import filterReducer from "./features/product/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    sales: salesReducer,
    filter: filterReducer,
  },
});
