import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../../components/Product";
import React from "react";

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
                  />
                  <label htmlFor="grains"> Grains </label>
                </div>
                <br />
                <br />
                <input
                  className="category-submit"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </section>
        </section>
        <section className="product1" style={{ overflowY: "auto" }}>
          <div className="row2">
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
