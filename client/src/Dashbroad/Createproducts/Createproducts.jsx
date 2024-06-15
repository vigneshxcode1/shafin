import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./toastify.css";
import Dashbroad from "../Dashbroad";

const BASE_URL = "https://shafin-8q7w.onrender.com";

const Createproducts = () => {
  const [name, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescription] = useState("");
  const [seller, setSeller] = useState("");
  const [rating, setRating] = useState("");
  const [size, setSize] = useState("m");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("describe", describe);
    formData.append("seller", seller);
    formData.append("rating", rating);
    formData.append("size", size);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

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
      toast.success("Successfully created product.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashbroad");
      console.log(result.data);
    } catch (err) {
      toast.error("Something went wrong...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
      <Link to={"/dashbroad"} element={<Dashbroad />}>
        Dashboard
      </Link>
      <div className="d-flex  justify-content-center align-items-center login">
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Create Products</h2>
            <div className="mb-3">
              <label>Product Name</label>
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
              <label>Category</label>
              <select
                className="form-control"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                {/* <option value="animi-tshirt">Anime T-shirt</option> */}
                <option value="animi-oversizes-t-shirts">Anime Oversized T-shirts</option>
                {/* <option value="printed-oversized">Printed Oversized</option> */}
                {/* <option value="trending">Trending</option> */}
                <option value="trendoversized">TrendingOversized</option>
                {/* <option value="car">Car</option> */}
                <option value="caroversized">CarOversizes</option>
                <option value="music">music tees</option>
                {/* <option value="bike">Bike</option> */}
                <option value='bikeoversized'>bikeoversized</option>
                <option value="posters">trendingposters</option>
                <option value="movieposter">movieposters</option>
                <option value="carposter">carposters</option>
                <option value="bikeposter">bikeposters</option>
                <option value="animiposter">animiposters</option>
                {/* <option value="pants">Pants</option> */}
                {/* <option value="T-shirt">T-shirt</option>
                <option value="printed-collection">Printed Collection</option> */}
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
              <label>Images</label>
              <input
                type="file"
                multiple
                required
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createproducts;
