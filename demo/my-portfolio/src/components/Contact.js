import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs.sendForm(
      'your_service_id', 
      'your_template_id', 
      e.target,
      'your_user_id'
    )
    .then(
      (result) => {
        setStatus('Message sent successfully!');
        setIsLoading(false);
      },
      (error) => {
        setStatus('Error sending message, please try again.');
        setIsLoading(false);
      }
    );

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <div className="contact-form-header">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Sender Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status && <p className={status === 'Message sent successfully!' ? 'success' : 'error'}>{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;