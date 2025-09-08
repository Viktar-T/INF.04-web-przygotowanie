 **Goal** : Add routing and minimal page shells (no business logic). Ensure navigation paths and params are correct.

 **Constraints** :

* Language: **JavaScript** (no TS).
* **Do not** create any custom console panes or overlays.
* Pages (already created as files): Home, Task Description, App, Code.
* Routes to implement now:
  * `/` → **HomePage**
  * `/task/:taskId` → **TaskDescriptionPage**
  * `/app/:taskId/:solutionType` → **AppPage**
  * `/code/:taskId/:solutionType` → **CodePage**

 **Current Project State** :

* ✅ Project structure is complete with all required directories
* ✅ All 4 page components exist as placeholder shells
* ✅ `data/tasks.index.js` is populated with actual exam data
* ✅ Real exam tasks with solutions are implemented in `src/tasks/`
* ❌ React Router is not installed
* ❌ `src/routing/router.jsx` is just a placeholder
* ❌ No actual routing implementation

 **Actions** :

1. **Install React Router**: Add `react-router-dom` to dependencies
2. **Implement `src/routing/router.jsx`** with the four routes above using React Router v6+
3. **Mount the router** in `src/main.jsx` to replace the current App component
4. **Update page components** to create minimal shells:
   * A clear page title (e.g., "Home", "Task Description", etc.)
   * Read route params where applicable (`taskId`, `solutionType`) and show them as plain text placeholders
   * Add a simple link back to Home for navigation sanity
5. **Add basic navigation** (optional) to confirm routing works end-to-end

 **Route Parameter Mapping** :

Based on current `tasks.index.js` data structure:
* `taskId` values: `"2022-02-22-06"`, `"2023-03-23-06"`, `"2025-01-25-01"`
* `solutionType` values: `"controlled-useState"`, `"uncontrolled-useRef"`, `"basic-form"`, `"gallery-basic"`

 **Acceptance criteria** :

* Navigating to each route renders the correct page shell
* `taskId` and `solutionType` are visible as placeholders on App/Code pages
* No custom consoles; nothing beyond titles/params/links
* App runs without errors in the browser
* All routes are accessible and display correct page components

 **Next (not in this step)** :

* Step Three will wire the Home list and dropdown with actual task data
* Step Four will implement `TaskCard` and `FilterBar` components
* Step Five will render `problem.md` content on the Task Description Page
* Step Six will mount the solution apps on the App Page
* Step Seven will show raw `App.jsx` content on the Code Page
