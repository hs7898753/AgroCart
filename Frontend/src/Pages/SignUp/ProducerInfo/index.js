import "./index.css";
import logo from "../../../components/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProducerInfo() {
  return (
    <>
      <ProducerInfoForm />
    </>
  );
}

function ProducerInfoForm() {
  const handlepreviousClick = () => {
    if (window.location.pathname == "/producerinfo") {
      window.location.href = "/privateinfo";
    }
  };

  const handlesubmitClick = () => {
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
  };
  return (
    <>
      <div className="producerinfocontain">
        <div className="producerinfoinnercontain">
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
          <div className="producerinfoform">
            <section className="producerinfo-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Producer Information
              </span>
              <br />
              <span
                style={{ color: "rgba(134, 134, 134, 1)", fontSize: "20px" }}
              >
                Help us with more information to setup seamless Bussiness
                account
              </span>
            </section>
            <section className="producerinfo-content">
              <div style={{ marginTop: "10px" }}>
                <span>Company/Organization</span>
                <input type="text" placeholder="organization name"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Product Produce</span>
                <input
                  type="text"
                  placeholder="Fruit, Vege, Meat, Eggs, Grains, etc"
                ></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Production Size</span>
                <input type="text" placeholder="Small/Medium/Large"></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Location</span>
                <input type="text" placeholder="Pincode"></input>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <button
                  className="add-to-cart"
                  style={{ width: "500%" }}
                  onClick={handlepreviousClick}
                >
                  <span className="text">Previous</span>
                </button>
                <button
                  className="add-to-cart"
                  style={{ width: "500%" }}
                  onClick={handlesubmitClick}
                >
                  <span className="text">Submit</span>
                </button>
                <ToastContainer />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProducerInfo;
