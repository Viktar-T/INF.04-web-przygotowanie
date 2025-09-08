// Router configuration - Step Two
// This file defines the application routes

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HomePage from '../pages/HomePage';
import TaskDescriptionPage from '../pages/TaskDescriptionPage';
import AppPage from '../pages/AppPage';
import CodePage from '../pages/CodePage';

const AppLayout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:taskId" element={<TaskDescriptionPage />} />
        <Route path="/app/:taskId/:solutionType" element={<AppPage />} />
        <Route path="/code/:taskId/:solutionType" element={<CodePage />} />
      </Routes>
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default Router;
