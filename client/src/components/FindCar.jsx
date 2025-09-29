import React, { useState } from 'react';
import axios from 'axios';
import './FindCar.css';


import frontLeft from '../assets/front-left-side-47.avif';
import q3 from '../assets/q3-exterior-right-front-three-quarter-93480.avif';
import swift from '../assets/swift-exterior-left-front-three-quarter-28.avif';
import th from '../assets/th.jpeg';

const cars = [
  { name: 'Hyundai Creta', price: 2500, type: 'SUV', fuel: 'Diesel', img: frontLeft },
  { name: 'Audi Q7', price: 5200, type: 'Luxury', fuel: 'Petrol', img: q3 },
  { name: 'Honda City', price: 1800, type: 'Sedan', fuel: 'Petrol', img: th },
  { name: 'Maruti Swift', price: 1200, type: 'Hatchback', fuel: 'Petrol', img: swift },
];

const FindCar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    pickupDate: '',
    dropoffDate: '',
  });
  const [selectedCar, setSelectedCar] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCar) return alert('Please select a car!');
    try {
      const res = await axios.post('https://gear-up-mern-backend-05oe.onrender.com/api/bookings', {
        ...formData,
        car: selectedCar,
      });
      alert(res.data.message);
      setFormData({ name: '', email: '', phone: '', location: '', pickupDate: '', dropoffDate: '' });
      setSelectedCar('');
    } catch (err) {
      console.error(err);
      alert('Booking failed.');
    }
  };

  return (
    <div className="findcar-container">
      <h1>Choose Your Car</h1>
      <div className="car-grid">
        {cars.map((car, idx) => (
          <div
            key={idx}
            className={`car-card ${selectedCar === car.name ? 'selected' : ''}`}
            onClick={() => setSelectedCar(car.name)}
          >
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>₹{car.price}/day | {car.type} | {car.fuel}</p>
          </div>
        ))}
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Booking Details</h2>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Pickup Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Pickup Date</label>
        <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} />

        <label>Drop-off Date</label>
        <input type="date" name="dropoffDate" value={formData.dropoffDate} onChange={handleChange} />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default FindCar;
