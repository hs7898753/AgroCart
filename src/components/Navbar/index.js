import logo from "../images/logo.png";
import "./index.css";
import React, { useState } from "react";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handlesigninClick = () => {
    window.location.href = "/signin";
  };
  const handlesignupClick = () => {
    window.location.href = "/signup";
  };
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

            <div className="cart" onClick={() => props.setShow(false)}>
              <span>
                <i className="fas fa-cart-plus" />
              </span>
              <span>{props.size}</span>
            </div>
          </ul>
          <div className="SignInUp">
            <button className="add-to-cart" onClick={handlesigninClick}>
              <span className="text">Sign-in</span>
            </button>
            <button className="add-to-cart" onClick={handlesignupClick}>
              <span className="text">Sign-up</span>
            </button>
          </div>
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
