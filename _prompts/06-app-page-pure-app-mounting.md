 **Goal** : Implement the **App Page** that mounts and runs the **pure web app** for the requested task and solution. The page must dynamically resolve and load `src/tasks/<taskId>/solutions/<solutionType>/App.js` and render it without additional UI layers.

 **Constraints** :

* Language: **JavaScript** only.
* **Do not** create or use any custom console panels or overlays. Students will inspect behavior using  **browser DevTools** .
* Use the route `/app/:taskId/:solutionType`.
* Task/solution validity and defaults come from `src/data/tasks.index.js`.
* Each solution is self-contained; it may import its own CSS and assets relative to its solution folder.

 **Current Project State** :

* ✅ Routing system is working correctly with all required routes
* ✅ HomePage is fully implemented with FilterBar, TaskCard, and filtering logic
* ✅ Task data registry is complete with proper field structure (taskId, skillTags, solutions)
* ✅ Task folders exist with solution folders and App.jsx files for all solutions
* ✅ Bootstrap integration and basic styling is complete
* ❌ AppPage exists but only shows placeholder content
* ❌ No dynamic loading of solution App.jsx files
* ❌ No component mounting/unmounting logic
* ❌ No loading states or error handling for dynamic imports
* ❌ Solutions exist but are not being rendered

 **Actions** :

1. **Replace placeholder AppPage** with full implementation that reads `taskId` and `solutionType` from the route and resolves both against the registry.
   * If `taskId` is unknown → show a **Not Found** message with a link back to Home.
   * If `solutionType` is unknown for the given task → either redirect to the task's **default solution** (first in registry) or show a clear error with a link back to the task's description.

2. **Implement dynamic loading** of the solution's `App.jsx` from `src/tasks/<taskId>/solutions/<solutionType>/App.jsx`.
   * Use React.lazy() and Suspense for dynamic imports
   * Ensure the component mounts cleanly and **unmounts/remounts** when route params change, so state does not leak between solutions
   * Allow the solution to import its own CSS and use any assets listed in its folder or `meta.json`

3. **Render only the solution app** (plus minimal page chrome like a heading or breadcrumb if desired). **Do not** add custom consoles, overlays, or wrappers that alter behavior.

4. **Provide basic loading and error UI**: a lightweight "Loading app…" message during dynamic import, and a concise error state if loading fails.

5. **Handle component lifecycle**: ensure proper cleanup when switching between solutions to prevent memory leaks and state pollution.

6. **Manual testing checklist**:
   * Console logging is visible **in DevTools** when the solution logs (no extra UI).
   * Navigating between `/app/<task>/<solutionA>` and `/app/<task>/<solutionB>` swaps implementations and resets state.
   * Assets (images, CSS) referenced by the solution load correctly.
   * Deep link works (directly opening an `/app/...` URL).

 **Acceptance criteria** :

* Valid `taskId` + `solutionType` routes mount the correct solution app.
* Invalid params are handled (redirect to default or show a clear, navigable error).
* No custom console components or overlays; all inspection is via  **browser DevTools** .
* Switching solutions for the same task re-mounts cleanly with no shared state artifacts.
* Direct navigation to any valid `/app/...` URL works.

 **Deliverables** :

* A working **App Page** that dynamically mounts the selected solution’s `App.js` with minimal chrome, robust loading/error handling, and zero custom console UI.
