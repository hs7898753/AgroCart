import logo from "../images/logo.png";
import "./index.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />{" "}
        </Link>
        <div>
          <ul className={clicked ? "navbarlist active" : "navbarlist"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="hide">|</li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hide">|</li>
            <li>
              <Link to="/contact">Contact</Link>
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
                    0
                  )}
                </span>
              </Link>
            </div>
            <div className="SignInUp">
              {isAuthenticated ? (
                <div className="userProfilecontainer" onClick={toggleDropdown}>
                  <i class="fa-solid fa-user userProfile" />
                  {isDropdownOpen && (
                    <div className="dropdownMenu">
                      <ul>
                        <li>Account</li>
                        <li>Settings</li>
                        <li
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className="add-to-cart"
                  onClick={() => loginWithRedirect()}
                >
                  <span className="text">Sign-in</span>
                </button>
              )}
              {
                user && (
                  <button
                className="add-to-cart logout"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
              >
                <span className="text">Logout</span>
              </button>)
              }
              
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
              className="fas fa-bars bar"
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
