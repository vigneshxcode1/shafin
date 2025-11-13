import React, { useState } from "react";
import SidebarC from "./SidebarClient";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobProposal() {
  const [activeTab, setActiveTab] = useState("work");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    employmentType: "",
    duration: "",
    timeline: "",
    deliverables: "",
    startDate: "",
    time: "",
    sample: "",
    skills: "",
    tools: "",
    minPrice: "",
    maxPrice: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isFormValid = () =>
    formData.title.trim() &&
    formData.description.trim() &&
    formData.category.trim() &&
    formData.skills.trim() &&
    formData.tools.trim() &&
    formData.minPrice.trim() &&
    formData.maxPrice.trim();

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    setMessage("");

    // 🧩 Format data before sending
    const payload = {
      JobTitle: formData.title,
      Des: formData.description,
      Category: formData.category,
      empoymentType: formData.employmentType || "Freelance",
      ProjectDuration: Number(formData.duration || 0),
      DeliveryDay: Number(formData.timeline || 0),
      Skills: formData.skills.split(",").map((s) => s.trim()),
      minprice: Number(formData.minPrice),
      maxprice: Number(formData.maxPrice),
      FreelancerRequirement:
        activeTab === "work"
          ? "Looking for a skilled freelancer"
          : "Quick 24-hour turnaround project",
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/jobProposal/createJobProposal",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage("✅ Job proposal created successfully!");
      console.log("Response:", res.data);

      // optional: navigate after save
      setTimeout(() => navigate("/Jobproposal"), 1000);
    } catch (err) {
      console.error("❌ Error creating job proposal:", err);
      setMessage("Failed to submit job proposal. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // --- styles (same as your version) ---
  const container = {
    background: "linear-gradient(to bottom right, #fffde4, #fefcea)",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    flex: 1,
  };
  const header = { fontSize: "22px", fontWeight: "bold", color: "#222", marginBottom: "8px" };
  const subtext = { color: "#666", marginBottom: "20px" };
  const tabContainer = {
    display: "flex",
    gap: "10px",
    background: "#f0f0f0",
    borderRadius: "20px",
    padding: "5px",
    marginBottom: "20px",
  };
  const tab = (isActive) => ({
    flex: 1,
    textAlign: "center",
    padding: "8px 0",
    borderRadius: "20px",
    cursor: "pointer",
    background: isActive ? "#8B5CF6" : "transparent",
    color: isActive ? "#fff" : "#555",
    fontWeight: "bold",
  });
  const label = { display: "block", marginBottom: "5px", color: "#333", fontWeight: "bold" };
  const input = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fffef2",
    marginBottom: "15px",
  };
  const textarea = { ...input, height: "100px" };
  const button = (color) => ({
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    background: color,
    color: "#fff",
    fontWeight: "bold",
    marginRight: "10px",
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarC />

      <div style={container}>
        <div style={header}>🪶 Job Proposal</div>
        <div style={subtext}>Turn your ideas into action — post your job today.</div>

        <div style={tabContainer}>
          <div
            style={tab(activeTab === "work")}
            onClick={() => setActiveTab("work")}
          >
            Work
          </div>
          <div
            style={tab(activeTab === "24hours")}
            onClick={() => setActiveTab("24hours")}
          >
            24 Hours
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={label}>Job Title*</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., Logo Design"
            style={input}
            value={formData.title}
            onChange={handleChange}
          />

          <label style={label}>Description*</label>
          <textarea
            name="description"
            placeholder="Describe your project"
            style={textarea}
            value={formData.description}
            onChange={handleChange}
          />

          <label style={label}>Category*</label>
          <input
            type="text"
            name="category"
            placeholder="Select Category"
            style={input}
            value={formData.category}
            onChange={handleChange}
          />

          {activeTab === "work" ? (
            <>
              <label style={label}>Employment Type*</label>
              <input
                type="text"
                name="employmentType"
                placeholder="Select Employment Type"
                style={input}
                value={formData.employmentType}
                onChange={handleChange}
              />
              <label style={label}>Project Duration*</label>
              <input
                type="text"
                name="duration"
                placeholder="In days"
                style={input}
                value={formData.duration}
                onChange={handleChange}
              />
              <label style={label}>Timeline*</label>
              <input
                type="text"
                name="timeline"
                placeholder="In days"
                style={input}
                value={formData.timeline}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <label style={label}>Specific Deliverables*</label>
              <input
                type="text"
                name="deliverables"
                placeholder="Select Deliverables"
                style={input}
                value={formData.deliverables}
                onChange={handleChange}
              />
              <label style={label}>Start Date*</label>
              <input
                type="date"
                name="startDate"
                style={input}
                value={formData.startDate}
                onChange={handleChange}
              />
              <label style={label}>Time*</label>
              <input
                type="text"
                name="time"
                style={input}
                value={formData.time}
                onChange={handleChange}
              />
              <label style={label}>Sample Project*</label>
              <input
                type="text"
                name="sample"
                placeholder="Link or example"
                style={input}
                value={formData.sample}
                onChange={handleChange}
              />
            </>
          )}

          <label style={label}>Skills*</label>
          <input
            type="text"
            name="skills"
            placeholder="Add Skills (comma-separated)"
            style={input}
            value={formData.skills}
            onChange={handleChange}
          />

          <label style={label}>Tools*</label>
          <input
            type="text"
            name="tools"
            placeholder="Add Tools (comma-separated)"
            style={input}
            value={formData.tools}
            onChange={handleChange}
          />

          <label style={label}>Price Range*</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="minPrice"
              placeholder="Min"
              style={{ ...input, flex: 1 }}
              value={formData.minPrice}
              onChange={handleChange}
            />
            <input
              type="text"
              name="maxPrice"
              placeholder="Max"
              style={{ ...input, flex: 1 }}
              value={formData.maxPrice}
              onChange={handleChange}
            />
          </div>

            <label style={label}>Freelancr Requirement(option)</label>
          <textarea
            name="freelancerreq"
            placeholder="Describe what you need and specific details"
            style={textarea}
            value={formData.description}
            onChange={handleChange}
          />
          {message && (
            <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
              {message}
            </p>
          )}

          <div style={{ marginTop: "20px" }}>
            <button
              type="submit"
              disabled={!isFormValid() || loading}
              style={button(isFormValid() ? "#8B5CF6" : "#aaa")}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              style={button("#ccc")}
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
