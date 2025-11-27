// Navigation component for basic routing
import React from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../context/ModeContext';

const Navigation = () => {
  const { mode, isTeacher, isStudent, isExam, showTeacherLogin, showExamLogin, logoutFromMode } = useMode();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          Exam Tasks
        </Link>
        <div className="navbar-nav ms-auto d-flex align-items-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div className="vr mx-2" style={{ height: '24px' }}></div>
          {isStudent && (
            <>
              <button
                className="btn btn-outline-primary btn-sm me-2"
                onClick={showTeacherLogin}
              >
                <i className="bi bi-person-check me-1"></i>
                Teacher Mode
              </button>
              <button
                className="btn btn-outline-warning btn-sm"
                onClick={showExamLogin}
              >
                <i className="bi bi-clipboard-check me-1"></i>
                Exam Mode
              </button>
            </>
          )}
          {isTeacher && (
            <>
              <span className="badge bg-success me-2">
                <i className="bi bi-person-check me-1"></i>
                Teacher Mode
              </span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={logoutFromMode}
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Exit Teacher Mode
              </button>
            </>
          )}
          {isExam && (
            <>
              <span className="badge bg-warning text-dark me-2">
                <i className="bi bi-clipboard-check me-1"></i>
                Exam Mode
              </span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={logoutFromMode}
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Exit Exam Mode
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
