import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./toastify.css";
import Dashbroad from "../Dashbroad";

 const BASE_URL = "https://shafin-backend.onrender.com";

//const BASE_URL = "http://localhost:8000";

const Createproducts = () => {
  const [name, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [color, setcolor] = useState("");
  const [cutprice, setcutprice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescription] = useState("");
  const [seller, setSeller] = useState("");
  const [rating, setRating] = useState("");
  const [size, setSize] = useState("m");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const token = localStorage.getItem("token");
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("cutprice", cutprice);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("describe", describe);
    formData.append("seller", seller);
    formData.append("rating", rating);
    formData.append("size", size);
  
    // Append images as individual fields
    images.forEach((image, index) => {
      formData.append("images", image);  // Add each image URL as a separate field
    });
  
    try {
      const result = await axios.post(
        `${BASE_URL}/api/v1/products/new`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if(result){
        navigate("/showallproducts")
      }
      console.log("Result:", result.data);
    } catch (err) {
      if (err.response) {
        console.error("Response Error:", err.response.data);
      } else if (err.request) {
        console.error("Request Error:", err.request);
      } else {
        console.error("Error Message:", err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleImageUrlChange = (e) => {
    const urlString = e.target.value.trim();
    const imageArray = urlString.split(",").map((url) => url.trim());
    setImages(imageArray.filter((url) => url !== "")); // Remove empty strings
  
    // Optional: Set default image URLs if fewer than 3 images are provided
    if (imageArray.length < 3) {
      while (imageArray.length < 3) {
        imageArray.push("default_image_url_here");
      }
    }
    console.log("Processed Images Array:", imageArray);
  };
  

  return (
    <>
      <Link to={"/dashbroad"} element={<Dashbroad />}>
        Dashboard
      </Link>
      <div className="d-flex  justify-content-center align-items-center login">
        <div>
          <form onSubmit={handleSubmit}>
            <h2 className="grid-title">Create Products</h2>
            <div className="mb-3">
              <label className="name">Product Name</label>
              <input
                type="text"
                required
                placeholder="Enter product name"
                className="form-control"
                value={name}
                onChange={(e) => setProductname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                type="text"
                required
                placeholder="Enter product description"
                className="form-control"
                value={describe}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>colors</label>
              <select
                className="form-control"
                required
                value={color}
                onChange={(e) => setcolor(e.target.value)}
              >
                <option value="">Select color</option>

                <option value="black">black</option>
                <option value="white">white</option>
                <option value="green">green</option>
                <option value="beige">beige</option>
                  <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>

              </select>
            </div>

            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                required
                placeholder="Enter product price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>cutPrice</label>
              <input
                type="number"
                required
                placeholder="Enter product cutprice price"
                className="form-control"
                value={cutprice}
                onChange={(e) => setcutprice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Category</label>
              <select
                className="form-control"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>

                <option value="newarrival">newarrival</option>
                <option value="bestseller">bestseller</option>
                <option value="zcommuntity">zcommuntity</option>
                <option value="animi-oversizes-t-shirts">
                  Anime Oversized T-shirts
                </option>
                <option value="caroversized">CarOversizes</option>
                <option value="music">music tees</option>
                <option value="bike">bike tess</option>
                <option value="sportoversized">sport tees</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Stock</label>
              <input
                type="number"
                required
                placeholder="Enter product stock"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Seller</label>
              <input
                type="text"
                required
                placeholder="Enter product seller"
                className="form-control"
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Rating</label>
              <input
                type="number"
                required
                placeholder="Enter product rating"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <label>Image URLs</label>
                <input
                  type="text"
                  placeholder="Paste image URLs, separated by commas"
                  className="form-control"
                  onChange={handleImageUrlChange}
                />
              </div>
            </div>
            <button className="btn btn-success" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createproducts;
