import Navbar from "./Navbar";
import Footer from "./Footer"
import "./About.css";
import Harsh from "./profilePic.jpg";
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
        <div className="card ">
            <img src={Harsh} alt="vegetable" />
            <span>Harsh Sharma</span>
            <p>(211B131)</p>
        </div>
        <div className="card ">
            <img src={Harsh} alt="vegetable" />
            <span>Harsh Sharma</span>
            <p>(211B131)</p>
        </div>
      </div>
      
      <h1 className="below">Contact Us at: hs7898753@gmail.com</h1>
      
    </div>
    <Footer/>
    </>
  );
}

export default About;
