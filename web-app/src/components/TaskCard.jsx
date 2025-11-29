// Task card component for displaying task information
import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import { getWeekName } from '../data/filters';
import { useMode } from '../context/ModeContext';

const TaskCard = ({ task, selectedSolution, onSolutionChange }) => {
  const { isTeacher, isExam } = useMode();

  // Handle solution dropdown change
  const handleSolutionChange = (event) => {
    onSolutionChange(task.taskId, event.target.value);
  };

  // Get current solution for navigation
  const currentSolution = selectedSolution || task.solutions[0]?.solutionType;

  // Check if this week has "sp" designation (should hide App and Code buttons)
  // In exam mode, only show Task Description button
  // In teacher mode, always show all buttons regardless of sp week
  // In student mode, show App/Code buttons only if NOT sp week
  const weekName = getWeekName(task.weekNumber);
  const isSpWeek = weekName.includes('sp');
  const shouldShowAppCodeButtons = isExam ? false : (isTeacher ? true : !isSpWeek);

  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column">
        {/* Task Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="flex-grow-1">
            <h5 className="card-title mb-2 fw-bold">{task.title}</h5>
            <p className="card-text text-muted small mb-0">{task.examCode}</p>
          </div>
          <Badge type="secondary">{task.year}</Badge>
        </div>

        {/* Complexity Level and Week Number */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted small">
              <strong>Complexity Level:</strong> {task.complexityLevel}
            </span>
            <span className="text-muted small">
              <strong>Week:</strong> {getWeekName(task.weekNumber)}
            </span>
          </div>
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
        <div className="mb-4">
          <label htmlFor={`solution-${task.taskId}`} className="form-label small fw-semibold">
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
        <div className="mt-auto">
          <div className="d-grid gap-2">
            <Link
              to={`/task/${task.taskId}`}
              className="btn btn-info btn-sm"
              aria-label={`View task description for ${task.title}`}
            >
              📋 Task Description
            </Link>
            {shouldShowAppCodeButtons && (
              <div className="d-grid gap-2 d-md-flex">
                <Link
                  to={`/code/${task.taskId}/${currentSolution}`}
                  className="btn btn-success btn-sm flex-fill"
                  aria-label={`View React code for ${task.title} - ${task.solutions.find(s => s.solutionType === currentSolution)?.label}`}
                >
                  💻 Code in React
                </Link>
                <Link
                  to={`/app/${task.taskId}/${currentSolution}`}
                  className="btn btn-primary btn-sm flex-fill"
                  aria-label={`View app for ${task.title} - ${task.solutions.find(s => s.solutionType === currentSolution)?.label}`}
                >
                  🚀 App
                </Link>
                <Link
                  to={`/code-angular/${task.taskId}`}
                  className="btn btn-outline-success btn-sm flex-fill"
                  aria-label={`View Angular code for ${task.title}`}
                >
                  ⚡ Code in Angular
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
