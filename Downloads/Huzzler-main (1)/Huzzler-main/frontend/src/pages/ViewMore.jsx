

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
































// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ArrowLeft, Edit3 } from "lucide-react";

// export default function ViewMore() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [service, setService] = useState(null);

//     useEffect(() => {
//         const fetchService = async () => {
//             try {
//                 const res = await fetch(`http://localhost:5000/api/service/id/${id}`);
//                 const data = await res.json();
//                 setService(data);
//             } catch (err) {
//                 console.error("Fetch service error:", err);
//             }
//         };

//         fetchService();
//     }, [id]);

//     if (!service) {
//         return (
//             <div className="flex justify-center items-center min-h-screen text-gray-500">
//                 Loading service details...
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
//             {/* Header */}
//             <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
//                 <div className="flex items-center gap-3">
//                     <ArrowLeft
//                         className="cursor-pointer hover:text-gray-700"
//                         onClick={() => navigate(-1)}
//                     />
//                     <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <i className="ri-notification-3-line text-xl cursor-pointer text-gray-600"></i>
//                     <i className="ri-chat-3-line text-xl cursor-pointer text-gray-600"></i>
//                     <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//                 </div>
//             </header>

//             {/* Main */}
//             <main className="flex flex-col items-center flex-1 py-10 px-6">
//                 <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">
//                     {/* Left section */}
//                     <div className="lg:col-span-2">
//                         <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>

//                         <img
//                             src={service.images?.[0] || "https://via.placeholder.com/400"}
//                             alt="Service Preview"
//                             className="w-full rounded-lg mb-6"
//                         />

//                         {/* About the service */}
//                         <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
//                             <h3 className="text-lg font-semibold mb-2">About the service</h3>
//                             <p className="text-gray-700 text-sm leading-relaxed">
//                                 {service.description}
//                             </p>
//                         </div>

//                         {/* Client Requirements */}
//                         {service.requirements && (
//                             <div className="bg-white rounded-lg p-6 shadow-sm">
//                                 <h3 className="text-lg font-semibold mb-2">
//                                     Client Requirements
//                                 </h3>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                     {service.requirements}
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Right section */}
//                     <div>
//                         <div className="bg-white rounded-lg p-6 shadow-sm relative">
//                             <button
//                                 onClick={() => navigate(`/edit-service/${service._id}`)}
//                                 className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
//                             >
//                                 <Edit3 size={16} /> Edit Service
//                             </button>


//                             <h3 className="text-lg font-semibold mb-4">Service Details</h3>

//                             <div className="flex justify-between text-sm text-gray-700 mb-3">
//                                 <p>Price</p>
//                                 <p className="font-medium">₹ {service.price}</p>
//                             </div>

//                             <div className="flex justify-between text-sm text-gray-700 mb-3">
//                                 <p>Delivery Days</p>
//                                 <p className="font-medium">{service.deliveryDays} Days</p>
//                             </div>

//                             <div className="mb-3">
//                                 <p className="text-sm text-gray-700 mb-1">Category</p>
//                                 <p className="font-medium text-sm">{service.category}</p>
//                             </div>

//                             <div>
//                                 <p className="text-sm text-gray-700 mb-2">Skills & Tools</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {[...(service.skills || []), ...(service.tools || [])].map(
//                                         (tag, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md border border-gray-200"
//                                             >
//                                                 {tag}
//                                             </span>
//                                         )
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }



import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit3 } from "lucide-react";

export default function ViewMore() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/service/id/${id}`);
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Fetch service error:", err);
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading service details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* 🔸 Header */}
      <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <ArrowLeft
            className="cursor-pointer hover:text-gray-700"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-xl font-semibold tracking-wide">HUZZLER</h1>
        </div>

        <div className="flex items-center gap-4">
          <i className="ri-notification-3-line text-xl cursor-pointer text-gray-600"></i>
          <i className="ri-chat-3-line text-xl cursor-pointer text-gray-600"></i>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* 🟡 Main Content */}
      <main className="flex flex-col items-center flex-1 py-10 px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">{service.title}</h2>

            {/* 📸 Service Image */}
            <div className="flex justify-center mb-8">
              <img
                src={service.images?.[0] || "https://via.placeholder.com/400"}
                alt="Service Preview"
                className="rounded-lg object-cover shadow-sm border border-gray-200"
                style={{ width: "200px", height: "200px" }}
              />
            </div>

            {/* 📄 About the service */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-2">About the service</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* 🧾 Client Requirements */}
            {service.requirements && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Client Requirements
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.requirements}
                </p>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <button
                onClick={() => navigate(`/edit-service/${service._id}`)}
                className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
              >
                <Edit3 size={16} /> Edit Service
              </button>

              <h3 className="text-lg font-semibold mb-4">Service Details</h3>

              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <p>Price</p>
                <p className="font-medium">₹ {service.price}</p>
              </div>

              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <p>Delivery Days</p>
                <p className="font-medium">{service.deliveryDays} Days</p>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-700 mb-1">Category</p>
                <p className="font-medium text-sm">{service.category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-700 mb-2">Skills & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {[...(service.skills || []), ...(service.tools || [])].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md border border-gray-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
