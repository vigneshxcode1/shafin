import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"; 


const cards = [
  {
    title: "Anime Collections",

    link: "/aniproducts",
  },
  {
    title: "Over-Sized Collections",
   
    link: "/anioversized",
  },
  {
    title: "T-Sized Collections",
  
    link: "/tshirt",
  },
  {
    title: "Printed Collections",
   
    link: "/printed-collection",
  },
  {
    title: " Hoodies Collections",
 
    link: "/hoodies",
  },
  {
    title: "PANTS Collections",
   
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
