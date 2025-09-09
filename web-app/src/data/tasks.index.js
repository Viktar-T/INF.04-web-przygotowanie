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
  },
  {
    taskId: 'course-waitlist-capacity',
    title: 'Course Waitlist & Capacity',
    examCode: 'INF.04-Course-Waitlist-Capacity',
    year: 2024,
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log', 'capacity-management'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      },
      {
        solutionType: 'uncontrolled-useRef',
        label: 'Uncontrolled form (useRef)'
      }
    ]
  },
  {
    taskId: 'movie-watchlist',
    title: 'Movie Watchlist with Rating',
    examCode: 'INF.04-Movie-Watchlist',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'arrays', 'duplicate-detection'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'tag-filtered-gallery',
    title: 'Tag-Filtered Gallery (Chips)',
    examCode: 'INF.04-TAG-FILTERED-GALLERY',
    year: 2024,
    skillTags: ['arrays', 'filtering', 'state', 'bootstrap', 'console.log', 'conditional-rendering'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'single-answer-quiz',
    title: 'Single-Answer Quiz',
    examCode: 'INF.04-SINGLE-ANSWER-QUIZ',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'mini-shop-line-total',
    title: 'Mini Shop Line Total',
    examCode: 'INF.04-MINI-SHOP-LINE-TOTAL',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'arrays'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'parking-meter',
    title: 'Parking Meter',
    examCode: 'INF.04-PARKING-METER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'validation'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'appointment-picker',
    title: 'Appointment Picker',
    examCode: 'INF.04-APPOINTMENT-PICKER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'date-time', 'validation'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'feedback-form-counter',
    title: 'Feedback Form with Counter',
    examCode: 'INF.04-FEEDBACK-FORM-COUNTER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation', 'character-count'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'searchable-list',
    title: 'Searchable List',
    examCode: 'INF.04-SEARCHABLE-LIST',
    year: 2024,
    skillTags: ['arrays', 'filtering', 'state', 'bootstrap', 'console.log', 'search'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'tabs-nav-pills',
    title: 'Tabs (Nav-Pills)',
    examCode: 'INF.04-TABS-NAV-PILLS',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'conditional-rendering', 'navigation'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'faq-accordion',
    title: 'FAQ Accordion',
    examCode: 'INF.04-FAQ-ACCORDION',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'conditional-rendering', 'accordion'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'stopwatch',
    title: 'Stopwatch',
    examCode: 'INF.04-STOPWATCH',
    year: 2024,
    skillTags: ['state', 'refs', 'bootstrap', 'console.log', 'intervals', 'timers'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'todo-with-priority',
    title: 'Todo with Priority',
    examCode: 'INF.04-TODO-WITH-PRIORITY',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'arrays', 'filtering', 'priority'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'star-rating-widget',
    title: 'Star Rating Widget',
    examCode: 'INF.04-STAR-RATING-WIDGET',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'keyboard-events', 'accessibility'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'pagination-demo',
    title: 'Pagination Demo',
    examCode: 'INF.04-PAGINATION-DEMO',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'arrays', 'pagination', 'memoization'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'sortable-table',
    title: 'Sortable Table (Two Columns)',
    examCode: 'INF.04-SORTABLE-TABLE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'arrays', 'sorting', 'memoization'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'dependent-dropdowns',
    title: 'Dependent Dropdowns',
    examCode: 'INF.04-DEPENDENT-DROPDOWNS',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'conditional-rendering', 'memoization'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'controlled-uncontrolled-toggle',
    title: 'Controlled vs Uncontrolled Toggle',
    examCode: 'INF.04-CONTROLLED-UNCONTROLLED-TOGGLE',
    year: 2024,
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log', 'conditional-rendering'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'unit-converter',
    title: 'Unit Converter (°C ↔ °F)',
    examCode: 'INF.04-UNIT-CONVERTER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'bidirectional'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'color-preview-contrast',
    title: 'Color Preview + Contrast Helper',
    examCode: 'INF.04-COLOR-PREVIEW-CONTRAST',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'color-calculations', 'memoization'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'keyboard-shortcuts',
    title: 'Keyboard Shortcuts',
    examCode: 'INF.04-KEYBOARD-SHORTCUTS',
    year: 2024,
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log', 'keyboard-events', 'focus-management'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'two-step-form',
    title: 'Two-Step Form (Inline Wizard)',
    examCode: 'INF.04-TWO-STEP-FORM',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation', 'multi-step', 'wizard'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'random-quote',
    title: 'Random Quote (No Immediate Repeats)',
    examCode: 'INF.04-RANDOM-QUOTE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'arrays', 'random-selection', 'statistics'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'visual-bar-list',
    title: 'Visual Bar List (No Libraries)',
    examCode: 'INF.04-VISUAL-BAR-LIST',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'inline-styles', 'accessibility', 'form-validation'],
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  }
];

export default tasks;
