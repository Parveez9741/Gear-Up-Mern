import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '' 
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://gear-up-mern-backend.onrender.com/api/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({ name: '', email: '', rating: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Your Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Rating</label>
        <select name="rating" value={formData.rating} onChange={handleChange} required>
          <option value="">Choose a rating</option>
          <option value="4">Excellent</option>
          <option value="3">Very Good</option>
          <option value="2">Good</option>
          <option value="1">Poor</option>
        </select>

        <label>Your Feedback</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
