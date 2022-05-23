import React from "react";
import Typical from "react-typical";
import Footer from "./Footer/Footer";
import { Navbar } from "react-bootstrap";
// import ScrollService from "../../../Utilites/ScrollService";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Navbar id="home">

      </Navbar>
    <section style={{marginTop:"60px"}}>
    <div className="profile-container">
      <div className="prfile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <div>
              <a href="https://www.facebook.com/sumit.singhal.50999/">
                <i className="fa fa-facebook-square"></i>
              </a>
              </div>
              <div>
              <a href="">
                <i className="fa fa-google-plus-square"></i>
              </a>
              </div>
              <div>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
              </div>
              <div>
              <a href="">
                <i className="fa fa-youtube-square"></i>
              </a>
              </div>
              <div>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              </div>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I' M
              <span className="highlighted-text">  Nupur Goyal</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 style={{color:"rgb(243, 195, 137)"}}>
                {" "}
                <Typical 
                  loop={Infinity}
                  steps={[
                    "P.hd in Mathematics",
                    3000,
                    "5 Yr Teaching Experience",
                    3000,
                    "40+ Published Paper",
                    3000,
                    "1 Published Book",
                    3000,
                    "Best Teacher Awared",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
              "I find that the harder I work, the more luck I seem to have."
              </span>
            </span>
          </div>
          {/* <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
               Hire Me {" "} </button>
            <a href="SumitResume.pdf" download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>*/}
        </div> 

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
     
    </div>
    </section>
    </div>
  );
};

export default Profile;
