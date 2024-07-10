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
import Postercard from '../componets/Product/slidercard/Postercards.jsx'
import '../App.css'
import Footer from "../componets/footer/footdetails.jsx";
import Imagecard from "../componets/Product/slidercard/Imagecard.jsx"
const Home = () => {
  return (
    <>
  <Navbar/>
  
    <Corosol/>

 <CardSlider/>

 <Bestseller/>
 <Zcommunity/>
 <Imagecard/>
 <Poster/>
 <Postercard/>

<Footer/>
    </>
  );
};

export default Home;
