import React from 'react';
import "./Dashord.css"
import Createproducts from './Createproducts/Createproducts.jsx';
import { Link } from 'react-router-dom';
import { Showallproducts } from './showproducts/Showallproducts.jsx';
import Home from '../pages/Home.jsx';
import Showalltestimonial from '../pages/Testimonial/createtestimonial\'/ShowTestimonial.jsx';
import Creategallery from '../pages/gallery/Creategallery.jsx'
const Dashbroad = () => {
  return (
    <>
      <div className="dashbroad-container">
        <h2 className="dashbroad-title">Dashboard</h2>
        <Link to={"/"} className="link" element={<Home />}>Home</Link>
        <div className="link-container createproduct">
          <h2>Create Product</h2>
          <Link className="link" to={"/createproduct"} element={<Createproducts />}>Click</Link>
        </div>
        <div className="link-container show-all-products">
          <h2>Show All Products</h2>
          <Link className="link" to={"/showallproducts"} element={<Showallproducts />}>Click</Link>
        </div>

        <div className="link-container show-all-products">
          <h2>Show All testimonial</h2>
          <Link className="link" to={"/Showalltestimonial"} element={<Showalltestimonial/>}>Click</Link>
        </div>

        <div className="link-container show-all-products">
          <h2>create gallery customer</h2>
          <Link className="link" to={"/creategallery"} element={<Creategallery/>}>Click</Link>
        </div>
      </div>
    </>
  );
}

export default Dashbroad;
