import React from 'react';
import contact_image from '../../assets/contact.png';
import './contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-headings">
          <h1 className="contact-head">Get in Touch</h1>
          <p className="contact-subhead">We're here to help with any questions or concerns.</p>
        </div>
        <div className="contact-form-container">
          <div className="contact-image">
            <img src={contact_image} alt="contact" />
          </div>
          <form className="contact-form">
            <h2 className="contact-query">Ask Your Query</h2>
            <div className="form-group">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <textarea rows="6" placeholder="Write your query" />
            </div>
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;