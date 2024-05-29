import React from 'react';
import './JobCard.css';

function JobCard({ job, onJobClick }) {
  const handleClick = () => {
    onJobClick(job.id);
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <div className="job-card__header">
        <h2>{job.title}</h2>
        <p className="company-name">{job.company}</p>
      </div>
      <div className="job-card__body">
        <div className="job-info">
          <span className="job-label">Location:</span>
          <span>{job.location}</span>
        </div>
        <div className="job-info">
          <span className="job-label">Type:</span>
          <span>{job.type}</span>
        </div>
        <div className="job-info">
          <span className="job-label">Posted by:</span>
          <span>{job.postedBy}</span>
        </div>
        <div className="job-info">
          <span className="job-label">Posted on:</span>
          <span>{job.postedOn}</span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
