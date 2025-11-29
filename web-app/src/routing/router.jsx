// Router configuration - Step Two
// This file defines the application routes

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModeProvider, useMode } from '../context/ModeContext';
import Navigation from '../components/Navigation';
import TeacherLogin from '../components/TeacherLogin';
import HomePage from '../pages/HomePage';
import TaskDescriptionPage from '../pages/TaskDescriptionPage';
import AppPage from '../pages/AppPage';
import CodePage from '../pages/CodePage';
import AngularCodePage from '../pages/AngularCodePage';

const AppLayout = () => {
  const { isAuthenticating } = useMode();

  return (
    <>
      <Navigation />
      {isAuthenticating && <TeacherLogin />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:taskId" element={<TaskDescriptionPage />} />
        <Route path="/app/:taskId/:solutionType" element={<AppPage />} />
        <Route path="/code/:taskId/:solutionType" element={<CodePage />} />
        <Route path="/code-angular/:taskId" element={<AngularCodePage />} />
      </Routes>
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <ModeProvider>
        <AppLayout />
      </ModeProvider>
    </BrowserRouter>
  );
};

export default Router;
