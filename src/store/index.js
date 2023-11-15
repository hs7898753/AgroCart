
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./cartReducer";
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from "./wishListReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
