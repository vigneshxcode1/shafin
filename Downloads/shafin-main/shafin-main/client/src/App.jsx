import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Aniproduct from "./animiProducts/Aniproducts";
import Anioversized from "./animiProducts/AniOversized";
import ProductDetail from "../src/componets/ProductSinglepage/ProductDetails.jsx";
import Register from "../src/register/Register.jsx";
import Login from "./Login/Login.jsx";
import Dashbroad from "./Dashbroad/Dashbroad.jsx";
import Createproducts from "./Dashbroad/Createproducts/Createproducts.jsx";
import { Showallproducts } from "./Dashbroad/showproducts/Showallproducts.jsx";
import Updateproducts from "./Dashbroad/updateproducts/Updateproduct.jsx";
import Deletedproducts from "./Dashbroad/deletedproducts/Deletedproducts.jsx";
import Cart from "./cart/Cartpage.jsx";
import Entry from "./pages/Entry.jsx";
import About from "./pages/About.jsx";
import Trendoversized from "../src/Trending/Trendoversized.jsx";
import Car from "../src/car/Car.jsx";
import Caroversized from "../src/car/Caroversized.jsx";
import Bikeoversized from "../src/bike/Bikeoversized.jsx";
import Sport from './Sports/Sports.jsx'
import Bike from "../src/bike/Bike.jsx";

import Contact from "./pages/Contact.jsx";
import OrderPage from "./cart/order/Order.jsx";
import Musicoversized from "./musicproduct/Musicoversized.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Testamonial from "./pages/Testimonial/Testamonial.jsx";
import Createtestimonial from "./pages/Testimonial/createtestimonial'/Createtestimonial.jsx";
import { Showalltestimonial } from "./pages/Testimonial/createtestimonial'/ShowTestimonial.jsx";
import { Deletedtestimonial } from "./pages/Testimonial/Deletetestimonial.jsx";
import Profile from "./Login/Profile.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Creategallery from './pages/gallery/Creategallery.jsx'
import Sizechart from "./pages/Sizechart.jsx";
import Returnpolicy from "./Returnpolicy.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/about" element={<About />} />
        <Route path="/returnpolicy" element={<Returnpolicy/> }/>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />

        <Route path="/aniproducts" element={<Aniproduct />} />
        <Route path="/anioversized" element={<Anioversized />} />
        <Route path="/movieoversized" element={<Trendoversized />} />
        <Route path="/sportoversized" element={<Sport/>}/>
        <Route path="/car" element={<Car />} />
        <Route path="/music" element={<Musicoversized />} />
        <Route path="/caroversized" element={<Caroversized />} />

        <Route path="/bikeoversized" element={<Bikeoversized />} />

        {/*         <Route path="/bike" element={<Bike />} /> */}

      
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/ordershipping" element={<OrderPage />}></Route>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/sizeimage" element={<Sizechart />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/dashbroad" element={<Dashbroad />} />
        <Route path="/createproduct" element={<Createproducts />} />
        <Route path="/showallproducts" element={<Showallproducts />} />
        <Route path="/products/update/:id" element={<Updateproducts />} />
        <Route path="/products/delete/:id" element={<Deletedproducts />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/testimonial" element={<Testamonial />} />
        <Route path="/createtestimonial" element={<Createtestimonial />} />
        <Route path="/Showalltestimonial" element={<Showalltestimonial />} />
        <Route path="/deleteTestimonail/:id" element={<Deletedtestimonial />} />

        <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/creategallery" element={<Creategallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
