// Registry of tasks and solutions - Step Three
// This file contains the centralized index of all available tasks and their solutions
// 
// Field naming conventions:
// - taskId: kebab-case identifier (e.g., '2022-02-22-06')
// - solutionType: kebab-case identifier for solution (e.g., 'controlled-useState')
// - label: human-readable text for UI display
// - skillTags: array of strings from controlled vocabulary in filters.js

export const tasks = [
  {
    // Task identifier in kebab-case format (YYYY-MM-DD-NN)
    taskId: '2022-02-22-06',
    // Human-readable title for display
    title: 'Course Registration Form',
    // Official exam code
    examCode: 'INF.04-02-22.06-SG',
    // Year for filtering
    year: 2022,
    // Skills from controlled vocabulary - used for filtering and tagging
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log'],
    // Available solutions - first solution is the default
    solutions: [
      {
        // Solution identifier in kebab-case
        solutionType: 'controlled-useState',
        // Human-readable label for dropdown/UI display
        label: 'Controlled form (useState)'
      },
      {
        solutionType: 'uncontrolled-useRef',
        label: 'Uncontrolled form (useRef)'
      }
    ]
  },
  {
    taskId: '2023-03-23-06',
    title: 'Movie Form',
    examCode: 'INF.04-03-23.06-SG',
    year: 2023,
    skillTags: ['forms', 'bootstrap', 'console.log'],
    solutions: [
      {
        solutionType: 'basic-form',
        label: 'Basic form'
      }
    ]
  },
  {
    taskId: '2025-01-25-01',
    title: 'Photo Gallery',
    examCode: 'INF.04-01-25.01-SG',
    year: 2025,
    skillTags: ['arrays', 'filtering', 'images', 'state', 'bootstrap'],
    solutions: [
      {
        solutionType: 'gallery-basic',
        label: 'Gallery basic'
      }
    ]
  },
  {
    taskId: 'book-management',
    title: 'Book Management',
    examCode: 'INF.04-BOOK-MGMT',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'crud', 'arrays'],
    solutions: [
      {
        solutionType: 'basic-book-management',
        label: 'Basic Book Management'
      }
    ]
  },
  {
    taskId: 'diet-planing',
    title: 'Diet Planning',
    examCode: 'INF.04-DIET-PLAN',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'data-management', 'arrays'],
    solutions: [
      {
        solutionType: 'basic-diet-planning',
        label: 'Basic Diet Planning'
      }
    ]
  },
  {
    taskId: 'expense-tracking',
    title: 'Expense Tracking',
    examCode: 'INF.04-EXPENSE-TRACK',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'financial-management', 'arrays'],
    solutions: [
      {
        solutionType: 'basic-expense-tracking',
        label: 'Basic Expense Tracking'
      }
    ]
  },
  {
    taskId: 'quiz-maker',
    title: 'Quiz Maker',
    examCode: 'INF.04-QUIZ-MAKER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'quiz-management', 'arrays'],
    solutions: [
      {
        solutionType: 'basic-quiz-maker',
        label: 'Basic Quiz Maker'
      }
    ]
  }
];

export default tasks;
