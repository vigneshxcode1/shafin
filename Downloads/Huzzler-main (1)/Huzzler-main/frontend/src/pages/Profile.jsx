// import React from "react";

// // Single-file Profile component (Tailwind CSS classes used)
// // Usage: <Profile /> or <Profile name="Mani" imageSrc="/path/to.jpg" />

// export default function Profile({
//   name = "Mani",
//   title = "Full‑Stack Developer",
//   imageSrc = "https://via.placeholder.com/400",
//   bio = "Short bio — I build web apps and drink lots of chai.",
// }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 max-w-sm w-full">
//         {/* Circular image */}
//         <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-indigo-100">
//           <img
//             src={imageSrc}
//             alt={`${name} avatar`}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <h1 className="text-2xl font-semibold">{name}</h1>
//         <p className="text-sm text-gray-500">{title}</p>
//         <p className="text-center text-gray-600">{bio}</p>

//         {/* Optional action button */}
//         <button className="mt-3 px-4 py-2 rounded-full border border-indigo-200 text-indigo-600 hover:bg-indigo-50">
//           View profile
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [tools, setTools] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    const data = { title, description, skills, projectUrl, tools };
    console.log("Project Saved:", data);
    alert("✅ Project Saved!");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setSkills("");
    setProjectUrl("");
    setTools("");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center items-start py-16">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6">Add Portfolio Project</h1>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Project title */}
          <div>
            <label className="block text-gray-700 mb-1">Project title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="A brief but descriptive title"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Project description */}
          <div>
            <label className="block text-gray-700 mb-1">Project description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project briefly"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Skills and Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">
                Skills (suggested for you)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Add Skills"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Upload project files
              </label>
              <input
                type="text"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                placeholder="Project URL"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Tools */}
          <div>
            <label className="block text-gray-700 mb-1">Tools</label>
            <textarea
              rows={2}
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              placeholder="Add tools"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
