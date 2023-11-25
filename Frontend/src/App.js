import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import Contact from "./Pages/Contact/index";
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
import { ProductsContextProvider } from './Global/ProductsContext'
import Signup from "./Pages/Sign-up";
import Signin from "./Pages/Sign-in";

export default function App() {
  return (
    <>
     <ProductsContextProvider>
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/privateinfo" element={<PrivateInfo />} />
              <Route path="/producerinfo" element={<ProducerInfo />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/additem" element={<AddItem />} />
            </Routes>
          </Router>
        </Provider>
      </Auth0Provider>
      </ProductsContextProvider>
      ,
    </>
  );
}
