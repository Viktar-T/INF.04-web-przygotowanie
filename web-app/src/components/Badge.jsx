// Badge component for displaying badges
import React from 'react';

const Badge = ({ children, type = 'default' }) => {
  return (
    <span className={`badge badge-${type}`}>
      {children}
    </span>
  );
};

export default Badge;
