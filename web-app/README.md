# Exam Tasks Web Application

A comprehensive React-based web application for viewing and exploring exam tasks with their solutions. This application provides an interactive platform for students and instructors to browse exam tasks, view problem descriptions, run solutions, and examine source code.

## 🚀 Features

- **Task Browser**: Browse and filter exam tasks by year, skill, and search terms
- **Task Descriptions**: View detailed problem descriptions with markdown rendering
- **Interactive Solutions**: Run and interact with solution applications
- **Source Code Viewer**: View solution source code with syntax highlighting
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 📋 Available Tasks

### 2022 - Course Registration Form (INF.04-02-22.06-SG)
- **Skills**: Forms, State Management, Refs, Bootstrap, Console Logging
- **Solutions**:
  - Controlled form (useState)
  - Uncontrolled form (useRef)

### 2023 - Movie Form (INF.04-03-23.06-SG)
- **Skills**: Forms, Bootstrap, Console Logging
- **Solutions**:
  - Basic form

### 2025 - Photo Gallery (INF.04-01-25.01-SG)
- **Skills**: Arrays, Filtering, Images, State Management, Bootstrap
- **Solutions**:
  - Gallery basic

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.8.2
- **Styling**: Bootstrap 5.3.8
- **Code Highlighting**: react-syntax-highlighter 15.6.6
- **Development**: ESLint, Hot Module Replacement

## 📁 Project Structure

```
web-app/
├── public/                     # Static assets
│   ├── assets/                 # Task-specific assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Badge.jsx         # Badge component for skill tags
│   │   ├── ErrorBoundary.jsx # Error boundary for error handling
│   │   ├── FilterBar.jsx     # Filter controls for task browsing
│   │   ├── MarkdownRenderer.jsx # Custom markdown parser
│   │   ├── Navigation.jsx    # Main navigation component
│   │   ├── Tag.jsx           # Tag component (unused)
│   │   └── TaskCard.jsx      # Task display card
│   ├── data/                 # Application data
│   │   ├── filters.js        # Filter options (years, skills)
│   │   └── tasks.index.js    # Task registry
│   ├── pages/                # Page components
│   │   ├── AppPage.jsx       # Solution runner page
│   │   ├── CodePage.jsx      # Source code viewer page
│   │   ├── HomePage.jsx      # Main task browser page
│   │   └── TaskDescriptionPage.jsx # Task description page
│   ├── routing/              # Routing configuration
│   │   └── router.jsx        # Main router setup
│   ├── styles/               # Global styles
│   │   └── globals.css       # Global CSS with Bootstrap integration
│   ├── tasks/                # Task-specific content
│   │   ├── 2022-02-22-06/   # Course registration task
│   │   ├── 2023-03-23-06/   # Movie form task
│   │   └── 2025-01-25-01/   # Photo gallery task
│   ├── App.jsx               # Unused (router-based architecture)
│   └── main.jsx              # Application entry point
├── ASSET_CONVENTIONS.md      # Asset organization documentation
├── QA_REPORT.md             # Quality assurance report
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── index.html               # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd web-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📖 Usage Guide

### Browsing Tasks

1. **Home Page**: The main page displays all available tasks in a grid layout
2. **Filtering**: Use the filter bar to narrow down tasks by:
   - **Year**: Filter by exam year (2022, 2023, 2025)
   - **Skill**: Filter by required skills (forms, state, refs, etc.)
   - **Search**: Search by title, exam code, or skills
3. **Task Cards**: Each task card shows:
   - Task title and exam code
   - Year badge
   - Skill tags
   - Solution type selector
   - Action buttons

### Viewing Task Descriptions

1. Click **"📋 Task Description"** on any task card
2. View the complete problem description with:
   - Markdown-formatted text
   - Reference images
   - Tables and code blocks
   - Proper typography and spacing

### Running Solutions

1. Select a solution type from the dropdown on the task card
2. Click **"🚀 App"** to run the solution
3. Interact with the application as intended
4. Check browser DevTools console for required console.log outputs
5. Use the solution selector to switch between different approaches

### Viewing Source Code

1. Click **"💻 Code"** on any task card
2. View the source code with:
   - Syntax highlighting
   - Line numbers
   - Copy-to-clipboard functionality
   - File path display

## 🔧 Adding New Tasks

### 1. Create Task Folder

Create a new folder in `src/tasks/` with the naming convention: `YYYY-MM-DD-NN`

```
src/tasks/2024-12-15-01/
├── problem.md
├── img/                    # Reference images
│   └── image-1.png
└── solutions/
    └── solution-name/
        ├── App.jsx
        ├── App.css         # Optional
        └── meta.json       # Optional
