import food from "../images/Fruits.jpg";

function Card(props) {
  return (
    <div className="box">
      <div className="innerbox">
        <div className="product-image">
          <img src={food} alt={props.product.Title} />
        </div>
        <div className="product-details">
          <div className="product-title">{props.product.Title}</div>
          <div className="product-author">{props.product.author}</div>
          <div className="product-genre">{props.product.category}</div>
          <div className="product-price">{props.product.price}</div>
        </div>
        <button
          className="product1-button"
          onClick={() => props.handleClick(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
