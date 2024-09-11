import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_pic from "../../assets/profile_pic.jpeg";
import profile_img from "../../assets/about_profile.svg";


const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_pic}></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full-Stack Developer with over a decade of professional expertise in the field. Throughout my career, 
              I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p>My passion for software development is not only reflected in my extensive experience but also in the enthusiasm and
            dedication I bring to each project.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}></hr></div>
            <div className="about-skill"><p>JavScript</p><hr style={{width:"70%"}}></hr></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"80%"}}></hr></div>
            <div className="about-skill"><p>java</p><hr style={{width:"70%"}}></hr></div>
            <div className="about-skill"><p>Spring Boot</p><hr style={{width:"70%"}}></hr></div>
          </div>
          
         </div>
      </div>
    </div>
  );
};

export default About;
