import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productDetails.css";
import Product from "../Product/Product.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { addCartItem } from "../../localStorageHelpers.jsx";



const BASE_URL = "http://localhost:8000";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("s"); // Default size
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

  if (loading) return <p>Loading...</p>;
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
                  
                />
              );
            })
          ) : (
            <p>No images available</p>
          )}

          <div className="product-detail-info">
            <h2>Name:{product.name}</h2>
            <p className="product-detail-description">
              Description: {product.describe}
            </p>
            <span className="product-detail-price">${product.price}</span>
            <p className="product-detail-rating">Rating: {product.rating}</p>
            <p className="product-detail-seller">Seller: {product.seller}</p>
            <p className="product-detail-stock">Stock: {product.stock}</p>
            <p className="product-detail-category">
              Category: {product.category}
            </p>
            <p className="product-detail-created">
              Created at: {new Date(product.createdAt).toLocaleDateString()}
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
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
              </select>
            </div>

            <div className="quantity-container">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span className="quantity">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default ProductDetail;
