import { Link } from 'react-router-dom';
import './AboutUs.css';

const values = [
  { number: '01', title: 'The right car, simply', copy: 'A small, thoughtful range that makes choosing feel easy.' },
  { number: '02', title: 'Care in every detail', copy: 'We believe a good journey starts before you turn the key.' },
  { number: '03', title: 'People make the trip', copy: 'Real support from the people behind GearUp, whenever you need it.' },
];

export default function AboutUs() {
  return <main className="about-page page-width">
    <section className="about-hero"><div className="about-copy"><span className="eyebrow">A LITTLE ABOUT US</span><h1>We believe the<br/>way there should<br/>feel <em>this good.</em></h1><p>GearUp began with a simple thought: getting a car should feel like the start of your plans, not another thing to figure out.</p><Link className="button" to="/find-car">Find your next drive <span aria-hidden="true">↗</span></Link></div><div className="about-photo"><img src="/WhatsApp%20Image%202025-06-07%20at%2018.01.51_61b4d4a6%20copy.jpg" alt="Mohammed Parveez, founder of GearUp"/><div className="photo-caption"><span>THE PERSON BEHIND THE KEYS</span><strong>Mohammed Parveez</strong><small>Founder &amp; Developer</small></div><span className="photo-mark" aria-hidden="true">G</span></div></section>
    <section className="about-values"><div className="values-intro"><span className="eyebrow">WHAT MATTERS TO US</span><h2 className="section-title">A better kind<br/>of car rental.</h2><p className="section-copy">The best journeys don’t need complicated plans. We’re here to make the car part easy, and the rest yours.</p></div><div className="values-list">{values.map((value) => <article className="value-row" key={value.number}><span>{value.number}</span><div><h3>{value.title}</h3><p>{value.copy}</p></div><b aria-hidden="true">↗</b></article>)}</div></section>
    <section className="about-contact"><span className="eyebrow">SAY HELLO</span><h2>We’re always happy<br/>to hear from you.</h2><p>Questions, ideas, or just want to tell us about the drive? Drop us a note.</p><div className="contact-actions"><a className="button" href="mailto:mfarwiz1234@gmail.com">Email GearUp <span aria-hidden="true">↗</span></a><Link className="button button-outline" to="/feedback">Share feedback</Link></div></section>
  </main>;
}
