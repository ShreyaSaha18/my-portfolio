import React from 'react'
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import shreya from "../../assets/shreya.png";

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={shreya} className='myname'></img>
      <h1> <span>I'm Shreya Saha,</span> full-stack developer based in India</h1>
      <p>I am a full-stack developer from Kolkata, India with 3 years of experience.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me </AnchorLink></div>
        <div className='hero-resume'>
        <a href="/resume.pdf" download="Shreya_Saha_Resume.pdf" className='resume-link'>My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero