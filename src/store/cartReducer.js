import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId,
      );
    },
    increaseItemQuantity: (state, action) => {
      state.forEach((cartItem) => {
        if (cartItem.productId === action.payload) {
          cartItem.quantity += 1;
        }
      });
    },
    decreaseItemQuantity: (state, action) => {
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload,
      );
      if (existingItem) {
        existingItem.quantity = Math.max(existingItem.quantity - 1, 0);
      }
      return state.filter((cartItem) => cartItem.quantity > 0);
    },
  },
});

// Export the action creators
export const {
  addCartItem,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
