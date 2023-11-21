import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import About from "./Pages/About/index";
import SignIn from "./Pages/SignIn/index";
import SignUp from "./Pages/SignUp/index";
import PrivateInfo from "./Pages/SignUp/PrivateInfo/index";
import ProducerInfo from "./Pages/SignUp/ProducerInfo/index";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/WishList/index";
import AddItem from "./Pages/AddItem/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Auth0Provider } from "@auth0/auth0-react";


export default function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-u1xqekpin28kgoas.us.auth0.com"
        clientId="Gefdot2FK8zJviOiye7jtiuHEFzDr0nA"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/privateinfo" element={<PrivateInfo />} />
              <Route path="/producerinfo" element={<ProducerInfo />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/additem" element={<AddItem />} />
            </Routes>
          </Router>
        </Provider>
      </Auth0Provider>
      ,
    </>
  );
}
