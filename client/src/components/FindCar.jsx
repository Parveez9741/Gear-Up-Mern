import { useMemo, useState } from 'react';
import axios from 'axios';
import './FindCar.css';
import frontLeft from '../assets/front-left-side-47.avif';
import q3 from '../assets/q3-exterior-right-front-three-quarter-93480.avif';
import swift from '../assets/swift-exterior-left-front-three-quarter-28.avif';
import th from '../assets/th.jpeg';

const cars = [
  { name: 'Hyundai Creta', price: 2500, type: 'SUV', fuel: 'Diesel', transmission: 'Automatic', seats: 5, img: frontLeft, tag: 'Most loved' },
  { name: 'Audi Q7', price: 5200, type: 'Luxury', fuel: 'Petrol', transmission: 'Automatic', seats: 7, img: q3, tag: 'Make it special' },
  { name: 'Honda City', price: 1800, type: 'Sedan', fuel: 'Petrol', transmission: 'Automatic', seats: 5, img: th, tag: 'Easy favourite' },
  { name: 'Maruti Swift', price: 1200, type: 'Hatchback', fuel: 'Petrol', transmission: 'Manual', seats: 5, img: swift, tag: 'City ready' },
];
const filters = ['All cars', 'SUV', 'Sedan', 'Luxury', 'Hatchback'];
const today = new Date().toISOString().split('T')[0];

export default function FindCar() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '', pickupDate: '', dropoffDate: '' });
  const [selectedCar, setSelectedCar] = useState('');
  const [filter, setFilter] = useState('All cars');
  const [notice, setNotice] = useState({ kind: '', text: '' });
  const visibleCars = useMemo(() => filter === 'All cars' ? cars : cars.filter((car) => car.type === filter), [filter]);
  const change = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedCar) {
      setNotice({ kind: 'error', text: 'Choose a car above to continue with your booking.' });
      document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`, { ...formData, car: selectedCar });
      setNotice({ kind: 'success', text: res.data.message || 'Your booking request has been received.' });
      setFormData({ name: '', email: '', phone: '', location: '', pickupDate: '', dropoffDate: '' });
      setSelectedCar('');
    } catch (error) {
      console.error(error);
      setNotice({ kind: 'error', text: 'We couldn’t send your booking right now. Please try again in a moment.' });
    }
  };

  return <main className="findcar-page page-width">
    <header className="catalog-intro"><span className="eyebrow">THE GEARUP FLEET</span><h1>Find your kind<br className="mobile-break"/> of <em>freedom.</em></h1><p>Choose the car that feels right for your plans. We’ll take care of the details.</p><div className="catalog-meta"><span><b>04</b> thoughtful choices</span><i/><span>One easy booking</span></div></header>
    <section id="fleet" className="fleet-browser" aria-label="Choose a rental car">
      <div className="filter-bar"><div><strong>Pick your ride</strong><span> Tap a car to select it for your booking.</span></div><div className="fleet-filters" role="group" aria-label="Filter cars by type">{filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      {selectedCar && <div className="selected-banner" role="status"><span className="selected-check">✓</span><span><strong>{selectedCar}</strong> is selected for your booking.</span><button type="button" onClick={() => document.getElementById('booking-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Add your details ↓</button></div>}
      <div className="catalog-grid">{visibleCars.map((car) => <button className={`car-card ${selectedCar === car.name ? 'car-selected' : ''}`} type="button" key={car.name} aria-pressed={selectedCar === car.name} onClick={() => { setSelectedCar(car.name); setNotice({ kind: '', text: '' }); }}>
        <span className="car-tag">{car.tag}</span><span className="car-image"><img src={car.img} alt={car.name}/><span className="select-indicator">{selectedCar === car.name ? '✓' : '+'}</span></span><span className="car-card-body"><span className="car-kind">{car.type} <i/> {car.fuel}</span><strong className="car-name">{car.name}</strong><span className="car-specs"><span>{car.seats} seats</span><i/><span>{car.transmission}</span></span><span className="car-card-bottom"><span><strong>₹{car.price.toLocaleString('en-IN')}</strong><small> / day</small></span><span className="car-select-copy">{selectedCar === car.name ? 'Selected' : 'Select car'}</span></span></span>
      </button>)}</div>
    </section>
    <section className="booking-section" id="booking-details">
      <div className="booking-aside"><span className="eyebrow">MAKE IT YOURS</span><h2>And you’re<br/><em>on your way.</em></h2><p>Share a few details and our team will get your booking started.</p><div className="booking-picked"><span className="picked-icon">G</span><span>{selectedCar ? <><small>YOUR SELECTED CAR</small><strong>{selectedCar}</strong></> : <><small>STEP ONE</small><strong>Choose a car above</strong></>}</span><span className="picked-arrow">↗</span></div><div className="booking-note"><span aria-hidden="true">✳</span><p>Your booking details are sent securely to the GearUp team.</p></div></div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-heading"><div><span className="eyebrow">BOOKING DETAILS</span><h3>Tell us about your trip</h3></div><span className="step-pill">01 / 01</span></div>
        {notice.text && <div className={`form-notice ${notice.kind}`} role="status">{notice.text}</div>}
        <div className="form-grid"><div className="field"><label htmlFor="booking-name">Full name</label><input id="booking-name" autoComplete="name" type="text" name="name" value={formData.name} onChange={change} placeholder="Your name" required/></div><div className="field"><label htmlFor="booking-email">Email address</label><input id="booking-email" autoComplete="email" type="email" name="email" value={formData.email} onChange={change} placeholder="you@example.com" required/></div><div className="field"><label htmlFor="booking-phone">Phone number</label><input id="booking-phone" autoComplete="tel" type="tel" name="phone" value={formData.phone} onChange={change} placeholder="Your contact number" required/></div><div className="field"><label htmlFor="booking-location">Pickup location</label><input id="booking-location" autoComplete="street-address" type="text" name="location" value={formData.location} onChange={change} placeholder="Where should we meet?" required/></div><div className="field"><label htmlFor="pickup-date">Pickup date</label><input id="pickup-date" type="date" name="pickupDate" min={today} value={formData.pickupDate} onChange={change}/></div><div className="field"><label htmlFor="dropoff-date">Return date</label><input id="dropoff-date" type="date" name="dropoffDate" min={formData.pickupDate || today} value={formData.dropoffDate} onChange={change}/></div></div>
        <button className="button booking-submit" type="submit">Request my booking <span aria-hidden="true">↗</span></button><p className="booking-terms">By continuing, you’re asking our team to confirm availability and details.</p>
      </form>
    </section>
  </main>;
}
