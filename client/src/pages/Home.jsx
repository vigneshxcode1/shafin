import React from "react";
import Navbar from "../componets/Navbar/Navbar.jsx";
import NewArraval from "../componets/New arrival/NewArraval.jsx";
import Product from "../componets/Product/Product.jsx";
import Secondarrival from "../componets/secondarival/Secondarrival.jsx";
import Featureproduct from "../componets/Product/FeatureProducts.jsx";
import Footdetail from "../componets/footer/footdetails.jsx";
import CardSlider from "../componets/Product/Cardslider.jsx";
import Bestseller from "../componets/Product/slidercard/Bestseller.jsx"
import Zcommunity from "../componets/Product/slidercard/Z-communtity.jsx"
import Corosol from "../componets/Product/corosol/Corolsol.jsx"
import Poster from "../componets/Product/slidercard/Posters.jsx"
import '../App.css'
import Footer from "../componets/footer/footdetails.jsx";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
  <Navbar/>
    <Corosol/>

 <CardSlider/>

 <Bestseller/>
 <Zcommunity/>
 <Poster/>

<Footer/>
    </>
  );
};

export default Home;
