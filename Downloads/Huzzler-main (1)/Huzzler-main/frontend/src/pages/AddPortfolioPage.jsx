import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPortfolioPage = () => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [tools, setTools] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail");
    if (!email) return alert("User not found!");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);
    formData.append("skills", skills);
    formData.append("tools", tools);
    formData.append("projectURL", projectURL);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/portfolio", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("✅ Portfolio added!");
        navigate("/buildprofile");
      } else {
        alert("❌ Error saving portfolio");
      }
    } catch (err) {
      console.error("Add portfolio error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-[700px] bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Add Portfolio Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          />
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Tools (comma separated)"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="url"
            placeholder="Project URL"
            value={projectURL}
            onChange={(e) => setProjectURL(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          /> */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-gray-800 font-medium"
            >
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPortfolioPage;
