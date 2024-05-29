import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import JobList from "./jobs components/JobList";
import JobDetails from "./jobs components/JobDetails";
import useUserData from "../../component/Hooks/useUserdata";
import "./jobs.css";
import Loader from "../../component/Loader/loader";
import Footer from "../../component/footer/Footer";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const { userData, isLoading } = useUserData();
  const { id } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || job.type.toLowerCase() === filterType.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  const isAdminOrEmployer =
    userData && (userData.role === "admin" || userData.role === "employer");

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1>Jobs and Internships</h1>
        {isAdminOrEmployer && (
          <Link to="/postJob" className="post-button">
            <h4>Post a Job</h4>
          </Link>
        )}
      </div>
      <div className="search-filter-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by job title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className="filter-select"
          value={filterType}
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      <div className="job-list-container">
        {id ? <JobDetails jobId={id} /> : <JobList jobs={filteredJobs} />}
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
