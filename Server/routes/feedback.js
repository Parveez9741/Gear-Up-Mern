const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { name, email, rating, message } = req.body;

    if (!name || !email || !rating || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save feedback first
    const newFeedback = new Feedback({ name, email, rating, message });
    await newFeedback.save();

    // Respond immediately
    res.status(201).json({ message: 'Feedback submitted! Confirmation email will be sent shortly.' });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // your email to receive feedback
      subject: 'New Feedback Received',
      text: `New feedback from ${name} (${email})\nRating: ${rating}\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`Feedback email sent successfully`))
      .catch(err => console.error('Feedback email failed:', err));

  } catch (error) {
    console.error('Feedback route error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
