import { Link } from 'react-router-dom';
import './Home.css';
import creta from '../assets/front-left-side-47.avif';
import audi from '../assets/q3-exterior-right-front-three-quarter-93480.avif';
import swift from '../assets/swift-exterior-left-front-three-quarter-28.avif';

const highlights = [
  { title: 'Easy booking', detail: 'Your ride is just a few taps away.', mark: '01' },
  { title: 'Cars you can trust', detail: 'Clean, cared-for cars for every plan.', mark: '02' },
  { title: 'Made for your day', detail: 'Pick a car that fits your journey.', mark: '03' },
];
const fleet = [
  { name: 'Hyundai Creta', type: 'Comfort SUV', price: '₹2,500', image: creta },
  { name: 'Audi Q7', type: 'Luxury SUV', price: '₹5,200', image: audi },
  { name: 'Maruti Swift', type: 'City hatchback', price: '₹1,200', image: swift },
];

export default function Home() {
  return <main className="home-page">
    <section className="home-hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="page-width hero-content">
        <div className="hero-copy">
          <span className="hero-kicker"><i/> A better way to get moving</span>
          <h1>Good trips<br/>start with a <em>great drive.</em></h1>
          <p>Find the right car for the plans you can’t wait to make. Easy booking, a smooth pickup, and the road ahead.</p>
          <div className="hero-actions"><Link className="button" to="/find-car">Find your car <span aria-hidden="true">↗</span></Link><a className="hero-text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
          <div className="hero-proof"><div className="proof-avatars" aria-hidden="true"><b>G</b><b>U</b><b>+</b></div><span><strong>A little more freedom</strong><br/>for wherever you’re headed</span></div>
        </div>
        <div className="hero-card" aria-label="GearUp car rental benefits">
          <div className="hero-card-top"><span className="eyebrow">THE GEARUP WAY</span><span className="card-spark" aria-hidden="true">✳</span></div>
          <h2>Less planning.<br/>More <span>living.</span></h2>
          <p>From everyday errands to the long way home, your next drive is waiting.</p>
          <Link to="/find-car" className="hero-card-link">Explore the fleet <span aria-hidden="true">→</span></Link>
          <div className="hero-card-stamp" aria-hidden="true">GO<br/>YOUR<br/>WAY</div>
        </div>
      </div>
      <div className="hero-bottom page-width"><span>BUILT AROUND YOUR JOURNEY</span><span className="hero-line"/><span>01 — 03</span></div>
    </section>

    <section className="benefits page-width" id="how-it-works" aria-label="Why rent with GearUp">
      {highlights.map((item) => <article className="benefit" key={item.mark}><span className="benefit-number">{item.mark}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="benefit-arrow" aria-hidden="true">↗</span></article>)}
    </section>

    <section className="fleet-section page-width">
      <div className="section-heading"><div><span className="eyebrow">A FEW GOOD RIDES</span><h2 className="section-title">Meet your next <span>favourite car.</span></h2><p className="section-copy">A hand-picked little fleet for big plans, small errands, and everything between.</p></div><Link to="/find-car" className="button button-outline fleet-all">View all cars <span aria-hidden="true">↗</span></Link></div>
      <div className="featured-grid">{fleet.map((car, index) => <article className="featured-card" key={car.name}><div className="featured-image"><img src={car.image} alt={car.name}/><span className="featured-tag">{index === 1 ? 'A LITTLE EXTRA' : 'READY TO GO'}</span></div><div className="featured-info"><div><span>{car.type}</span><h3>{car.name}</h3></div><div className="featured-price"><strong>{car.price}</strong><small>/ day</small></div></div><Link to="/find-car" className="featured-link" aria-label={`Book ${car.name}`}>Choose this car <span aria-hidden="true">→</span></Link></article>)}</div>
    </section>

    <section className="home-cta page-width"><div><span className="eyebrow">YOUR SEAT IS WAITING</span><h2>Where will you<br/>go next?</h2><p>Choose the car. Pick the date. Let the good part begin.</p></div><Link className="button" to="/find-car">Start exploring <span aria-hidden="true">↗</span></Link><span className="cta-orbit" aria-hidden="true">G</span></section>
  </main>;
}
