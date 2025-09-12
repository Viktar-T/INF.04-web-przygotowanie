**Goal**: Add complexity level and week number to Home Page tasks and filtering.

**Changes Required**:

1. **Update Task Data Structure** (`src/data/tasks.index.js`):
   - Add `complexityLevel` field to each task (values: "Level 1", "Level 2", "Level 3")
   - Add `weekNumber` field to each task (integer values)

2. **Update FilterBar** (`src/components/FilterBar.jsx`):
   - Add Complexity Level dropdown with options: "All Levels", "Level 1", "Level 2", "Level 3"
   - Add Week Number dropdown with options: "All Weeks", "Week 1", "Week 2", etc.
   - Update filter state to include `complexityLevel` and `weekNumber`

3. **Update TaskCard** (`src/components/TaskCard.jsx`):
   - Display "Complexity Level: [value]" and "Week Number: [value]" on each card
   - Position these fields appropriately in the card layout

4. **Update HomePage** (`src/pages/HomePage.jsx`):
   - Add complexity and week filtering logic to `filteredTasks` useMemo
   - Update filter state management

5. **Update meta.json files**:
   - Add `complexityLevel` and `weekNumber` fields to all task meta.json files

**Implementation Notes**:
- Use Bootstrap styling for consistency [[memory:8436448]]
- Maintain existing filter functionality (year, skill, search)
- Complexity levels and week numbers will be hardcoded later by the user
