import "./FeatureProduct.css";
import Vegetable from "./Vegetables.jpg";
import Fruits from "./Fruits.jpg";
import Grains from "./grains.jpg";
import Delivery from "./delivery.png";
import Cashback from "./cashback.png";
import Support from "./support.png";
function FeatureProduct() {
  return (
    <>
      <div className="featureproduct">
        {/*Product start */}
        <div className="product">
          <div className="card down oone ">
            <img src={Vegetable} alt="vegetable" />
            <span>Vegetables</span>
            <p>GET UP TO 60% OFF</p>
          </div>
          <div className="card up ttwo">
            <img src={Fruits} alt="Fruits" />
            <span>Fruits</span>
            <p>GET UP TO 60% OFF</p>
          </div>
          <div className="card down tthree">
            <img src={Grains} alt="Grains" />
            <span>Grains</span>
            <p>GET UP TO 60% OFF</p>
          </div>
        </div>
        {/*Product End and heading start*/}

        <div className="heading">
          <span>Our Feature Products</span>
          <p>
            We deliver packets of All fresh products direct from farms, straight
            to your door.
          </p>
        </div>
        {/*heading end */}
      </div>
      <div className="mainLast">
        <div className="services">
          <section className="one">
            <img id="delivery" src={Delivery} alt="Delivery" />
            <h2>
              Free Delivery <br /> <p>Free Delivery</p>
            </h2>
          </section>
          <section className="two">
            <img src={Support} alt="Support" />
            <h2>
              Best Online Support <br /> <p>Hours: 8am - 8 pm</p>
            </h2>
          </section>
          <section className="three">
            <img src={Cashback} alt="Cashback" />
            <h2>
              Money Back <br /> <p>100% Money Backy Guaranteed</p>
            </h2>
          </section>
        </div>
        <div className="address">
          <span>CheckOut Delivery Address...</span>
          <div className="search">
            <form role="search">
              <input
                id="search"
                type="search"
                placeholder="Search..."
                autoFocus
                required
              />
              <button type="submit">Go</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;
