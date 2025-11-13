import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";

const CreateService = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const is24Hour = location.pathname.includes("24");

  const [formData, setFormData] = useState({
    serviceTitle: "",
    description: "",
    category: "",
    priceFrom: "",
    priceTo: "",
    deliveryDays: "",
    skills: "",
    tools: "",
    sampleProjects: "",
    clientRequirements: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ClientWork/clientworkCreate",
        {
          ServiceTitle: formData.serviceTitle,
          Des: formData.description,
          Category: formData.category,
          specificDelivery: is24Hour ? "24 hours" : "Work",
          minprice: Number(formData.priceFrom),
          maxprice: Number(formData.priceTo),
          StartDate: !is24Hour ? new Date(formData.startDate).getTime() : null,
          EndDate: !is24Hour ? new Date(formData.endDate).getTime() : null,
          DeliveryDay: !is24Hour ? Number(formData.deliveryDays) : 1,
          Skills: formData.skills.split(",").map((s) => s.trim()),
          tools: formData.tools.split(",").map((t) => t.trim()),
          sample_projects: formData.sampleProjects
            .split(",")
            .map((p) => p.trim()),
          client_des: formData.clientRequirements || "",
        }
      );

      console.log("Client work created:", response.data);
      alert("Client work created successfully!");
      navigate("/dash");
    } catch (error) {
      console.error("Error creating service:", error.response?.data || error);
      alert("Failed to create service. Check console for details.");
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-[250px] fixed h-full bg-white shadow-md z-10">
        <Sidebar />
      </div>

      {/* Form Section */}
      <div className="flex-1 ml-[250px] overflow-y-auto p-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">
            Create Service
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Show what you do — create your service here
          </p>

          {/* Tabs */}
          <div className="flex bg-yellow-100 rounded-full w-fit mb-6 p-1">
            <button
              onClick={() => navigate("/createservice")}
              className={`px-6 py-2 rounded-full font-medium ${
                !is24Hour
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => navigate("/create-service24")}
              className={`px-6 py-2 rounded-full font-medium ${
                is24Hour
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              24 hours
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Service Title */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Service Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="serviceTitle"
                value={formData.serviceTitle}
                onChange={handleChange}
                placeholder="e.g. Logo Design That Pops and Defines Your Brand"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your service and showcase your uniqueness"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Category<span className="text-red-500">*</span>
              </label>
              <textarea
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Add Your Interest Category"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              ></textarea>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Price Range<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  name="priceFrom"
                  value={formData.priceFrom}
                  onChange={handleChange}
                  placeholder="From"
                  className="w-1/2 bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <input
                  type="number"
                  name="priceTo"
                  value={formData.priceTo}
                  onChange={handleChange}
                  placeholder="To"
                  className="w-1/2 bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
            </div>

            {/* Show Start & End Date only for Work */}
            {!is24Hour && (
              <>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3"
                  />
                </div>
              </>
            )}

            {/* Delivery Days (only for Work tab) */}
            {!is24Hour && (
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Delivery Days<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="deliveryDays"
                  value={formData.deliveryDays}
                  onChange={handleChange}
                  placeholder="In days"
                  className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            )}

            {/* Skills */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Skills<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Add Skills (min 3)"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Tools<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                placeholder="Add Tools (min 3)"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Sample Projects */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Sample Projects<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sampleProjects"
                value={formData.sampleProjects}
                onChange={handleChange}
                placeholder="e.g. Logo Design That Pops and Defines Your Brand"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Client Requirements */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Client Requirements (Optional)
              </label>
              <textarea
                name="clientRequirements"
                rows="3"
                value={formData.clientRequirements}
                onChange={handleChange}
                placeholder="Describe what you need and specific details"
                className="w-full bg-yellow-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                type="submit"
                className="px-8 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-8 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
