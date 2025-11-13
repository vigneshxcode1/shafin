


import React, { useState } from "react";

export default function YourService() {
  const [formData, setFormData] = useState({
    title: "You will get Professional Video Editor/Editing Service",
    description:
      "As an experienced video editor, I transform raw footage into stunning narratives. Whether it's promotional videos, social media clips, or event highlights, I tailor each project to your unique style and needs.",
    category: "Audio & Video",
    price: "₹500",
    deliveryDays: "7",
    skills: ["Video Editing", "Color Grading", "Audio Editing"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"],
    projectUrl: "",
    clientRequirements:
      "Tell me about the goals of your project, the style you're aiming for, and any assets or materials you'd like me to include—like footage, music, or logos. This helps me align my work with your vision.",
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-sm p-8 border border-gray-200">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Your Service</h2>
          <div className="mt-2 flex gap-6 border-b border-gray-200 pb-2">
            <button className="font-medium text-gray-900 border-b-2 border-black pb-1">
              Work
            </button>
            <button className="text-gray-500 hover:text-gray-800">24 hour</button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Service Title */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Service Title
            </label>
            <input
              type="text"
              value={formData.title}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Description
            </label>
            <textarea
              rows="4"
              value={formData.description}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Category / Price / Delivery Days */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Category
              </label>
              <input
                type="text"
                value={formData.category}
                // className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Price</label>
              <input
                type="text"
                value={formData.price}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Delivery Days
              </label>
              <input
                type="number"
                value={formData.deliveryDays}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Skills and Project Gallery */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Skills (suggested for you)
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <input
              type="text"
              placeholder="Project URL"
              value={formData.projectUrl}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Tools */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">Tools</label>
            <div className="flex flex-wrap gap-2">
              {formData.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm text-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">0/75</p>
          </div>

          {/* Client Requirements */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Client Requirements (Optional)
            </label>
            <textarea
              rows="4"
              value={formData.clientRequirements}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}










// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// import "../styles/Signupstep1.css";

// import Profilepic from "../assets/Profilepic.png"; // if your file is in pages folder

// import facebook from "../assets/facebook.png";


// const Signupstep1 = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="outer-wrapper">
//          <div className="logo-text">LOGO</div>
    

//       <div className="signup-wrapper">
//        <div className="signup-card">

//   <div className="signup-header">

//             <span className="back-symbol">&lt;</span>
//             <h3>Sign up as a freelancer</h3>
//             <p>Let’s get to know you. We promise it’ll be quick.</p>
//           </div>

//           <div className="signup-body">
//             {/* Upload image section */}
//             <div className="image-upload">
//               <label htmlFor="upload">
//                 {image ? (
//                   <img src={image} alt="Preview" className="preview-image" />
//                 ) : (
//                   <div className="upload-placeholder">
//                     <img src={Profilepic} alt="Upload Icon" className="upload-png" />
//                   </div>
//                 )}
//                 <input
//                   type="file"
//                   id="upload"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   hidden
//                 />
//               </label>
              
//             </div>

//             {/* Signup form section */}
//             <div className="form-section">
//               <div className="social-buttons">
//                 <button className="google-btn">
//                   <img
//                     src="https://www.svgrepo.com/show/475656/google-color.svg"
//                     alt="Google"
//                   />
//                   Sign up with Google
//                 </button>
//                 <button className="facebook-btn">
//                   <img src={facebook} alt="Facebook" />
//                   Sign in with Facebook
//                 </button>
//               </div>

//               <div className="name-fields">
//                 <div>
//                   <label htmlFor="firstName">First Name</label>
//                   <input id="firstName" type="text" placeholder="First Name" />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName">Last Name</label>
//                   <input id="lastName" type="text" placeholder="Last Name" />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email">Enter your Email Address</label>
//                 <input id="email" type="email" placeholder="Email Address" />
//               </div>

//               <div>
//                 <label htmlFor="password">Create Password</label>
//                 <div className="password-field">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter Password"
//                   />
//                   {showPassword ? (
//                     <EyeOff onClick={() => setShowPassword(false)} />
//                   ) : (
//                     <Eye onClick={() => setShowPassword(true)} />
//                   )}
//                 </div>
//               </div>

//               <button className="continue-btn">Continue</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signupstep1;

















