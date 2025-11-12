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
          <h1 className="titlefooter">ZCULTURE</h1>
          <Accordion className="footerlinks">
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header>Quick Shop</Accordion.Header>
              
              <Accordion.Body className="link-detail">
              <span>PRINTED Collections...</span>
                <Link className="links" to={"/anioversized"}>
                  <li>Animi oversized</li>
                </Link>
                <Link className="links" to={"/caroversized"}>
                  <li>Car printed Oversized</li>
                </Link>
                <Link className="links" to={"/movieoversized"}>
                  <li>Movies printed </li>
                </Link>
                <Link className="links" to={"/musicoversized"}>
                  <li>Music artist printed </li>
                </Link> */}
                
              
                {/* <Link className="links" to={"/bikeoversized"}>
                  {" "}
                  <li>Bike printed Oversized</li>
                </Link>
                <span>POSTER Collections....</span>
                <Link className="links" to={"/posters"}>
                  <li>Poster</li>
                </Link>
                <Link className="links" to={"/animiposter"}>
                  <li>Animi Poster</li>
                </Link>
                <Link className="links" to={"/carposters"}>
                  <li>Car Poster</li>
                </Link>
                <Link className="links" to={"/bikeposter"}>
                  <li>bike Poster</li>
                </Link>
                <Link className="links" to={"/movieposter"}>
                  <li>Movies Poster</li>
                </Link> */}
              {/* </Accordion.Body> */}
            </Accordion.Item>
          </Accordion>

          
          <div className="contactlinks">
            <h6>Contact</h6>
            <p>Email: <a href="mailto:zculture01@gmail.com?subject=Subject%20Here&body=Body%20Here">zculture01@gmail.com</a></p>

            <p>Ph: <a href="tel:+917010434690">+91 7010434690</a></p>

            <p><a href="/contact">social media</a></p>
          </div>
          <div className="info">
            <h6>INFO</h6>
            <p> <a href="/about">About Us</a></p>
            <p> <a href="/Returnpolicy"></a></p>
            <p>Shipping Policy</p>
            <p>Country: India</p>
            <p>Region: Chennai</p>
          </div>

          <div className="footer-sections">
            <span>&copy; 2025 ZCULTURE. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
