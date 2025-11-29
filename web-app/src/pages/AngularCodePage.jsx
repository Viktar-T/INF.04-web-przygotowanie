// Angular code page component - displays Angular source code (.ts and .html)
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { tasks } from '../data/tasks.index';

const AngularCodePage = () => {
  const { taskId } = useParams();
  const [tsCode, setTsCode] = useState('');
  const [htmlCode, setHtmlCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState({ ts: false, html: false });
  const [tsFileName, setTsFileName] = useState('');
  const [htmlFileName, setHtmlFileName] = useState('');

  // Find the task in the registry
  const task = tasks.find(t => t.taskId === taskId);

  // Load Angular source code
  useEffect(() => {
    const loadAngularCode = async () => {
      if (!task) {
        setError('Task not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Try to find the Angular files
        // File naming patterns vary, so we'll try common patterns
        // Mapping of taskId to actual file name (without extension)
        const fileNameMapping = {
          'book-management': 'book-mgmt.component',
          'expense-tracking': 'expense-track.component',
          'diet-planing': 'diet-plan.component',
          'course-waitlist-capacity': 'course-waitlist-capacity', // no .component
        };

        const baseFileName = fileNameMapping[taskId] || `${taskId}.component`;
        const possibleTsNames = [
          `${baseFileName}.ts`,
          // Also try standard pattern as fallback
          `${taskId}.component.ts`,
        ];

        const possibleHtmlNames = [
          `${baseFileName}.html`,
          // Also try standard pattern as fallback
          `${taskId}.component.html`,
        ];

        // Try to load files - first try public folder, then try src folder with dynamic import
        let tsLoaded = false;
        let htmlLoaded = false;
        let foundTsName = '';
        let foundHtmlName = '';

        // Helper function to try loading a file
        const tryLoadFile = async (fileName, isTs) => {
          // Try fetch from public folder first (works in both dev and production)
          try {
            const publicPath = `/tasks/${taskId}/solutions/angular/${fileName}`;
            const response = await fetch(publicPath);
            if (response.ok) {
              const content = await response.text();
              // Check if we got HTML page (SPA fallback)
              const trimmed = content.trim();
              if (!trimmed.startsWith('<!doctype') && !trimmed.startsWith('<!DOCTYPE') && !trimmed.startsWith('<html')) {
                return content;
              }
            }
          } catch (fetchError) {
            console.debug(`Fetch from public failed for ${fileName}:`, fetchError.message);
          }
          
          // Fallback: Try dynamic import with ?raw (works in dev only)
          try {
            const module = await import(`../tasks/${taskId}/solutions/angular/${fileName}?raw`);
            const content = module.default;
            
            // Check if we got HTML page instead of actual file
            if (content && typeof content === 'string') {
              const trimmed = content.trim();
              if (trimmed.startsWith('<!doctype') || trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
                throw new Error('Got HTML instead of file');
              }
            }
            return content;
          } catch (importError) {
            console.debug(`Import failed for ${fileName}:`, importError.message);
          }
          
          return null;
        };

        // Try loading .ts file
        for (const tsName of possibleTsNames) {
          const content = await tryLoadFile(tsName, true);
          if (content) {
            setTsCode(content);
            foundTsName = tsName;
            tsLoaded = true;
            break;
          }
        }

        // Try loading .html file
        for (const htmlName of possibleHtmlNames) {
          const content = await tryLoadFile(htmlName, false);
          if (content) {
            setHtmlCode(content);
            foundHtmlName = htmlName;
            htmlLoaded = true;
            break;
          }
        }

        setTsFileName(foundTsName);
        setHtmlFileName(foundHtmlName);

        if (!tsLoaded && !htmlLoaded) {
          const triedFiles = [...possibleTsNames, ...possibleHtmlNames].join(', ');
          throw new Error(`Could not find Angular component files (.ts or .html). Tried: ${triedFiles}`);
        }

        if (!tsLoaded) {
          setError('Warning: TypeScript file (.ts) not found, but HTML file loaded');
        }
        if (!htmlLoaded) {
          setError('Warning: HTML file (.html) not found, but TypeScript file loaded');
        }
      } catch (err) {
        console.error('Error loading Angular code:', err);
        setError(`Failed to load Angular code: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadAngularCode();
  }, [taskId, task]);

  // Copy to clipboard functionality
  const copyToClipboard = async (code, type) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopySuccess(prev => ({ ...prev, [type]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopySuccess(prev => ({ ...prev, [type]: false })), 2000);
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
              <p className="mt-3">Loading Angular source code...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error && !tsCode && !htmlCode) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-danger">Error Loading Angular Code</h1>
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

  // Render the Angular code page
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
              <li className="breadcrumb-item active" aria-current="page">
                Angular Code
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
                  <strong>Framework:</strong> Angular
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link 
                to={`/task/${taskId}`}
                className="btn btn-outline-secondary btn-sm"
              >
                ← Task Description
              </Link>
            </div>
          </div>

          {/* Error warning if partial load */}
          {error && (tsCode || htmlCode) && (
            <div className="alert alert-warning mb-3">
              <strong>Warning:</strong> {error}
            </div>
          )}

          {/* TypeScript file display */}
          {tsCode && (
            <>
              <div className="card mb-3">
                <div className="card-body py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <strong>File:</strong> <code>/tasks/{taskId}/solutions/angular/{tsFileName}</code>
                    </small>
                    <button
                      className={`btn btn-outline-primary btn-sm ${copySuccess.ts ? 'btn-success' : ''}`}
                      onClick={() => copyToClipboard(tsCode, 'ts')}
                      title="Copy TypeScript code to clipboard"
                    >
                      {copySuccess.ts ? '✓ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                  <h5 className="mb-0">TypeScript Component</h5>
                </div>
                <div className="card-body p-0">
                  <div className="code-container">
                    <SyntaxHighlighter
                      language="typescript"
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
                      {tsCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* HTML file display */}
          {htmlCode && (
            <>
              <div className="card mb-3">
                <div className="card-body py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <strong>File:</strong> <code>/tasks/{taskId}/solutions/angular/{htmlFileName}</code>
                    </small>
                    <button
                      className={`btn btn-outline-primary btn-sm ${copySuccess.html ? 'btn-success' : ''}`}
                      onClick={() => copyToClipboard(htmlCode, 'html')}
                      title="Copy HTML template to clipboard"
                    >
                      {copySuccess.html ? '✓ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header bg-dark text-white">
                  <h5 className="mb-0">HTML Template</h5>
                </div>
                <div className="card-body p-0">
                  <div className="code-container">
                    <SyntaxHighlighter
                      language="html"
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
                      {htmlCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AngularCodePage;

