import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar({ userData }) {
  const isLoggedIn = !!userData;

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='nav-logo'>
          <Link to='/' className='Link'>
            <span className='blue'>Job</span><span className='green'>Mage</span>
          </Link>
        </div>
        <div className='nav-links'>
          <div className="nav-item"><Link to="/jobs">Jobs</Link></div>
          <div className="nav-item"><Link to="/resources">Resources</Link></div>
          <div className="nav-item"><Link to="/roadmap">Roadmap</Link></div>
          <div className="nav-item"><Link to="/contact">Contact</Link></div>
          <div className="nav-item">
            <Link to={isLoggedIn ? "/after" : "/login"}>Dashboard</Link>
          </div>
          {isLoggedIn ? (
            <button className="nav-button" onClick={() => {
               localStorage.removeItem('token');
               window.location.reload();
            }} style={{ backgroundColor: 'red' }}>Logout</button>

          ) : (
            <button className="nav-button">
              <Link to="/login">SignUp</Link>
            </button>
          )}
        </div>
        <div className="nav-toggle">
          <FaBars className="nav-bars" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
