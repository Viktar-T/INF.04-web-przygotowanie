// Registry of tasks and solutions - Step Three
// This file contains the centralized index of all available tasks and their solutions
// 
// Field naming conventions:
// - taskId: kebab-case identifier (e.g., '2022-02-22-06')
// - solutionType: kebab-case identifier for solution (e.g., 'controlled-useState')
// - label: human-readable text for UI display
// - skillTags: array of strings from controlled vocabulary in filters.js
// - complexityLevel: string value ("Level 1", "Level 2", "Level 3")
// - weekNumber: integer value for week assignment

export const tasks = [
  {
    // Task identifier in kebab-case format (YYYY-MM-DD-NN)
    taskId: '2022-02-22-06',
    // Human-readable title for display
    title: 'Course Registration Form - 2022',
    // Official exam code
    examCode: 'INF.04-02-22.06-SG',
    // Year for filtering
    year: 2022,
    // Skills from controlled vocabulary - used for filtering and tagging
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log'],
    // Complexity level for filtering
    complexityLevel: 'Level 1',
    // Week number for filtering
    weekNumber: 1,
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
    title: 'Movie Form - 2023',
    examCode: 'INF.04-03-23.06-SG',
    year: 2023,
    skillTags: ['forms', 'bootstrap', 'console.log'],
    complexityLevel: 'Level 1',
    weekNumber: 2,
    solutions: [
      {
        solutionType: 'basic-form',
        label: 'Basic form'
      }
    ]
  },
  {
    taskId: '2025-01-25-01',
    title: 'Photo Gallery - 2025',
    examCode: 'INF.04-01-25.01-SG',
    year: 2025,
    skillTags: ['arrays', 'filtering', 'images', 'state', 'bootstrap'],
    complexityLevel: 'Level 2',
    weekNumber: 7,
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
    complexityLevel: 'Level 1',
    weekNumber: 2,
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
    complexityLevel: 'Level 1',
    weekNumber: 1,
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
    complexityLevel: 'Level 2',
    weekNumber: 3,
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
    complexityLevel: 'Level 1',
    weekNumber: 5,
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
    complexityLevel: 'Level 2',
    weekNumber: 6,
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
    taskId: 'course-waitlist-capacity-advance',
    title: 'Course Waitlist & Capacity (Advanced)',
    examCode: 'INF.04-Course-Waitlist-Capacity-Advance',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'capacity-management', 'localStorage', 'conditional-rendering', 'validation'],
    complexityLevel: 'Level 3',
    weekNumber: 16,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Course Waitlist (useState + localStorage)'
      }
    ]
  },
  {
    taskId: 'movie-watchlist',
    title: 'Movie Watchlist with Rating',
    examCode: 'INF.04-Movie-Watchlist',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'arrays', 'duplicate-detection'],
    complexityLevel: 'Level 1',
    weekNumber: 5,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'movie-watchlist-advance',
    title: 'Movie Watchlist with Rating (Advanced)',
    examCode: 'INF.04-Movie-Watchlist-Advance',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'arrays', 'duplicate-detection', 'genre-filtering', 'conditional-rendering', 'validation'],
    complexityLevel: 'Level 3',
    weekNumber: 16,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Movie Watchlist (useState + Genre Filtering)'
      }
    ]
  },
  {
    taskId: 'tag-filtered-gallery',
    title: 'Tag-Filtered Gallery (Chips)',
    examCode: 'INF.04-TAG-FILTERED-GALLERY',
    year: 2024,
    skillTags: ['arrays', 'filtering', 'state', 'bootstrap', 'console.log', 'conditional-rendering'],
    complexityLevel: 'Level 2',
    weekNumber: 9,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'tag-filtered-gallery-advance',
    title: 'Tag-Filtered Gallery (Chips) (Advanced)',
    examCode: 'INF.04-TAG-FILTERED-GALLERY-ADVANCE',
    year: 2024,
    skillTags: ['arrays', 'filtering', 'state', 'bootstrap', 'console.log', 'conditional-rendering', 'download-counter', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 18,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Tag-Filtered Gallery (useState + Download Counter)'
      }
    ]
  },
  {
    taskId: 'single-answer-quiz',
    title: 'Single-Answer Quiz',
    examCode: 'INF.04-SINGLE-ANSWER-QUIZ',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation'],
    complexityLevel: 'Level 1',
    weekNumber: 1,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'single-answer-quiz-advance',
    title: 'Single-Answer Quiz (Advanced)',
    examCode: 'INF.04-SINGLE-ANSWER-QUIZ-ADVANCE',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation', 'attempt-counter', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 20,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Single-Answer Quiz (useState + Attempt Counter)'
      }
    ]
  },
  {
    taskId: 'mini-shop-line-total',
    title: 'Mini Shop Line Total',
    examCode: 'INF.04-MINI-SHOP-LINE-TOTAL',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'arrays'],
    complexityLevel: 'Level 2',
    weekNumber: 9,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'mini-shop-line-total-advance',
    title: 'Mini Shop Line Total (Advanced)',
    examCode: 'INF.04-MINI-SHOP-LINE-TOTAL-ADVANCE',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'arrays', 'transaction-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 22,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Mini Shop (useState + Transaction History)'
      }
    ]
  },
  {
    taskId: 'parking-meter',
    title: 'Parking Meter',
    examCode: 'INF.04-PARKING-METER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'validation'],
    complexityLevel: 'Level 1',
    weekNumber: 2,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'parking-meter-advance',
    title: 'Parking Meter (Advanced)',
    examCode: 'INF.04-PARKING-METER-ADVANCE',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'calculations', 'validation', 'calculation-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 22,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Parking Meter (useState + Calculation History)'
      }
    ]
  },
  {
    taskId: 'appointment-picker',
    title: 'Appointment Picker',
    examCode: 'INF.04-APPOINTMENT-PICKER',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'date-time', 'validation'],
    complexityLevel: 'Level 2',
    weekNumber: 7,
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
    complexityLevel: 'Level 1',
    weekNumber: 4,
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
    complexityLevel: 'Level 2',
    weekNumber: 13,
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
    complexityLevel: 'Level 1',
    weekNumber: 5,
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
    complexityLevel: 'Level 1',
    weekNumber: 6,
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
    complexityLevel: 'Level 2',
    weekNumber: 7,
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
    complexityLevel: 'Level 2',
    weekNumber: 4,
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
    complexityLevel: 'Level 2',
    weekNumber: 3,
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
    complexityLevel: 'Level 2',
    weekNumber: 8,
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
    complexityLevel: 'Level 2',
    weekNumber: 4,
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
    complexityLevel: 'Level 2',
    weekNumber: 11,
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
    complexityLevel: 'Level 2',
    weekNumber: 9,
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
    complexityLevel: 'Level 2',
    weekNumber: 13,
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
    complexityLevel: 'Level 3',
    weekNumber: 30,
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
    complexityLevel: 'Level 2',
    weekNumber: 12,
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
    complexityLevel: 'Level 2',
    weekNumber: 10,
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
    complexityLevel: 'Level 2',
    weekNumber: 13,
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
    complexityLevel: 'Level 2',
    weekNumber: 11,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Controlled form (useState)'
      }
    ]
  },
  {
    taskId: 'appointment-picker-advance',
    title: 'Appointment Picker (Advanced)',
    examCode: 'INF.04-APPOINTMENT-PICKER-ADVANCE',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation', 'date-time', 'appointment-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 15,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Appointment Picker (useState + History)'
      }
    ]
  },
  {
    taskId: 'feedback-form-counter-advance',
    title: 'Feedback Form with Counter (Advanced)',
    examCode: 'INF.04-FEEDBACK-FORM-COUNTER-ADVANCE',
    year: 2024,
    skillTags: ['forms', 'state', 'bootstrap', 'console.log', 'validation', 'character-count', 'feedback-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 15,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Feedback Form (useState + History)'
      }
    ]
  },
  {
    taskId: 'searchable-list-advance',
    title: 'Searchable List (Advanced)',
    examCode: 'INF.04-SEARCHABLE-LIST-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'arrays', 'filtering', 'search', 'search-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 18,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Searchable List (useState + History)'
      }
    ]
  },
  {
    taskId: 'tabs-nav-pills-advance',
    title: 'Tabs (Nav-Pills) (Advanced)',
    examCode: 'INF.04-TABS-NAV-PILLS-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'navigation', 'tabs', 'navigation-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 18,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Tabs Navigation (useState + History)'
      }
    ]
  },
  {
    taskId: 'faq-accordion-advance',
    title: 'FAQ Accordion (Advanced)',
    examCode: 'INF.04-FAQ-ACCORDION-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'accordion', 'collapse', 'accordion-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 21,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced FAQ Accordion (useState + History)'
      }
    ]
  },
  {
    taskId: 'stopwatch-advance',
    title: 'Stopwatch (Advanced)',
    examCode: 'INF.04-STOPWATCH-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'stopwatch', 'interval', 'stopwatch-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 21,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Stopwatch (useState + History)'
      }
    ]
  },
  {
    taskId: 'todo-with-priority-advance',
    title: 'Todo with Priority (Advanced)',
    examCode: 'INF.04-TODO-WITH-PRIORITY-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'todo', 'priority', 'filtering', 'sorting', 'todo-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 24,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Todo with Priority (useState + History)'
      }
    ]
  },
  {
    taskId: 'star-rating-widget-advance',
    title: 'Star Rating Widget (Advanced)',
    examCode: 'INF.04-STAR-RATING-WIDGET-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'rating', 'stars', 'keyboard', 'accessibility', 'rating-history', 'localStorage'],
    complexityLevel: 'Level 3',
    weekNumber: 24,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Star Rating Widget (useState + History)'
      }
    ]
  },
  {
    taskId: 'pagination-demo-advance',
    title: 'Pagination Demo (Advanced)',
    examCode: 'INF.04-PAGINATION-DEMO-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'pagination', 'validation', 'page-input', 'form-control'],
    complexityLevel: 'Level 3',
    weekNumber: 27,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Pagination Demo (useState + Direct Input)'
      }
    ]
  },
  {
    taskId: 'sortable-table-advance',
    title: 'Sortable Table (Advanced)',
    examCode: 'INF.04-SORTABLE-TABLE-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'table', 'sorting', 'reset-sort', 'validation'],
    complexityLevel: 'Level 3',
    weekNumber: 27,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Sortable Table (useState + Reset Sort)'
      }
    ]
  },
  {
    taskId: 'dependent-dropdowns-advance',
    title: 'Dependent Dropdowns (Advanced)',
    examCode: 'INF.04-DEPENDENT-DROPDOWNS-ADVANCE',
    year: 2024,
    skillTags: ['state', 'bootstrap', 'console.log', 'dropdowns', 'validation', 'no-cities-alert', 'form-control'],
    complexityLevel: 'Level 3',
    weekNumber: 30,
    solutions: [
      {
        solutionType: 'controlled-useState',
        label: 'Advanced Dependent Dropdowns (useState + No Cities Alert)'
      }
    ]
  }
];

export default tasks;
