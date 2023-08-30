import Navbar from "./Navbar";
import Footer from "./Footer"
import "./About.css";
import Harsh from "./ProfilePics/Harsh.jpg";
import Awasthi from "./ProfilePics/Awasthi.jpg";
import Soumay from "./ProfilePics/Soumay.jpg";
function About() {
  return(
    <>
    <Navbar/>
    <div className="about">
      <div className="heading">
        <span>Developed By Team - 74 </span>
        <h1>Team Members</h1>
      </div>
      <div className="members">
        <div className="card ">
            <img src={Harsh} alt="vegetable" />
            <span>Harsh Sharma</span>
            <p>(211B131)</p>
        </div>
        <div className="card awasthi">
            <img src={Awasthi} alt="vegetable" />
            <span>Harsh Awasthi</span>
            <p>(211B129)</p>
        </div>
        <div className="card ">
            <img src={Soumay} alt="vegetable" />
            <span>Soumay Mishra</span>
            <p>(211B316)</p>
        </div>
      </div>
      
      <h1 className="below">Contact Us at: hs7898753@gmail.com</h1>
      
    </div>
    <Footer/>
    </>
  );
}

export default About;
