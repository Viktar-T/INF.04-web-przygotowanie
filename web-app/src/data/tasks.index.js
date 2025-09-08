// Registry of tasks and solutions - Step Three
// This file will contain the index of all available tasks and their solutions

export const tasks = [
  {
    id: '2022-02-22-06',
    title: 'INF.04-02-22.06-SG - Course Registration Form',
    year: 2022,
    month: 6,
    day: 2,
    examCode: 'INF.04-02-22.06-SG',
    description: 'Course registration application with course list display and form validation',
    solutions: [
      {
        id: 'controlled-useState',
        name: 'Controlled useState',
        description: 'Course registration form using controlled components with useState hook'
      },
      {
        id: 'uncontrolled-useRef',
        name: 'Uncontrolled useRef',
        description: 'Course registration form using uncontrolled components with useRef hook'
      }
    ]
  },
  {
    id: '2023-03-23-06',
    title: 'INF.04-03-23.06-SG - Movie Form',
    year: 2023,
    month: 6,
    day: 3,
    examCode: 'INF.04-03-23.06-SG',
    description: 'Movie form with title and genre selection using form elements',
    solutions: [
      {
        id: 'basic-form',
        name: 'Basic Form',
        description: 'Movie form with title and genre selection using uncontrolled form elements'
      }
    ]
  },
  {
    id: '2025-01-25-01',
    title: 'INF.04-01-25.01-SG - Photo Gallery',
    year: 2025,
    month: 1,
    day: 25,
    examCode: 'INF.04-01-25.01-SG',
    description: 'Photo gallery with category filtering and download counter functionality',
    solutions: [
      {
        id: 'gallery-basic',
        name: 'Gallery Basic',
        description: 'Photo gallery with category filtering and download counter functionality'
      }
    ]
  }
];

export default tasks;
