import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostResources.css';

const PostResources = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className='post-panel'>
      <div className='ad-head'>
        <h2 className='post-panel-title'>Post Resources</h2>
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <div className='post-panel-links'>
        <Link to='/postBan' className="link-button card">
          <span>Post Banner</span>
        </Link>
        <Link to='/postBook' className="link-button card">
          <span>Post Books</span>
        </Link>
        <Link to='/postCourse' className="link-button card">
          <span>Post Courses</span>
        </Link>
      </div>
    </div>
  );
};

export default PostResources;
