import React, { useState } from 'react';
import { validateEmail } from '../utils/utils';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // In a real-world scenario, you would send this to a backend
      console.log('Form submitted:', formData);
      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } else {
      setFormErrors(errors);
      setSubmitStatus('');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="4"
            ></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          {submitStatus && <div className="submit-status">{submitStatus}</div>}
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;