import React from 'react';
import "./Footer.css";
import logo from "../../assets/my-logo.png";
import user_icon from "../../assets/user_icon.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>

            <div className='footer-top-left'>
                <img src={logo}></img>
                <p>Based in Kolkata, I bring 3 years of experience in full stack development, specializing in creating robust web solutions from front-end to back-end.</p>
            </div>

            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon}></img>
                    <input type="email" placeholder='Enter your email'></input>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2023 Shreya saha. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
                <a href="https://www.linkedin.com/in/shreya-saha-13693416b/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/ShreyaSaha18" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />       
                </a>
             
            </div>
        </div>
    </div>
  )
}

export default Footer