import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import './Home.css';
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Footer className="footer"/>
    </div>
  );
}

export default Home;
