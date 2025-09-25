const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  car: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  pickupDate: { type: Date },
  dropoffDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
