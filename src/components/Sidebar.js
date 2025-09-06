import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaPuzzlePiece, FaCogs, FaInfoCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">
        <FaPuzzlePiece style={{ color: '#00ff99' }} /> Plugins
      </h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FaPuzzlePiece className="sidebar-icon" />
          <span>Plugin Registry</span>
        </li>
        <li className="sidebar-item">
          <FaCogs className="sidebar-icon" />
          <span>Settings</span>
        </li>
        <li className="sidebar-item">
          <FaInfoCircle className="sidebar-icon" />
          <span>About</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
