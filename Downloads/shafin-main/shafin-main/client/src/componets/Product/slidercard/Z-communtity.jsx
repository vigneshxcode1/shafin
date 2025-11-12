import React, { useEffect, useState } from "react";
import '../CardSlider.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import loadingimg from "../../../componets/images/7GtC.gif"
import './zculture.css'

const BASE_URL = "https://shafin-backend.onrender.com";

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${BASE_URL}/api/v1/products`);
        const sortedProducts = res.data.product.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const firstEightProducts = sortedProducts.slice(0, 15);

        localStorage.setItem('zculture', JSON.stringify(firstEightProducts));
        setProducts(firstEightProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Check your internet. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        {/* <img className="loading-image" src={loadingimg} alt="Loading..." /> */}
        <p className="loading">Loading...</p>
      </>
    );
  }
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="containers">
        <div className="containershome">
          <div className="grid">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                {product.images && product.images.length > 0 ? (
                  <img
                    className="product-image"
                    onClick={() => navigate(`/products/${product._id}`)}
                    src={product.images[0]}
                    alt={`${product.name} product image`}
                  />
                ) : (
                  <p>No images available</p>
                )}
                <p className="product-title">{product.name}</p>
                <p className="title-oversized-cut">Rs:{product.cutprice}</p>
                <p className="product-price">From RS: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingshirt;
