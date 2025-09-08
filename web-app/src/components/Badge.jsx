// Badge component for displaying badges
import React from 'react';

const Badge = ({ children, type = 'secondary' }) => {
  // Map custom types to Bootstrap badge classes
  const badgeClass = type === 'primary' ? 'bg-primary' : 
                    type === 'secondary' ? 'bg-secondary' :
                    type === 'success' ? 'bg-success' :
                    type === 'danger' ? 'bg-danger' :
                    type === 'warning' ? 'bg-warning' :
                    type === 'info' ? 'bg-info' :
                    type === 'light' ? 'bg-light text-dark' :
                    type === 'dark' ? 'bg-dark' : 'bg-secondary';
  
  return (
    <span className={`badge ${badgeClass}`}>
      {children}
    </span>
  );
};

export default Badge;
