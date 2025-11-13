// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function EditService() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     deliveryDays: "",
//     skills: [],
//     tools: [],
//     requirements: "",
//   });

//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch service details by ID
//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/service/id/${id}`);
//         const data = await res.json();
//         setFormData({
//           title: data.title || "",
//           description: data.description || "",
//           category: data.category || "",
//           price: data.price || "",
//           deliveryDays: data.deliveryDays || "",
//           skills: data.skills || [],
//           tools: data.tools || [],
//           requirements: data.requirements || "",
//         });
//         setLoading(false);
//       } catch (err) {
//         console.error("Fetch service error:", err);
//       }
//     };
//     fetchService();
//   }, [id]);

//   // ✅ Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle save/update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`http://localhost:5000/api/service/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         alert("✅ Service updated successfully!");
//         navigate("/service");
//       } else {
//         alert("❌ Failed to update service.");
//       }
//     } catch (err) {
//       console.error("Update service error:", err);
//       alert("Server error");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-500">
//         Loading service details...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10 px-4">
//       <div className="bg-white w-full max-w-5xl rounded-xl shadow-sm p-8 border border-gray-200">
//         {/* Header */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-900">Edit Service</h2>
//           <div className="mt-2 flex gap-6 border-b border-gray-200 pb-2">
//             <button className="font-medium text-gray-900 border-b-2 border-black pb-1">
//               Work
//             </button>
//             <button className="text-gray-500 hover:text-gray-800">24 hour</button>
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">Service Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">Description</label>
//             <textarea
//               name="description"
//               rows="4"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Category / Price / Delivery */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Price</label>
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Delivery Days</label>
//               <input
//                 type="number"
//                 name="deliveryDays"
//                 value={formData.deliveryDays}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">Skills</label>
//             <input
//               type="text"
//               name="skills"
//               value={formData.skills.join(", ")}
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   skills: e.target.value.split(",").map((s) => s.trim()),
//                 }))
//               }
//               placeholder="Video Editing, Color Grading"
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Tools */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">Tools</label>
//             <input
//               type="text"
//               name="tools"
//               value={formData.tools.join(", ")}
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   tools: e.target.value.split(",").map((t) => t.trim()),
//                 }))
//               }
//               placeholder="Adobe Premiere Pro, After Effects"
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Requirements */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-2">
//               Client Requirements (Optional)
//             </label>
//             <textarea
//               name="requirements"
//               rows="4"
//               value={formData.requirements}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={() => navigate("/service")}
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














