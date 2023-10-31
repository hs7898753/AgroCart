import Navbar from "../../components/Navbar/index";
import "./index.css";

function SignIn() {
  return (
    <>
      <SignInForm />
    </>
  );
}

function SignInForm() {
  return (
    <>
      <div className="signincontain">
        <div className="signininnercontain">
          <div className="signinform">
            <section className="signin-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Welcome Back
              </span>
              <br />
              <span
                style={{ color: "rgba(134, 134, 134, 1)", fontSize: "20px" }}
              >
                Reconnect with your AgroCart Account for seamless access.
              </span>
            </section>
            <section className="signin-content">
              <div>
                <span>Username or Email</span>
                <input
                  type="text"
                  placeholder="Enter your Username or Email"
                ></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Password</span>
                <input type="text" placeholder="Enter your Password"></input>
              </div>
              <span style={{ paddingTop: "35px !important" }}>
                <a href="#">Forget Password?</a>
              </span>
              <div style={{ marginTop: "10px" }}>
                <button className="add-to-cart" style={{ width: "100%" }}>
                  <span className="text">Sign-in</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
