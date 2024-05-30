import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUserData from '../Hooks/useUserdata';
import './sidebar.css';

function Sidebar({ setSelectedPage }) {
  const { userData, isLoading, error } = useUserData();
  const [selectedLink, setSelectedLink] = useState('jobs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 778);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedPage(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 778);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link to="/" className="Link">
              <span className="blue">Job</span>
              <span className="green">Mage</span>
            </Link>
          </div>
          
        </div>
        <div className="sidebar-user">
          <div className="user-info">Hi, {userData?.username || 'guest'}</div>
        </div>
        <div className="sidebar-links">
          <div
            className={`section-links ${selectedLink === 'jobs' ? 'active' : ''}`}
            onClick={() => handleLinkClick('jobs')}
          >
            <i className="fas fa-briefcase"></i>
            <span>Jobs</span>
          </div>
          <div
            className={`section-links ${selectedLink === 'resources' ? 'active' : ''}`}
            onClick={() => handleLinkClick('resources')}
          >
            <i className="fas fa-book"></i>
            <span>Resources</span>
          </div>
          <div
            className={`section-links ${selectedLink === 'self' ? 'active' : ''}`}
            onClick={() => handleLinkClick('self')}
          >
            <i className="fas fa-rss"></i>
            <span>Self-Assessment</span>
          </div>
          <div
            className={`section-links ${selectedLink === 'settings' ? 'active' : ''}`}
            onClick={() => handleLinkClick('settings')}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </div>
          {userData?.role === 'admin' && (
            <div
              className={`section-links ${selectedLink === 'admin' ? 'active' : ''}`}
              onClick={() => handleLinkClick('admin')}
            >
              <i className="fas fa-user-shield"></i>
              <span>Admin</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;