import React, { useEffect, useState } from "react";
import "./Testimonial.css"; 
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://shafin-backend.onrender.com";

// const BASE_URL= "http://localhost:8000"

const Testamonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/api/v1/getTestimonial`);
        const sortedList = result.data.testimonial.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTestimonials(sortedList);
      } catch (error) {
        setError("check your internet.. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1 className="headers" id="header">Testimonials</h1>
      <h3 className="headerstitle" id="headerstitle">What are customer says..</h3>
      <div className="slider-container" id="testanimimation">
        {testimonials.length > 0 ? (
          <div className="card" key={testimonials[currentIndex].id}>
            <img
              className="profile-pic"
              src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
              alt="Profile"
            />
            <div>
              <h4 className="cust-name">{testimonials[currentIndex].name}</h4>
              <p className="cust-profession">Customer from Zculture..</p>
              <p className="cust-profession-review">{`"${testimonials[currentIndex].review}"`}</p>
            </div>
          </div>
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>

      <div className="navigation">
        <button onClick={prevTestimonial} className="nav-button" aria-label="Previous testimonial"> &#10094;</button>
        <button onClick={nextTestimonial} className="nav-button" aria-label="Next testimonial"> &#10095;</button>
        <Link to="/createtestimonial" className="createreview">Write Review</Link>
      </div>
    </>
  );
};

export default Testamonial;
