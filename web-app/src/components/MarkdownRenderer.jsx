// Markdown renderer component for displaying markdown content
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ content, taskId }) => {
  if (!content) {
    return (
      <div className="alert alert-warning">
        <p>No markdown content available.</p>
      </div>
    );
  }

  // Custom image component to handle task-specific paths
  const ImageComponent = ({ src, alt, ...props }) => {
    let imagePath;
    
    if (src.startsWith('/') || src.startsWith('http')) {
      imagePath = src;
    } else {
      const cleanSrc = src.replace(/^\.\//, '');
      // Use public folder path for production, fallback to src for development
      imagePath = `/tasks/${taskId}/${cleanSrc}`;
    }
    
    return (
      <div className="position-relative">
        <img 
          src={imagePath} 
          alt={alt} 
          className="img-fluid rounded mb-3" 
          style={{ maxWidth: '100%', height: 'auto' }}
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.nextElementSibling;
            if (fallback) fallback.style.display = 'block';
          }}
          {...props}
        />
        <div 
          className="d-none p-3 border border-2 border-dashed border-secondary text-center text-muted bg-light rounded"
          style={{ display: 'none' }}
        >
          <p className="mb-1"><strong>Image not found:</strong> {alt || src}</p>
          <small>Expected path: {imagePath}</small>
          <br />
          <small>Original path: {src}</small>
        </div>
      </div>
    );
  };

  // Custom link component for external links
  const LinkComponent = ({ href, children, ...props }) => {
    const isExternal = href && href.startsWith('http');
    return (
      <a 
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={isExternal ? 'text-decoration-none' : ''}
        {...props}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="markdown-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ImageComponent,
                a: LinkComponent,
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <pre className="bg-light p-3 rounded">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-light px-1 rounded" {...props}>
                      {children}
                    </code>
                  );
                },
                table: ({ children, ...props }) => (
                  <div className="table-responsive">
                    <table className="table table-striped table-hover" {...props}>
                      {children}
                    </table>
                  </div>
                ),
                blockquote: ({ children, ...props }) => (
                  <blockquote className="blockquote border-start border-4 border-primary ps-3 py-2 bg-light rounded-end" {...props}>
                    {children}
                  </blockquote>
                ),
                h1: ({ children, ...props }) => (
                  <h1 className="mt-4 mb-3" {...props}>{children}</h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 className="mt-4 mb-3" {...props}>{children}</h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 className="mt-3 mb-2" {...props}>{children}</h3>
                ),
                h4: ({ children, ...props }) => (
                  <h4 className="mt-3 mb-2" {...props}>{children}</h4>
                ),
                h5: ({ children, ...props }) => (
                  <h5 className="mt-2 mb-2" {...props}>{children}</h5>
                ),
                h6: ({ children, ...props }) => (
                  <h6 className="mt-2 mb-2" {...props}>{children}</h6>
                ),
                p: ({ children, ...props }) => (
                  <p className="mb-3" {...props}>{children}</p>
                ),
                ul: ({ children, ...props }) => (
                  <ul className="mb-3" {...props}>{children}</ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol className="mb-3" {...props}>{children}</ol>
                ),
                li: ({ children, ...props }) => (
                  <li className="mb-1" {...props}>{children}</li>
                ),
                hr: ({ ...props }) => (
                  <hr className="my-4" {...props} />
                ),
                strong: ({ children, ...props }) => (
                  <strong className="fw-bold" {...props}>{children}</strong>
                ),
                em: ({ children, ...props }) => (
                  <em className="fst-italic" {...props}>{children}</em>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
