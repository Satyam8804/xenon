import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        // Optionally, reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      toast.error('An error occurred during form submission');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Form </h1>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
      </label>
      <br />

      <label>
        Comments:
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />
      </label>
      <br />

      <button type="submit">Submit</button> 
    </form>
  );
};

export default Contact;
