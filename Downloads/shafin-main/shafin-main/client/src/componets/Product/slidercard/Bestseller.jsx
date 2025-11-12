import React, { useEffect, useState } from "react";
import '../CardSlider.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loadingimg from "../../../componets/images/7GtC.gif"

const BASE_URL = "https://shafin-backend.onrender.com";

// const BASE_URL= "http://localhost:8000"

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {


    const fetchProducts = async () => {
      try {

        const cachedData = localStorage.getItem(`bestseller`);
        if (cachedData) {
          setProducts(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
        const res = await axios.get(`${BASE_URL}/api/v1/products?category=bestseller`);
        const sortedProducts = res.data.product.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const firstEightProducts = sortedProducts.slice(0, 15);

        localStorage.setItem('bestseller', JSON.stringify(firstEightProducts));

        setProducts(firstEightProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("check your internet. Please try again later.");
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
    <>
      <div>
      <Link className="links" to={"/products"}>
        <div>
          <h1 className="header">Best-seller</h1>
          <span className="showmore">slide more</span>
        </div>
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
              <p>No products available</p>
            )}
          
            <p className="title-oversized">{product.name}</p>
            <p className="title-oversized-cut">Rs:₹{product.cutprice}</p>
            <p className="title-oversized-org">Just at:₹{product.price}</p>
        
           
          </div>
        ))}
      </div>
    </div>
    </>
  
  );
};

export default Trendingshirt;
