import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Dashbroad from "../Dashbroad";
import "./showproducts.css"




const BASE_URL = "http://localhost:8000";

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
    <div className="container">
      <h1>All products in store</h1>
      <Link to="/dashbroad" element={<Dashbroad />}>Dashboard</Link>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product" key={product._id}>
           {product.images && product.images.length > 0 ? (
            product.images.map((image, index) => (
              <img key={index} src={image} alt={`${product.name} image ${index}`} />
            ))
          ) : (
            <p>No images available</p>
          )}
            <p>Name:{product.name}</p>
            <p>Stock:{product.stock}</p>
            <span> price ${product.price}</span>
            <div className="buttons">
              <button onClick={() => navigate(`/products/update/${product._id}`)}>Update</button>
              <button className='delete-btn' onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showallproducts;
