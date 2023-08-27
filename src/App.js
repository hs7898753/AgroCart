import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <Home/>
    </>
  );
}
