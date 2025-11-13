


import { useState } from "react";
import API from "../api/client";
import { useSearchParams, useNavigate } from "react-router-dom";

const sampleOptions = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Machine Learning",
  "UI/UX Design",
  "Figma",
  "Digital Marketing",
  "AWS",
  "DevOps",
  "SEO Optimization",
];

const heardOptions = [
  "Google Search",
  "Friend / Colleague",
  "LinkedIn",
  "Instagram Ad",
  "YouTube",
  "Other",
];

export default function Details1() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email"); // ✅ from Google signup
  const navigate = useNavigate();
  const [expertise, setExpertise] = useState([]);
  const [howHeard, setHowHeard] = useState([]);
  const [location, setLocation] = useState("");

  function toggle(arrSetter, arr, value) {
    if (arr.includes(value)) arrSetter(arr.filter((x) => x !== value));
    else if (arr.length < 5) arrSetter([...arr, value]);
    else alert("⚠️ You can select up to 5 skills only");
  }

  const save = async () => {
    if (expertise.length === 0) return alert("Select at least one expertise");
    if (!location.trim()) return alert("Please enter your location");

    try {
      await API.post("/auth/details1", { email, expertise, howHeard, location });
      navigate(`/details2?email=${encodeURIComponent(email)}`);
    } catch (e) {
      console.error(e);
      alert("❌ Error saving details");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Google Sign-in Button (if user not logged in) */}
      {!email && (
        <a
          href="http://localhost:5000/api/auth/google"
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-md px-4 py-2 mb-6 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-6"
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </a>
      )}

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Let’s Build Your Profile 🚀
      </h2>

      {/* Expertise Section */}
      <div className="mb-8">
        <p className="font-medium text-lg mb-2 text-gray-800">
          Select Your Expertise (max 5)
        </p>
        <div className="flex flex-wrap gap-3">
          {sampleOptions.map((skill) => {
            const isSelected = expertise.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggle(setExpertise, expertise, skill)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 transform ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-500 shadow-lg scale-105 hover:scale-110"
                    : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 hover:scale-105"
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* How did you hear about us */}
      <div className="mb-8">
        <p className="font-medium text-lg mb-2 text-gray-800">
          How did you hear about us?
        </p>
        <div className="flex flex-wrap gap-4">
          {heardOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                className="accent-indigo-600"
                checked={howHeard.includes(opt)}
                onChange={() => toggle(setHowHeard, howHeard, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Location Input */}
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Your Location 🌍
        </label>
        <input
          className="p-3 border border-gray-300 w-full rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="e.g. Chennai, India"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Continue Button */}
      {email && (
        <button
          onClick={save}
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
        >
          Continue →
        </button>
      )}
    </div>
  );
}
