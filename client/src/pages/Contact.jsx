import React from "react";
import { Link } from "react-router-dom";
import "./product.css"
import Navbar from "../componets/Navbar/Navbar"
const Contact = () => {
  return (
    <>
    
<Navbar/>
      <div className="contact-container">
        <div className="main-containers">
        <span>Contact Links</span>
          <Link className="contact" href="https://www.instagram.com/ideepx_official/?hl=en">Instagram</Link>
          <Link className="contact" to={"https://wa.me/9025630360"}>WhatsApp</Link>
          <Link className="contact" to={""}>Facebook</Link>
          <Link className="contact" to={"https://telegram.me/Deepakspax"}>Telegram</Link>
        </div>
      </div>
    </>
  );
};

export default Contact;