// Filter data for year and skill lists
// This file exports controlled vocabularies for filtering tasks

// Years present in tasks, sorted in descending order (newest first)
export const YEARS = [2025, 2024, 2023, 2022];

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
  'capacity-management' // Course capacity and enrollment management
];

export default {
  YEARS,
  SKILLS
};
