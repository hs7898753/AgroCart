import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cartReducer";
import { addWishListItem } from "../../store/wishListReducer";
import "./index.css";

function Card({ productId, title, rating, price, imageUrl, category }) {
  const dispatch = useDispatch();
  return (
    <div className="box">
      <div className="innerbox">
        <span
          className="wishlist-cardicon"
          onClick={() => {
            dispatch(
              addWishListItem({ productId, title, rating, price, imageUrl }),
            );
          }}
        >
          <i className="fa-regular fa-heart" />
        </span>
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="product-details">
          <div className="product-title">{title}</div>
          <div className="product-category">{category}</div>
          <div className="product-price">${price}</div>
          <button
            className="product1-button"
            onClick={() => {
              dispatch(
                addCartItem({ productId, title, rating, price, imageUrl }),
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
