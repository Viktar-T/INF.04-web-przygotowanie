// Filter data for year and skill lists
// This file exports controlled vocabularies for filtering tasks

// Years present in tasks, sorted in descending order (newest first)
export const YEARS = [2025, 2024, 2023, 2022];

// Complexity levels for filtering
export const COMPLEXITY_LEVELS = ['Level 1', 'Level 2'];

// Week numbers for filtering (1-31 based on current task count)
export const WEEK_NUMBERS = Array.from({ length: 31 }, (_, i) => i + 1);

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
  'form-validation' // Form validation
];

export default {
  YEARS,
  SKILLS,
  COMPLEXITY_LEVELS,
  WEEK_NUMBERS
};
