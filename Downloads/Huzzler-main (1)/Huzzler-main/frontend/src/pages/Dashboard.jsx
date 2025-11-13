import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusCircle } from "lucide-react"; 
import "./Dashboard.css"; 

const BASE_URL = "http://localhost:5000";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${BASE_URL}/api/Work/getWork`);
        console.log(res.data.work)
        const sortedProjects = res.data.work.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        localStorage.setItem("works", JSON.stringify(sortedProjects));
        setProjects(sortedProjects);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Check your internet connection and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
console.log()
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <main className="dashboard">
        <div className="work-container">
          <h2 className="title">Available Services</h2>

          <div className="work-grid">
            {projects.map((work) => (
              <div className="work-card" key={work._id}>
                <div className="work-header">
                  <h3>{work.ServiceTitle}</h3>
                  <p className="category">{work.Category}</p>
                </div>

                <p className="description">{work.Des}</p>

                <div className="skills">
                  {work.Skills?.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="meta">
                  Delivery: <strong>{work.Deliverydays}</strong> days
                </p>

                <p className="price">
                  ₹{work.minprice} – ₹{work.maxprice}
                </p>

                <p className="tools">
                  Tools: {work.tools?.join(", ") || "None"}
                </p>

                {work.sample_projects?.length > 0 && (
                  <a
                    href={work.sample_projects[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="sample-link"
                  >
                    View Samples
                  </a>
                )}

                {work.client_des && (
                  <p className="client">
                    <em>Client:</em> {work.client_des}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <button className="add-btn">
          <PlusCircle size={24} />
        </button>
      </main>

    
    </>
  );
};

export default Dashboard;
