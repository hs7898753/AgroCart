import logo from "../images/logo.png";
import "./index.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handlesigninClick = () => {
    window.location.href = "/signin";
  };
  const handlesignupClick = () => {
    window.location.href = "/signup";
  };
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />{" "}
        </a>

        <div>
          <ul className={clicked ? "navbarlist active" : "navbarlist"}>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li className="hide">|</li>
            <li>
              <a href="/shop" onClick={() => props.setShow(true)}>
                Shop
              </a>
            </li>
            <li className="hide">|</li>
            <li>
              <a href="/about">About</a>
            </li>

            <div className="wishlist">
              <Link className="wishlist-icon" to="/wishlist">
                <span>
                  <i className="fa-regular fa-heart" />
                </span>
                <span>{wishList.length}</span>
              </Link>
            </div>

            <div className="cart">
              <Link className="cart-icon" to="/cart">
                <span>
                  <i className="fas fa-cart-plus" />
                </span>
                <span>
                  {cartItems.reduce(
                    (accumulator, currentItem) =>
                      accumulator + currentItem.quantity,
                    0,
                  )}
                </span>
              </Link>
            </div>
            <div className="SignInUp">
              <button className="add-to-cart" onClick={handlesigninClick}>
                <span className="text">Sign-in</span>
              </button>
              <button className="add-to-cart" onClick={handlesignupClick}>
                <span className="text">Sign-up</span>
              </button>
            </div>
          </ul>
        </div>

        <div id="mobile">
          {clicked ? (
            <i
              id="bar"
              onClick={() => setClicked(!clicked)}
              className="fas fa-times"
            />
          ) : (
            <i
              id="bar"
              onClick={() => setClicked(!clicked)}
              className="fas fa-bars"
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
