import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../../components/Product";
import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

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
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <div className="shop-content">
      <div className="productList">
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
        <section className="product1">
          <div className="row2">
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
