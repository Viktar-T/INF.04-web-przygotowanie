 **Goal** : Implement the **Code Page** that displays the raw source of the selected solution’s `App.js`. The page must load the file text from `src/tasks/<taskId>/solutions/<solutionType>/App.js`, render it with syntax highlighting, and provide a copy-to-clipboard action.

 **Constraints** :

* Language: **JavaScript** only.
* **Do not** create or use any custom console panels or overlays.
* Use the route `/code/:taskId/:solutionType`.
* Resolve task and solution metadata from `src/data/tasks.index.js`.
* File to display is exactly `App.js` for the chosen solution.

 **Current Project State** :

* ✅ Routing system is working correctly with all required routes
* ✅ HomePage is fully implemented with FilterBar, TaskCard, and filtering logic
* ✅ Task data registry is complete with proper field structure (taskId, skillTags, solutions)
* ✅ Task folders exist with solution folders and App.jsx files for all solutions
* ✅ Bootstrap integration and basic styling is complete
* ❌ CodePage exists but only shows placeholder content
* ❌ No source code loading functionality
* ❌ No syntax highlighting implementation
* ❌ No copy-to-clipboard functionality
* ❌ No file path display or breadcrumbs

 **Actions** :

1. **Replace placeholder CodePage** with full implementation that reads `taskId` and `solutionType` from the route and validates both against the registry.

2. **Derive the exact file path** of the source file to display: `src/tasks/<taskId>/solutions/<solutionType>/App.jsx`.

3. **Implement file loading** as **raw text** using Vite's raw text import capability or fetch API. Do not execute the file, only load its content as text.

4. **Implement syntax highlighting** using a lightweight JavaScript syntax highlighter (consider react-syntax-highlighter or similar) for JavaScript/JSX code.

5. **Render the Code Page with**:
   * A clear heading that includes Task Title, Exam Code, Year, and the human-readable Solution label
   * A read-only, syntax-highlighted view of `App.jsx`
   * A **Copy** action that copies the entire file content to the clipboard
   * File breadcrumb/path display so learners understand the structure
   * Navigation links to **Task description** and **App** for the same task/solution

6. **Handle error cases**:
   * If task or solution is invalid → show a concise "Not Found" message and link back to Home or Task Description
   * If file fails to load → show an error state with a retry button and a link back

7. **Confirm accessibility and UX basics**:
   * Code block is keyboard navigable
   * Long lines wrap or can be horizontally scrolled
   * Clear contrast and legible font sizing

 **Acceptance criteria** :

* Visiting `/code/<taskId>/<solutionType>` shows the correct task/solution metadata and the raw text of `App.jsx`.
* The copy action places the full file content onto the clipboard.
* Invalid task/solution parameters produce a clear, navigable error state.
* No custom console components or overlays are introduced.

 **Deliverables** :

* A working **Code Page** that reliably loads and displays the raw `App.js` source with syntax highlighting and a copy-to-clipboard feature.
* Brief inline comments documenting the file path convention and the raw-loading approach.
