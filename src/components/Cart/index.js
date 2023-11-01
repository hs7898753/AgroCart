import React, { useState } from "react";
import { useEffect } from "react";
import fruits from "../images/Fruits.jpg";
import "./index.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <article className="cartbox" style={{ margin: "200px auto" }}>
        {cart?.map((product) => (
          <div className="cart_box" key={product.id}>
            <div className="cart_img">
              <img src={fruits} />
              <p>{product.Title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(product, +1)}> + </button>
              <button>{product.amount}</button>
              <button onClick={() => handleChange(product, -1)}> - </button>
            </div>
            <div>
              <span>{product.price}</span>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </>
  );
};

export default Cart;
