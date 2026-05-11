import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-dark text-white p-3 ${isOpen ? 'd-block' : 'd-none'} d-md-block`} 
         style={{ width: '250px', flexShrink: 0 }}>
      
      <div className="mb-5 mt-3 px-2">
        <h5 className="fw-bold text-info mb-0">PABRIK 4.0</h5>
        <small className="text-muted">Industrial System</small>
      </div>
      
      {/* list-unstyled menghilangkan titik peluru di menu */}
      <ul className="nav flex-column gap-2 list-unstyled">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white py-2 rounded hover-effect">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/inventori" className="nav-link text-white py-2 rounded hover-effect">
            <i className="bi bi-box-seam me-2"></i> Inventori
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/laporan" className="nav-link text-white py-2 rounded hover-effect">
            <i className="bi bi-file-earmark-bar-graph me-2"></i> Laporan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;