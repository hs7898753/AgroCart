import React from "react";
import "./index.css";
import WishlistItem from "./WishlistItem";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishList);
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Items in Your WishList</h2>
        <div className="cart-items-container">
          <div className="cart-header cart-item-container">
            <div className="cart-item">Item</div>
            <div className="item-price">Price</div>
            <div></div>
          </div>
          {wishList.map(({ productId, title, rating, price, imageUrl }) => (
            <WishlistItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              imageUrl={imageUrl}
              rating={rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
