import logo from "../logo.png";
import "./Navbar.css";
import React, { useState } from "react";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="navbar">
        <a href="index.html" class="logo">
          <img src={logo} alt="logo" />{" "}
        </a>

        <div>
          <ul className={clicked ? "navbarlist active" : "navbarlist"}>
            <li>
              <a href="Home.js" className="active">
                Home
              </a>
            </li>
            <li class="hide">|</li>
            <li>
              <a href="index.html">Shop</a>
            </li>
            <li class="hide">|</li>
            <li>
              <a href="index.html">About</a>
            </li>
            <div className="SignInUp">
              <button class="add-to-cart">
                <span class="text">Sign-in</span>
              </button>
              <button class="add-to-cart">
                <span class="text">Sign-up</span>
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
