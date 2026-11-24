import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/find-car', label: 'Explore cars' },
  { to: '/about', label: 'Our story' },
  { to: '/feedback', label: 'Feedback' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <header className="site-header">
      <div className="nav-shell page-width">
        <Link className="brand" to="/" aria-label="GearUp home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">G</span><span>gear<span className="brand-accent">up</span><small>DRIVE YOUR WAY</small></span>
        </Link>
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          {links.map(({ to, label, end }) => <NavLink key={to} to={to} end={end} onClick={close}>{label}</NavLink>)}
        </nav>
        <Link className="nav-cta" to="/find-car">Book a car <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
    <nav className="mobile-tabs" aria-label="Quick navigation">
      {links.slice(0, 3).map(({ to, label, end }, index) => <NavLink key={to} to={to} end={end}><span aria-hidden="true">{['⌂', '⌕', '◉'][index]}</span>{label}</NavLink>)}
      <NavLink to="/feedback"><span aria-hidden="true">♡</span>Feedback</NavLink>
    </nav>
  </>;
}
