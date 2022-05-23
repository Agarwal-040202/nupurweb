import React, { useEffect } from "react";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import "./AboutMe.css";

const AboutMe = () => {
  

  const SCREEN_CONSTANT = {
    description:
      "Hi, My name is Dr. Nupur Goyal. I am basically from laksar but currently staying in Dehradun. I have done P.hd in 2016 from Graphic Era Deemed to be University, Dehradun. Currently working as an Assistant Professor in Graphic Era Deemed to be University, Dehradun since January 20, 2020. I have 5 year teaching experience. I wrote 42 published papers and 1 Book and i also wrote 14 book chapter in diffrent books.",
    highlights: {
      bullets: [
        "Patience",
        "Critical thinking skills",
        "Communication skills",
        "Computer skills ",
        "Creative thinking abilities",
        "Leadership skills",
        "Capacity for teamwork",
        "Time management skills",
      ],
      heading: "Here are a few Highlights:",
    },
  };

  // const renderHighLight = () => {
  //   return SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
  //     <div className="highlight" key={i}>
  //       <div>
  //         <span>{value}</span>
  //       </div>
  //     </div>
  //   ));
  // };

  return (
    <div >
     
    <section id="aboutme">
    <div className="about-me-container screen-container fade-in" >
      <div className="about-me-parent" >
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANT.description}
            </span>
            <div className="about-me-highlight">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANT.highlights.heading}</span>
              </div>

             
             <span>
               <li>Patience.</li>
               <li>Critical thinking skills.</li>
               <li>Communication skills.</li>
               <li>Computer skills.</li>
               <li>Organisational skills.</li>
               <li>Creative thinking abilities.</li>
               <li>Leadership skills.</li>
               <li>Capacity for teamwork.</li>
               <li>Time management skills.</li>
               <li>Conflict resolution skills.</li>
              
              
              
                
               
             </span>
            </div>
            {/* <div className="about-me-options">
              <button
                className="btn primary-btn"
                // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="SumitResume.pdf" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};

export default AboutMe;
