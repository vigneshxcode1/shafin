// import React, { useState } from "react";

// export default function AddService() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     deliveryDays: "",
//     skills: "",
//     tools: "",
//     requirements: "",
//   });

//   const [previewFiles, setPreviewFiles] = useState([]);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // 📂 Handle file uploads with size validation
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = [];
//     let errorMsg = "";

//     files.forEach((file) => {
//       if (file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
//         validFiles.push(file);
//       } else if (file.type.startsWith("video/") && file.size <= 20 * 1024 * 1024) {
//         validFiles.push(file);
//       } else {
//         errorMsg = `❌ ${
//           file.name
//         } exceeds allowed size. (Images ≤ 5MB, Videos ≤ 20MB)`;
//       }
//     });

//     if (errorMsg) {
//       setError(errorMsg);
//       setTimeout(() => setError(""), 4000);
//     } else {
//       setError("");
//     }

//     setPreviewFiles(validFiles);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     console.log("Files:", previewFiles);
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex justify-center py-10 px-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-800">Your Service</h2>
//           <div className="flex items-center gap-2 text-sm text-gray-500">
//             <span className="font-medium text-black">Work</span>
//             <span>|</span>
//             <span>24 hour</span>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Service Title */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">
//               Service Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="e.g. Logo Design That Pops and Defines Your Brand"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows="4"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Describe your service and showcase your uniqueness"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Category, Price, Delivery Days */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//               >
//                 <option value="">Select a category</option>
//                 <option>Design</option>
//                 <option>Development</option>
//                 <option>Writing</option>
//                 <option>Marketing</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="$25"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Delivery Days
//               </label>
//               <input
//                 type="number"
//                 name="deliveryDays"
//                 value={formData.deliveryDays}
//                 onChange={handleChange}
//                 placeholder="0"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Skills & Tools */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Skills (suggested for you)
//               </label>
//               <input
//                 type="text"
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//                 placeholder="Add Skills"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Tools
//               </label>
//               <input
//                 type="text"
//                 name="tools"
//                 value={formData.tools}
//                 onChange={handleChange}
//                 placeholder="Add Tools"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Sample Project Upload */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">
//               Sample Project
//             </label>

//             <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
//               <p className="text-gray-500 text-sm mb-2">
//                 Upload images (max 5MB) or videos (max 20MB)
//               </p>

//               <input
//                 type="file"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="fileUpload"
//               />
//               <label
//                 htmlFor="fileUpload"
//                 className="cursor-pointer inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg"
//               >
//                 Choose Files
//               </label>

//               {/* Error Message */}
//               {error && (
//                 <p className="text-red-500 text-sm mt-2">{error}</p>
//               )}

//               {/* Preview */}
//               {previewFiles.length > 0 && (
//                 <div className="flex flex-wrap justify-center gap-4 mt-4">
//                   {previewFiles.map((file, idx) =>
//                     file.type.startsWith("image/") ? (
//                       <img
//                         key={idx}
//                         src={URL.createObjectURL(file)}
//                         alt="preview"
//                         className="w-24 h-24 object-cover rounded-lg border"
//                       />
//                     ) : (
//                       <video
//                         key={idx}
//                         src={URL.createObjectURL(file)}
//                         className="w-32 h-24 rounded-lg border"
//                         controls
//                       />
//                     )
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Client Requirements */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">
//               Client Requirements (Optional)
//             </label>
//             <textarea
//               name="requirements"
//               rows="3"
//               value={formData.requirements}
//               onChange={handleChange}
//               placeholder="Describe what you need and specific details"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               className="px-5 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }































// import React, { useState } from "react";
// import { Plus, MoreHorizontal } from "lucide-react";

// export default function Service() {
//   const [activeTab, setActiveTab] = useState("Work");

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
//       {/* 🔹 Header */}
//       <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
//         <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
//         <div className="flex items-center gap-4 text-gray-600">
//           <i className="ri-notification-3-line text-xl cursor-pointer"></i>
//           <i className="ri-chat-3-line text-xl cursor-pointer"></i>
//           <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//         </div>
//       </header>

//       {/* 🔸 Content */}
//       <main className="flex flex-col items-center flex-1 py-10 px-6">
//         <div className="w-full max-w-4xl">
//           {/* Title */}
//           <h2 className="text-lg font-semibold mb-4">Your Service</h2>

//           {/* Tabs */}
//           <div className="flex gap-8 mb-6 border-b border-gray-200">
//             {["Work", "24 hour"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`pb-2 text-sm font-medium ${
//                   activeTab === tab
//                     ? "border-b-2 border-black text-black"
//                     : "text-gray-500 hover:text-black"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Add Service Box */}
//           <div className="bg-[#FFFFE0] border border-yellow-300 rounded-md p-4 flex items-center gap-3 mb-8 cursor-pointer hover:bg-yellow-100 transition">
//             <div className="bg-yellow-400 rounded-full p-1">
//               <Plus size={20} className="text-black" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-sm">Add Service</h3>
//               <p className="text-xs text-gray-700">
//                 Adding a clear, standout service listing helps potential clients instantly
//                 understand what you offer.
//               </p>
//             </div>
//           </div>

