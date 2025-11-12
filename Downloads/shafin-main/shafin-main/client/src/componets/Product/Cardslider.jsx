import React, { useEffect, useState } from "react";
import './CardSlider.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loadingimg from "../../componets/images/7GtC.gif";

const BASE_URL = "https://shafin-backend.onrender.com";

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Check local storage for cached data
        const cachedProducts = localStorage.getItem('trendingshirts');
        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts));
          setLoading(false);
          return;
        }

        // Fetch data from the API
        const res = await axios.get(`${BASE_URL}/api/v1/products?category=newarrival`);
        const sortedProducts = res.data.product.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const firstEightProducts = sortedProducts.slice(0, 15);

        // Save data to local storage
        localStorage.setItem('trendingshirts', JSON.stringify(firstEightProducts));

        setProducts(firstEightProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Check your internet connection. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img className="loading-image" src={loadingimg} alt="Loading..." />
        <p className="loading">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <Link className="links" to={"/anioversized"}>
        <h1 className="header">New Arrival</h1>
        <span className="showmore">Slide more</span>
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
              <p className="no-product">No product available</p>
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
