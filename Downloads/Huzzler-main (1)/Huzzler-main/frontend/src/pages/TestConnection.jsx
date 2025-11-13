import React, { useEffect } from "react";
import API from "../api/client";

export default function TestConnection() {
  useEffect(() => {
    API.get("/auth/test")
      .then((res) => console.log("✅ Frontend connected:", res.data))
      .catch((err) => console.error("❌ Connection failed:", err));
  }, []);

  return (
    <div className="p-4 text-center text-lg text-gray-700">
      🔍 Check your browser console for connection result
    </div>
  );
}
