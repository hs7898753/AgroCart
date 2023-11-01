import ProductData from "./Data";

import "./index.css";
import Card from "../Card/index";

function Product(props) {
  return (
    <div className="contain">
      {ProductData.map((product) => {
        return (
          <Card
            product={product}
            key={product.id}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
}

export default Product;
