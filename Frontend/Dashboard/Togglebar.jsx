import React, { useState } from 'react';
import './Togglebar.css'; 

const ToggleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
        <div className="container-fluid p-2">
          <a className="navbar-brand text-primary mr-0">ERP - IIT Bhubaneswar</a>
          <div className="form-inline ml-auto">
            <div className="btn btn-primary" onClick={toggleSidebar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sd-header">
          <h4 className="mb-0">Main Menu</h4>
          <div className="btn btn-primary" onClick={toggleSidebar}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li><a className="sd-link">Student Profile</a></li>
            <li><a className="sd-link">Course Registration</a></li>
            <li><a className="sd-link">Attendance</a></li>
            <li><a className="sd-link">Grading System</a></li>
            <li><a className="sd-link">Feedback</a></li>
            <li><a className="sd-link">SAC : Equipment Issue</a></li>
          </ul>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
};

export default ToggleSidebar;
