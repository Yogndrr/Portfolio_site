import React from 'react'
import "./ContactMe.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

const ContactMe = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Yogendra Awasthi</h5>
            <a href="/">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+97754389573</h5>
            <a href="/">WhatsApp Me</a>
          </article>
        </div>

        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
