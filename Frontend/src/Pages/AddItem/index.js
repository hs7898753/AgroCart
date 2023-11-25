import "./index.css";
import logo from "../../components/images/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { storage, db } from "../../config/config";
import { Link } from "react-router-dom";

function AddItem() {
  return (
    <>
      <AddItemForm />
    </>
  );
}

function AddItemForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                title: productName,
                description: description,
                category: category,
                price: Number(productPrice),
                img: url,
              })
              .then(() => {
                setProductName("");
                setDescription("");
                setCategory("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <>
      <div className="signincontain">
        <div className="signininnercontain">
          <nav style={{ marginTop: "20px" }}>
            <Link
              to="/"
              className="logo"
              style={{ position: "relative", left: "-85%", top: "-20px" }}
            >
              <img src={logo} alt="logo" />{" "}
            </Link>

            <ul className="navbarlist">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="hide">|</li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hide">|</li>
              <li>
                <Link to="/contact">Contact</Link>
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
              <form
                autoComplete="off"
                className="form-container"
                onSubmit={addProduct}
              >
                <div className="form-row">
                  <label htmlFor="product-name" className="Label" >
                    Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="product-price" className="Label">
                    Price
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="product-name" className="Label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="product-name" className="Label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="product-img" className="Label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    required
                    onChange={productImgHandler}
                  />
                </div>
                <button type="submit" className="form-btn">
                  ADD
                </button>
              </form>
              {error && <span className="error-msg">{error}</span>}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;