//           {/* Service Card */}
//           <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex gap-4 items-start hover:shadow-md transition">
//             <img
//               src="https://images.unsplash.com/photo-1581092334538-297c3f2b5e4b?auto=format&fit=crop&w=600&q=60"
//               alt="Service"
//               className="w-40 h-28 object-cover rounded-md"
//             />

//             <div className="flex-1">
//               <div className="flex justify-between items-start">
//                 <h3 className="font-semibold text-sm sm:text-base">
//                   You will get Professional Video Editor/Editing Service
//                 </h3>
//                 <MoreHorizontal size={18} className="text-gray-500 cursor-pointer" />
//               </div>

//               <div className="flex items-center gap-3 mt-2 text-gray-700 text-sm">
//                 <p>₹ 500</p>
//                 <span>•</span>
//                 <p>7 Days</p>
//               </div>

//               <div className="flex flex-wrap gap-2 mt-3">
//                 {[
//                   "Video Editing",
//                   "Color Grading",
//                   "Audio Editing",
//                   "Adobe Premiere Pro",
//                   "Adobe After Effects",
//                   "Camtasia",
//                 ].map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col justify-center">
//               <button className="bg-yellow-300 text-black text-xs px-3 py-1 rounded-md font-medium hover:bg-yellow-400 transition">
//                 View more
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


















































// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft, Edit3 } from "lucide-react";

// export default function ServiceView() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
//       {/* 🔸 Header */}
//       <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <ArrowLeft
//             className="cursor-pointer hover:text-gray-700"
//             onClick={() => navigate(-1)}
//           />
//           <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
//         </div>

//         <div className="flex items-center gap-4">
//           <i className="ri-notification-3-line text-xl cursor-pointer text-gray-600"></i>
//           <i className="ri-chat-3-line text-xl cursor-pointer text-gray-600"></i>
//           <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//         </div>
//       </header>

//       {/* 🔹 Main Content */}
//       <main className="flex flex-col items-center flex-1 py-10 px-6">
//         <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* 🟡 Left Section */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-semibold mb-4">
//               You will get Professional Video Editor/Editing Service
//             </h2>

//             <img
//               src="/images/video-editing.jpg"
//               alt="Video Editing"
//               className="w-full rounded-lg mb-6"
//             />

//             {/* About Service */}
//             <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
//               <h3 className="text-lg font-semibold mb-2">
//                 About the service
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 As an experienced video editor, I transform raw footage into
//                 stunning narratives. Whether it’s promotional videos, social
//                 media clips, or event highlights, I tailor each project to your
//                 unique style and needs.
//               </p>
//             </div>

//             {/* Client Requirements */}
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h3 className="text-lg font-semibold mb-2">
//                 Client Requirements
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Tell me about the goals of your project, the style you’re aiming
//                 for, and any assets or materials you’d like me to include—like
//                 footage, music, or logos. This helps me align my work with your
//                 vision.
//               </p>
//             </div>
//           </div>

//           {/* 🟢 Right Section */}
//           <div>
//             <div className="bg-white rounded-lg p-6 shadow-sm relative">
//               <button
//                 onClick={() => navigate("/addservice")}
//                 className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
//               >
//                 <Edit3 size={16} /> Edit Service
//               </button>

//               <h3 className="text-lg font-semibold mb-4">Service Details</h3>

//               <div className="flex justify-between text-sm text-gray-700 mb-3">
//                 <p>Price</p>
//                 <p className="font-medium">₹500</p>
//               </div>

//               <div className="flex justify-between text-sm text-gray-700 mb-3">
//                 <p>Delivery Days</p>
//                 <p className="font-medium">7 Days</p>
//               </div>

//               <div className="mb-3">
//                 <p className="text-sm text-gray-700 mb-1">Category</p>
//                 <p className="font-medium text-sm">Audio & Video</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-700 mb-2">Skills & Tools</p>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Video Editing",
//                     "Color Grading",
//                     "Audio Editing",
//                     "Adobe Premiere Pro",
//                     "Adobe After Effects",
//                     "Camtasia",
//                   ].map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md border border-gray-200"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


























// import React, { useState } from "react";

// export default function YourService() {
//   const [service, setService] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     deliveryDays: "",
//     skills: "",
//     projectUrl: "",
//     tools: "",
//     clientRequirements: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setService({ ...service, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Service Data:", service);
//     alert("Service saved successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-start py-10">
//       <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-semibold mb-6">Your Service</h2>

