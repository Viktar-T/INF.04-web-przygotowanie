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
  
  // 2025-preegzam solutions
  '2025-preegzam-controlled-useState': () => import('../tasks/2025-preegzam/solutions/controlled-useState/App.jsx'),
  
  // book-management solutions
  'book-management-basic-book-management': () => import('../tasks/book-management/solutions/basic-book-management/App.jsx'),
  
  // diet-planing solutions
  'diet-planing-basic-diet-planning': () => import('../tasks/diet-planing/solutions/basic-diet-planning/App.jsx'),
  
  // expense-tracking solutions
  'expense-tracking-basic-expense-tracking': () => import('../tasks/expense-tracking/solutions/basic-expense-tracking/App.jsx'),
  
  // quiz-maker solutions
  'quiz-maker-basic-quiz-maker': () => import('../tasks/quiz-maker/solutions/basic-quiz-maker/App.jsx'),
  
  // course-waitlist-capacity solutions
  'course-waitlist-capacity-controlled-useState': () => import('../tasks/course-waitlist-capacity/solutions/controlled-useState/App.jsx'),
  'course-waitlist-capacity-uncontrolled-useRef': () => import('../tasks/course-waitlist-capacity/solutions/uncontrolled-useRef/App.jsx'),
  
  // course-waitlist-capacity-advance solutions
  'course-waitlist-capacity-advance-controlled-useState': () => import('../tasks/course-waitlist-capacity-advance/solutions/controlled-useState/App.jsx'),
  
  // movie-watchlist solutions
  'movie-watchlist-controlled-useState': () => import('../tasks/movie-watchlist/solutions/controlled-useState/App.jsx'),
  
  // movie-watchlist-advance solutions
  'movie-watchlist-advance-controlled-useState': () => import('../tasks/movie-watchlist-advance/solutions/controlled-useState/App.jsx'),
  
  // tag-filtered-gallery solutions
  'tag-filtered-gallery-controlled-useState': () => import('../tasks/tag-filtered-gallery/solutions/controlled-useState/App.jsx'),
  
  // tag-filtered-gallery-advance solutions
  'tag-filtered-gallery-advance-controlled-useState': () => import('../tasks/tag-filtered-gallery-advance/solutions/controlled-useState/App.jsx'),
  
  // single-answer-quiz solutions
  'single-answer-quiz-controlled-useState': () => import('../tasks/single-answer-quiz/solutions/controlled-useState/App.jsx'),
  
  // single-answer-quiz-advance solutions
  'single-answer-quiz-advance-controlled-useState': () => import('../tasks/single-answer-quiz-advance/solutions/controlled-useState/App.jsx'),
  
  // mini-shop-line-total solutions
  'mini-shop-line-total-controlled-useState': () => import('../tasks/mini-shop-line-total/solutions/controlled-useState/App.jsx'),
  
  // mini-shop-line-total-advance solutions
  'mini-shop-line-total-advance-controlled-useState': () => import('../tasks/mini-shop-line-total-advance/solutions/controlled-useState/App.jsx'),
  
  // parking-meter solutions
  'parking-meter-controlled-useState': () => import('../tasks/parking-meter/solutions/controlled-useState/App.jsx'),
  
  // parking-meter-advance solutions
  'parking-meter-advance-controlled-useState': () => import('../tasks/parking-meter-advance/solutions/controlled-useState/App.jsx'),
  
  // appointment-picker solutions
  'appointment-picker-controlled-useState': () => import('../tasks/appointment-picker/solutions/controlled-useState/App.jsx'),
  
  // feedback-form-counter solutions
  'feedback-form-counter-controlled-useState': () => import('../tasks/feedback-form-counter/solutions/controlled-useState/App.jsx'),
  
  // searchable-list solutions
  'searchable-list-controlled-useState': () => import('../tasks/searchable-list/solutions/controlled-useState/App.jsx'),
  
  // tabs-nav-pills solutions
  'tabs-nav-pills-controlled-useState': () => import('../tasks/tabs-nav-pills/solutions/controlled-useState/App.jsx'),
  
  // faq-accordion solutions
  'faq-accordion-controlled-useState': () => import('../tasks/faq-accordion/solutions/controlled-useState/App.jsx'),
  
  // stopwatch solutions
  'stopwatch-controlled-useState': () => import('../tasks/stopwatch/solutions/controlled-useState/App.jsx'),
  
  // todo-with-priority solutions
  'todo-with-priority-controlled-useState': () => import('../tasks/todo-with-priority/solutions/controlled-useState/App.jsx'),
  
  // star-rating-widget solutions
  'star-rating-widget-controlled-useState': () => import('../tasks/star-rating-widget/solutions/controlled-useState/App.jsx'),
  
  // pagination-demo solutions
  'pagination-demo-controlled-useState': () => import('../tasks/pagination-demo/solutions/controlled-useState/App.jsx'),
  
  // sortable-table solutions
  'sortable-table-controlled-useState': () => import('../tasks/sortable-table/solutions/controlled-useState/App.jsx'),
  
  // dependent-dropdowns solutions
  'dependent-dropdowns-controlled-useState': () => import('../tasks/dependent-dropdowns/solutions/controlled-useState/App.jsx'),
  
  // controlled-uncontrolled-toggle solutions
  'controlled-uncontrolled-toggle-controlled-useState': () => import('../tasks/controlled-uncontrolled-toggle/solutions/controlled-useState/App.jsx'),
  
  // unit-converter solutions
  'unit-converter-controlled-useState': () => import('../tasks/unit-converter/solutions/controlled-useState/App.jsx'),
  
  // color-preview-contrast solutions
  'color-preview-contrast-controlled-useState': () => import('../tasks/color-preview-contrast/solutions/controlled-useState/App.jsx'),
  
  // keyboard-shortcuts solutions
  'keyboard-shortcuts-controlled-useState': () => import('../tasks/keyboard-shortcuts/solutions/controlled-useState/App.jsx'),
  
  // two-step-form solutions
  'two-step-form-controlled-useState': () => import('../tasks/two-step-form/solutions/controlled-useState/App.jsx'),
  
  // random-quote solutions
  'random-quote-controlled-useState': () => import('../tasks/random-quote/solutions/controlled-useState/App.jsx'),
  
  // visual-bar-list solutions
  'visual-bar-list-controlled-useState': () => import('../tasks/visual-bar-list/solutions/controlled-useState/App.jsx'),
  
  // appointment-picker-advance solutions
  'appointment-picker-advance-controlled-useState': () => import('../tasks/appointment-picker-advance/solutions/controlled-useState/App.jsx'),
  
  // feedback-form-counter-advance solutions
  'feedback-form-counter-advance-controlled-useState': () => import('../tasks/feedback-form-counter-advance/solutions/controlled-useState/App.jsx'),
  
  // searchable-list-advance solutions
  'searchable-list-advance-controlled-useState': () => import('../tasks/searchable-list-advance/solutions/controlled-useState/App.jsx'),
  
  // tabs-nav-pills-advance solutions
  'tabs-nav-pills-advance-controlled-useState': () => import('../tasks/tabs-nav-pills-advance/solutions/controlled-useState/App.jsx'),
  
  // faq-accordion-advance solutions
  'faq-accordion-advance-controlled-useState': () => import('../tasks/faq-accordion-advance/solutions/controlled-useState/App.jsx'),
  
  // stopwatch-advance solutions
  'stopwatch-advance-controlled-useState': () => import('../tasks/stopwatch-advance/solutions/controlled-useState/App.jsx'),
  
  // todo-with-priority-advance solutions
  'todo-with-priority-advance-controlled-useState': () => import('../tasks/todo-with-priority-advance/solutions/controlled-useState/App.jsx'),
  
  // star-rating-widget-advance solutions
  'star-rating-widget-advance-controlled-useState': () => import('../tasks/star-rating-widget-advance/solutions/controlled-useState/App.jsx'),
  
  // pagination-demo-advance solutions
  'pagination-demo-advance-controlled-useState': () => import('../tasks/pagination-demo-advance/solutions/controlled-useState/App.jsx'),
  
  // sortable-table-advance solutions
  'sortable-table-advance-controlled-useState': () => import('../tasks/sortable-table-advance/solutions/controlled-useState/App.jsx'),
  
  // dependent-dropdowns-advance solutions
  'dependent-dropdowns-advance-controlled-useState': () => import('../tasks/dependent-dropdowns-advance/solutions/controlled-useState/App.jsx'),
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
