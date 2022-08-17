import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { productsReducer } from "./productSlice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiSlice.reducer,
  },
});

export default store;
