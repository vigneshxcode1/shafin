// import React from "react";

// export default function Profile() {
//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-10">
//       <div className="w-[850px] bg-white rounded-2xl shadow-sm overflow-hidden">
//         {/* Cover Section */}
//         <div className="relative bg-[#FFF9D9] h-32 flex justify-end items-center px-6">
//           <button className="border px-3 py-1 text-sm rounded-lg bg-white hover:bg-gray-50">
//             Change cover
//           </button>
//         </div>

//         {/* Profile Header */}
//         <div className="px-6 -mt-10 flex items-center space-x-4">
//           <img
//             src="https://i.pravatar.cc/150?img=47"
//             alt="profile"
//             className="w-20 h-20 rounded-full border-4 border-white object-cover"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">Helen Angel</h2>
//             <p className="text-gray-500 text-sm">📍 Chennai, Tamilnadu</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="px-6 mt-6 border-b flex space-x-6 text-sm">
//           <button className="pb-2 border-b-2 border-black font-medium">
//             Work
//           </button>
//           <button className="pb-2 text-gray-500 hover:text-black">24 hours</button>
//         </div>

//         {/* Work Section */}
//         <div className="px-6 mt-8 space-y-6 pb-10">
//           {/* Professional Title */}
//           <div className="border rounded-xl p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h4 className="text-sm font-semibold text-gray-700">
//                 Professional Title
//               </h4>
//               <i className="fa fa-pencil text-gray-400 text-xs cursor-pointer"></i>
//             </div>
//             <span className="text-green-700 bg-green-100 px-2 py-1 text-xs rounded-md font-medium">
//               Video Editor
//             </span>
//           </div>

//           {/* About */}
//           <div className="border rounded-xl p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h4 className="text-sm font-semibold text-gray-700">About</h4>
//               <i className="fa fa-pencil text-gray-400 text-xs cursor-pointer"></i>
//             </div>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               Skilled Video Editor with 5+ years of experience in Adobe Premiere Pro,
//               After Effects, and DaVinci Resolve. Specializes in storytelling, color
//               grading, and motion graphics. Passionate about creating engaging content
//               and bringing creative visions to life.
//             </p>
//           </div>

//           {/* Skills */}
//           <div className="border rounded-xl p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h4 className="text-sm font-semibold text-gray-700">Skills</h4>
//               <i className="fa fa-pencil text-gray-400 text-xs cursor-pointer"></i>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["Video Editing", "Color Grading", "Audio Editing"].map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Tools */}
//           <div className="border rounded-xl p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h4 className="text-sm font-semibold text-gray-700">Tools</h4>
//               <i className="fa fa-pencil text-gray-400 text-xs cursor-pointer"></i>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Adobe Premiere Pro",
//                 "Adobe After Effects",
//                 "Avid Media Composer",
//                 "DaVinci Resolve",
//                 "Lightworks",
//               ].map((tool) => (
//                 <span
//                   key={tool}
//                   className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
//                 >
//                   {tool}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Add Portfolio */}
//           <div className="border rounded-xl p-4 flex items-center space-x-3">
//             <div className="text-xl text-gray-500">+</div>
//             <p className="text-sm text-gray-600">
//               Create your key projects here to highlight your expertise and attract
//               potential clients.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function AfterSubmitBuildProfile() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState("/images/default-avatar.png");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    fetch(`http://localhost:5000/api/auth/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUser(data);
          if (data.avatarUrl) setAvatar(data.avatarUrl);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-[850px] bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Cover Section */}
        <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 h-32 flex justify-end items-center px-6">
          <button className="border px-3 py-1 text-sm rounded-lg bg-white hover:bg-gray-50">
            Change Cover
          </button>
        </div>

        {/* Profile Header */}
        <div className="px-6 -mt-12 flex items-center space-x-4">
          <img
            src={avatar}
            alt="profile"
            className="w-[100px] h-[100px] rounded-full border-4 border-white object-cover shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500 text-sm">
              {user.details2?.professionalTitle || "No title added"} •{" "}
              {user.details1?.location || "No location"}
            </p>
          </div>
        </div>

        {/* Work Section */}
        <div className="px-6 mt-8 space-y-6 pb-10">
          {/* About */}
          <div className="border rounded-xl p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">About</h4>
            <p className="text-sm text-gray-600">
              {user.details2?.about ||
                "No description added. Add more info about yourself."}
            </p>
          </div>

          {/* Skills */}
          <div className="border rounded-xl p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {user.details2?.skills?.length ? (
                user.details2.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No skills added</p>
              )}
            </div>
          </div>

          {/* Tools */}
          <div className="border rounded-xl p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {user.details2?.tools?.length ? (
                user.details2.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                  >
                    {tool}
                  </span>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No tools added</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
