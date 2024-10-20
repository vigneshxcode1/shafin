import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productDetails.css";
import cartimg from "../../componets/images/addcartimg.gif";
import loadingimg from "../../componets/images/animiloading.gif";
import Navbar from "../Navbar/Navbar.jsx";
import { addCartItem } from "../../localStorageHelpers.jsx";
import Accordion from "react-bootstrap/Accordion";
import Bestseller from '../../componets/Product/slidercard/Bestseller.jsx'
import cartimgs from "../../componets/images/icons-cart.gif";
const BASE_URL = "https://shafin-8q7w.onrender.com";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("m");
  // const [showFullDescription, setShowFullDescription] = useState(false);
  const [current, setCurrent] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
        setProduct(data.product);
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
      toast.success("check your cart");
    } catch (err) {
      toast.error("Failed to add product to cart. Please try again later.");
    }
  };

  // const toggleDescription = () => {
  //   setShowFullDescription((prevState) => !prevState);
  // };

  const nextSlide = () => {
    setCurrent(current === product.images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? product.images.length - 1 : current - 1);
  };

  if (loading)
    return(
  <>
     <img className="loading-image" src={loadingimg} alt="Loading..." />
        <p className="loading">Loading...</p>
  </>)
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
            <p className="cmpy">zculture...</p>
            <p id="product-detail-name">{product.category}</p>

            <div className="prices">
              <span className="product-cutprice">Rs:₹{product.cutprice}</span>
              <span className="product-price">Rs:₹{product.price} </span>
              <span className="sale">sale</span>
            </div>
            <p className="freeshipping">FREE SHIPPING ON PREPAID</p>
            <br></br>
            {/* <p className="product-detail-seller">Seller: {product.seller}</p> */}
            {/* <p className="product-detail-price">Stock: {product.stock}</p> */}
            <p className="product-detail-categorys">
              Category: {product.category}
            </p>
            <br></br>
            <div className="size-container-size">
              <label htmlFor="size">Select Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
              <Link to={"/sizechart"} className="sizechart">
                sizechart
              </Link>
            </div>

            <div className="quantity-container">
              <span className="qtnbtn">Quantity</span>
              <button
                id="quabtity-btn-left"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="quantitys">{quantity}</span>
              <button
                id="quabtity-btn-right"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <br></br>
            <button className="addtocart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>

          <div className="desandshop">
            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  {product.describe}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Return and Refund</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  We'll take the tshirt back in case there is any quality issue
                  with either the print, or the tshirt. You need to notify us
                  within 3 days of recieving your order. Incase of sizing
                  issues, there is no return/refund. Our tshirts are printed on
                  demand, and if there is a return for size issues, it is
                  practically dead stock to us.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="description">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Shipping info</Accordion.Header>
                <Accordion.Body className="dec-detail">
                  <ul>
                    <li>Orders are processed within 1-3 business days.</li>
                    <li>Orders are delivered within 7-10 business days.</li>
                    <li>
                      Customers are responsible for accurate shipping
                      information.
                    </li>
                    <li>
                      For undeliverable packages, customers may incur return shipping fees.
                    </li>
                    <li>Contact us for tracking issues or inquiries.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* <div className="shippinginfo">
            <h1 className="shipping"></h1>
            <ul>
              <li>Orders are processed within 1-3 business days.</li>
              <li>Orders are delivered within 7-10 business days.</li>
              <li>
                Customers are responsible for accurate shipping information.
              </li>
              <li>
                For undeliverable packages, customers may incur return shipping
                fees.
              </li>
              <li>Contact us for tracking issues or inquiries.</li>
            </ul>
          </div> */}
          <p className="product-detail-created"></p>
        </div>

       
      </div>

      <Bestseller />
   
    </>
  );
};

export default ProductDetail;
