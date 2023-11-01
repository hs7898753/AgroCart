import "./index.css";
import logo from "../../../components/images/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PrivateInfo() {
  return (
    <>
      <PrivateInfoForm />
    </>
  );
}

function PrivateInfoForm() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handlenextstepClick = () => {
    if (window.location.pathname == "/signup") {
      window.location.href = "/privateinfo";
    }
  };
  const handlepreviousstepClick = () => {
    if (window.location.pathname == "/privateinfo") {
      window.location.href = "/signup";
    }
  };

  const handlepurposeSelectChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "bussiness") {
      navigate("/producerinfo");
    } else if (selectedValue === "shopping") {
      toast.success("Sign Up SucessFull", {
        position: "down", // You can adjust the position
        autoClose: 1000, // Time in milliseconds to auto-close the toast
        hideProgressBar: false, // Set to true to hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: false, // Pause auto-close on hover
        draggable: true, // Allow the user to drag the toast
      });

      if (window.location.pathname == "/producerinfo") {
        window.location.href = "/";
      }
    }

    // Update the selected option in the state
    setSelectedOption(selectedValue);
  };

  return (
    <>
      <div className="privateinfocontain">
        <div className="privateinfoinnercontain">
          <nav style={{ marginTop: "20px" }}>
            <a
              href="/"
              className="logo"
              style={{ position: "relative", left: "-85%", top: "-20px" }}
            >
              <img src={logo} alt="logo" />{" "}
            </a>

            <ul className="navbarlist">
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li className="hide">|</li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li className="hide">|</li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <div className="privateinfoform">
            <section className="privateinfo-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Personal Information
              </span>
              <br />
              <span
                style={{
                  color: "rgba(134, 134, 134, 1)",
                  fontSize: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  Help us personalize your experience and enhance our services
                </p>

                <p>by providing some additional personal information</p>
              </span>
            </section>
            <section className="privateinfo-content">
              <div style={{ marginTop: "10px" }}>
                <span>Age</span>
                <input type="number" placeholder="Enter your age"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Gender</span>
                <select name="gender" id="selectgender">
                  <option value="" style={{ textAlign: "center" }}>
                    --Select--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Location</span>
                <input type="text" placeholder="Enter your location"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Purpose of Using AgroCart</span>
                <select
                  name="purpose"
                  id="selectgender"
                  onChange={handlepurposeSelectChange}
                  value={selectedOption}
                >
                  <option value="" style={{ textAlign: "center" }}>
                    --Select--
                  </option>
                  <option value="bussiness">Bussiness</option>
                  <option value="shopping">Shopping</option>
                </select>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="add-to-cart"
                  style={{ width: "50%" }}
                  onClick={handlenextstepClick}
                >
                  <span className="text">Previous Step</span>
                </button>
                <button
                  className="add-to-cart"
                  style={{ width: "50%" }}
                  onClick={handlepreviousstepClick}
                >
                  <span className="text">Next Step</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateInfo;
