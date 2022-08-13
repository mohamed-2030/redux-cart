import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartVisible: false,
};
const getProductById = (items, id) => {
  const targetProduct = items.find((item) => {
    return item.id === id;
  });
  return targetProduct;
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload: product }) {
      // payload =>  product object
      const checkProductInCart = state.cartItems.some((item) => {
        return item.id === product.id;
      });
      // if isn't in the cart
      if (!checkProductInCart) {
        state.cartItems = [product, ...state.cartItems];
      }
      // if  in the cart
      else {
        const targetProduct = getProductById(state.cartItems, product.id);
        ++targetProduct.quantity;
      }
    },
    addAmount(state, { payload: id }) {
      // payload =>  product id
      const targetProduct = getProductById(state.cartItems, id);
      ++targetProduct.quantity;
    },
    removeAmount(state, { payload: id }) {
      const targetProduct = getProductById(state.cartItems, id);
      if (targetProduct.quantity === 1) {
        // if product amount equal 1 mean be removeed from cart items
        state.cartItems = state.cartItems.filter((item) => {
          return item.id !== id;
        });
      } else {
        --targetProduct.quantity;
      }
    },
    toggelVisibility(state){
      state.isCartVisible = !state.isCartVisible;
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
