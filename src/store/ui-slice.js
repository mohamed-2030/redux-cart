import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggelVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;
