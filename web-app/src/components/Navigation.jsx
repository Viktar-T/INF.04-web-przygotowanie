// Navigation component for basic routing
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ 
      padding: '10px', 
      borderBottom: '1px solid #ccc', 
      marginBottom: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#333'
        }}>
          Home
        </Link>
        <span style={{ color: '#666' }}>|</span>
        <span style={{ fontSize: '14px', color: '#666' }}>
          Exam Tasks Application
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
