import React, { useEffect, useState } from "react";
import "./Testimonial.css"; // Ensure this is the correct path
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL="http://shafin-8q7w.onrender.com"
const Testamonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/api/v1/getTestimonial`);
        const sortedList = result.data.testimonial.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTestimonials(sortedList);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
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

  return (
    <>
      <h1 className="headers">Testimonials</h1>

      <div className="slider-container">
        {testimonials.length > 0 ? (
          <div className="card" key={testimonials[currentIndex].id}>
            <img
              className="profile-pic"
              src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
              alt="Profile"
            />
            <div>
              <h4 className="cust-name">{testimonials[currentIndex].name}</h4>
              <p className="cust-profession">Customer from Zculture</p>
              <p className="cust-profession-review">{`"${testimonials[currentIndex].review}"`}</p>
            </div>
          </div>
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>
      <div className="navigation">
        <button onClick={prevTestimonial} className="nav-button"> &#10094;</button>
        <button onClick={nextTestimonial} className="nav-button"> &#10095;</button>
        <Link to="/createtestimonial" className="createreview">Write Review</Link>
      </div>
     
    </>
  );
};

export default Testamonial;
