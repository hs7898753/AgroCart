import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element= {<Home/> }/>
          <Route path="/about" element={<About/> } />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}
