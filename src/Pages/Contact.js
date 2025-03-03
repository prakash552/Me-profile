import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('http://localhost:3000/api/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-description">
        Feel free to reach out to me for any collaboration, project inquiries, or just to say hello!
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="input-field"
        ></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
