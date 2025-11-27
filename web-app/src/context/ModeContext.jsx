// Mode Context - Manages teacher/student/exam mode state
import React, { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

const TEACHER_PASSWORD = 'TeacherViktar6512043'; // Simple password - can be changed later
const EXAM_PASSWORD = 'Exam123'; // Exam mode password
const MODE_STORAGE_KEY = 'app_mode';
const AUTH_MODE_STORAGE_KEY = 'auth_mode'; // Stores which mode we're authenticating for

export const ModeProvider = ({ children }) => {
  // Initialize mode from localStorage or default to 'student'
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem(MODE_STORAGE_KEY);
    // Only restore teacher or exam mode if they were previously authenticated
    if (storedMode === 'teacher' || storedMode === 'exam') {
      return storedMode;
    }
    return 'student';
  });

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authMode, setAuthMode] = useState(null); // 'teacher' or 'exam'

  // Save mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [mode]);

  const loginAsTeacher = (password) => {
    if (password === TEACHER_PASSWORD) {
      setMode('teacher');
      setIsAuthenticating(false);
      setAuthMode(null);
      return true;
    }
    return false;
  };

  const loginAsExam = (password) => {
    if (password === EXAM_PASSWORD) {
      setMode('exam');
      setIsAuthenticating(false);
      setAuthMode(null);
      return true;
    }
    return false;
  };

  const logoutFromMode = () => {
    setMode('student');
  };

  const showTeacherLogin = () => {
    setAuthMode('teacher');
    setIsAuthenticating(true);
  };

  const showExamLogin = () => {
    setAuthMode('exam');
    setIsAuthenticating(true);
  };

  const cancelLogin = () => {
    setIsAuthenticating(false);
    setAuthMode(null);
  };

  const value = {
    mode,
    isTeacher: mode === 'teacher',
    isStudent: mode === 'student',
    isExam: mode === 'exam',
    isAuthenticating,
    authMode,
    loginAsTeacher,
    loginAsExam,
    logoutFromMode,
    showTeacherLogin,
    showExamLogin,
    cancelLogin,
  };

  return (
    <ModeContext.Provider value={value}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;

