import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import About from "./Pages/About/index";
import SignIn from "./Pages/SignIn/index";
import SignUp from "./Pages/SignUp/index";
import PrivateInfo from "./Pages/SignUp/PrivateInfo/index";
import ProducerInfo from "./Pages/SignUp/ProducerInfo/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privateinfo" element={<PrivateInfo />} />
          <Route path="/producerinfo" element={<ProducerInfo />} />
        </Routes>
      </Router>
    </>
  );
}
