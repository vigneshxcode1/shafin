import React, { useEffect, useState } from "react";
import './CardSlider.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loadingimg from "../../componets/images/7GtC.gif"
const BASE_URL = "https://shafin-8q7w.onrender.com";

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/products?category=newarrival`);
        const sortedProducts = res.data.product.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const firstEightProducts = sortedProducts.slice(0, 10);
        setProducts(firstEightProducts);
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
        <img className="loading-image" src={loadingimg} alt="Loading..." />
        <p className="loading">Loading...</p>
      </>
    );
  }
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Link className="links" to={"/anioversized"}>
    
          <h1 className="header">New arrival</h1>
          <span className="showmore">show more</span>
     
      </Link>
      <div className="img-main">
        {products.map((product) => (
          <div className="products" key={product._id}>
            {product.images && product.images.length > 0 ? (
              <img
                className="stackimg"
                onClick={() => navigate(`/products/${product._id}`)}
                src={product.images[0]} 
                alt={`${product.name} first image`}
              />
            ) : (
              <p>No product available</p>
            )}
            <p className="title-oversized">{product.name}</p>
            <p className="title-oversized-cut">Rs:₹{product.cutprice}</p>   
            <p className="title-oversized-org">Just at:₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingshirt;
