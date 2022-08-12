import { createSlice } from "@reduxjs/toolkit";
const time = new Date();

const initProductItems = [
  {
    id: 't1',
    title: "test1",
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: 't2',
    title: "test2",
    price: 25,
    description: "This is a second product - amazing!",
  },
  {
    id: 't3',
    title: "test3",
    price: 40,
    description: "This is a therty product - amazing!",
  },
  {
    id: 't4',
    title: "test4",
    price: 6,
    description: "This is a forty product - amazing!",
  },
];

const initialState = {
  productItems: initProductItems,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
});

export const productsReducer = productSlice.reducer;
