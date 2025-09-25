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

  
    const newFeedback = new Feedback({ name, email, rating, message });
    await newFeedback.save();

    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: 'New Feedback Received',
      text: `New feedback from ${name} (${email})\nRating: ${rating}\n\nMessage:\n${message}`,
    };


    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Feedback submitted and email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
