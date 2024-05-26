import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"; 
import Image from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";

const cards = [
  {
    title: "Anime Collections",
    image: Image,
    link: "/aniproducts",
  },
  {
    title: "Over-Sized Collections",
    image: Image2,
    link: "/anioversized",
  },
  {
    title: "T-Sized Collections",
    image: Image3,
    link: "/tshirt",
  },
  {
    title: "Printed Collections",
    image: Image,
    link: "/printed-collection",
  },
  {
    title: " Hoodies Collections",
    image: Image2,
    link: "/hoodies",
  },
  {
    title: "PANTS Collections",
    image: Image3,
    link: "/pants",
  },
  // Add more cards as needed
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <Link  to={card.link}>
            <img src={card.image} alt={card.title} />
          
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
