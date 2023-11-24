import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../../components/Product";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../Global/ProductsContext";
import { useAuth0 } from "@auth0/auth0-react";

function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <ShopContent />
      <Footer />
    </div>
  );
}

function ShopContent() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { products } = useContext(ProductsContext);

  const [selectedCategories, setSelectedCategories] = useState([]);

  /* const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      // Add the category to the selectedCategories array
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        checkboxValue,
      ]);
    } else {
      // Remove the category from the selectedCategories array
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== checkboxValue)
      );
    }
  }; */

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;

    setSelectedCategories((prevCategories) => {
      if (event.target.checked) {
        // Add the category to the selectedCategories array if not already present
        return [...prevCategories, checkboxValue];
      } else {
        // Remove the category from the selectedCategories array
        return prevCategories.filter((category) => category !== checkboxValue);
      }
    });
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;
  console.log(filteredProducts);

  return (
    <div className="shop-content">
      <div className="productList" style={{ overflowY: "auto" }}>
        <section className="Category-Filter">
          <section className="category">
            <div className="category-head">
              <h1>Category</h1>
            </div>
            <div className="category-content">
              <form className="category-form">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="fruits"
                    name="fruits"
                    value="fruits"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="fruits"> Fruits</label>
                </div>
                <br />
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="vegetables"
                    name="vegetables"
                    value="vegetables"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="vegetables"> Vegetables </label>
                </div>
                <br />
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="grains"
                    name="grains"
                    value="grains"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="grains"> Grains </label>
                </div>
              </form>
            </div>
          </section>
          <button className="add-item">
            {user? (
              <Link
                to="/additem"
                style={{ textDecoration: "none", color: "black" }}
              >
                ADD ITEM
              </Link>
            ):
            (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => alert("Please Sign-in to add item")}
              >
                ADD ITEM
              </Link>
            )}
          </button>
          
        </section>
        <section className="product1" style={{ overflowY: "auto" }}>
          <div className="row2">
            <Product filteredProducts={filteredProducts} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
