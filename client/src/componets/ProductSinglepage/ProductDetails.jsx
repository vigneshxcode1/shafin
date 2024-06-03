import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productDetails.css";

import loadingimg from '../../componets/images/animiloading.gif'
// import Product from "../Product/Product.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { addCartItem } from "../../localStorageHelpers.jsx";

const BASE_URL = "https://shafin-8q7w.onrender.com";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("s"); 
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
        setProduct(res.data.product);
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  const handleAddToCart = async () => {
    try {
      const updatedStock = product.stock - quantity;
      if (updatedStock < 0) {
        setError("Not enough stock available.");
        return;
      }

      addCartItem({ ...product, size: selectedSize }, quantity);

      setProduct((prevProduct) => ({ ...prevProduct, stock: updatedStock }));

      toast.success("Product successfully added to cart");
    } catch (err) {
      toast.error("Failed to add product to cart. Please try again later.");
    }
  };

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  if (loading) return <img className="loading" src={loadingimg}></img>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product details available</p>;

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-detail">
          {product.images && product.images.length > 0 ? (
            product.images.map((image, index) => {
              console.log("Image URL:", image); // Log image URL
              return (
                <img
                  key={index}
                  src={image} 
                  alt={`Product image ${index + 1}`}
                />
              );
            })
          ) : (
            <p>No images available</p>
          )}

          <div className="product-detail-info">
            <h2 className="product-detail-price">Name: {product.name}</h2>
            <span className="product-detail-price">Rs:₹{product.price}</span>
            <p className={`product-detail-description ${showFullDescription ? "show" : ""}`}>
              Description: <br></br>{product.describe}
            </p>
            <button className="toggle-button-des" onClick={toggleDescription}>
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
            <p className="product-detail-price">Seller: {product.seller}</p>
            <p  className="product-detail-price">Stock: {product.stock}</p>
            <p  className="product-detail-price">
              Category: {product.category}
            </p>
            <div className="size-container">
              <label htmlFor="size">Select Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                
              >
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
              </select>
              <Link to={"/sizechart"} className="sizechart">sizechart</Link>
            </div>

        
            <p className="product-detail-rating">Rating: {product.rating}</p>

            <div className="quantity-container">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span className="quantity">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
            
          </div>

         
          <div className="shippinginfo">
          <h1 className="shipping">Shipping info</h1>
          <ul>
            <li>Orders are processed within 1-3 business days.</li>
            <li>Orders are delivered within 7-10 business days.</li>
            <li>Customers are responsible for accurate shipping information.</li>
            <li>For undeliverable packages, customers may incur return shipping fees</li>
            <li>Contact us for tracking issues or inquiries.</li>
          </ul>
          </div>
          
          <p className="product-detail-created">
              Created at: {new Date(product.createdAt).toLocaleDateString()}
            </p>
        </div>
      </div>
     
    </>
  );
};

export default ProductDetail;
