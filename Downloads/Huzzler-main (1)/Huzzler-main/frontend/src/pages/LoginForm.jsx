
// import { useState } from 'react';
// import API from '../api/client';
// import { useSearchParams, useNavigate } from 'react-router-dom';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const nav = useNavigate();
//   const [searchParams] = useSearchParams();
//   const role = searchParams.get('role');

//   const submit = async () => {
//     try {
//       const res = await API.post('/auth/login', { email, password });

//       // ✅ Save data
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       // ✅ Add this line (VERY IMPORTANT)
//       // localStorage.setItem('userEmail', res.data.user.email);
//       localStorage.setItem("userEmail", user.email);


//       // ✅ Redirect
//       if (res.data.user.role === 'freelancer') nav('/dashboard');
//       else nav('/dashboard');
//     } catch (e) {
//       console.error('Login error:', e);
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto py-10">
//       <h3 className="text-lg mb-4">{role} Login</h3>

//       <input
//         className="p-2 border mb-2 w-full"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />

//       <input
//         className="p-2 border mb-4 w-full"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         type="password"
//       />

//       <button
//         className="p-2 bg-blue-600 text-white w-full"
//         onClick={submit}
//       >
//         Login
//       </button>

//       <div className="mt-4 text-center">
//         <a href="http://localhost:5000/api/auth/google">
//           <button
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '8px',
//               backgroundColor: 'white',
//               color: 'black',
//               border: '1px solid #ddd',
//               padding: '8px 12px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               width: '100%',
//             }}
//           >
//             <img
//               src="https://developers.google.com/identity/images/g-logo.png"
//               alt="Google"
//               style={{ width: '20px', height: '20px' }}
//             />
//             Sign in with Google
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import API from "../api/client";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const submit = async () => {
    if (!email || !password) {
      return alert("Please enter email and password!");
    }

    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });

      // ✅ Check if backend returned a user object
      if (!res.data || !res.data.user) {
        throw new Error("Invalid response from server");
      }

      // ✅ Store data safely
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("userEmail", res.data.user.email);

      // ✅ Navigate based on role
      if (res.data.user.role === "freelancer") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h3 className="text-lg mb-4">{role ? `${role} Login` : "Login"}</h3>

      <input
        className="p-2 border mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        className="p-2 border mb-4 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />

      <button
        className={`p-2 w-full rounded-md text-white ${
          loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={loading}
        onClick={submit}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className="mt-4 text-center">
        <a href="http://localhost:5000/api/auth/google">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ddd",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              margin: "0 auto",
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              style={{ width: "20px", height: "20px" }}
            />
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
}
