Sidebar.jsx

import React from "react";
import { Home, Search, Briefcase, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 flex flex-col justify-between border-r border-gray-100 text-black fixed top-0 left-0 h-full p-6 bg-gradient-to-b from-yellow-200 via-yellow-100 to-white shadow-lg">
      {/* Logo Section */}
      <div className="flex flex-col space-y-6 flex-grow">
        <div className="text-center bg-violet-600 p-4 rounded-xl shadow-md">
          <div className="text-2xl font-bold text-white">HUZZLER</div>
          <p className="text-violet-200 text-sm">Find Your Next Project</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 flex-grow pb-4 rounded-xl">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium hover:bg-violet-600 hover:text-white transition"
          >
            <Home size={18} /> Home
          </button>

          <button
            onClick={() => navigate("/browse")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium text-black hover:bg-violet-600 hover:text-white transition"
          >
            <Search size={18} /> Browse Projects
          </button>

          <button
            onClick={() => navigate("/my-jobs")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium text-black hover:bg-violet-600 hover:text-white transition"
          >
            <Briefcase size={18} /> My Jobs
          </button>

          <button
            onClick={() => navigate("/create-service")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium hover:bg-violet-600 hover:text-white transition"
          >
            <User size={18} /> Profile
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium hover:bg-violet-600 hover:text-white transition"
          >
            <Settings size={18} /> Settings
          </button>

          <button
            onClick={() => alert("Logged out!")}
            className="w-full flex items-center gap-3 p-3 rounded-xl font-medium hover:bg-violet-600 hover:text-white transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </div>

      {/* User Info */}
      <div className="mt-4">
        <div className="flex items-center gap-3">
          <div className="bg-violet-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
            JA
          </div>
          <div>
            <p className="text-sm font-semibold text-black leading-tight">
              James Andrew
            </p>
            <p className="text-xs text-gray-500 leading-tight">
              Premium Member
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}