// Mode Login Component - Password prompt for teacher/exam mode
import React, { useState } from 'react';
import { useMode } from '../context/ModeContext';

const TeacherLogin = () => {
  const { authMode, loginAsTeacher, loginAsExam, cancelLogin } = useMode();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isTeacherMode = authMode === 'teacher';
  const isExamMode = authMode === 'exam';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    let success = false;
    if (isTeacherMode) {
      success = loginAsTeacher(password);
    } else if (isExamMode) {
      success = loginAsExam(password);
    }

    if (success) {
      setPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleCancel = () => {
    setPassword('');
    setError('');
    cancelLogin();
  };

  if (!authMode) return null;

  return (
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isTeacherMode ? 'Teacher Mode Access' : 'Exam Mode Access'}
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={handleCancel}
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <p className="text-muted mb-3">
                Enter the password to access {isTeacherMode ? 'teacher' : 'exam'} mode.
              </p>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${error ? 'is-invalid' : ''}`}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoFocus
                />
                {error && (
                  <div className="invalid-feedback">
                    {error}
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;

