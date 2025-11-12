import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dashbroad from "../Dashbroad";
import { toast } from "react-toastify";

// const BASE_URL = "https://shafin-server.onrender.com";


const BASE_URL = "https://shafin-backend.onrender.com";

export const Deletedproducts=()=>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {id}=useParams
const navigate=useNavigate()


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.delete(`${BASE_URL}/api/v1/products/delete${id}`);
        toast.success("successfull created product..", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setProducts(res);
      } catch (err) {
        toast.error("something went wrong...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="main-box">
      <h1> Deleted products in store</h1>
      <Link to={"/dashbroad"} element={<Dashbroad/>}>dashbroad</Link>
      {products.map((product) => (
        <div className="product" key={product._id}>
          {/* <img
            src={`http://localhost:8000/public/Images/${product.images[0].image}`}
            alt={product.name}
          /> */}
          <h3>{product.name}</h3>
          <p>{product.describe}</p>
          <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Deletedproducts
