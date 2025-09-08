> **Goal** : Perform a structured QA pass focusing on routing correctness, data integrity, DevTools-based behavior verification, and UX basics across all supported tasks and solutions.
>
> **Constraints** :
>
> * Use **browser DevTools** to verify any required console output and runtime behavior.
> * No custom consoles or overlays should exist anywhere in the app.
> * Test both direct navigation (deep links) and navigation via the UI.
>
> **Current Project State** :
>
> * ✅ HomePage is fully implemented with filtering and navigation
> * ✅ Routing system is working correctly
> * ✅ Task data registry is complete and functional
> * ✅ Bootstrap integration and basic styling is complete
> * ❌ TaskDescriptionPage only shows placeholder content
> * ❌ AppPage only shows placeholder content  
> * ❌ CodePage only shows placeholder content
> * ❌ No markdown rendering functionality
> * ❌ No dynamic solution loading
> * ❌ No source code display functionality
>
> **Actions** :
>
> 1. **Routing & params** :
>
> * Validate that all defined routes render the correct page shells and content.
> * Test invalid `taskId` and `solutionType` on `/task`, `/app`, and `/code` routes (expect clear error states or redirect to defaults).
>
> 1. **Home filters & state** :
>
> * Apply year, skill, and search filters in combinations; confirm results update correctly.
> * Ensure each card’s **solution dropdown** defaults to the first registry entry and persists while on Home.
> * Verify “Task description”, “App”, and “Code” buttons use the  **current dropdown selection** .
>
> 1. **Task Description Page** :
>
> * Confirm `problem.md` renders correctly (headings, lists, tables, images).
> * Check broken links or missing assets.
>
> 1. **App Page (DevTools)** :
>
> * For each solution, interact with the UI and confirm any required `console.log` outputs appear in  **DevTools** .
> * Switch between solutions and ensure state resets and mounts cleanly.
>
> 1. **Code Page** :
>
> * Confirm the correct `App.js` file content is displayed for each task/solution.
> * Test the **Copy** action and verify clipboard contents.
>
> 1. **Performance & accessibility basics** :
>
> * Check first render speed feels acceptable.
> * Verify keyboard navigation and focus order on Home and Code pages.
> * Confirm sufficient color contrast and responsive layout on mobile widths.
>
> 1. **Cross-browser sanity** :
>
> * Test at least two modern browsers and one mobile viewport.
>
> **Acceptance criteria** :
>
> * All routes work, invalid params handled gracefully, and deep links are functional.
> * Filters produce correct subsets; empty-search states are handled cleanly.
> * App Page shows expected behavior with console outputs verifiable in DevTools.
> * Code Page shows the correct file, and Copy works.
> * No custom console components exist anywhere.
>
> **Deliverables** :
>
> * A brief **QA report** listing tested paths, results, and any issues found (with repro steps and suggested fixes).
> * Screenshots or short notes for any rendering or accessibility concerns.
>
