import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const time = new Date();
const initialCartItems = [
  { id: time.getTime(), title: "Test Item1", quantity: 3, total: 18, price: 6 },
  { id: time.getTime(), title: "Test Item2", quantity: 3, total: 18, price: 6 },
  { id: time.getTime(), title: "Test Item3", quantity: 3, total: 18, price: 6 },
];

const initialState = {
  cartItems: [initialCartItems],
  totalAmount: this.cartItems.reduce((amount, item) => {
    return amount + +item.quantity;
  }, 0),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
});
