import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://shafin-backend.onrender.com";

// const BASE_URL= "http://localhost:8000";

const Createtestimonial = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await axios.post(`${BASE_URL}/api/v1/createtestmonial`, { name, review });
      console.log(result);
     
      navigate("/home");
    } catch (error) {
      setError('Failed to submit your testimonial. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center login">
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="grid-title">Share Your Experience</h2>
          {error && <p className="text-danger">{error}</p>}
          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              required
              placeholder="Enter name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Feel free to write your review</label>
            <input
              type="text"
              required
              placeholder="Enter review"
              className="form-control"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <button className="btn btn-success" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createtestimonial;
