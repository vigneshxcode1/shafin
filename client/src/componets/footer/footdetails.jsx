// Footer.js
import React from "react";
import "./Footer.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <h1>ZCULTURE</h1>
          <Accordion className="footerlinks">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Quick Shop</Accordion.Header>
              <Accordion.Body className="link-detail">
                <Link className="links">
                  <li>Animi oversized</li>
                </Link>
                <Link className="links">
                  <li>Car printed Oversized</li>
                </Link>
                <Link className="links">
                  {" "}
                  <li>Music printed Oversized</li>
                </Link>
                <Link className="links">
                  <li>Poster</li>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="contactlinks">
            <h6>Contact</h6>
            <p>Email:sampleemail@gmail.com</p>
            <p>Ph:+91:786565785</p>
            <p>social media</p>
          </div>
          <div className="info">
            <h6>INFO</h6>
            <p>About Us</p>
            <p>Policy & Return</p>
            <p>Shipping Policy</p>
            <p>Country: India</p>
            <p>Region: Chennai</p>
          </div>

          <div className="footer-sections">
            <span>&copy; 2024 ZCULTURE. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
