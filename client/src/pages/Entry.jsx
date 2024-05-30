import React from "react";
import "./Enter.css";
import { Link } from "react-router-dom";

const Entry = () => {
  return (
    <div className="background">
      <h1 className="brand-img">YOUR BRAND</h1>
      <div className="main-links">
        {" "}
        <Link to="/home" >
          <h1 className="link-item">SHOP</h1>
        </Link>

        <Link to="/postercollections" >
          <h1 className="link-item">POSTERS</h1>
        </Link>
  
         
          <Link to={'/contact'}><h1 className="link-item">CONTACT</h1></Link>
  
      
        <Link to="/cart">
          <h1 className="link-item">CART</h1>
        </Link>
        {/* <Link to="/about" className="link">
          <h1 className="link-item">ABOUT</h1>
        </Link> */}

      </div>



      <footer className="main-foot">

    <a  className="foot-item" href="/about">about</a>
        <Link className="foot-item"  to="/sizechart">size chart</Link>
      
        
        <p className="foot-item">shipping</p>
        <a  href="mailto:your@gmail.com" className="foot-item">
          email
        </a>

        <p className="foot-item">term and conditions</p>
     
      </footer>
    </div>
  );
};

export default Entry;
