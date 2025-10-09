const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { car, name, email, phone, location, pickupDate, dropoffDate } = req.body;

    if (!car || !name || !email || !phone || !location) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    // Save booking first
    const newBooking = new Booking({ car, name, email, phone, location, pickupDate, dropoffDate });
    await newBooking.save();

    // Respond immediately
    res.status(201).json({ message: 'Booking successful! Confirmation email will be sent shortly.' });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Confirmation',
      text: `Hi ${name},\n\nYour booking for ${car} has been confirmed!\nPickup: ${pickupDate || 'N/A'}\nDrop-off: ${dropoffDate || 'N/A'}\nLocation: ${location}\n\nThank you for booking with us!`
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`Booking email sent to ${email}`))
      .catch(err => console.error('Booking email failed:', err));

  } catch (error) {
    console.error('Booking route error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
