import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
    user: userReducer,
  },
});
