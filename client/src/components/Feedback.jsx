import { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

export default function Feedback() {
  const [formData, setFormData] = useState({ name: '', email: '', rating: '', message: '' });
  const [notice, setNotice] = useState({ kind: '', text: '' });
  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, formData);
      setNotice({ kind: 'success', text: response.data.message || 'Thank you. Your feedback has been sent.' });
      setFormData({ name: '', email: '', rating: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setNotice({ kind: 'error', text: 'We couldn’t send your feedback just now. Please try again shortly.' });
    }
  };
  return <main className="feedback-page page-width">
    <section className="feedback-intro"><span className="eyebrow">A NOTE FROM YOU</span><h1>Help us make<br/>every drive <em>better.</em></h1><p>Every trip has a story. Tell us what went well, what could be better, or simply say hello.</p><div className="feedback-promise"><span aria-hidden="true">✳</span><span>We read every message.<br/><strong>Your voice shapes GearUp.</strong></span></div></section>
    <form className="feedback-form" onSubmit={handleSubmit}><div className="feedback-form-heading"><span className="form-icon" aria-hidden="true">✎</span><div><span className="eyebrow">YOUR EXPERIENCE</span><h2>Leave us a little note</h2></div></div>
      {notice.text && <div className={`form-notice ${notice.kind}`} role="status">{notice.text}</div>}
      <div className="field"><label htmlFor="feedback-name">Your name</label><input id="feedback-name" autoComplete="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="How should we address you?" required/></div>
      <div className="field"><label htmlFor="feedback-email">Email address</label><input id="feedback-email" autoComplete="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required/></div>
      <div className="field"><label htmlFor="feedback-rating">How was your experience?</label><select id="feedback-rating" name="rating" value={formData.rating} onChange={handleChange} required><option value="">Choose a rating</option><option value="4">Excellent — loved it</option><option value="3">Very good</option><option value="2">Good</option><option value="1">Could be better</option></select></div>
      <div className="field"><label htmlFor="feedback-message">Your message</label><textarea id="feedback-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your GearUp experience…" required/></div>
      <button className="button feedback-submit" type="submit">Send your note <span aria-hidden="true">↗</span></button><p className="feedback-privacy">Your contact details are only used if we need to follow up.</p>
    </form>
  </main>;
}
