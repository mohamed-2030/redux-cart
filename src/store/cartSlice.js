import { createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const initialState = {
  cartItems: [],
  cartChange: false,
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
    replaceCart(state, { payload: loadedCart }) {
      state.cartItems = loadedCart; // loaded cart : cart loading from DataBase
    },
    addToCart(state, { payload: product }) {
      if (!state.cartChange) state.cartChange = true;
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
      if (!state.cartChange) state.cartChange = true;

      // payload =>  product id
      const targetProduct = getProductById(state.cartItems, id);
      ++targetProduct.quantity;
    },
    removeAmount(state, { payload: id }) {
      if (!state.cartChange) state.cartChange = true;
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
  },
});

const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSlice.actions.showNotification({
        status: "pending",
        title: "sending ....",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const responce = await fetch(
        "https://http-request-inredux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!responce.ok) {
        throw new Error("somthing went wrong");
      }
      dispatch(
        uiSlice.actions.showNotification({
          status: "success",
          title: "success!",
          message: "sent cart data successfully",
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiSlice.actions.showNotification({
          status: "error",
          title: "error!",
          message: err.message,
        })
      );
    });
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const responce = await fetch(
        "https://http-request-inredux-default-rtdb.firebaseio.com/cart.json"
      );
      if (!responce.ok) {
        throw new Error("somthing went wrong");
      }
      const cartData = await responce.json(responce);
      // if cartData exist dispatch action
      dispatch(cartActions.replaceCart(cartData || []));
    };
    sendRequest().catch((err) => {
      dispatch(
        uiSlice.actions.showNotification({
          status: "error",
          title: "error!",
          message: err.message,
        })
      );
    });
  };
};
export const sendCartData = sendData;
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
