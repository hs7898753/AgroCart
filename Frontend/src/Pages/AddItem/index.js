import "./index.css";
import logo from "../../components/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../../utility/ImagetBase64";


function AddItem() {
  return (
    <>
      <AddItemForm />
    </>
  );
}

function AddItemForm() {

    const [data, setData] = useState({
        name: "",
        category: "",
        image: "",
        price: "",
        description: "",
      });
      const handleOnchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };
      const Handlesubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        const { name, image, category, price } = data;
        if (name && image && category && price) {
          const fetchData = await fetch(
            `${process.env.REACT_APP_SERVER_DOMAIN}/uploadproduct`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const dataRes = await fetchData.json();
          setData(() => {
            return {
              name: "",
              category: "",
              image: "",
              price: "",
              description: "",
            };
          });
          console.log(dataRes);
          toast(dataRes.message);
        } else {
          toast("Enter required fields");
        }
      };
      const uplodImage = async (e) => {
        const data = await ImagetoBase64(e.target.files[0]);
        // console.log(data);
        setData((prev) => {
          return {
            ...prev,
            image: data,
          };
        });
      };

  return (
    <>
      <div className="signincontain">
        <div className="signininnercontain">
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
          <div className="signinform">
            <section className="signin-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Sell on AgroCart
              </span>
              <br />
              <span
                style={{ color: "rgba(134, 134, 134, 1)", fontSize: "20px" }}
              >
                Get Best Price For Your Products
              </span>
            </section>
            <section>
            <form className="form-container">
          <div>
            <label className="labelone">Enter name of Product
            <input
              className="enterproduct"
              type="text"
              name="name"
              onChange={handleOnchange}
              value={data.name}
            ></input></label>
            <br/><br/>
            <label className="labeltwo">Select the category
            <select
              className="selectcat"
              name="category"
              onChange={handleOnchange}
              value={data.category}
            >
              <option value={"other"}>select category</option>
              <option value={"fruits"}>Fruits</option>
              <option value={"vegetable"}>Vegetable</option>
              <option value={"grains"}>grains</option>
            </select></label>
            <br/><br/>
            <label className="imagelabel" htmlFor="image">
              Image
              <div className="insideimg">
                <input
                  type={"file"}
                  accept="image/*"
                  id="image"
                  className="hidden"
                  onChange={uplodImage}
                />
                {data.image ? (
                  <img className="uploadedimg" src={data.image} alt="" />
                ) : (
                  <span>
                    <BsCloudUpload size={30} />
                  </span>
                )}
              </div>
            </label>
            <br/><br/>
            <label className="pricelabel" htmlFor="price">
              Price
            </label>
            <input
              className="priceinput"
              type={"text"}
              name="price"
              onChange={handleOnchange}
              value={data.price}
            />
            <br/><br/>
            <label className="labeldesc" htmlFor="description">
              Description
            </label>
            <textarea
              className="desc"
              rows={3}
              cols={29}
              name="description"
              onChange={handleOnchange}
              value={data.description}
            ></textarea>
            <br/><br/>
            <button
              className="btn btn-primary buttonone"
              onClick={Handlesubmit}
            >
              Save
            </button>
            <br/><br/>
            <button className="btn btn-danger buttontwo">
              <a href="/">Exit</a>
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

export default AddItem;
