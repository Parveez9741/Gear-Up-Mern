const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS: allow frontend calls
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'https://your-frontend-url.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));

// JSON parsing
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err.message));

// Routes
const bookingRoutes = require('./routes/bookings');
const feedbackRoutes = require('./routes/feedback');

app.use('/api/bookings', bookingRoutes);
app.use('/api/feedback', feedbackRoutes);

// Start server on Render port or fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