```

### 2. Add Task to Registry

Update `src/data/tasks.index.js`:

```javascript
{
  taskId: '2024-12-15-01',
  title: 'Task Title',
  examCode: 'INF.04-12-24.01-SG',
  year: 2024,
  skillTags: ['forms', 'state', 'bootstrap'],
  solutions: [
    {
      solutionType: 'solution-name',
      label: 'Solution Label'
    }
  ]
}
```

### 3. Update Filter Data

If new skills are introduced, update `src/data/filters.js`:

```javascript
export const SKILLS = [
  // ... existing skills
  'new-skill'
];
```

### 4. Create Problem Description

Write `problem.md` with:
- Task description in markdown format
- Reference images in `img/` folder
- Proper headings and formatting
- Code examples in code blocks

### 5. Implement Solution

Create `App.jsx` in the solution folder:
- Use React functional components
- Include required console.log outputs
- Follow Bootstrap styling conventions
- Handle form submissions and user interactions

## 🎨 Styling and Theming

The application uses Bootstrap 5.3.8 with custom enhancements:

- **Global Styles**: `src/styles/globals.css`
- **Bootstrap Integration**: Full Bootstrap CSS and JavaScript
- **Custom Components**: Enhanced styling for cards, buttons, and forms
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Accessibility**: WCAG compliant with proper focus management

### Customizing Styles

1. **Global Changes**: Modify `src/styles/globals.css`
2. **Component Styles**: Add CSS modules or styled-components
3. **Bootstrap Overrides**: Use CSS custom properties for theming

## 🚀 Deployment

### Production Build

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Preview the build**:
   ```bash
   npm run preview
   ```

3. **Deploy the `dist/` folder** to your hosting platform

### Deployment Platforms

#### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build and deploy: `npm run build && npm run deploy`

### Environment Configuration

For production deployment, ensure:
- All assets are properly bundled
- Environment variables are set correctly
- Build optimization is enabled
- Error handling is in place

## 🐛 Troubleshooting

### Common Issues

#### Development Server Won't Start
- **Issue**: Port 5173 already in use
- **Solution**: Kill the process or use a different port: `npm run dev -- --port 3000`

#### Build Fails
- **Issue**: Missing dependencies or syntax errors
- **Solution**: 
  1. Run `npm install` to ensure all dependencies are installed
  2. Check for syntax errors with `npm run lint`
  3. Verify all imports are correct

#### Images Not Loading
- **Issue**: Images in markdown not displaying
- **Solution**: 
  1. Ensure images are in the correct `img/` folder
  2. Check image paths in markdown files
  3. Verify image file extensions are correct

#### Solution Components Not Loading
- **Issue**: Dynamic imports failing
- **Solution**:
  1. Verify solution folder structure
  2. Check that `App.jsx` exists in solution folder
  3. Ensure proper export in solution component

#### Console Outputs Not Appearing
- **Issue**: Required console.log statements not visible
- **Solution**:
  1. Open browser DevTools (F12)
  2. Go to Console tab
  3. Interact with the solution to trigger console outputs
  4. Check for any JavaScript errors

### Performance Issues

#### Slow Loading
- **Solution**: 
  1. Check network tab in DevTools
  2. Optimize image sizes
  3. Use production build for testing

#### Large Bundle Size
- **Solution**:
  1. Run `npm run build` to see bundle analysis
  2. Check for unused dependencies
  3. Use dynamic imports for large components

## 📚 API Reference

### Components

#### TaskCard
```jsx
<TaskCard
  task={taskObject}
  selectedSolution={solutionType}
  onSolutionChange={handleSolutionChange}
/>
```

#### FilterBar
```jsx
<FilterBar
  filters={filterObject}
  onFiltersChange={handleFiltersChange}
/>
```

#### MarkdownRenderer
```jsx
<MarkdownRenderer
  content={markdownString}
  taskId={taskId}
/>
```

### Data Structures

#### Task Object
```javascript
{
  taskId: '2022-02-22-06',
  title: 'Course Registration Form',
  examCode: 'INF.04-02-22.06-SG',
  year: 2022,
  skillTags: ['forms', 'state', 'refs'],
  solutions: [
    {
      solutionType: 'controlled-useState',
      label: 'Controlled form (useState)'
    }
  ]
}
```

#### Filter Object
```javascript
{
  year: '2022',        // or null for all years
  skill: 'forms',      // or null for all skills
  query: 'search term' // or empty string
}
```

## 🤝 Contributing

### Development Guidelines

1. **Code Style**: Follow ESLint configuration
2. **Component Structure**: Use functional components with hooks
3. **Styling**: Use Bootstrap classes with minimal custom CSS
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **Testing**: Test all functionality before submitting changes

### Adding New Features

1. Create feature branch from main
2. Implement changes with proper documentation
3. Test thoroughly on different devices
4. Submit pull request with detailed description

## 📄 License

This project is created for educational purposes as part of the INF.04 exam preparation system.

## 📞 Support

For questions or issues:
1. Check the troubleshooting section above
2. Review the QA report in `QA_REPORT.md`
3. Check asset conventions in `ASSET_CONVENTIONS.md`
4. Contact the development team

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Framework**: React 19.1.1 with Vite 7.1.2