import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Aniproduct from "./animiProducts/Aniproducts";
import Anioversized from "./animiProducts/AniOversized";
import Tshirt from "../src/T-shirt/Tshirt";
import Hoodies from "../src/Hoodies/Hoodies";
import Printedcollection from "../src/Printedcollection/Printedcollection";
import Pants from "../src/Pants/Pants";
import ProductDetail from "../src/componets/ProductSinglepage/ProductDetails.jsx";
import Register from "../src/register/Register.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login.jsx";
import Dashbroad from "./Dashbroad/Dashbroad.jsx";
import Createproducts from "./Dashbroad/Createproducts/Createproducts.jsx";
import { Showallproducts } from "./Dashbroad/showproducts/Showallproducts.jsx";
import Updateproducts from "./Dashbroad/updateproducts/Updateproduct.jsx";
import Deletedproducts from "./Dashbroad/deletedproducts/Deletedproducts.jsx";
import Cart from "./cart/Cartpage.jsx";
import Entry from "./pages/Entry.jsx";
import About from "./pages/About.jsx";
import Animicollections from "./animiProducts/Animicollection.jsx";
import Trending from "../src/Trending/Trending.jsx";
import Trendoversized from "../src/Trending/Trendoversized.jsx";
import Trendcollections from "../src/Trending/Trendcollection.jsx";
import Carcollections from "../src/car/Carcollection.jsx";
import Car from "../src/car/Car.jsx";
import Caroversized from "../src/car/Caroversized.jsx";
import Bikecollection from "../src/bike/Bikecollections.jsx";
import Bikeoversized from "../src/bike/Bikeoversized.jsx";
import Bike from "../src/bike/Bike.jsx";
import Posters from "../src/Poster/Poster.jsx";
import Animiposters from "../src/Poster/Aniposter.jsx";
import Movieposter from "../src/Poster/movieposter.jsx";
import Carposter from "../src/Poster/Carposter.jsx";
import Bikeposter from "../src/Poster/Bikeposter.jsx";
import Postercollections from "./Poster/Postercollections.jsx";
import Sizechart from "./pages/sizechart.jsx";
import Contact from "./pages/Contact.jsx";
import OrderPage from "./cart/order/Order.jsx";
import Musicoversized from "./musicproduct/Musicoversized.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/animicollections" element={<Animicollections />} />
        <Route path="/aniproducts" element={<Aniproduct />} />
        <Route path="/anioversized" element={<Anioversized />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/trendoversized" element={<Trendoversized />} />
        <Route path="/trendcollection" element={<Trendcollections />} />
        <Route path="/carcollections" element={<Carcollections />} />
        <Route path="/car" element={<Car />} />
        <Route path="/musicoversized" element={<Musicoversized/>} />
        <Route path="/caroversized" element={<Caroversized />} />
        <Route path="/bikecollections" element={<Bikecollection />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/bikeoversized" element={<Bikeoversized />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/animiposters" element={<Animiposters />} />
        <Route path="/movieposters" element={<Movieposter />} />
        <Route path="/carposters" element={<Carposter />} />
        <Route path="/bikeposters" element={<Bikeposter />} />
        <Route path="/postercollections" element={<Postercollections />} />
        <Route path="/sizechart" element={<Sizechart />} />
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/ordershipping" element={<OrderPage/>}></Route>

        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/printed-collection" element={<Printedcollection />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbroad" element={<Dashbroad />} />
        <Route path="/createproduct" element={<Createproducts />} />
        <Route path="/showallproducts" element={<Showallproducts />} />
        <Route path="/products/update/:id" element={<Updateproducts />} />
        <Route path="/products/delete/:id" element={<Deletedproducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
