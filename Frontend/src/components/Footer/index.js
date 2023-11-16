import "./index.css";
function Footer() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 150,
      }}
    />
  );
  return (
    <footer>
      <section className="sec1">
        <div className="mission">
          <h1>Our Mission</h1>
          <br />
          <p>
            We take immense pride in bringing the freshness of the farm directly
            to your doorstep.
          </p>
          <br />
          <p>
            By choosing us, you're not just getting the freshest, most flavorful
            products; you're also supporting local farmers and communities. We
            believe in fostering a connection between you and the roots of your
            food, promoting a healthier and more conscious way of living.
          </p>
        </div>
        <div className="products">
          <h3>Products</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="company">
          <h3>Our Company</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="information">
          <h3>Information</h3>
          <ColoredLine color="white" />
          <br />
          <ul>
            <li>Your Orders</li>
            <li>Your Wishlist</li>
            <li>Newsletter</li>
            <li>Information</li>
          </ul>
        </div>
      </section>
      <section className="sec2">
        Copywrite ©AgroCart. All Rights Reserved
      </section>
    </footer>
  );
}

export default Footer;
