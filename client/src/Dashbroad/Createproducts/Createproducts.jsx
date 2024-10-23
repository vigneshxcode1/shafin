import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./toastify.css";
import Dashbroad from "../Dashbroad";

const BASE_URL = "https://shafin-8q7w.onrender.com";

// const BASE_URL = "http://localhost:5173";

const Createproducts = () => {
  const [name, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const[cutprice,setcutprice]=useState("")
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

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append('cutprice',cutprice)
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
        autoClose: 1000,
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
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }finally{
      setLoading(false)
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

                <option value="animi-oversizes-t-shirts">Anime Oversized T-shirts</option>
                <option value="trendoversized">moviesOversized</option>            
                <option value="caroversized">CarOversizes</option>
                <option value="music">music tees</option>
              

  {/* <option value='bikeoversized'>bikeoversized</option> */}
{/* 
                <option value="animiposter">animiposters</option>
                <option value="movieposter">movieposters</option>
                <option value="carposter">carposters</option>
                <option value="bikeposter">bikeposters</option> */}
              
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
            <button className="btn btn-success" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createproducts;
