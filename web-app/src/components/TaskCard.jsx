// Task card component for displaying task information
import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

const TaskCard = ({ task, selectedSolution, onSolutionChange }) => {
  // Handle solution dropdown change
  const handleSolutionChange = (event) => {
    onSolutionChange(task.taskId, event.target.value);
  };

  // Get current solution for navigation
  const currentSolution = selectedSolution || task.solutions[0]?.solutionType;

  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* Task Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title mb-1">{task.title}</h5>
            <p className="card-text text-muted small mb-0">{task.examCode}</p>
          </div>
          <Badge type="secondary">{task.year}</Badge>
        </div>

        {/* Skill Tags */}
        <div className="mb-3">
          <div className="d-flex flex-wrap gap-1">
            {task.skillTags.map(skill => (
              <Badge key={skill} type="primary">{skill}</Badge>
            ))}
          </div>
        </div>

        {/* Solution Selection */}
        <div className="mb-3">
          <label htmlFor={`solution-${task.taskId}`} className="form-label small">
            Solution Type:
          </label>
          <select
            id={`solution-${task.taskId}`}
            className="form-select form-select-sm"
            value={currentSolution}
            onChange={handleSolutionChange}
            aria-label={`Select solution for ${task.title}`}
          >
            {task.solutions.map(solution => (
              <option key={solution.solutionType} value={solution.solutionType}>
                {solution.label}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link
            to={`/task/${task.taskId}`}
            className="btn btn-outline-primary btn-sm"
            aria-label={`View task description for ${task.title}`}
          >
            Task description
          </Link>
          <Link
            to={`/app/${task.taskId}/${currentSolution}`}
            className="btn btn-primary btn-sm"
            aria-label={`View app for ${task.title} - ${task.solutions.find(s => s.solutionType === currentSolution)?.label}`}
          >
            App
          </Link>
          <Link
            to={`/code/${task.taskId}/${currentSolution}`}
            className="btn btn-success btn-sm"
            aria-label={`View code for ${task.title} - ${task.solutions.find(s => s.solutionType === currentSolution)?.label}`}
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
