import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Dashbroad from "../../../Dashbroad/Dashbroad.jsx";
import "../../Testimonial/Testimonial.css"; 

const BASE_URL = "https://shafin-backend.onrender.com";


export const Showalltestimonial = () => {
  const [testimonials, setTestimonials] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/getTestimonial`);
        setTestimonials(Array.isArray(res.data.testimonial) ? res.data.testimonial : []); 
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this testimonial?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${BASE_URL}/api/v1/deleteTestimonial/${id}`);
      console.log("Delete response:", response.data);

      // Update local state to remove the deleted testimonial
      setTestimonials(prev => prev.filter(testimonial => testimonial._id !== id));
    } catch (err) {
      console.error("Error deleting testimonial:", err);
    }
  };
  
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
    <div className="testimonial-container">
      <h1 className="testimonial-header">All Reviews</h1>
      <Link to="/dashbroad" className="dashboard-link">Dashboard</Link>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial._id}>
            <p className="testimonial-name">Name: {testimonial.name}</p>
            <span className="testimonial-review">Review: {testimonial.review}</span>
            <div className="testimonial-buttons">
              <button className='delete-btn' onClick={() => handleDelete(testimonial._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showalltestimonial;
