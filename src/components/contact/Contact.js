import React, { useRef } from 'react';
import './ContactStyles.css';
import { IoIosContact } from "react-icons/io";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ij6ysd3', 'template_23ban89', form.current, 'CWkMwVP40l7-crpAy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return  (
        <div className='contact'>
            <div className='container'>
                <div className='form-container'>

                <form ref={form} onSubmit={sendEmail}>
                <h2><IoIosContact className='iconmain' /><span>Contact</span> Brian</h2>
      <         label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                </form>

        </div>
        </div>
        </div>
    );
};

export default Contact;