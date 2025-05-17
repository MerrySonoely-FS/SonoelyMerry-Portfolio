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
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.includes('@') || !message.trim()) {
      setFormStatus('Please fill out all fields correctly.');
      return;
    }

    setIsLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
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
                aria-label="Sender Name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
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
              ></textarea>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {formStatus && (
              <p className={formStatus.includes('successfully') ? 'success' : 'error'}>
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
