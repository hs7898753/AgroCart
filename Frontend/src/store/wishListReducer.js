import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(
        (wishlistItem) => wishlistItem.productId === action.payload.productId
      );
      if (!existingItem) {
        state.push({ ...action.payload });
      }
    },
    removeItem: (state, action) => {
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    },
  },
});

// Export the action creators
export const { addItem, removeItem } = wishListSlice.actions;

// Export the reducer
export default wishListSlice.reducer;
