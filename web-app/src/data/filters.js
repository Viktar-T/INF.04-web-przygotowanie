// Filter data for year and skill lists
// This file exports controlled vocabularies for filtering tasks

// Years present in tasks, sorted in descending order (newest first)
export const YEARS = [2025, 2024, 2023, 2022];

// Complexity levels for filtering
export const COMPLEXITY_LEVELS = ['Level 1', 'Level 2', 'Level 3'];

// Week numbers for filtering (0-31 based on current task count)
export const WEEK_NUMBERS = Array.from({ length: 32 }, (_, i) => i);

// Custom week names mapping - you can modify these names as needed
export const WEEK_NAMES = {
  0: 'W0',
  1: 'W1', 
  2: 'W2',
  3: 'W3-sp',
  4: 'W4',
  5: 'W5',
  6: 'W6-sp',
  7: 'W7',
  8: 'W8',
  9: 'W9-sp',
  10: 'W10',
  11: 'W11',
  12: 'W12-sp',
  13: 'W13',
  14: 'W14',
  15: 'W15-sp',
  16: 'W16',
  17: 'W17',
  18: 'W18-sp',
  19: 'W19',
  20: 'W20',
  21: 'W21-sp',

};

// Function to get week name by number (with fallback to W{number} format)
export const getWeekName = (weekNumber) => {
  return WEEK_NAMES[weekNumber] || `W${weekNumber}`;
};

// Controlled vocabulary for skill tags - all task skillTags must use only these values
// Keep in lowercase, kebab-case format for consistency
export const SKILLS = [
  'forms',        // Form handling and validation
  'state',        // React state management (useState, etc.)
  'refs',         // React refs (useRef, etc.)
  'bootstrap',    // Bootstrap CSS framework
  'console.log',  // Console logging and debugging
  'arrays',       // Array manipulation and methods
  'filtering',    // Data filtering functionality
  'images',       // Image handling and display
  'crud',         // Create, Read, Update, Delete operations
  'data-management', // Data management and manipulation
  'financial-management', // Financial data handling
  'quiz-management', // Quiz creation and management
  'capacity-management', // Course capacity and enrollment management
  'duplicate-detection', // Duplicate data detection
  'conditional-rendering', // Conditional UI rendering
  'validation',   // Form and data validation
  'calculations', // Mathematical calculations
  'date-time',    // Date and time handling
  'character-count', // Character counting functionality
  'search',       // Search functionality
  'navigation',   // Navigation and routing
  'accordion',    // Accordion UI components
  'intervals',    // Timer and interval management
  'timers',       // Timer functionality
  'priority',     // Priority-based functionality
  'keyboard-events', // Keyboard event handling
  'accessibility', // Accessibility features
  'pagination',   // Pagination functionality
  'memoization',  // Performance optimization with memoization
  'sorting',      // Data sorting functionality
  'bidirectional', // Bidirectional data flow
  'color-calculations', // Color-related calculations
  'focus-management', // Focus management
  'multi-step',   // Multi-step processes
  'wizard',       // Wizard-style interfaces
  'random-selection', // Random data selection
  'statistics',   // Statistical calculations
  'inline-styles', // Inline CSS styling
  'form-validation', // Form validation
  'localStorage', // Browser localStorage functionality
  'genre-filtering', // Genre filtering functionality
  'download-counter', // Download counter functionality
  'attempt-counter', // Attempt counter functionality
  'transaction-history', // Transaction history functionality
  'calculation-history', // Calculation history functionality
  'appointment-history', // Appointment history functionality
  'feedback-history', // Feedback history functionality
  'search-history', // Search history functionality
  'navigation-history', // Navigation history functionality
  'accordion-history', // Accordion action history functionality
  'stopwatch-history', // Stopwatch session history functionality
  'todo-history', // Todo add history functionality
  'rating-history', // Star rating history functionality
  'page-input', // Direct page input functionality
  'reset-sort', // Reset sort functionality
  'no-cities-alert' // No cities alert functionality
];

export default {
  YEARS,
  SKILLS,
  COMPLEXITY_LEVELS,
  WEEK_NUMBERS,
  WEEK_NAMES,
  getWeekName
};
