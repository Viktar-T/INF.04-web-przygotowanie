// Task description page component
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tasks } from '../data/tasks.index';
import MarkdownRenderer from '../components/MarkdownRenderer';

const TaskDescriptionPage = () => {
  const { taskId } = useParams();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Find the task in the registry
  const task = tasks.find(t => t.taskId === taskId);

  // Load markdown content
  useEffect(() => {
    const loadMarkdown = async () => {
      if (!task) {
        setError('Task not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Use dynamic import to load the markdown file
        // This approach works with Vite's file serving
        const markdownModule = await import(`../tasks/${taskId}/problem.md?raw`);
        setMarkdownContent(markdownModule.default);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(`Failed to load task description: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [taskId, task]);

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
              <p className="mt-3">Loading task description...</p>
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
                  <h1 className="card-title text-danger">Error Loading Task</h1>
                  <p className="card-text">{error}</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => window.location.reload()}
                    >
                      Retry
                    </button>
                    <Link to="/" className="btn btn-primary">
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

  // Render the task description page
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          {/* Task Header */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h1 className="card-title mb-2">{task.title}</h1>
                  <p className="card-text text-muted mb-1">
                    <strong>Exam Code:</strong> {task.examCode}
                  </p>
                  <p className="card-text text-muted mb-0">
                    <strong>Year:</strong> {task.year}
                  </p>
                </div>
                <div className="text-end">
                  <span className="badge bg-secondary fs-6">{task.year}</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="mb-3">
                <div className="d-flex flex-wrap gap-1">
                  {task.skillTags.map(skill => (
                    <span key={skill} className="badge bg-primary">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="d-flex flex-wrap gap-2">
                <Link to="/" className="btn btn-outline-secondary btn-sm">
                  ← Back to Home
                </Link>
                {task.solutions.map(solution => (
                  <React.Fragment key={solution.solutionType}>
                    <Link 
                      to={`/app/${taskId}/${solution.solutionType}`}
                      className="btn btn-primary btn-sm"
                    >
                      View App ({solution.label})
                    </Link>
                    <Link 
                      to={`/code/${taskId}/${solution.solutionType}`}
                      className="btn btn-success btn-sm"
                    >
                      View Code ({solution.label})
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Markdown Content */}
          <div className="card">
            <div className="card-body">
              <MarkdownRenderer content={markdownContent} taskId={taskId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescriptionPage;
