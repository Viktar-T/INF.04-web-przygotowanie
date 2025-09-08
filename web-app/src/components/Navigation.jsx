// Navigation component for basic routing
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          Exam Tasks
        </Link>
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
