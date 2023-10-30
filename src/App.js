import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import About from "./Pages/About/index";
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
        </Routes>
      </Router>
    </>
  );
}
