import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { useNavigate } from "react-router-dom";
import Navbar from '../componets/Navbar/Navbar'
import loadingimg from "../componets/images/stickgif.gif"


const BASE_URL = "https://shafin-8q7w.onrender.com";

function GridExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/products`);

        const sortedProducts = res.data.product.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        console.log(sortedProducts);
        setProducts(sortedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
       <img className="loading" src={loadingimg}></img>
       <p className="loading">Loading....</p>
      </>
   
    
    )
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
    <Navbar/>
    <br></br>
    <h1 className="grid-title">Zculture Collections</h1>
    <div className="containers">
        <div className="grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="product-image"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={product.images[0]}
                  alt={`${product.name} first image`}
                />
              ) : (
                <p>No images available</p>
              )}
              <p className="product-title">{product.name}</p>
              <p className="title-oversized-cut">Rs:₹{product.cutprice}</p>
              <p className="product-title">From RS: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridExample;