//         {/* Tabs */}
//         <div className="flex gap-6 border-b mb-8">
//           <button className="pb-2 border-b-2 border-yellow-400 font-medium text-gray-800">
//             Work
//           </button>
//           <button className="pb-2 text-gray-500 hover:text-gray-800">
//             24 hour
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Service Title */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Service Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               placeholder="You will get Professional Video Editor/Editing Service"
//               value={service.title}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows="4"
//               placeholder="Describe your service..."
//               value={service.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
//             ></textarea>
//           </div>

//           {/* Category, Price, Delivery Days */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={service.category}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//               >
//                 <option value="">Select category</option>
//                 <option>Audio & Video</option>
//                 <option>Design</option>
//                 <option>Writing</option>
//                 <option>Development</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Price (₹)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={service.price}
//                 onChange={handleChange}
//                 placeholder="5000"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Delivery Days
//               </label>
//               <input
//                 type="number"
//                 name="deliveryDays"
//                 value={service.deliveryDays}
//                 onChange={handleChange}
//                 placeholder="7"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//               />
//             </div>
//           </div>

//           {/* Skills & Project Gallery */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Skills (Suggested)
//               </label>
//               <input
//                 type="text"
//                 name="skills"
//                 value={service.skills}
//                 onChange={handleChange}
//                 placeholder="Video Editing, Color Grading, Audio Editing"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Create a Project Gallery
//               </label>
//               <input
//                 type="text"
//                 name="projectUrl"
//                 value={service.projectUrl}
//                 onChange={handleChange}
//                 placeholder="Project URL"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//               />
//             </div>
//           </div>

//           {/* Tools */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Tools
//             </label>
//             <input
//               type="text"
//               name="tools"
//               value={service.tools}
//               onChange={handleChange}
//               placeholder="Adobe Premiere Pro, After Effects"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Client Requirements */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Client Requirements (Optional)
//             </label>
//             <textarea
//               name="clientRequirements"
//               rows="3"
//               value={service.clientRequirements}
//               onChange={handleChange}
//               placeholder="Tell me about the goals of your project..."
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
//             ></textarea>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-4 pt-4">
//             <button
//               type="button"
//               onClick={() =>
//                 setService({
//                   title: "",
//                   description: "",
//                   category: "",
//                   price: "",
//                   deliveryDays: "",
//                   skills: "",
//                   projectUrl: "",
//                   tools: "",
//                   clientRequirements: "",
//                 })
//               }
//               className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




































// import React from "react";

// export default function ServiceView() {
//   const service = {
//     title: "You will get Professional Video Editor/Editing Service",
//     price: 500,
//     deliveryDays: 7,
//     category: "Audio & Video",
//     skills: ["Video Editing", "Color Grading", "Audio Editing"],
//     tools: ["Adobe Premiere Pro", "Adobe After Effects"],
//     description:
//       "As an experienced video editor, I transform raw footage into stunning narratives. Whether it's promotional videos, social media clips, or event highlights, I tailor each project to your unique style and needs.",
//     clientRequirements:
//       "Tell me about the goals of your project, the style you're aiming for, and any assets or materials you'd like me to include—like footage, music, or logos. This helps me align my work with your vision.",
//     image: "", // If empty, default image will be shown
//   };

//   // ✅ Default fallback image
//   const defaultImage =
//     "https://via.placeholder.com/800x500.png?text=No+Image+Available";

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10 px-4">
//       <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-8">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row gap-10 items-start">
//           {/* Left side: title + image */}
//           <div className="flex-1">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               {service.title}
//             </h2>
//             <img
//               src={service.image || defaultImage}
//               alt="Service"
//               className="rounded-xl w-full object-cover h-64"
//             />
//           </div>

//           {/* Right side: details card */}
//           <div className="w-full lg:w-1/3 bg-gray-50 border border-gray-200 rounded-xl p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Service Details
//               </h3>
//               <button className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
//                 Edit Service
//               </button>
//             </div>

//             <div className="space-y-3 text-sm text-gray-700">
//               <div className="flex justify-between">
//                 <span>Price</span>
//                 <span className="font-medium">₹ {service.price}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery Days</span>
//                 <span className="font-medium">{service.deliveryDays} Days</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Category</span>
//                 <span className="font-medium">{service.category}</span>
//               </div>
//             </div>

