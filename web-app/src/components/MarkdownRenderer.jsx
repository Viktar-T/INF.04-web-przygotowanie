// Markdown renderer component for displaying markdown content
import React from 'react';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content">
      {/* Markdown rendering will be implemented here */}
      <pre>{content || 'Markdown content will be rendered here'}</pre>
    </div>
  );
};

export default MarkdownRenderer;
