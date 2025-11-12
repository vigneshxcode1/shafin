import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../componets/Navbar/Navbar";
import loadingimg from "../componets/images/stickgif.gif";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InfiniteScroll from "react-infinite-scroll-component";

const BASE_URL = "https://shafin-backend.onrender.com";

// const BASE_URL = "http://65.2.6.251:8000";

function GridExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
 

    fetchProducts();

  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/products`);

      const sortedProducts = res.data.product.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

      setProducts(sortedProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <>
        <img className="loading-image" src={loadingimg}></img>
        <p className="loading">Loading....</p>
      </>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
      <Navbar />
     
      {/* <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="search tees"
          className="search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="searchbtn">Search</Button>
      </Form> */}
      <h1 className="grid-title">Zculture Collections</h1>
      <br />

      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={
          <div className="loading-container">
            <img className="loading-image" src={loadingimg} alt="Loading..." />
           
          </div>
        }
        endMessage={<p className="end-message">No more products to display</p>}
        height={500}
      >
        <div className="containers">
          <div className="grid">
            {products
              .filter((item) => {
                return search.toLowerCase() == ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((product) => (
                <div className="product-card" key={product._id}>
                  {product.images && product.images.length > 0 ? (
                    <img
                      className="product-image"
                      onClick={() => navigate(`/products/${product._id}`)}
                      src={product.images[0]}
                      alt={`${product.name} first image`}
                    />
                  ) : (
                    <p>No images available</p>
                  )}
                  <p className="product-title">{product.name}</p>
                  <p className="title-oversized-cut">Rs:₹{product.cutprice}</p>
                  <p className="product-title">From RS: {product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default GridExample;
