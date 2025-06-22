import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      from_name: '',
      reply_to: '',
      message: ''
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { from_name, reply_to, message } = formData;

    if (!from_name.trim() || !validateEmail(reply_to) || !message.trim()) {
      setFormStatus('Please fill out all fields correctly.');
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setFormStatus('Message sent successfully!');
        resetForm();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus('Error sending message, please try again.');
        setIsLoading(false);
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
            <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                aria-label="Name"
              />

              <label htmlFor="reply_to">Email</label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
                aria-label="Email"
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              />

              {/* Honeypot spam prevention field */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {formStatus && (
              <p
                className={formStatus.includes('successfully') ? 'success' : 'error'}
                aria-live="polite"
              >
                {formStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
