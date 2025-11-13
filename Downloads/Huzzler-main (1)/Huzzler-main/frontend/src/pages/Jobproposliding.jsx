
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarC({ onJobProposalClick }) {
  const location = useLocation();

  const linkStyle = (path) => ({
    padding: "10px 20px",
    display: "block",
    textDecoration: "none",
    color: location.pathname === path ? "#8B5CF6" : "#333",
    fontWeight: location.pathname === path ? "bold" : "normal",
    borderRadius: "8px",
    marginBottom: "10px",
    background: location.pathname === path ? "#f3e8ff" : "transparent",
  });

  const containerStyle = {
    width: "220px",
    background: "#fff8e1",
    padding: "20px",
    borderRight: "1px solid #eee",
    height: "100vh",
    boxSizing: "border-box",
  };

  const headerStyle = {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Menu</h3>

      <Link to="/" style={linkStyle("/")}>
        Dashboard
      </Link>

      <Link to="" style={linkStyle("/categories")}>
        Categories
      </Link>

      <Link to="" style={linkStyle("/create-service")}>
        Create Service
      </Link>

      <Link to="" style={linkStyle("/account")}>
        Account
      </Link>

      {/* 🔹 Special handling for Job Proposal */}
      <Link
        to="/job-proposal"
        style={linkStyle("/job-proposal")}
        onClick={onJobProposalClick}
      >
        Job Proposal
      </Link>
    </div>
  );
}