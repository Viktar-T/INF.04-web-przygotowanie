// App page component - displays the actual application
import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tasks } from '../data/tasks.index';
import { getSolutionComponent, hasSolutionComponent } from '../data/solutionComponents';
import { getWeekName } from '../data/filters';

const AppPage = () => {
  const { taskId, solutionType } = useParams();
  const navigate = useNavigate();
  const [loadingError, setLoadingError] = useState(null);

  // Find the task in the registry
  const task = tasks.find(t => t.taskId === taskId);

  // Find the solution in the task
  const solution = task?.solutions.find(s => s.solutionType === solutionType);

  // Create dynamic import for the solution App component
  const SolutionApp = useMemo(() => {
    if (!task || !solution) return null;

    try {
      // Check if the solution component exists
      if (!hasSolutionComponent(taskId, solutionType)) {
        throw new Error(`No solution component found for taskId: ${taskId}, solutionType: ${solutionType}`);
      }

      // Create a lazy component using the centralized import system
      return React.lazy(() => 
        getSolutionComponent(taskId, solutionType).catch(error => {
          console.error('Failed to load solution component:', error);
          // Return a fallback component that shows an error
          return {
            default: () => (
              <div className="alert alert-danger">
                <h4>Solution Loading Error</h4>
                <p>Failed to load the solution component.</p>
                <p><strong>Error:</strong> {error.message}</p>
                <p><strong>Task:</strong> {taskId}</p>
                <p><strong>Solution:</strong> {solutionType}</p>
              </div>
            )
          };
        })
      );
    } catch (error) {
      console.error('Error creating dynamic import:', error);
      setLoadingError(`Error creating dynamic import: ${error.message}`);
      return null;
    }
  }, [taskId, solutionType, task, solution]);

  // Handle invalid task
  useEffect(() => {
    if (!task) {
      setLoadingError('Task not found');
    }
  }, [task]);

  // Handle invalid solution - redirect to default solution
  useEffect(() => {
    if (task && !solution) {
      const defaultSolution = task.solutions[0];
      if (defaultSolution) {
        navigate(`/app/${taskId}/${defaultSolution.solutionType}`, { replace: true });
      } else {
        setLoadingError('No solutions available for this task');
      }
    }
  }, [task, solution, taskId, navigate]);

  // Reset loading error when route changes
  useEffect(() => {
    setLoadingError(null);
  }, [taskId, solutionType]);

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

  // Handle loading error
  if (loadingError) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center py-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-danger">Error Loading Solution</h1>
                  <p className="card-text">{loadingError}</p>
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

  // Render the solution app with minimal chrome
  return (
    <div className="container-fluid">
      {/* Minimal page chrome - breadcrumb navigation */}
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb" className="py-2">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/task/${taskId}`}>{task.title}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {solution?.label || solutionType}
              </li>
            </ol>
          </nav>
          
          {/* Solution selector dropdown */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="mb-1">{task.title}</h2>
              <div className="d-flex align-items-center gap-3">
                <p className="text-muted mb-0">
                  <strong>Solution:</strong> {solution?.label || solutionType}
                </p>
                {task.solutions.length > 1 && (
                  <div className="dropdown">
                    <button 
                      className="btn btn-outline-primary btn-sm dropdown-toggle" 
                      type="button" 
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Switch Solution
                    </button>
                    <ul className="dropdown-menu">
                      {task.solutions.map(sol => (
                        <li key={sol.solutionType}>
                          <Link 
                            className={`dropdown-item ${sol.solutionType === solutionType ? 'active' : ''}`}
                            to={`/app/${taskId}/${sol.solutionType}`}
                          >
                            {sol.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link 
                to={`/task/${taskId}`}
                className="btn btn-outline-secondary btn-sm"
              >
                ← Task Description
              </Link>
              {!getWeekName(task.weekNumber).endsWith('-sp') && (
                <Link 
                  to={`/code/${taskId}/${solutionType}`}
                  className="btn btn-outline-success btn-sm"
                >
                  View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Solution App Container */}
      <div className="row">
        <div className="col-12">
          <div className="solution-container">
            <Suspense 
              fallback={
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading solution...</span>
                  </div>
                  <p className="mt-3">Loading solution...</p>
                </div>
              }
            >
              {SolutionApp && <SolutionApp />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
