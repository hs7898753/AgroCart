import "./index.css";
import logo from "../../../components/images/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  updatebasicdetail,
  updateprivateinfo,
  signup,
  logout,
} from "../../../store/userReducer";

function PrivateInfo() {
  return (
    <>
      <PrivateInfoForm />
    </>
  );
}

function PrivateInfoForm() {
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [companyname, setCompanyName] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(age, gender, location, purpose, companyname);
    dispatch(
      updateprivateinfo({ age, gender, location, purpose, companyname }),
    );
    console.log(user);
  };

  const handlepreviousstepClick = () => {
    window.location.href = "/signup";
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
                <a href="/contact">Contact</a>
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
              <form onSubmit={handleSubmitClick} className="basicdetailform">
                <div style={{ marginTop: "10px" }}>
                  <span>Age</span>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Gender</span>
                  <select
                    name="gender"
                    id="selectgender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="" style={{ textAlign: "center" }}>
                      --Select--
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Location</span>
                  <input
                    type="text"
                    placeholder="Enter your location (Pincode)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Purpose of Using AgroCart</span>
                  <select
                    name="purpose"
                    id="selectgender"
                    onChange={(e) => setPurpose(e.target.value)}
                    value={purpose}
                    required
                  >
                    <option value="" style={{ textAlign: "center" }}>
                      --Select--
                    </option>
                    <option value="bussiness">Bussiness</option>
                    <option value="shopping">Shopping</option>
                  </select>
                </div>
                {purpose === "bussiness" && (
                  <div style={{ marginTop: "10px" }}>
                    <span>Company/Organization Name</span>
                    <input
                      type="text"
                      placeholder="Enter your company/organization name"
                      value={companyname}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                )}
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
                    onClick={handlepreviousstepClick}
                  >
                    <span className="text">Previous Step</span>
                  </button>
                  <button
                    className="add-to-cart"
                    style={{ width: "50%" }}
                    type="submit"
                  >
                    <span className="text">Submit</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateInfo;
