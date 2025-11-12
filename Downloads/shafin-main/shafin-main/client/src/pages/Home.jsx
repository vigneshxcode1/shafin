import React from "react";
import Navbar from "../componets/Navbar/Navbar.jsx";
import CardSlider from "../componets/Product/Cardslider.jsx";
import Bestseller from "../componets/Product/slidercard/Bestseller.jsx";
import Zcommunity from "../componets/Product/slidercard/Z-communtity.jsx";
import Corosol from "../componets/Product/corosol/Corolsol.jsx";
import "../App.css";
import Footer from "../componets/footer/footdetails.jsx";
// import Product from '../componets/Product/Product.jsx'
import Testamonial from "./Testimonial/Testamonial.jsx";
import Gallery from "./gallery/Gallery.jsx";


const Home = () => {
  return (
    <>
    <div className="home">
        <Navbar />


      <Corosol />

      {/* <CardSlider />
      
      <Bestseller /> */}
      
      <br />

      <button className="viewmore" > <a href="/products" id="viewmore">VIEW MORE</a></button>
      <br />

      <p className="Stylewithoffers"> Style with offers</p>

      <Zcommunity />
     
   
      {/* <Testamonial/> */}

<br />
      {/* <Gallery/> */}
      
      <Footer />

    </div>

    </>
  );
};

export default Home;
