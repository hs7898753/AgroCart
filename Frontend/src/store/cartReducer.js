import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload
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
        (cartItem) => cartItem.productId === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter(
            (cartItem) => cartItem.productId !== action.payload
          );
        }

        existingItem.quantity = Math.max(existingItem.quantity - 1, 0);
      }
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
