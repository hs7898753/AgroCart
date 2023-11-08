import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cartReducer";

export default function WishlistItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch();
  {
    console.log(title);
  }
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="wishlistTocart">
        <button
          className="product1-button"
          onClick={() => {
            dispatch(
              addCartItem({ productId, title, rating, price, imageUrl }),
            );
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