// import React, { useEffect, useState } from "react";
// import { AlertTriangle, Plus, MoreHorizontal } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Service() {
//   const [activeTab, setActiveTab] = useState("Work");
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchServices = async () => {
//       const email = localStorage.getItem("userEmail");
//       if (!email) return;

//       try {
//         const res = await fetch(`http://localhost:5000/api/service/${email}`);
//         const data = await res.json();
//         setServices(data);
//       } catch (err) {
//         console.error("Fetch services error:", err);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
//       {/* Header */}
//       <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
//         <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
//         <div className="flex items-center gap-4 text-gray-600">
//           <i className="ri-notification-3-line text-xl cursor-pointer"></i>
//           <i className="ri-chat-3-line text-xl cursor-pointer"></i>
//           <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="flex flex-col items-center flex-1 py-10 px-6">
//         <div className="w-full max-w-4xl">
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
//           <div
//             onClick={() => navigate("/add-service")}
//             className="bg-[#FFFFE0] border border-yellow-300 rounded-md p-4 flex items-center gap-3 mb-8 cursor-pointer hover:bg-yellow-100 transition"
//           >
//             <div className="bg-yellow-400 rounded-full p-1">
//               <Plus size={20} className="text-black" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-sm">Add Service</h3>
//               <p className="text-xs text-gray-700">
//                 Adding a clean, standout service listing helps clients understand what you offer.
//               </p>
//             </div>
//           </div>

//           {/* Service Cards */}
//           {services.length === 0 ? (
//             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
//               <AlertTriangle className="text-yellow-500 mb-3 mx-auto" size={45} />
//               <h2 className="font-semibold text-lg mb-2">
//                 It looks like you haven’t added any services yet.
//               </h2>
//               <p className="text-gray-600 text-sm">
//                 Create a service offering to highlight your skills and attract the right clients.
//               </p>
//             </div>
//           ) : (
//             services.map((s) => (
//               <div
//                 key={s._id}
//                 className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex gap-4 items-start hover:shadow-md transition mb-4"
//               >
//                 <img
//                   src={s.images?.[0] || "https://via.placeholder.com/150"}
//                   alt="Service"
//                   className="w-40 h-28 object-cover rounded-md"
//                 />
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-semibold text-sm sm:text-base">{s.title}</h3>
//                     <MoreHorizontal size={18} className="text-gray-500 cursor-pointer" />
//                   </div>

//                   <div className="flex items-center gap-3 mt-2 text-gray-700 text-sm">
//                     <p>₹ {s.price}</p>
//                     <span>•</span>
//                     <p>{s.deliveryDays} Days</p>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {[...(s.skills || []), ...(s.tools || [])].map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-col justify-center">
//                   <button
//                     onClick={() => navigate(`/view-service/${s._id}`)} // ✅ passes service ID
//                     className="bg-yellow-300 text-black text-xs px-3 py-1 rounded-md font-medium hover:bg-yellow-400 transition"
//                   >
//                     View more
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { AlertTriangle, Plus, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const [activeTab, setActiveTab] = useState("Work");
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch all services for logged-in user
  useEffect(() => {
    const fetchServices = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      try {
        const res = await fetch(`http://localhost:5000/api/service/${email}`);
        if (!res.ok) throw new Error("Failed to fetch services");

        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Fetch services error:", err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* 🔹 Header */}
      <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <i className="ri-notification-3-line text-xl cursor-pointer"></i>
          <i className="ri-chat-3-line text-xl cursor-pointer"></i>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* 🔸 Main Section */}
      <main className="flex flex-col items-center flex-1 py-10 px-6">
        <div className="w-full max-w-4xl">
          <h2 className="text-lg font-semibold mb-4">Your Services</h2>

          {/* 🔸 Tabs */}
          <div className="flex gap-8 mb-6 border-b border-gray-200">
            {["Work", "24 hour"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 🔸 Add Service Card */}
          <div
            onClick={() => navigate("/add-service")}
            className="bg-[#FFFFE0] border border-yellow-300 rounded-md p-4 flex items-center gap-3 mb-8 cursor-pointer hover:bg-yellow-100 transition"
          >
            <div className="bg-yellow-400 rounded-full p-1">
              <Plus size={20} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Add Service</h3>
              <p className="text-xs text-gray-700">
                Adding a standout service listing helps clients understand what you offer.
              </p>
            </div>
          </div>

          {/* 🟡 If No Services */}
          {services.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <AlertTriangle className="text-yellow-500 mb-3 mx-auto" size={45} />
              <h2 className="font-semibold text-lg mb-2">
                It looks like you haven’t added any services yet.
              </h2>
              <p className="text-gray-600 text-sm">
                Create a service offering to highlight your skills and attract the right clients.
              </p>
            </div>
          ) : (
            /* 🟢 Show User Services */
            services.map((s) => (
              <div
                key={s._id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex gap-4 items-start hover:shadow-md transition mb-4"
              >
                {/* Thumbnail */}
                <img
                  src={s.images?.[0] || "https://via.placeholder.com/150"}
                  alt="Service"
                  className="w-40 h-28 object-cover rounded-md"
                />

                {/* Info Section */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-sm sm:text-base">{s.title}</h3>
                    <MoreHorizontal size={18} className="text-gray-500 cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-3 mt-2 text-gray-700 text-sm">
                    <p>₹ {s.price}</p>
                    <span>•</span>
                    <p>{s.deliveryDays} Days</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {[...(s.skills || []), ...(s.tools || [])].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View More Button */}
                <div className="flex flex-col justify-center">
                  <button
                    onClick={() => navigate(`/view-service/${s._id}`)}
                    className="bg-yellow-300 text-black text-xs px-3 py-1 rounded-md font-medium hover:bg-yellow-400 transition"
                  >
                    View more
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
