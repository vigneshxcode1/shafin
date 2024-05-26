import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import featureimg from "../images/samurai.jpg";
import feature2 from "../images/trending.jpg";
import feature3 from "../images/oversized.jpg";
import feature4 from '../images/car.jpg'

import "./Product.css";

function animicollections() {
  return (
    <CardGroup>
      <Card.Body className="box">
        <Link to={"/animicollections"}>
          <img variant="top" src={feature3} alt="Anime Collections" />
          <div className="overlay">
            <div className="overlay-text">Anime Collections</div>
          </div>
        </Link>
        <h1 className="title">ANIMI COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/trendcollection"}>
          <img variant="top" src={feature2} alt="Trending Collections" />
          <div className="overlay">
            <div className="overlay-text">Trending Collections</div>
          </div>
        </Link>
        <h1 className="title">TRENDING COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/carcollections"}>
          <img variant="top" src={feature4} alt="Car Collections" />
          <div className="overlay">
            <div className="overlay-text">Car Collections</div>
          </div>
        </Link>
        <h1 className="title">CAR COLLECTIONS</h1>
      </Card.Body>

      <Card.Body className="box">
        <Link to={"/bikecollections"}>
          <img variant="top" src={featureimg} alt="Bike Collections" />
          <div className="overlay">
            <div className="overlay-text">Bike Collections</div>
          </div>
        </Link>
        <h1 className="title">BIKE COLLECTIONS</h1>
      </Card.Body>
    </CardGroup>
  );
}

export default animicollections;
