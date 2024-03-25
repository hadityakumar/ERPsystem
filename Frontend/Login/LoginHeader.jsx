import React, { useState } from 'react';
import './LoginHeader.css'; 

const LoginHeader = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav-bar">
      
      <span className="logo">IIT Bhubaneswar</span>
      <span className="title">ERP System</span>
      

      <ul className={isActive ? 'list-nav-bar active' : 'list-nav-bar'}>
        <li className="list-item"><a href="#">Admin</a></li>
        {/* <li className="list-item"><a href="#">pricing</a></li>
        <li className="list-item"><a href="#">faq</a></li>
        <li className="list-item"><a href="#">about</a></li>
        <li className="list-item"><a href="#">contact</a></li> */}
      </ul>

      <div className="fas burger-menu" id="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default LoginHeader;
