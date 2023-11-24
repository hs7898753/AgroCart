import { ProductsContext } from '../../Global/ProductsContext'
import "./index.css";
import Card from "../Card/index";
import { useSelector } from "react-redux";

import { useContext } from "react";

function Product({filteredProducts}) {
  const productsList = useSelector((state) => state.products);
  const { products } = useContext(ProductsContext);
  
  /* console.log(products); */
  return (
    <div className="contain">
      {filteredProducts.map(({ category, id, title, rating, price, img }) => (
        <Card
          key={id}
          category={category}
          productId={id}
          title={title}
          /* rating={rating.rate} */
          price={price}
          imageUrl={img}
        />
      ))}
    </div>
  );
}

export default Product;
