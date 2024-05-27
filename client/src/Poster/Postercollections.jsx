import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import animiposters from "../componets/images/animiposter.jpg";
import movieposters from "../componets/images/movieposter.jpeg";
import carposters from "../componets/images/carposter.jpg";
import bikeposters from '../componets/images/samurai.jpg'
import trendingposters from "../componets/images/trendposter.png"
import Navbar from "../componets/Navbar/Navbar"

function postercollections() {
  return (
    <>
    <Navbar/>
    <br></br> <br></br> <br></br>
     <CardGroup>
      <Card.Body className="box">
        <Link to={"/animiposters"}>
          <img variant="top" src={animiposters} alt="Anime Collections" />
          <div className="overlay">
            <div className="overlay-text">Anime Collections</div>
          </div>
        </Link>
        <h1 className="title">ANIMI COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/movieposters"}>
          <img variant="top" src={movieposters} alt="MOVIES Collections" />
          <div className="overlay">
            <div className="overlay-text">Movies Collections</div>
          </div>
        </Link>
        <h1 className="title">MOVIES COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/carposters"}>
          <img variant="top" src={carposters} alt="Car Collections" />
          <div className="overlay">
            <div className="overlay-text">Car Collections</div>
          </div>
        </Link>
        <h1 className="title">CAR COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/bikeposters"}>
          <img variant="top" src={bikeposters} alt="Bike Collections" />
          <div className="overlay">
            <div className="overlay-text">Bike Collections</div>
          </div>
        </Link>
        <h1 className="title">BIKE COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/posters"}>
          <img variant="top" src={trendingposters} alt="Bike Collections" />
          <div className="overlay">
            <div className="overlay-text">ALL POSTER Collections</div>
          </div>
        </Link>
        <h1 className="title">ALL TRENDING COLLECTIONS</h1>
      </Card.Body>
    </CardGroup>
    </>
   
  );
}

export default postercollections
