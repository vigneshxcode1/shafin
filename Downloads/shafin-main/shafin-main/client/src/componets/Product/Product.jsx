import "./Product.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loadingimg from "../../componets/images/stickgif.gif"


const BASE_URL = "https://shafin-backend.onrender.com";

function GridExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/products`);

        console.log('API response:', res.data); 
        
        if (res.data && res.data.product) { 
          const sortedProducts = res.data.product.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          const firstFourProducts = sortedProducts.slice(0, 4);
          setProducts(firstFourProducts);
          firstFourProducts.forEach(product => {
            product.images.forEach(image => {
              console.log(`Image URL: ${BASE_URL}${image.image}`);
            });
          });
        } else {
          setError("Invalid response format");
        }
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
       <img className="loading" src={loadingimg}></img>
       <p className="loading">Loading....</p>
      </>
   
    
    )
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="main-box">
       {products.map((product) => (
            <div className="products" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="img-products"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={product.images[0]} 
                  alt={`${product.name} first image`}
                />
              ) : (
                <p>No images available</p>
              )}
        </div>
      ))}
    </div>
  );
}

export default GridExample;
