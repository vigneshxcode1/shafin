import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import animi from "../images/oversized.jpg";
// import trend from "../images/trending.jpg";
import bike from "../images/bike.jpg";
import car from '../images/car.jpg'
import posterimage from "../images/postercollection.png";
import musicimage from "../images/musicimg.jpg"
import "./Product.css";

function animicollections() {
  return (
    <>
    {/* <div className="main">
    <CardGroup>
      <Card.Body className="box">
        <Link to={"/anioversized"}>
          <img variant="top" src={animi} alt="Anime Collections" className="img-box" />
          <div className="overlay">
            <div className="overlay-text">Anime Tees</div>
          </div>
        </Link>
        <h1 className="title">ANIMI TEES COLLECTIONS &#8594;</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/trendoversized"}>
          <img variant="top" src={trend} alt="Trending Collections" className="img-box" />
          <div className="overlay">
            <div className="overlay-text">Trending  Tees</div>
          </div>
        </Link>
        <h1 className="title">TRENDING TEES COLLECTIONS &#8594;</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/musicoversized"}>
          <img variant="top" src={musicimage} alt="Car Collections"  className="img-box"/>
          <div className="overlay">
            <div className="overlay-text">MUSIC Tees</div>
          </div>
        </Link>
        <h1 className="title">MUSIC TEES COLLECTIONS &#8594;</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/caroversized"}>
          <img variant="top" src={car} alt="Car Collections"  className="img-box" />
          <div className="overlay">
            <div className="overlay-text">Car Tees</div>
          </div>
        </Link>
        <h1 className="title">CAR TEES COLLECTIONS &#8594;</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/bikeoversized"}>
          <img variant="top" src={bike} alt="Bike Collections"  className="img-box"/>
          <div className="overlay">
            <div className="overlay-text">Bike Tees</div>
          </div>
        </Link>
        <h1 className="title">BIKE TEES COLLECTIONS &#8594; </h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/postercollections"}>
          <img variant="top" src={posterimage} alt="Bike Collections"  className="img-box"/>
          <div className="overlay">
            <div className="overlay-text">Poster Collections</div>
          </div>
        </Link>
        <h1 className="title">POSTER COLLECTIONS &#8594;</h1>
      </Card.Body>
    </CardGroup>
    </div> */}
  
    </>
    
  );
}

export default animicollections;
