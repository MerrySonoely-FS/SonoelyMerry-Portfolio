import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    emailjs.sendForm(
      'service_vcdzi6p', 
      'template_r2dap4b', 
      e.target,
      'Ap-dxJdPudJfm_JV8'
    )
    .then(
      () => {
        setFormStatus('Message sent successfully!');
        resetForm();
        setIsLoading(false);
      },
      () => {
        setFormStatus('Error sending message, please try again.');
        setIsLoading(false);
      }
    );
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
            {formStatus && <p className={formStatus === 'Message sent successfully!' ? 'success' : 'error'}>{formStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;