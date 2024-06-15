import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Enter.css";
import backgroundVideo from "../componets/images/motogp1.mp4"; // Adjust the path and file extension if needed
import backgroundaudio from "../componets/images/background.mp3"
const Entry = () => {
  const videoRef = useRef(null);
  const audioref=useRef(null)

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    };

    const audio=audioref.current;
    const playaudio=()=>{
      audio.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }

    playVideo();
    playaudio

    window.addEventListener('click', playVideo);
window.addEventListener('click',playaudio)
    return () => {
      window.removeEventListener('click', playVideo);
      window.removeEventListener('click', playaudio)
    };
  }, []);

  return (
    <div className="background">
    <video ref={videoRef} src={backgroundVideo} autoPlay loop muted playsInline className="background-video" />
    {/* <audio ref={audioref} src={backgroundaudio}></audio> */}
    <div className="text-overlay">
      <h1 className="brand-img">shafin</h1>
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
      {/* <footer className="main-foot">
        <a href="mailto:your@gmail.com" className="foot-item">
          email
        </a>
        <Link className="foot-item" to="/sizechart">size chart</Link>
        <p className="foot-item">shipping</p>
        <Link className="foot-item" to="/about">about</Link>
        <p className="foot-item">terms and conditions</p>
      </footer> */}
    </div>
  </div>
  
  );
};

export default Entry;
