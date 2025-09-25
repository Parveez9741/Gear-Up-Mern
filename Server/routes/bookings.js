const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
require('dotenv').config();


router.post('/', async (req, res) => {
  try {
    
    const newBooking = new Booking(req.body);
    await newBooking.save();

  
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS, 
      },
    });

  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, 
      subject: 'Booking Confirmation',
      text: `Hi ${req.body.name}, 
      
Your booking for ${req.body.car} has been confirmed!
Pickup: ${req.body.pickupDate}
Drop-off: ${req.body.dropoffDate}

Thank you for booking with us!`,
    };

    
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking saved and email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
