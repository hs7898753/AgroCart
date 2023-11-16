import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import "./index.css";
import FeatureProduct from "../../components/FeatureProduct/index";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <FeatureProduct />
      <Footer className="footer" />
    </div>
  );
}

export default Home;
