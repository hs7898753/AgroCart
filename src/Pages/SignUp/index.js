import "./index.css";
import logo from "../../components/images/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  signup,
  logout,
  updatebasicdetail,
} from "../../store/userReducer";

function SignUp() {
  return (
    <>
      <SignUpForm />
    </>
  );
}

function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlenextstepClick = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password);
    dispatch(updatebasicdetail({ firstname, lastname, email, password }));
    console.log(user);
    if (window.location.pathname == "/signup") {
      window.location.href = "/privateinfo";
    }
  };
  return (
    <>
      <div className="signupcontain">
        <div className="signupinnercontain">
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
          <div className="signupform">
            <section className="signup-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Create an Account
              </span>
              <br />
              <span
                style={{ color: "rgba(134, 134, 134, 1)", fontSize: "20px" }}
              >
                Create your AgroCart Account and Live Fresh Life.
              </span>
            </section>
            <section className="signup-content">
              <form onSubmit={handlenextstepClick} className="basicdetailform">
                <div style={{ marginTop: "10px" }}>
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Password</span>
                  <input
                    type="text"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    className="add-to-cart"
                    style={{ width: "50%" }}
                    type="submit"
                  >
                    <span className="text">Next Step</span>
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

export default SignUp;
