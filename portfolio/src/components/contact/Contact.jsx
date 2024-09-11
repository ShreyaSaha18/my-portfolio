import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import Loader from '../loader/Loader';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
    // const onSubmit = async (event) => {
    //     event.preventDefault();
      
    //     setFormData({
    //         name: '',
    //         email: '',
    //         message: ''
    //       });
        
       
    //     const formData = new FormData(event.target);
    
    //     formData.append("access_key", "98d094d9-11e9-4b8c-9d3d-b7a58de8463f");
    
    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);
    
    //     const res = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       },
    //       body: json
    //     }).then((res) => res.json());
    
    //     if (res.success) {
    //       alert(res.message);
    //     }
    //   };
    const onSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
  
      try {
        const formData = new FormData(event.target);
        formData.append("access_key", "98d094d9-11e9-4b8c-9d3d-b7a58de8463f");
  
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
  
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
  
        // Delay the alert to ensure loader is shown before the alert
        setTimeout(() => {
          if (res.success) {
            alert(res.message);
          } else {
            alert('Submission failed. Please try again.');
          }
          setIsSubmitting(false); // Hide the loader after alert is shown
        }, 100); // Adjust delay if needed
  
      } catch (error) {
        setTimeout(() => {
          alert('An error occurred. Please try again.');
          setIsSubmitting(false); // Hide the loader after alert is shown
        }, 100); // Adjust delay if needed
      } finally {
        // Form reset in case of error before loader is hidden
        if (!isSubmitting) {
          setFormData({ name: '', email: '', message: '' });
        }
      }
    };
  

  return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern}></img>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to 
                work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon}></img> <p>shreya20211@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon}></img> <p>+91-9875670007</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon}></img> <p>Kolkata, India</p>
                    </div>
                </div>
            </div>
<div>  {isSubmitting && <Loader />}
      <form onSubmit={onSubmit} className='contact-right'>
        <lable className="directContact" htmlFor="">Your Name</lable>
        <input id="name" className='directInput' type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange}></input>
        <lable className="directContact" htmlFor="">Your Email</lable>
        <input id="email" className='directInput' type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange}></input>
        <lable className="directContact" htmlFor="">Write your message here</lable>
        <textarea id="message" className='msg' name="message" rows="8" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className='contact-submit'>Submit</button>
      </form>

   
        </div>
    </div>
    </div>
  )
}
const dialogStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialog: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    }
  };

export default Contact