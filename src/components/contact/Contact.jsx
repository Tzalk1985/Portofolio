import React from 'react'
import { useState } from 'react'; // Added useState import
// ... existing code ...
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Added state for button transformation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xl37lh8', 'template_h6fg0xh', form.current, 'DFzdXyt3DDDheowCf')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true); // Set submitted state to true on success

         // Reset the button after 3 seconds
         setTimeout(() => {
          setIsSubmitted(false); // Reset the submitted state
        }, 5000); // 3000 milliseconds = 3 seconds
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email :</h4>
            <h5>k.tzallas@gmail.com</h5>
            <a href="mailto:k.tzallas@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messeger :</h4>
            <h5>Konstantinos Tzallas</h5>
            <a href="https://m.me/konstantinos.tzallas" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+306974144986</h5>
            <a href="https://api.whatsapp.com/send?phone=306974144986" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
          {isSubmitted ? '✔️ Thank You' : 'Send Message'} {/* Change button text based on submission state */}
        </button>
        </form>
      </div>
    </section>
  )
}

export default Contact