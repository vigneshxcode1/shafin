import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import animi from "../images/oversized.jpg";
import trend from "../images/trending.jpg";
import bike from "../images/bike.png";
import car from '../images/car.png'
import posterimage from "../images/postercollection.png";
import "./Product.css";

function animicollections() {
  return (
    <CardGroup>
      <Card.Body className="box">
        <Link to={"/animicollections"}>
          <img variant="top" src={animi} alt="Anime Collections" />
          <div className="overlay">
            <div className="overlay-text">Anime Tees</div>
          </div>
        </Link>
        <h1 className="title">ANIMI COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/trendcollection"}>
          <img variant="top" src={trend} alt="Trending Collections" />
          <div className="overlay">
            <div className="overlay-text">Trending Tees</div>
          </div>
        </Link>
        <h1 className="title">TRENDING COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/carcollections"}>
          <img variant="top" src={car} alt="Car Collections" />
          <div className="overlay">
            <div className="overlay-text">Car Tees</div>
          </div>
        </Link>
        <h1 className="title">CAR COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/bikecollections"}>
          <img variant="top" src={bike} alt="Bike Collections" />
          <div className="overlay">
            <div className="overlay-text">Bike Tees</div>
          </div>
        </Link>
        <h1 className="title">BIKE COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/postercollections"}>
          <img variant="top" src={posterimage} alt="Bike Collections" />
          <div className="overlay">
            <div className="overlay-text">Poster Collections</div>
          </div>
        </Link>
        <h1 className="title">TRENDING POSTER COLLECTIONS</h1>
      </Card.Body>
    </CardGroup>
  );
}

export default animicollections;
