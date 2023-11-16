import ProductData from "./Data";

import "./index.css";
import Card from "../Card/index";
import { useSelector } from "react-redux";

function Product() {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="contain">
      {productsList.map(({ category, id, title, rating, price, image }) => (
        <Card
          key={id}
          category={category}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}

export default Product;
