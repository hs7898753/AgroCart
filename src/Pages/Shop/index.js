import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Product from "../../components/Product";
function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <ShopContent />
      <Footer />
    </div>
  );
}

function ShopContent() {
  const handleaddbookClick = () => {
    if (window.location.pathname !== "/addbook") {
      window.location.href = "/addbook";
    }
  };
  return (
    <div className="shop-content">
      <div className="productList">
        <section className="Category-Filter">
          <section className="category">
            <div className="category-head">
              <h1>Category</h1>
            </div>
          </section>
          <section className="filter">
            <div className="filter-head">
              <h1>Filter</h1>
            </div>
            <div className="filter-category"></div>
          </section>
        </section>
        <section className="product1">
          <div className="row2">
            <Product />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
