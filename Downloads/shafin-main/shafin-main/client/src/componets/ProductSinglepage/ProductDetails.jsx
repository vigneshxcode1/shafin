import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productDetails.css";

import loadingimg from "../../componets/images/animiloading.gif";
import Navbar from "../Navbar/Navbar.jsx";
import { addCartItem } from "../../localStorageHelpers.jsx";
import Accordion from "react-bootstrap/Accordion";
import Bestseller from "../../componets/Product/slidercard/Bestseller.jsx";

const BASE_URL = "https://shafin-backend.onrender.com";

// const BASE_URL = "http://localhost:8000"

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("m");
  const [current, setCurrent] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
        setProduct(data.product);
        console.log(data.product);
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
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
      toast.success("Added to cart.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.error("Failed to add product to cart. Please try again later.");
    }
  };

  const nextSlide = () => {
    setCurrent(current === product.images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? product.images.length - 1 : current - 1);
  };

  if (loading)
    return (
      <>
        <img className="loading-image" src={loadingimg} alt="Loading..." />
        <p className="loading">Loading...</p>
      </>
    );
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product details available</p>;

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-detail">
          <div className="product-images">
            <div className="slider">
              <button className="left-arrow" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="right-arrow" onClick={nextSlide}>
                &#10095;
              </button>
              {product.images && product.images.length > 0 ? (
                product.images.map((image, index) => (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img
                        className="productdetail-img"
                        src={image}
                        alt={`Product image ${index + 1}`}
                      />
                    )}
                  </div>
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
          <div className="product-detail-info">
            <p id="product-detail-name" className="responsive-title">
              {product.name}
            </p>

            <p>({product.color})</p>

            <div className="prices">
              <span className="product-cutprices">Rs:₹{product.cutprice}</span>
              <span className="product-prices">Rs:₹{product.price} </span>
              <span className="sale">sale</span>
            </div>
            <p className="freeshipping">FREE SHIPPING ON PREPAID</p>
            <p className="product-detail-category">
              Category :{product.category}
            </p>
         

            <div className="size-container-size">
              <label htmlFor="size" id="sizechart">Select Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {!(product.color === "green" || product.color === "beige") && (
                  <option value="s">S</option>
                )}
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            
            </div>
            <br />
            <p className="product-detail-category">
            <a href="/sizeimage" id="view" >view  sizechart</a>
            </p>

            <div className="quantity-container">
              <span className="qtnbtn">Quantity</span>
              <button
                id="quantity-btn-left"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="quantitys">{quantity}</span>
              <button
                id="quantity-btn-right"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <button className="addtocart" id="addtocart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>

          <div className="desandshop">
            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  {/* <p>{product.describe}</p> */}
                  <ul>
                    <li>Fit overSized</li>
                    <li>240GSM </li>
                    <li>High quality DTF prints</li>
                    <li>Front & back Printed .</li>
                    <li>100% Biowashed Cotton.</li>
                    <li>
                      Wash Care : Machine Wash only, Dry in Shade, Wash Inside
                      Out
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Payment Policy</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  <ul>
                    <li>
                      After placing your order, Payment scanner or UPI id will
                      be sent you on what's app, After completing the Payment
                      kindly share the screenshot of the Payment and your order
                      will be processed automatically.
                    </li>
                    <li>
                      If any failed transactions occurred your money will be
                      refunded within 3-4 business days
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Shipping info</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  <ul>
                    <li>Orders are processed within 1-3 business days.</li>
                    <li>
                      We use various courier agents for shipping. Tracking
                      information is provided via SMS/Whatsapp once the product
                      is dispatched.
                    </li>
                    <li>Orders are delivered within 3-4 business days.</li>
                    <li>
                      Customers are responsible for accurate shipping
                      information.
                    </li>
                    <li>
                      Shipping costs are calculated based on destination and
                      package weight.
                    </li>
                    <li>
                      For undeliverable packages, customers may incur return
                      shipping fees.
                    </li>
                    <li>Contact us for tracking issues or inquiries.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Return and Refund</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  We'll take the tshirt back in case there is any quality issue
                  with either the print, or the tshirt. You need to notify us
                  within 1 days of receiving your order. Incase of sizing
                  issues, there is no return/refund. Our tshirts are printed on
                  demand, and if there is a return for size issues, it is
                  practically dead stock to us.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <Bestseller />
    </>
  );
};

export default ProductDetail;
