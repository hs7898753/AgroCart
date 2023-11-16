import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";
import Harsh from "../../components/ProfilePics/Harsh.jpg";
import Awasthi from "../../components/ProfilePics/Awasthi.jpg";
import Soumay from "../../components/ProfilePics/Soumay.jpg";
function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="heading">
          <span>Developed By Team - 74 </span>
          <h1>Team Members</h1>
        </div>
        <div className="members">
          <div className="card1 ">
            <img src={Harsh} alt="vegetable" />
            <span>Harsh Sharma</span>
            <p>(211B131)</p>
          </div>
          <div className="card1 awasthi">
            <img src={Awasthi} alt="vegetable" />
            <span>Harsh Awasthi</span>
            <p>(211B129)</p>
          </div>
          <div className="card1 ">
            <img src={Soumay} alt="vegetable" />
            <span>Soumay Mishra</span>
            <p>(211B316)</p>
          </div>
        </div>

        <h1 className="below">Contact Us at: hs7898753@gmail.com</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;
