import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const BASE_URL = "https://shafin-8q7w.onrender.com";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/v1/login`, { email, password })
      .then(response => {
        if (response.data.success === "success") {
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          if (response.data.role === "admin") {
            navigate("/dashbroad");
          } else if (response.data.role === "user") {
            navigate("/");
          } else {
            navigate("/register");
          }
        } else {
          setError(response.data.message);
          toast.error(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(err => {
        let errorMessage = 'An error occurred. Please try again.';
        if (err.response) {
          errorMessage = `Error: ${err.response.data.message}`;
          console.error("Response error:", err.response.data);
        } else if (err.request) {
          errorMessage = 'No response from server. Please try again later.';
          console.error("No response:", err.request);
        } else {
          errorMessage = `Error: ${err.message}`;
          console.error("Error:", err.message);
        }
        setError(errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="login-container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-card">
            <div className="login-card-header">
              <h3>Login Portal</h3>
            </div>
            <div className="login-card-body">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <Button variant="primary" type="submit" className="login-button">
                  LOGIN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
