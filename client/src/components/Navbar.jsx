import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">GearUp</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find-car">Find a Car</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
