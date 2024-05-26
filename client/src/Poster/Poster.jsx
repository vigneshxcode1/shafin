
import { useEffect, useState } from "react";
import axios from "axios";
import "../componets/Product/Product.css"
import Navbar from "../componets/Navbar/Navbar"
import { useNavigate } from "react-router-dom";



const BASE_URL = "http://localhost:8000";

function GridExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const res = await axios.get(`${BASE_URL}/api/v1/products?category=posters`);

        const sortedProducts = res.data.product.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

        const firstFourProducts = sortedProducts.slice(0, 4);
        setProducts(firstFourProducts);
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
    <Navbar/>
    <br></br>
        <div className="containers">
           <div className="main-box">
            <h2 className="title-oversizes1">TRENDING POSTERS COLLECTIONS</h2>
            <br></br>
            {products.map((product) => (
            <div className="products" key={product._id}>
              {product.images && product.images.length > 0 ? (
                product.images.map((image, index) => (
                  <img  className="img-products" onClick={() => navigate(`/products/${product._id}`)}
                    key={index}
                    src={`${BASE_URL}${image.image}`}
                    alt={`${product.name} image ${index}`}
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            <p className="title-oversized">{product.name}</p>
            <p className="title-oversized">From at RS:{product.price}</p>
             
            </div>
             
           
          ))}
         </div>
         </div>
    </>
  );
}

export default GridExample
