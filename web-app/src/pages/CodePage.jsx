// Code page component - displays source code
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { tasks } from '../data/tasks.index';

const CodePage = () => {
  const { taskId, solutionType } = useParams();
  const [sourceCode, setSourceCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Find the task in the registry
  const task = tasks.find(t => t.taskId === taskId);

  // Find the solution in the task
  const solution = task?.solutions.find(s => s.solutionType === solutionType);

  // Load source code
  useEffect(() => {
    const loadSourceCode = async () => {
      if (!task || !solution) {
        setError('Task or solution not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Load source code from public folder
        // File path: /tasks/<taskId>/solutions/<solutionType>/App.jsx
        // Load source code from public folder
        const response = await fetch(`/tasks/${taskId}/solutions/${solutionType}/App.jsx`);
        if (!response.ok) {
          throw new Error(`Failed to load source file: ${response.status}`);
        }
        const sourceCode = await response.text();
        setSourceCode(sourceCode);
      } catch (err) {
        console.error('Error loading source code:', err);
        setError(`Failed to load source code: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadSourceCode();
  }, [taskId, solutionType, task, solution]);

  // Copy to clipboard functionality
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = sourceCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  // Handle not found case
  if (!task) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-danger">Task Not Found</h1>
                  <p className="card-text">
                    The task with ID <code>{taskId}</code> could not be found.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle solution not found case
  if (!solution) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-danger">Solution Not Found</h1>
                  <p className="card-text">
                    The solution <code>{solutionType}</code> could not be found for task <code>{taskId}</code>.
                  </p>
                  <div className="d-flex gap-2 justify-content-center">
                    <Link to={`/task/${taskId}`} className="btn btn-primary">
                      ← Back to Task Description
                    </Link>
                    <Link to="/" className="btn btn-secondary">
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle loading state
  if (loading) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading source code...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-danger">Error Loading Source Code</h1>
                  <p className="card-text">{error}</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => window.location.reload()}
                    >
                      Retry
                    </button>
                    <Link to={`/task/${taskId}`} className="btn btn-primary">
                      ← Back to Task Description
                    </Link>
                    <Link to="/" className="btn btn-secondary">
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render the code page
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumb navigation */}
          <nav aria-label="breadcrumb" className="py-2">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/task/${taskId}`}>{task.title}</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/app/${taskId}/${solutionType}`}>{solution.label}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Source Code
              </li>
            </ol>
          </nav>

          {/* Page header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="mb-2">{task.title}</h1>
              <div className="d-flex align-items-center gap-3">
                <p className="text-muted mb-0">
                  <strong>Exam Code:</strong> {task.examCode}
                </p>
                <p className="text-muted mb-0">
                  <strong>Year:</strong> {task.year}
                </p>
                <p className="text-muted mb-0">
                  <strong>Solution:</strong> {solution.label}
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button
                className={`btn btn-outline-primary btn-sm ${copySuccess ? 'btn-success' : ''}`}
                onClick={copyToClipboard}
                title="Copy source code to clipboard"
              >
                {copySuccess ? '✓ Copied!' : '📋 Copy Code'}
              </button>
              <Link 
                to={`/app/${taskId}/${solutionType}`}
                className="btn btn-primary btn-sm"
              >
                ▶ Run App
              </Link>
              <Link 
                to={`/task/${taskId}`}
                className="btn btn-outline-secondary btn-sm"
              >
                ← Task Description
              </Link>
            </div>
          </div>

          {/* File path display */}
          <div className="card mb-3">
            <div className="card-body py-2">
              <small className="text-muted">
                <strong>File:</strong> <code>/tasks/{taskId}/solutions/{solutionType}/App.jsx</code>
              </small>
            </div>
          </div>

          {/* Source code display */}
          <div className="card">
            <div className="card-body p-0">
              <div className="code-container">
                <SyntaxHighlighter
                  language="jsx"
                  style={tomorrow}
                  showLineNumbers={true}
                  wrapLines={true}
                  wrapLongLines={true}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                >
                  {sourceCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
