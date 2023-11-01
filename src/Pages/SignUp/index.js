import Navbar from "../../components/Navbar/index";
import "./index.css";
import logo from "../../components/images/logo.png";

function SignUp() {
  return (
    <>
      <SignUpForm />
    </>
  );
}

function SignUpForm() {
  const handlenextstepClick = () => {
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
              <div style={{ marginTop: "10px" }}>
                <span>First Name</span>
                <input type="text" placeholder="Enter your first name"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Last Name</span>
                <input type="text" placeholder="Enter your last name"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Email</span>
                <input type="email" placeholder="Enter your email"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Password</span>
                <input type="text" placeholder="Enter your Password"></input>
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
                  onClick={handlenextstepClick}
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

export default SignUp;
