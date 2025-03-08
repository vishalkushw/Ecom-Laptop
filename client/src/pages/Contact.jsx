import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 id="cont">Contact Us</h1>
      <div className="contact-form">
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <label>Message:</label>
          <textarea name="message" required />
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Phone: 8435531749</p>
        <p>Email:kushwahvishal2391@gmail.com</p>
        <p>Address: 123 Main St, db mall, Bhopal</p>
      </div>
    </div>
  );
};

export default Contact;