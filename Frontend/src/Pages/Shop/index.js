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
              <label>
                <input type="checkbox" />
                My Value
              </label>
            </div>
          </section>
          <section className="filter">
            <div className="filter-head">
              <h1>Filter</h1>
            </div>
            <div className="filter-category"></div>
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
