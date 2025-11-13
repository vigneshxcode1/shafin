


import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function BuildProfile() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState("/images/default-avatar.png");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [tools, setTools] = useState("");
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const emailFromURL = searchParams.get("email");

  // 🧠 Save email from URL
  useEffect(() => {
    if (emailFromURL) {
      localStorage.setItem("userEmail", emailFromURL);
    }
  }, [emailFromURL]);

  // 🧠 Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      try {
        const res = await fetch(`http://localhost:5000/api/auth/user/${email}`);
        const data = await res.json();

        if (res.ok && data) {
          setUser(data);
          if (data.avatarUrl) setAvatar(data.avatarUrl);
          if (data.details2?.professionalTitle)
            setTitle(data.details2.professionalTitle);
          if (data.details2?.about) setAbout(data.details2.about);
          if (data.details2?.skills)
            setSkills(data.details2.skills.join(", "));
          if (data.details2?.tools)
            setTools(data.details2.tools.join(", "));
        }
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🧩 Fetch user's portfolios
  useEffect(() => {
    const fetchPortfolios = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      try {
        const res = await fetch(`http://localhost:5000/api/portfolio/user/${email}`);
        const data = await res.json();
        if (res.ok) setPortfolios(data);
      } catch (err) {
        console.error("Error fetching portfolios:", err);
      }
    };

    fetchPortfolios();
  }, []);

  // 🗑️ Delete portfolio
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/portfolio/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("✅ Portfolio deleted");
        setPortfolios(portfolios.filter((p) => p._id !== id));
      } else {
        alert("❌ Failed to delete project");
      }
    } catch (err) {
      console.error("Delete portfolio error:", err);
    }
  };

  // 💾 Save profile changes
  const handleSave = async () => {
    const email = localStorage.getItem("userEmail");
    if (!email) return alert("User not found!");

    const payload = {
      email,
      professionalTitle: title,
      about,
      skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
      tools: tools.split(",").map((t) => t.trim()).filter(Boolean),
    };

    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/save-details2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Profile saved successfully!");
        setUser(data.user);
      } else {
        alert("❌ Failed to save changes");
      }
    } catch (err) {
      console.error("Save error:", err);
      alert("Something went wrong 😢");
    } finally {
      setSaving(false);
    }
  };

  // 🕐 Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading your profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-[850px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300">
        {/* 🌅 Cover Section */}
        <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 h-32 flex items-center justify-end p-4">
          <button className="text-sm border rounded-lg px-3 py-1 bg-white hover:bg-gray-100 transition">
            Change Cover
          </button>
        </div>

        {/* 👤 Profile Header */}
        <div className="px-6 -mt-14 flex items-center space-x-4">
          <img
            src={avatar}
            alt="profile"
            className="w-[100px] h-[100px] rounded-full border-4 border-white object-cover shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
            </h2>
            <p className="text-gray-500 text-sm">
              {title || "Add your professional title"} •{" "}
              {user?.details1?.location || "Location not added"}
            </p>
          </div>
        </div>

        {/* ✏️ Profile Form */}
        <div className="px-6 mt-10 pb-10">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Edit Profile Details
          </h3>

          {/* Fields */}
          <div className="space-y-6">
            {[
              {
                label: "Professional Title",
                value: title,
                setValue: setTitle,
                placeholder: "e.g. UI/UX Designer, Full Stack Developer",
              },
              {
                label: "About",
                value: about,
                setValue: setAbout,
                placeholder: "Write about yourself...",
                textarea: true,
              },
              {
                label: "Skills (comma separated)",
                value: skills,
                setValue: setSkills,
                placeholder: "e.g. React, Node.js, MongoDB",
              },
              {
                label: "Tools (comma separated)",
                value: tools,
                setValue: setTools,
                placeholder: "e.g. VS Code, Figma, Postman",
              },
            ].map((field, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 hover:shadow-sm transition"
              >
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  {field.label}
                </label>
                {field.textarea ? (
                  <textarea
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full border rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  />
                ) : (
                  <input
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSave}
              disabled={saving}
              className={`px-6 py-2 rounded-md text-white transition ${saving
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        {/* 🧩 Portfolio Section */}
        <div className="px-6 pb-10 border-t">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Your Portfolios
          </h3>

          <button
            onClick={() => navigate("/add-portfolio")}
            className="px-6 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium transition mb-6"
          >
            + Add Portfolio
          </button>
          <br /><br /><br />

          <div className="space-y-6">
            {portfolios.length === 0 ? (
              <p className="text-gray-500 text-sm">No portfolios added yet.</p>
            ) : (
              portfolios.map((p) => {
                // Generate website thumbnail using Google Favicon API or uploaded image
                const imageSrc =
                  p.imageUrl && p.imageUrl.trim() !== ""
                    ? p.imageUrl
                    : p.projectURL
                      ? `https://www.google.com/s2/favicons?domain=${new URL(p.projectURL).hostname}&sz=256`
                      : "https://via.placeholder.com/150";

                return (
                  <div
                    key={p._id}
                    onClick={() => p.projectURL && window.open(p.projectURL, "_blank")}
                    className="border rounded-2xl p-4 flex items-start space-x-4 hover:shadow-lg transition relative group cursor-pointer"
                  >
                    {/* 🖼️ Portfolio Image / Website Preview */}
                    <img
                      src={imageSrc}
                      alt="Portfolio"
                      className="w-36 h-28 rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />

                    {/* 🧠 Project Info */}
                    <div className="flex-1">
                      <h4 className="text-md font-semibold text-gray-800 group-hover:text-blue-600">
                        {p.projectTitle}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {p.projectDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {[...(p.skills || []), ...(p.tools || [])].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 🗑️ Delete Button */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
                    >
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </div>
    </div>
  );
}











































// import React, { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";

// export default function BuildProfile() {
//   const [user, setUser] = useState(null);
//   const [avatar, setAvatar] = useState("/images/default-avatar.png");
//   const [title, setTitle] = useState("");
//   const [about, setAbout] = useState("");
//   const [skills, setSkills] = useState("");
//   const [tools, setTools] = useState("");
//   const [portfolios, setPortfolios] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const emailFromURL = searchParams.get("email");

//   // 🧠 Save email from URL
//   useEffect(() => {
//     if (emailFromURL) {
//       localStorage.setItem("userEmail", emailFromURL);
//     }
//   }, [emailFromURL]);

//   // 🧠 Fetch user details
//   useEffect(() => {
//     const fetchUser = async () => {
//       const email = localStorage.getItem("userEmail");
//       if (!email) return;

//       try {
//         const res = await fetch(`http://localhost:5000/api/auth/user/${email}`);
//         const data = await res.json();

//         if (res.ok && data) {
//           setUser(data);
//           if (data.avatarUrl) setAvatar(data.avatarUrl);
//           if (data.details2?.professionalTitle)
//             setTitle(data.details2.professionalTitle);
//           if (data.details2?.about) setAbout(data.details2.about);
//           if (data.details2?.skills)
//             setSkills(data.details2.skills.join(", "));
//           if (data.details2?.tools)
//             setTools(data.details2.tools.join(", "));
//         }
//       } catch (err) {
//         console.error("Profile fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   // 🧩 Fetch user's portfolios
//   useEffect(() => {
//     const fetchPortfolios = async () => {
//       const email = localStorage.getItem("userEmail");
//       if (!email) return;

//       try {
//         const res = await fetch(`http://localhost:5000/api/portfolio/user/${email}`);
//         const data = await res.json();
//         if (res.ok) setPortfolios(data);
//       } catch (err) {
//         console.error("Error fetching portfolios:", err);
//       }
//     };

//     fetchPortfolios();
//   }, []);

//   // 🗑️ Delete portfolio
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this project?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/portfolio/${id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         alert("✅ Portfolio deleted");
//         setPortfolios(portfolios.filter((p) => p._id !== id));
//       } else {
//         alert("❌ Failed to delete project");
//       }
//     } catch (err) {
//       console.error("Delete portfolio error:", err);
//     }
//   };

//   // 💾 Save profile changes
//   const handleSave = async () => {
//     const email = localStorage.getItem("userEmail");
//     if (!email) return alert("User not found!");

//     const payload = {
//       email,
//       professionalTitle: title,
//       about,
//       skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
//       tools: tools.split(",").map((t) => t.trim()).filter(Boolean),
//     };

//     setSaving(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/save-details2", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ Profile saved successfully!");
//         setUser(data.user);
//       } else {
//         alert("❌ Failed to save changes");
//       }
//     } catch (err) {
//       console.error("Save error:", err);
//       alert("Something went wrong 😢");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // 🕐 Loading
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-500">
//         Loading your profile...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center py-10">
//       <div className="w-[850px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300">
//         {/* 🌅 Cover Section */}
//         <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 h-32 flex items-center justify-end p-4">
//           <button className="text-sm border rounded-lg px-3 py-1 bg-white hover:bg-gray-100 transition">
//             Change Cover
//           </button>
//         </div>

//         {/* 👤 Profile Header */}
//         <div className="px-6 -mt-14 flex items-center space-x-4">
//           <img
//             src={avatar}
//             alt="profile"
//             className="w-[100px] h-[100px] rounded-full border-4 border-white object-cover shadow-md"
//           />
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">
//               {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
//             </h2>
//             <p className="text-gray-500 text-sm">
//               {title || "Add your professional title"} •{" "}
//               {user?.details1?.location || "Location not added"}
//             </p>
//           </div>
//         </div>

//         {/* ✏️ Profile Form */}
//         <div className="px-6 mt-10 pb-10">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800">
//             Edit Profile Details
//           </h3>

//           {/* Fields */}
//           <div className="space-y-6">
//             {[
//               {
//                 label: "Professional Title",
//                 value: title,
//                 setValue: setTitle,
//                 placeholder: "e.g. UI/UX Designer, Full Stack Developer",
//               },
//               {
//                 label: "About",
//                 value: about,
//                 setValue: setAbout,
//                 placeholder: "Write about yourself...",
//                 textarea: true,
//               },
//               {
//                 label: "Skills (comma separated)",
//                 value: skills,
//                 setValue: setSkills,
//                 placeholder: "e.g. React, Node.js, MongoDB",
//               },
//               {
//                 label: "Tools (comma separated)",
//                 value: tools,
//                 setValue: setTools,
//                 placeholder: "e.g. VS Code, Figma, Postman",
//               },
//             ].map((field, i) => (
//               <div
//                 key={i}
//                 className="border rounded-xl p-4 hover:shadow-sm transition"
//               >
//                 <label className="block text-sm font-semibold text-gray-600 mb-1">
//                   {field.label}
//                 </label>
//                 {field.textarea ? (
//                   <textarea
//                     value={field.value}
//                     onChange={(e) => field.setValue(e.target.value)}
//                     placeholder={field.placeholder}
//                     className="w-full border rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
//                   />
//                 ) : (
//                   <input
//                     value={field.value}
//                     onChange={(e) => field.setValue(e.target.value)}
//                     placeholder={field.placeholder}
//                     className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Save Button */}
//           <div className="flex justify-end mt-8">
//             <button
//               onClick={handleSave}
//               disabled={saving}
//               className={`px-6 py-2 rounded-md text-white transition ${
//                 saving
//                   ? "bg-blue-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               {saving ? "Saving..." : "Save Changes"}
//             </button>
//           </div>
//         </div>

//         {/* 🧩 Portfolio Section */}
//         <div className="px-6 pb-10 border-t">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800">
//             Your Portfolios
//           </h3>

//           <button
//             onClick={() => navigate("/add-portfolio")}
//             className="px-6 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium transition mb-6"
//           >
//             + Add Portfolio
//           </button>

//           <div className="space-y-6">
//             {portfolios.length === 0 ? (
//               <p className="text-gray-500 text-sm">No portfolios added yet.</p>
//             ) : (
//               portfolios.map((p) => (
//                 <div
//                   key={p._id}
//                   onClick={() => p.projectURL && window.open(p.projectURL, "_blank")}
//                   className="border rounded-2xl p-4 flex items-start space-x-4 hover:shadow-lg transition relative group cursor-pointer"
//                 >
//                   <img
//                     src={p.imageUrl || "https://via.placeholder.com/150"}
//                     alt="Portfolio"
//                     className="w-36 h-28 rounded-lg object-cover group-hover:scale-105 transition-transform"
//                   />
//                   <div className="flex-1">
//                     <h4 className="text-md font-semibold text-gray-800 group-hover:text-blue-600">
//                       {p.projectTitle}
//                     </h4>
//                     <p className="text-gray-600 text-sm mt-1">
//                       {p.projectDescription}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {[...(p.skills || []), ...(p.tools || [])].map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* 🗑️ Delete Button */}
//                   <div
//                     onClick={(e) => e.stopPropagation()}
//                     className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
//                   >
//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
