import { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import FindCar from './components/FindCar';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function PageFrame() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><div id="main-content"><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/find-car" element={<FindCar/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="*" element={<main className="not-found page-width"><span className="eyebrow">WRONG TURN?</span><h1>Let’s get you<br/>back on the road.</h1><Link className="button" to="/">Back to GearUp</Link></main>}/>
  </Routes></div><footer className="app-footer"><div className="footer-inner page-width"><div><Link className="footer-brand" to="/">gear<span>up</span></Link><p className="footer-copy">A better way to get moving. Find the car that fits your plans, then enjoy the way there.</p></div><nav className="footer-links" aria-label="Footer navigation"><Link to="/find-car">Explore cars</Link><Link to="/about">Our story</Link><Link to="/feedback">Feedback</Link><a href="mailto:mfarwiz1234@gmail.com">Get in touch</a></nav></div><div className="footer-bottom page-width">© {new Date().getFullYear()} GearUp. Made for the road ahead.</div></footer></>;
}

export default function App() { return <Router><PageFrame/></Router>; }
