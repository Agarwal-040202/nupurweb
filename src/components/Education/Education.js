import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";

import "./Education.css";

const Education = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <span>{props.heading ? props.heading : ""} </span>
          <div className="heading-bullet"></div>
          <div className="Date-div">
            {props.fromDate && props.toDate ? (
              <div className="heading-Date">
                {props.fromDate + " - " + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programing Skills", logoSrc: "programming-skills.svg" },
    { label:  "Awards & Achievements",logoSrc: "education.svg"},
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests & Activities", logoSrc: "interests.svg" },
    // { label: "confrence", logoSrc: "interests.svg" },
  ];

  const programingSkillsDetails = [
    { skill: "C",  },
    { skill: "C++",  },
    { skill: "COBOL",  },
    { skill: "FORTRAN",  },
    { skill: "PASCAL", },
    { skill: "Data Structure",  },
    { skill: "D.B.M.S",  },
    { skill: "System Analysis and Designing",  },
    { skill: "MS-Office",  },
    { skill: "Internet",  }
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ph. D."}
        subHeading={"Graphic Era Deemed to be University, Dehradun."}
        fromDate={"2013"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Master of Science"}
        subHeading={"K. L. D. A. V. (P.G.) College, Roorkee."}
        fromDate={"2011"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"Bachelor of Science in Computer"}
        subHeading={"M. L. N. College, Yamunanagar."}
        fromDate={"2006"}
        toDate={"2009"}
      />
      <ResumeHeading
        heading={"Intermidiate"}
        subHeading={"Kissan Vidhya Inter College Laksar"}
        fromDate={"2005"}
        toDate={"2006"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Kissan Vidhya Inter College Laksar"}
        fromDate={"2002"}
        toDate={"2003"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
       heading={"Assistant Professor, in Graphic Era Deemed to be University, Dehradun."}
       fromDate={"2020"}
       toDate={"Present"}
      />
      
      <ResumeHeading
        heading={"Assistant Professor and H.O.D, Institute of Technology, Roorkee"}
        // subHeading={"Institute of Technology, Roorkee"}
        fromDate={"2018"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Assistant Professor, Garg Degree College, Laksar"}
        // subHeading={"Assistant Professor"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
       heading={"Lecturer, at Suraj Degree (P.G.) College, Mahendergarh"}
       fromDate={"2016"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Research Scholar at Graphic Era University, Dehradun"}
        // subHeading={"Research Scholar"}
        fromDate={"2013"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Lecturer at Garg Degree College, Laksar"}
        // subHeading={"Assistant Professor"}
        fromDate={"2013"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"Tutor at K. L. D. A. V. (P. G.) college, Roorkee"}
        // subHeading={"Assistant Professor"}
        fromDate={"2011"}
        toDate={"2013"}
      />
      {/* <div className="experience-description">
        <br />
        <span className="resume-description-text">
        [1]	Currently working as an Assistant Professor in Graphic Era Deemed to be University, Dehradun since January 20, 2020.
        
        </span>
        <br />
        <div style={{ paddingTop: "10px" }}>
          <span className="resume-description-text">
            - Developed an ecomerce website fro clieant with the dashboard for
            managing the products, managing reviews, users, payment ets.
          </span>
          <br />
          <span className="resume-description-text">
            -sdgsgsgs sgsdgsgsg sgsgsgsgs dfggdgdgd lllkkjgyryrytcbnv mnbk oho
            yit i yoyo dfd oy tigj.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
        </div>
      </div> */}
    </div>,

    <div className="resume-screen-container" key="programming-skills">
      <div className="programming-skills-container">
        {programingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>

            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>,

<div className="resume-screen-container" key="awards">
<ResumeHeading
  heading={"Outstanding Research Award"}
  subHeading={"Graphic Era Deemed to be University, Dehradun."}
  fromDate={"2020"}
  toDate={" "}
/>


<ResumeHeading
  heading={"Recipient of University Research Fellowship during the Ph. D. Program"}
  // subHeading={"Tecnologies Used: React JS Bootstrap"}
  // fromDate={"2021"}
  // toDate={"2022"}
/>


<ResumeHeading
  heading={"Pramod Dayal Padak"}
  subHeading={"K. L. D. A. V. (P. G.) college, Roorkee, India for winning the First Prize in M. Sc."}
  // fromDate={"2021"}
  // toDate={"2022"}
/>

</div>,

    <div className="resume-screen-container" key="projects">
      <ResumeHeading
        heading={"Personal Portfolio Website"}
        subHeading={"Tecnologies Used: React JS Bootstrap"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <span style={{ marginTop: "20px", fontSize: "14px" }}>
        A Personal Portfolio website to showcase all my details and projects at
        one place
      </span>

      <ResumeHeading
        heading={"Personal Portfolio Website"}
        subHeading={"Tecnologies Used: React JS Bootstrap"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <span style={{ marginTop: "20px", fontSize: "14px" }}>
        A Personal Portfolio website to showcase all my details and projects at
        one place
      </span>

      <ResumeHeading
        heading={"Personal Portfolio Website"}
        subHeading={"Tecnologies Used: React JS Bootstrap"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <span style={{ marginTop: "20px", fontSize: "14px" }}>
        A Personal Portfolio website to showcase all my details and projects at
        one place
      </span>
    </div>,

    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Playing Carom"
        subHeading="I play carom in free time."
      />
      
      <ResumeHeading
        heading="Making New Friends"
        subHeading="I likes the makeing a new friends."
      />
      <ResumeHeading
        heading="Listening Music"
        subHeading="I like listen old songs and gazals. "
      />
      <ResumeHeading 
        heading="Playing badminton" 
        subHeading="I play badminton in every morning." 
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div>
      
        <div
          className="resume-container screen-container fade-in "
          id="education"
        >
          
          <div className="resume-content">
            <ScreenHeading
              title={"Education"}
              subHeading={"My formal Bio Details"}
            />
            {/* <div className="Paper-container"> */}
        {/* <div className="paper-card"> */}
            <div className="resume-card">
              <div className="resume-bullets">
                <div className="bullet-container">
                  <div className="bullet-icons"></div>
                  <div className="bullets">{getBullets()}</div>
                </div>
              </div>
              <div className="resume-bullet-details">{getResumeScreen()}</div>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Education;
