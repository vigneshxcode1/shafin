import React, { useRef, useEffect } from "react";
import "./Enter.css";
import { Link } from "react-router-dom";
import backgroundmusic from "../componets/images/background.mp3";
const Entry = () => {
  const audioRef = useRef(null);


  useEffect(() => {
   
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="background">
      <audio ref={audioRef} src={backgroundmusic} loop />
      
      <h1 className="brand-img">YOUR BRAND</h1>
      <div className="main-links">
        <Link to="/home">
          <h1 className="link-item">SHOP</h1>
        </Link>
        <Link to="/postercollections">
          <h1 className="link-item">POSTERS</h1>
        </Link>
        <Link to="/contact">
          <h1 className="link-item">CONTACT</h1>
        </Link>
        <Link to="/cart">
          <h1 className="link-item">CART</h1>
        </Link>
      </div>
      <footer className="main-foot">
        <Link to="mailto:your@gmail.com" className="foot-item">
          email
        </Link>
        <Link className="foot-item" to="/sizechart">size chart</Link>
        <p className="foot-item">shipping</p>
        <Link className="foot-item" to="/about">about</Link>
        <p className="foot-item">term and conditions</p>
      </footer>
    </div>
  );
};

export default Entry;
