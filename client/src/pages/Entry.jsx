import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Enter.css";
import backgroundVideo from "../componets/images/entry.mp4"; 

const Entry = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    };

    playVideo();

    window.addEventListener('click', playVideo);

    return () => {
      window.removeEventListener('click', playVideo);
    };
  }, []);

  return (
    <div className="background">
      <video ref={videoRef} src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline className="background-video" />
      <div className="text-overlay">
        <h1 className="brand-img">Zculture</h1>
        <p className="subhead">THE WORK ONE PRODUCES IS AKIN TO GOD</p>
        <nav className="main-links" id="main-link">
          <Link to="/home" className="link-main">
            <h1 id="link"className="link-item">SHOP</h1>
          </Link>
          {/* <Link to="/postercollections" className="link-main">
            <h1 id="link" className="link-item">POSTERS</h1>
          </Link> */}
          <Link to="/contact" className="link-main">
            <h1 id="link" className="link-item">CONTACT</h1>
          </Link>
          <Link to="/cart" className="link-main">
            <h1 id="link" className="link-item">CART</h1>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Entry;
