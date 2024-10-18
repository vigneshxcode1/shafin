
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../componets/Product/Product.css'
import Navbar from "../componets/Navbar/Navbar.jsx"
import loadingimg from "../componets/images/animiloading.gif"



const BASE_URL = "https://shafin-8q7w.onrender.com";

function GridExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const res = await axios.get(`${BASE_URL}/api/v1/products?category=caroversized`);

        const sortedProducts = res.data.product.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

        // const firstFourProducts = sortedProducts.slice(0, 4);
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

  if (loading) {
    return (
      <>
      <img className="loading-image" src={loadingimg} alt="Loading..." />
        <p className="loading">Loading...</p>
    
      </>
    ) 
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available in car collection</p>;
  }

  return (
<>
      <Navbar />

      <h2 className="grid-title">OverSized Collections</h2>
      <br />
      <div className="containers">
        <div className="grid">
          {products.map((product) => (
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

  
    </>
 
   
  );
}

export default GridExample
