import React from 'react';
import { Link } from 'react-router-dom';
import './adminpanel.css';

const AdminPanel = () => {
  return (
    <div className='admin-panel'>
      <h2 className='admin-panel-title'>Admin Panel</h2>
      <div className='admin-panel-links'>
        <Link to='/postJob' className="short-card">
          <span>Post a Job</span>
        </Link>
        <Link to='/userList' className="short-card">
          <span>User List</span>
        </Link>
        <Link to='/jobManage' className="short-card">
          <span>Manage Jobs</span>
        </Link>
        <Link to='/postRes' className="short-card">
          <span>Post Resources</span>
        </Link>
        <Link to='/ResManage' className="short-card">
          <span>Resource Management</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
