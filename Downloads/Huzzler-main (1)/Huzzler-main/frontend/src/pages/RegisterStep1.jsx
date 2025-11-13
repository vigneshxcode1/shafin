// import { useState } from 'react';
// import API from '../api/client';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// export default function RegisterStep1(){
//   const [form,setForm] = useState({ firstName:'', lastName:'', email:'', password:'', avatarUrl:'' });
//   const [loading,setLoading] = useState(false);
//   const nav = useNavigate();
//   const [searchParams] = useSearchParams();
//   const role = searchParams.get('role') || 'freelancer';

//   const handleSubmit = async (e)=>{ e.preventDefault(); setLoading(true);
//     try{
//       await API.post('/auth/register', {...form, role});
//       nav(`/verify-otp?email=${encodeURIComponent(form.email)}`);
//     }catch(err){ alert(err?.response?.data?.message || 'Error'); }finally{setLoading(false)}
//   }

//   return (
//     <div className="max-w-md mx-auto py-10">
//       <h2 className="text-2xl mb-4">Sign up ({role})</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//         <input className="p-2 border" placeholder="First name" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} required />
//         <input className="p-2 border" placeholder="Last name" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} required />
//         <input className="p-2 border" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
//         <input className="p-2 border" placeholder="Password" value={form.password} type="password" onChange={e=>setForm({...form, password:e.target.value})} required />
//         <button className="p-2 bg-blue-600 text-white" type="submit" disabled={loading}>Continue</button>
//         <a href="http://localhost:5000/api/auth/google" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
//          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google"style={{ height: '30px', verticalAlign: 'middle' }}/><span>Sign in with Google</span>
//         </a>
//       </form>
//     </div>
//   )
// }




import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../api/client";

import "../styles/Signupstep1.css";
import Profilepic from "../assets/Profilepic.png";
import facebook from "../assets/facebook.png";

const Signupstep1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatarUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "freelancer";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
      setForm({ ...form, avatarUrl: imgURL });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/auth/register", { ...form, role });
      nav(`/verify-otp?email=${encodeURIComponent(form.email)}`);
    } catch (err) {
      alert(err?.response?.data?.message || "Error while registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="outer-wrapper">
      <div className="logo-text">LOGO</div>

      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="signup-header">
            <span className="back-symbol">&lt;</span>
            <h3>Sign up as a freelancer</h3>
            <p>Let’s get to know you. We promise it’ll be quick.</p>
          </div>

          <form className="signup-body" onSubmit={handleSubmit}>
            {/* Upload image section */}
            <div className="image-upload">
              <label htmlFor="upload">
                {image ? (
                  <img src={image} alt="Preview" className="preview-image" />
                ) : (
                  <div className="upload-placeholder">
                    <img
                      src={Profilepic}
                      alt="Upload Icon"
                      className="upload-png"
                    />
                  </div>
                )}
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>
            </div>

            {/* Signup form section */}
            <div className="form-section">
              <div className="social-buttons">
                <a
                  className="google-btn"
                  href="http://localhost:5000/api/auth/google"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                  />
                  Sign up with Google
                </a>

                <button
                  type="button"
                  className="facebook-btn"
                  onClick={() => alert("Facebook integration coming soon!")}
                >
                  <img src={facebook} alt="Facebook" />
                  Sign in with Facebook
                </button>
              </div>

              <div className="name-fields">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Enter your Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="password">Create Password</label>
                <div className="password-field">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                  {showPassword ? (
                    <EyeOff onClick={() => setShowPassword(false)} />
                  ) : (
                    <Eye onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>

              <button
                className="continue-btn"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signupstep1;
