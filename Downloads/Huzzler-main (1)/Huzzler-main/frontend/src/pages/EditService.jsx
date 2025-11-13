


// import React, { useState } from "react";

// export default function EditService() {
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




import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditService() {
  const { id } = useParams(); // get service id from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    deliveryDays: "",
    skills: [],
    tools: [],
    requirements: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch existing service data
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/service/id/${id}`);
        if (!res.ok) throw new Error("Failed to fetch service details");
        const data = await res.json();

        setFormData({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "",
          price: data.price || "",
          deliveryDays: data.deliveryDays || "",
          skills: data.skills || [],
          tools: data.tools || [],
          requirements: data.requirements || "",
        });

        setLoading(false);
      } catch (err) {
        console.error("Fetch service error:", err);
      }
    };

    fetchService();
  }, [id]);

  // ✅ Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit (update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/service/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          skills:
            typeof formData.skills === "string"
              ? formData.skills.split(",").map((s) => s.trim())
              : formData.skills,
          tools:
            typeof formData.tools === "string"
              ? formData.tools.split(",").map((t) => t.trim())
              : formData.tools,
        }),
      });

      if (res.ok) {
        alert("✅ Service updated successfully!");
        navigate("/service");
      } else {
        alert("❌ Failed to update service!");
      }
    } catch (err) {
      console.error("Update service error:", err);
      alert("Server error");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading service details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-sm p-8 border border-gray-200">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Edit Your Service</h2>
          <div className="mt-2 flex gap-6 border-b border-gray-200 pb-2">
            <button className="font-medium text-gray-900 border-b-2 border-black pb-1">
              Work
            </button>
            <button className="text-gray-500 hover:text-gray-800">24 hour</button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Service Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your service title"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your service"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Category / Price / Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-gray-800 font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Design, Video Editing"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="₹500"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Delivery Days
              </label>
              <input
                type="number"
                name="deliveryDays"
                value={formData.deliveryDays}
                onChange={handleChange}
                placeholder="7"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={Array.isArray(formData.skills) ? formData.skills.join(", ") : formData.skills}
              onChange={handleChange}
              placeholder="React, Node.js, Figma"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Tools */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">Tools</label>
            <input
              type="text"
              name="tools"
              value={Array.isArray(formData.tools) ? formData.tools.join(", ") : formData.tools}
              onChange={handleChange}
              placeholder="Adobe XD, VS Code"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Client Requirements */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Client Requirements (Optional)
            </label>
            <textarea
              name="requirements"
              rows="4"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Explain what details you need from the client"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/service")}
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
