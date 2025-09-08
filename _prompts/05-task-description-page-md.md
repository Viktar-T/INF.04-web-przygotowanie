 **Goal** : Implement the **Task Description Page** that renders the official task markdown for a given `:taskId`. The page must read `problem.md` from `src/tasks/<taskId>/problem.md`, display it with proper formatting, and show basic task metadata (title, exam code, year).

 **Constraints** :

* Language: **JavaScript** only.
* **Do not** create or use any custom console panels or overlays.
* Use the existing routes: `/task/:taskId`.
* Read task metadata from `src/data/tasks.index.js`.
* Markdown source is **local** (`problem.md`) per task folder; do not fetch remote content.
* Support standard markdown features: headings, lists, emphasis, links, images, and simple tables.

 **Current Project State** :

* ✅ Routing system is working correctly with all required routes
* ✅ HomePage is fully implemented with FilterBar, TaskCard, and filtering logic
* ✅ Task data registry is complete with proper field structure (taskId, skillTags, solutions)
* ✅ FilterBar and TaskCard components are fully functional
* ✅ Bootstrap integration and basic styling is complete
* ✅ Task folders exist with problem.md files for all 3 tasks
* ❌ TaskDescriptionPage exists but only shows placeholder content
* ❌ MarkdownRenderer component exists but not implemented
* ❌ No markdown rendering functionality
* ❌ No dynamic loading of problem.md files

 **Actions** :

1. **Replace placeholder TaskDescriptionPage** with full implementation that reads `taskId` from the route and resolves the task using the registry (`tasks.index.js`). If not found, render a simple **Not Found** message with a link back to Home.

2. **Implement markdown loading** from `src/tasks/<taskId>/problem.md`. Use Vite's raw text import capability or fetch API to load the markdown content. Ensure relative image references work; images live under `public/assets/` when applicable.

3. **Implement MarkdownRenderer component** to properly render markdown content with:
   * Support for headings, lists, emphasis, links, images, and simple tables
   * Proper styling for readability (body width, spacing, lists, tables)
   * Image path resolution for task-specific images

4. **Render the page with**:
   * A heading area showing **Task Title**, **Exam code**, **Year** (from the registry)
   * The **markdown content** of `problem.md`, styled for readability
   * Navigation links to App and Code pages for the task's solutions
   * (Optional) A small table of contents if the markdown has multiple sections

5. **Ensure accessibility and UX basics**: page title in the document `<title>`, headings are semantic, links are keyboard-friendly, and images include alt text when provided in markdown.

6. **Handle failure states gracefully**: if `problem.md` can't be loaded, show a clear error with a link back to Home.

7. **Validate that no custom console UI** appears on this page. Students will use DevTools elsewhere; this page is purely documentation.

 **Acceptance criteria** :

* Visiting `/task/2022-02-22-06`, `/task/2023-03-23-06`, `/task/2025-01-25-01` correctly shows each task’s metadata and rendered markdown.
* Markdown formatting is legible (headings, lists, tables, links, images).
* Not-found and load-error cases are handled and navigable.
* No custom console components or overlays.

 **Deliverables** :

* A working **Task Description Page** that renders `problem.md` for any valid `taskId`.
* Brief inline comments documenting where markdown files are expected and how images should be placed (e.g., `public/assets/…`).
