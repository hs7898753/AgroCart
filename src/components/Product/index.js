import ProductData from "./Data";
import food from "../images/Fruits.jpg";
import "./product.css";

function Product() {
  return (
    <div className="contain">
      {ProductData.map((product) => {
        return (
          <div className="box">
            <div className="innerbox">
              <div className="product-image">
                <img src={food} alt={product.Title} />
              </div>
              <div className="product-details">
                <div className="product-title">{product.Title}</div>
                <div className="product-author">{product.author}</div>
                <div className="product-genre">{product.category}</div>
                <div className="product-price">{product.price}</div>
              </div>
              <button className="product1-button">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
