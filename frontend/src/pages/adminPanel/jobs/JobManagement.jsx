import React, { useState, useEffect } from 'react';
import { getAllJobs, deleteJob, editJob } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import './JobManagement.css';

function JobManagement() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [expandedApplyUrlJobId, setExpandedApplyUrlJobId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    status: '',
    postedOn: '',
    description: '',
    apply: '',
    applyBy: '',
    salary: '',
    skills: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getAllJobs()
      .then(jobs => {
        setJobs(jobs);
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error fetching jobs');
      });
  }, []);

  const handleEdit = (jobId, jobData) => {
    setEditingJobId(jobId);
    setEditFormData(jobData);
  };

  const handleCancelEdit = () => {
    setEditingJobId(null);
    setEditFormData({
      title: '',
      company: '',
      location: '',
      type: '',
      status: '',
      postedOn: '',
      description: '',
      apply: '',
      applyBy: '',
      salary: '',
      skills: ''
    });
  };

  const handleSaveEdit = (jobId) => {
    editJob(jobId, editFormData)
      .then(() => {
        setJobs(prevJobs => prevJobs.map(job => job._id === jobId ? editFormData : job));
        setEditingJobId(null);
        setEditFormData({
          title: '',
          company: '',
          location: '',
          type: '',
          status: '',
          postedOn: '',
          description: '',
          apply: '',
          applyBy: '',
          salary: '',
          skills: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error editing job');
      });
  };

  const handleDelete = (jobId) => {
    deleteJob(jobId)
      .then(() => {
        setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error deleting job');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to truncate text to 10 words
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length <= 10) {
      return text;
    }
    return words.slice(0, 10).join(' ') + '...';
  };

  return (
    <div className="job-management-container">
      <div className='manage-head'>
        <h2>Job Management</h2>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Type</th>
            <th>Posted By</th>
            <th>Posted On</th>
            <th>Description</th>
            <th>Apply URL</th>
            <th>Salary</th>
            <th>Skills</th>
            <th>Apply By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id}>
              <td>{editingJobId === job._id ? <input type="text" name="title" value={editFormData.title} onChange={handleInputChange} /> : job.title}</td>
              <td>{editingJobId === job._id ? <input type="text" name="company" value={editFormData.company} onChange={handleInputChange} /> : job.company}</td>
              <td>{editingJobId === job._id ? <input type="text" name="location" value={editFormData.location} onChange={handleInputChange} /> : job.location}</td>
              <td>{editingJobId === job._id ? <input type="text" name="type" value={editFormData.type} onChange={handleInputChange} /> : job.type}</td>
              <td>{editingJobId === job._id ? <input type="text" name="postedBy" value={editFormData.postedBy} onChange={handleInputChange} /> : job.postedBy}</td>
              <td>{editingJobId === job._id ? <input type="date" name="postedOn" value={editFormData.postedOn} onChange={handleInputChange} /> : job.postedOn}</td>
              <td>
                {editingJobId === job._id ? 
                  <textarea name="description" value={editFormData.description} onChange={handleInputChange} /> 
                  : 
                  <div id={`description-${job._id}`} className="description-cell">
                    <div className="text">
                      {expandedJobId === job._id ? job.description : truncateText(job.description)}
                    </div>
                    {job.description.split(' ').length > 10 && (
                      <button className="expand-button" onClick={() => setExpandedJobId(expandedJobId === job._id ? null : job._id)}>
                        {expandedJobId === job._id ? 'Show Less' : 'Expand'}
                      </button>
                    )}
                  </div>
                }
              </td>
              <td>
                {editingJobId === job._id ? 
                  <textarea name="apply" value={editFormData.apply} onChange={handleInputChange} /> 
                  : 
                  <div id={`apply-${job._id}`} className="apply-cell">
                    <div className="text">
                      {expandedApplyUrlJobId === job._id ? job.apply : truncateText(job.apply)}
                    </div>
                    {job.apply.split(' ').length > 10 && (
                      <button className="expand-button" onClick={() => setExpandedApplyUrlJobId(expandedApplyUrlJobId === job._id ? null : job._id)}>
                        {expandedApplyUrlJobId === job._id ? 'Show Less' : 'Expand'}
                      </button>
                    )}
                  </div>
                }
              </td>
              <td>
                {editingJobId === job._id ? 
                  <textarea name="salary" value={editFormData.salary} onChange={handleInputChange} /> 
                  : 
                  <div id={`salary-${job._id}`} className="salary-cell">
                    <div className="text">
                      {expandedJobId === job._id ? job.salary : truncateText(job.salary)}
                    </div>
                    {job.salary.split(' ').length > 10 && (
                      <button className="expand-button" onClick={() => setExpandedJobId(expandedJobId === job._id ? null : job._id)}>
                        {expandedJobId === job._id ? 'Show Less' : 'Expand'}
                      </button>
                    )}
                  </div>
                }
              </td>
              <td>
                {editingJobId === job._id ? 
                  <textarea name="skills" value={editFormData.skills} onChange={handleInputChange} /> 
                  : 
                  <div id={`skills-${job._id}`} className="skills-cell">
                    <div className="text">
                      {expandedJobId === job._id ? job.skills : truncateText(job.skills)}
                    </div>
                    {job.skills.split(' ').length > 10 && (
                      <button className="expand-button" onClick={() => setExpandedJobId(expandedJobId === job._id ? null : job._id)}>
                        {expandedJobId === job._id ? 'Show Less' : 'Expand'}
                      </button>
                    )}
                  </div>
                }
              </td>
              <td>{editingJobId === job._id ? <input type="date" name="applyBy" value={editFormData.applyBy} onChange={handleInputChange} /> : job.applyBy}</td>

              <td className="action-buttons">
                {editingJobId === job._id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveEdit(job._id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEdit(job._id, job)}>Edit</button>
                )}
                {editingJobId !== job._id && <button className="delete-button" onClick={() => handleDelete(job._id)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobManagement;
