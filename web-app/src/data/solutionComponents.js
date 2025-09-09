// Dynamic import mapping for solution components
// This file provides a centralized way to import all solution App components

// Import all solution components dynamically
const solutionComponents = {
  // 2022-02-22-06 solutions
  '2022-02-22-06-controlled-useState': () => import('../tasks/2022-02-22-06/solutions/controlled-useState/App.jsx'),
  '2022-02-22-06-uncontrolled-useRef': () => import('../tasks/2022-02-22-06/solutions/uncontrolled-useRef/App.jsx'),
  
  // 2023-03-23-06 solutions
  '2023-03-23-06-basic-form': () => import('../tasks/2023-03-23-06/solutions/basic-form/App.jsx'),
  
  // 2025-01-25-01 solutions
  '2025-01-25-01-gallery-basic': () => import('../tasks/2025-01-25-01/solutions/gallery-basic/App.jsx'),
  
  // book-management solutions
  'book-management-basic-book-management': () => import('../tasks/book-management/solutions/basic-book-management/App.jsx'),
  
  // diet-planing solutions
  'diet-planing-basic-diet-planning': () => import('../tasks/diet-planing/solutions/basic-diet-planning/App.jsx'),
  
  // expense-tracking solutions
  'expense-tracking-basic-expense-tracking': () => import('../tasks/expense-tracking/solutions/basic-expense-tracking/App.jsx'),
  
  // quiz-maker solutions
  'quiz-maker-basic-quiz-maker': () => import('../tasks/quiz-maker/solutions/basic-quiz-maker/App.jsx'),
};

// Function to get the dynamic import for a specific task and solution
export const getSolutionComponent = (taskId, solutionType) => {
  const key = `${taskId}-${solutionType}`;
  const importFunction = solutionComponents[key];
  
  if (!importFunction) {
    throw new Error(`No solution component found for taskId: ${taskId}, solutionType: ${solutionType}`);
  }
  
  return importFunction();
};

// Function to check if a solution component exists
export const hasSolutionComponent = (taskId, solutionType) => {
  const key = `${taskId}-${solutionType}`;
  return key in solutionComponents;
};

export default solutionComponents;
