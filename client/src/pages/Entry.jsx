import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Enter.css";
import backgroundmusic from "../componets/images/background.mp3"; // Fix the typo in the path

const Entry = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playAudio = () => {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay was prevented:", error);
        });
      };
      playAudio();

      // Optional: Add an event listener to play the audio on user interaction
      window.addEventListener('click', playAudio);

      // Cleanup event listener
      return () => {
        window.removeEventListener('click', playAudio);
      };
    }
  }, []);

  return (
    <div className="background">
      <audio ref={audioRef} src={backgroundmusic} loop />
      <h1 className="brand-img">YOUR BRAND</h1>
      <nav className="main-links">
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
      </nav>
      <footer className="main-foot">
        <a href="mailto:your@gmail.com" className="foot-item">
          email
        </a>
        <Link className="foot-item" to="/sizechart">size chart</Link>
        <p className="foot-item">shipping</p>
        <Link className="foot-item" to="/about">about</Link>
        <p className="foot-item">terms and conditions</p>
      </footer>
    </div>
  );
};

export default Entry;
