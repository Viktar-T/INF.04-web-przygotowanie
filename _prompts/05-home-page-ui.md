
 **Goal** : Implement the **Home Page** list with filters and per-card solution dropdown. Ensure "Task description", "App", and "Code" buttons navigate using the  **currently selected solution** .

 **Constraints** :

* Language: **JavaScript** only.
* **Do not** create or use any custom console panels or overlays.
* Read data exclusively from `src/data/tasks.index.js` and `src/data/filters.js`.
* Respect routes:
  * `/` → Home
  * `/task/:taskId`
  * `/app/:taskId/:solutionType`
  * `/code/:taskId/:solutionType`

 **Current Project State** :

* ✅ Routing system is working correctly
* ✅ Basic HomePage exists but only shows simple links
* ✅ TaskCard and FilterBar components exist as placeholders
* ✅ Task data exists but needs restructuring (see 04-tasks-registry.md)
* ❌ No filtering functionality implemented
* ❌ No solution dropdown functionality
* ❌ No proper task card layout
* ❌ No state management for filters or selections

 **Actions** :

1. **Update FilterBar** (`src/components/FilterBar.jsx`):
   * **Replace placeholder** with actual filter controls
   * Controls for **Year** (dropdown from `YEARS`) and **Skill** (dropdown from `SKILLS`)
   * Optional **free-text search** input across title, exam code, and tags
   * Emit filter state object `{ year, skill, query }` back to parent via props
   * Handle "All" options for year and skill filters

2. **Implement Task List Rendering** (in `src/pages/HomePage.jsx`):
   * **Replace current simple links** with full task list implementation
   * Load tasks from `src/data/tasks.index.js` registry
   * **Add state management** for:
     * Filter state (year, skill, query)
     * Selected solutions per task card
   * **Apply filters**:
     * Year filter: show only tasks where `task.year` matches selected year
     * Skill filter: show tasks where `task.skillTags` includes selected skill
     * Free-text search: match on `task.title`, `task.examCode`, and `task.skillTags`
   * **Sort tasks** by year desc, then by exam code asc
   * **Handle empty state** with clear "No tasks found" message

3. **Implement TaskCard** (`src/components/TaskCard.jsx`):
   * **Replace placeholder** with full card implementation
   * Display **Title**, **Exam code**, **Year**, **Skill tags** (as badges/chips)
   * **Solution Type dropdown** sourced from `task.solutions`:
     * Default to **first solution** in the list
     * Persist user's selection **per card** using state
     * Use `solutionType` for navigation, `label` for display
   * **Three action buttons**:
     * **"Task description"** → navigate to `/task/:taskId`
     * **"App"** → navigate to `/app/:taskId/:solutionType` using current dropdown selection
     * **"Code"** → navigate to `/code/:taskId/:solutionType` using current dropdown selection
   * **Ensure links update** when dropdown selection changes

4. **State Management Requirements** :
   * **Filter state** in HomePage: `{ year: null|string, skill: null|string, query: string }`
   * **Solution selections** in HomePage: `{ [taskId]: solutionType }` to persist per-card selections
   * **Filter persistence**: selections should not reset when filters change
   * **URL updates**: navigation should update browser URL correctly

5. **Accessibility & UX** :
   * Accessible labels for dropdowns and buttons
   * Keyboard navigation support
   * Responsive layout (cards wrap on smaller screens)
   * Clear visual feedback for active filters

 **Required Component Structure** :

```javascript
// HomePage.jsx
const HomePage = () => {
  const [filters, setFilters] = useState({ year: null, skill: null, query: '' });
  const [selectedSolutions, setSelectedSolutions] = useState({});
  
  // Filter and sort logic
  // Render FilterBar + filtered TaskCard list
};

// FilterBar.jsx  
const FilterBar = ({ filters, onFiltersChange }) => {
  // Year dropdown, Skill dropdown, Search input
  // Emit filter changes to parent
};

// TaskCard.jsx
const TaskCard = ({ task, selectedSolution, onSolutionChange }) => {
  // Display task info, solution dropdown, action buttons
  // Handle navigation with current solution selection
};
```

 **Acceptance criteria** :

* Home page displays **filtered list** of tasks with correct titles, exam codes, years, and skill tags
* Each card's **solution dropdown** defaults to registry's first solution and can be changed independently
* **Task description** button opens `/task/:taskId`
* **App** button opens `/app/:taskId/:solutionType` reflecting current dropdown value
* **Code** button opens `/code/:taskId/:solutionType` reflecting current dropdown value
* **Filters work together** (year + skill + search) with proper empty state handling
* **User selections persist** when filters change (dropdown choices don't reset)
* **No custom console components** are introduced
* **Responsive design** works on different screen sizes

 **Deliverables** :

* **Working HomePage** with full FilterBar + TaskCard implementation
* **Verified navigation** for all three buttons from every visible card
* **State management** for filters and per-card solution selections
* **Inline comments** explaining filter logic and selection state management
