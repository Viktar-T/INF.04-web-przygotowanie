// Markdown renderer component for displaying markdown content
import React from 'react';

const MarkdownRenderer = ({ content, taskId }) => {
  if (!content) {
    return (
      <div className="alert alert-warning">
        <p>No markdown content available.</p>
      </div>
    );
  }

  // Simple markdown parser for basic features
  const parseMarkdown = (text) => {
    if (!text) return '';

    // Split into lines for processing
    const lines = text.split('\n');
    const elements = [];
    let currentListItems = [];
    let inCodeBlock = false;
    let codeBlockContent = [];

    const processListItems = () => {
      if (currentListItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-unstyled">
            {currentListItems.map((item, index) => (
              <li key={index} className="mb-1">
                <span className="text-muted me-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        );
        currentListItems = [];
      }
    };

    const processCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre key={`code-${elements.length}`} className="bg-light p-3 rounded">
            <code>{codeBlockContent.join('\n')}</code>
          </pre>
        );
        codeBlockContent = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          processCodeBlock();
          inCodeBlock = false;
        } else {
          processListItems();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Handle headings
      if (trimmedLine.startsWith('#')) {
        processListItems();
        const level = trimmedLine.match(/^#+/)[0].length;
        const text = trimmedLine.replace(/^#+\s*/, '');
        const HeadingTag = `h${Math.min(level + 1, 6)}`;
        elements.push(
          React.createElement(
            HeadingTag,
            { key: `heading-${index}`, className: `mt-4 mb-3` },
            text
          )
        );
        return;
      }

      // Handle horizontal rules
      if (trimmedLine === '---' || trimmedLine === '***') {
        processListItems();
        elements.push(<hr key={`hr-${index}`} className="my-4" />);
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        const listItem = trimmedLine.replace(/^[-*]\s+/, '');
        currentListItems.push(parseInlineMarkdown(listItem));
        return;
      }

      // Handle regular paragraphs
      if (trimmedLine) {
        processListItems();
        elements.push(
          <p key={`para-${index}`} className="mb-3">
            {parseInlineMarkdown(trimmedLine)}
          </p>
        );
      } else {
        processListItems();
        elements.push(<br key={`br-${index}`} />);
      }
    });

    // Process any remaining list items or code blocks
    processListItems();
    processCodeBlock();

    return elements;
  };

  // Parse inline markdown (bold, italic, links, images)
  const parseInlineMarkdown = (text) => {
    if (!text) return '';

    // Handle images: ![alt](path)
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
      // Improved image path resolution for task-specific assets
      let imagePath;
      
      if (src.startsWith('/')) {
        // Absolute path - use as is
        imagePath = src;
      } else if (src.startsWith('http')) {
        // External URL - use as is
        imagePath = src;
      } else {
        // Relative path - resolve relative to task folder
        // Handle different path patterns:
        // - img/image.png -> /src/tasks/taskId/img/image.png
        // - pliki3/obraz1.jpg -> /src/tasks/taskId/pliki3/obraz1.jpg
        // - ./img/image.png -> /src/tasks/taskId/img/image.png
        const cleanSrc = src.replace(/^\.\//, '');
        imagePath = `/src/tasks/${taskId}/${cleanSrc}`;
      }
      
      return `<img src="${imagePath}" alt="${alt}" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" 
              onload="this.nextElementSibling.style.display='none';" />
              <div style="display:none; padding: 20px; border: 2px dashed #ccc; text-align: center; color: #666; background-color: #f8f9fa; border-radius: 0.375rem;">
                <p><strong>Image not found:</strong> ${alt || src}</p>
                <small>Expected path: ${imagePath}</small>
                <br><small>Original path: ${src}</small>
              </div>`;
    });

    // Handle links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Handle bold: **text** or __text__
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Handle italic: *text* or _text_
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    text = text.replace(/_([^_]+)_/g, '<em>$1</em>');

    // Handle inline code: `code`
    text = text.replace(/`([^`]+)`/g, '<code class="bg-light px-1 rounded">$1</code>');

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="markdown-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {parseMarkdown(content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
