// Tag component for displaying tags
import React from 'react';

const Tag = ({ children, variant = 'default' }) => {
  return (
    <span className={`tag tag-${variant}`}>
      {children}
    </span>
  );
};

export default Tag;
