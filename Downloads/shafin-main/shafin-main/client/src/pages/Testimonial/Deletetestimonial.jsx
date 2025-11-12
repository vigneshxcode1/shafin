import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dashbroad from "../../Dashbroad/Dashbroad";
import { toast } from "react-toastify";


const BASE_URL = "http://localhost:8000";

// const BASE_URL = "https://shafin-8q7w.onrender.com";

export const Deletedtestimonial= ()=>{
    const [testimonials, setTestimonials] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.delete(`${BASE_URL}/api/v1/deleteTestimonail/${id}`);
        toast.success("successfull created product..", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchProducts(res);
      } catch (err) {
        toast.error("something went wrong...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  if (testimonials.length === 0) {
    return <p>No testimonials available</p>;
  }

  return (
    <div className="main-box">
      <h1> Deleted products in store</h1>
      <Link to={"/dashbroad"} element={<Dashbroad/>}>dashbroad</Link>
      {testimonials.map((testimonial) => (
        <div className="product" key={testimonial._id}>
          {/* <img
            src={`http://localhost:8000/public/Images/${product.images[0].image}`}
            alt={product.name}
          /> */}
          <h3>{testimonial.name}</h3>
          <p>{testimonial.describe}</p>
          <span>${testimonial.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Deletedtestimonial;
