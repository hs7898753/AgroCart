import React from "react";
import "./index.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const grandTotal = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0
  );
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Items in Your Cart</h2>
        <div className="cart-items-container">
          <div className="cart-header cart-item-container">
            <div className="cart-item">Item</div>
            <div className="item-price">Price</div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
            <div className="remove-item-header">Remove Item</div>
          </div>
          {cartItems.map(
            ({ productId, title, rating, price, imageUrl, quantity }) => (
              <CartItem
                key={productId}
                productId={productId}
                title={title}
                price={price}
                quantity={quantity}
                imageUrl={imageUrl}
                rating={rating}
              />
            )
          )}
          <div className="cart-header cart-item-container">
            <div></div>
            <div></div>
            <div></div>
            <div className="total">
            ₹
              {grandTotal.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </div>
      
        <PaymentGateway grandTotal={grandTotal}/>
      
      <Footer />
    </>
  );
};

const PaymentGateway = ({grandTotal}) => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    // validation 
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    var options = {
      key: "rzp_test_winbA6jkae1yAh",
      key_secret: "VBLe2EvVgelkFmI59Kq2GMp7",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id
        // store in firebase 
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }

        try {
          const result = addDoc(collection(fireDB, "orders"), orderInfo)
          addDoc(orderRef, orderInfo)
        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }


    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay)
  }

  return(
    <>
    <Modal name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setName={setName} setAddress={setAddress} setPincode={setPincode} setPhoneNumber={setPhoneNumber} buyNow={buyNow}/>
    </>
  );
}

export default Cart;
