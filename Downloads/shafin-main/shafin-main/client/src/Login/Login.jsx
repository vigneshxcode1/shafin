import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

const BASE_URL = "https://shafin-backend.onrender.com";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/api/v1/login`, { email, password })
      .then((response) => {
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
      .catch((err) => {
        let errorMessage = "An error occurred. Please try again.";
        if (err.response) {
          errorMessage = `Error: ${err.response.data.message}`;
          console.error("Response error:", err.response.data);
        } else if (err.request) {
          errorMessage = "No response from server. Please try again later.";
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

  
  const googlesigin = async () => {
    const provider = new GoogleAuthProvider();
   
    signInWithPopup(auth, provider).then((result) => {
      if (result.user.email == "vvigneshwaran518@gmail.com") {
        navigate("/dashbroad");
      } else {
        navigate("/profile");
      }
    });
  };

  return (
    <div className="container mt-5">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <p className="login-title">Login Portal</p>
            </div>
            <div className="card-body">
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
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>

              <br />

            <p className="loginmsg">NEW USER QUICK LOGIN USING GOOGLE SIGIN</p>

              <button className="googlebtn" onClick={googlesigin} variant="primary" type="submit">
                google signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
