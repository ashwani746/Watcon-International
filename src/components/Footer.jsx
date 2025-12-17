import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file


// --- Component 1: The Floating CTA Banner ---
const CtaBanner = () => {
  return (
    <div className="cta-banner">
      <div className="cta-content">
        <p className="cta-subheading">Get a Quote for Your Pool Business</p>
        <h2 className="cta-heading">Talk to us today.</h2>
      </div>
      <button className="contact-button">
        Contact our experts
      </button>
    </div>
  );
};

// --- Component 2: The Main Footer Section ---
const Footer = () => {
  return (
    <footer className="main-footer"
    style={{
            backgroundImage: `url('https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?_gl=1*1leqk6x*_ga*MTA4NTUwMzU4Ny4xNzY1ODg3OTQx*_ga_8JE65Q40S6*czE3NjU4ODc5NDEkbzEkZzEkdDE3NjU4ODgwMDUkajU5JGwwJGgw')`,
          }}
    >
      <CtaBanner /> {/* Include the CTA banner here */}
      <div className="footer-content">
        <div className="footer-left">
          {/* This is the large 'N' logo/monogram */}
          <div className="logo-monogram">N</div>
        </div>

        <div className="footer-right">
          <div className="newsletter-section">
            <h3 className="newsletter-title">Subscribe To Our Newsletter</h3>
            <p className="newsletter-subtext">
              Be the first to know about new arrivals and offers
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" className="email-input" />
              <button className="subscribe-button">
                Subscribe
              </button>
            </div>
          </div>
          <div className="branding-text">WIBI</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;