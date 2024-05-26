import React from "react";
import Navbar from "../componets/Navbar/Navbar.jsx";
import Headerbanner from "../componets/headerbanner/HeaderBanner.jsx";
import NewArraval from "../componets/New arrival/NewArraval.jsx";
import Product from "../componets/Product/Product.jsx";
import Secondarrival from "../componets/secondarival/Secondarrival.jsx";
import Featureproduct from "../componets/Product/FeatureProducts.jsx";
import Footdetail from "../componets/footer/footdetails.jsx";
import CardSlider from "../componets/Product/Cardslider.jsx";
import '../App.css'
const Home = () => {
  return (
    <>
  
      <Navbar />
      
      <Secondarrival />
      <Featureproduct />
    
      <Footdetail />
    </>
  );
};

export default Home;