//             <div className="mt-5">
//               <p className="text-sm text-gray-700 font-medium mb-2">
//                 Skills & Tools
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {service.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//                 {service.tools.map((tool, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-10 space-y-6">
//           <div>
//             <h4 className="text-lg font-semibold text-gray-900 mb-2">
//               About the service
//             </h4>
//             <p className="text-gray-700 leading-relaxed">
//               {service.description}
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-gray-900 mb-2">
//               Client Requirements
//             </h4>
//             <p className="text-gray-700 leading-relaxed">
//               {service.clientRequirements}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";

// export default function YourService() {
//   const [formData, setFormData] = useState({
//     title: "You will get Professional Video Editor/Editing Service",
//     description:
//       "As an experienced video editor, I transform raw footage into stunning narratives. Whether it's promotional videos, social media clips, or event highlights, I tailor each project to your unique style and needs.",
//     category: "Audio & Video",
//     price: "₹500",
//     deliveryDays: "7",
//     skills: ["Video Editing", "Color Grading", "Audio Editing"],
//     tools: ["Adobe Premiere Pro", "Adobe After Effects"],
//     projectUrl: "",
//     clientRequirements:
//       "Tell me about the goals of your project, the style you're aiming for, and any assets or materials you'd like me to include—like footage, music, or logos. This helps me align my work with your vision.",
//   });

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10 px-4">
//       <div className="bg-white w-full max-w-5xl rounded-xl shadow-sm p-8 border border-gray-200">
//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-900">Your Service</h2>
//           <div className="mt-2 flex gap-6 border-b border-gray-200 pb-2">
//             <button className="font-medium text-gray-900 border-b-2 border-black pb-1">
//               Work
//             </button>
//             <button className="text-gray-500 hover:text-gray-800">24 hour</button>
//           </div>
//         </div>

//         {/* Form */}
//         <form className="space-y-6">
//           {/* Service Title */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">
//               Service Title
//             </label>
//             <input
//               type="text"
//               value={formData.title}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               rows="4"
//               value={formData.description}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Category / Price / Delivery Days */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             <div>
//               <label className="block text-gray-800 font-medium mb-2">
//                 Category
//               </label>
//               <input
//                 type="text"
//                 value={formData.category}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Price</label>
//               <input
//                 type="text"
//                 value={formData.price}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">
//                 Delivery Days
//               </label>
//               <input
//                 type="number"
//                 value={formData.deliveryDays}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Skills and Project Gallery */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">
//               Skills (suggested for you)
//             </label>
//             <div className="flex flex-wrap gap-2 mb-3">
//               {formData.skills.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm text-gray-700"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             <input
//               type="text"
//               placeholder="Project URL"
//               value={formData.projectUrl}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Tools */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">Tools</label>
//             <div className="flex flex-wrap gap-2">
//               {formData.tools.map((tool, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm text-gray-700"
//                 >
//                   {tool}
//                 </span>
//               ))}
//             </div>
//             <p className="text-sm text-gray-500 mt-1">0/75</p>
//           </div>

//           {/* Client Requirements */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">
//               Client Requirements (Optional)
//             </label>
//             <textarea
//               rows="4"
//               value={formData.clientRequirements}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }











import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deliveryDays: "",
    skills: "",
    tools: "",
    requirements: "",
  });

  const [previewFiles, setPreviewFiles] = useState([]);
  const [error, setError] = useState("");

  // 🧩 Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🧩 Handle file upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    let errorMsg = "";

    files.forEach((file) => {
      if (file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
        validFiles.push(file);
      } else if (file.type.startsWith("video/") && file.size <= 20 * 1024 * 1024) {
        validFiles.push(file);
      } else {
        errorMsg = `❌ ${file.name} exceeds size limit (5MB for images / 20MB for videos).`;
      }
    });

    if (errorMsg) {
      setError(errorMsg);
      setTimeout(() => setError(""), 4000);
    } else {
      setError("");
    }

    setPreviewFiles(validFiles);
  };

  // 🧩 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("userEmail");
    if (!email) return alert("User not logged in!");

    const serviceData = {
      ...formData,
      userEmail: email,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      tools: formData.tools
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      images: previewFiles.map((file) => URL.createObjectURL(file)), // temporary preview (later AWS S3)
    };

    try {
      const res = await fetch("http://localhost:5000/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceData),
      });

      if (res.ok) {
        alert("✅ Service saved successfully!");
        navigate("/service");
      } else {
        alert("❌ Failed to save service");
      }
    } catch (err) {
      console.error("Save service error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Add Your Service</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 🟡 Title */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Service Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Logo Design That Pops"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* 🟡 Description */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your service"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* 🟡 Category, Price, Delivery Days */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select category</option>
                <option>Design</option>
                <option>Development</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="₹500"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Delivery Days
              </label>
              <input
                type="number"
                name="deliveryDays"
                value={formData.deliveryDays}
                onChange={handleChange}
                placeholder="7"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* 🟡 Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, Node.js"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Tools
              </label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                placeholder="VS Code, Figma"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* 🟡 File upload */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Sample Project
            </label>
            <input type="file" multiple onChange={handleFileChange} />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* 🟡 Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/service")}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
