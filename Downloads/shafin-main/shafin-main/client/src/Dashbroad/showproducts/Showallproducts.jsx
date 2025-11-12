import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Dashbroad from "../Dashbroad";
import "./showproducts.css";

const BASE_URL = "https://shafin-backend.onrender.com";

export const Showallproducts = () => {
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

  const handleDelete = async (id) => {
    const confirmdelete = window.confirm("are your sure want to delete")

  if(!confirmdelete){
    return;
  }
  
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/api/v1/products/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

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
    <div className="products-container">
      <h1 className="products-header">All Products in Store</h1>
      <Link to="/dashbroad" className="dashboard-link">Dashboard</Link>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-cards" key={product._id}>
            {product.images && product.images.length > 0 ? (
              <img
                className="product-image"
                onClick={() => navigate(`/products/${product._id}`)}
                src={product.images[0]} 
                alt={`${product.name} first image`}
              />
            ) : (
              <p className="no-image-text">No images available</p>
            )}
            <p className="product-name">Name: {product.name}</p>
            <p className="product-stock">Stock: {product.stock}</p>
            <span className="product-price">Price: ${product.price}</span>
            <div className="product-buttons">
              <button className="update-button" onClick={() => navigate(`/products/update/${product._id}`)}>Update</button>
              <button className="delete-button" onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showallproducts;
