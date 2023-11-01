import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../../components/Product";
import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
import Cart from "../../components/Cart/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

function Shop() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => item.id === product.id);

    if (isPresent) {
      setWarning(true);

      // Show a warning toast
      toast.warning("Item is already added to your cart", {
        position: "top-center",
        autoClose: 2000, // Close the toast after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="shop">
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <ShopContent handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

function ShopContent(props) {
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
            <Product handleClick={props.handleClick} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
