import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import About from "./Pages/About/index";
import SignIn from "./Pages/SignIn/index";
import SignUp from "./Pages/SignUp/index";
import PrivateInfo from "./Pages/SignUp/PrivateInfo/index";
import ProducerInfo from "./Pages/SignUp/ProducerInfo/index";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <>
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
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
