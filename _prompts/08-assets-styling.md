 **Goal** : Establish consistent styling and static asset organization to match exam visuals and keep solutions self-contained. Connect global styles, optional Bootstrap, and configure image paths (especially for 2025 gallery assets).

 **Constraints** :

* Language: **JavaScript** only.
* Keep styling minimal and  **non-intrusive** ; the focus is the tasks and solutions.
* Assets that belong to tasks must not require network calls.
* No custom console panels or overlays.

 **Current Project State** :

* ✅ Bootstrap CSS is imported and working
* ✅ Basic global styles are in place
* ✅ Task folders exist with images and assets in their original locations
* ✅ Responsive design is working on HomePage
* ✅ Markdown styling is implemented with proper typography
* ✅ Code block styling is implemented with syntax highlighting
* ❌ Image path resolution for markdown needs improvement
* ❌ Task-specific asset organization needs refinement
* ❌ Accessibility and contrast verification needed
* ❌ Bootstrap integration could be enhanced for better consistency

 **Actions** :

1. **Global styles** :

* Finalize `src/styles/globals.css` for basic typography, spacing, layout containers, and responsive behavior.
* Ensure default body margins, container widths, readable line lengths for markdown, and sensible code block styling.

1. **Bootstrap Integration** :

* Enhance Bootstrap integration to keep form controls and layout consistent with exam screenshots.
* Ensure Bootstrap components are properly styled and accessible.
* Do not override Bootstrap defaults heavily; keep it close to stock for authenticity.
* Add Bootstrap JavaScript for interactive components (dropdowns, modals, etc.).

1. **Assets** :

* Keep task-specific assets in their current locations within `src/tasks/<taskId>/` folders.
* Reference assets from solutions using relative paths appropriate for your bundler.
* For the 2025 gallery task, ensure images in `pliki3/` folder are properly accessible.
* Document asset placement and referencing conventions in `meta.json` files.
* Ensure image paths in markdown files resolve correctly to task-specific assets.

1. **Markdown theming** :

* Enhance existing markdown styling for better readability and consistency.
* Ensure headings, lists, tables, and images in the Task Description Page are properly styled.
* Provide adequate spacing and max-width for long documents.
* Improve image path resolution for task-specific assets in markdown files.

1. **Accessibility & responsiveness** :

* Verify color contrast, focus outlines, and keyboard navigation.
* Ensure cards and code blocks behave well on small screens.

 **Acceptance criteria** :

* Global styles applied consistently across Home, Task Description, App, and Code pages.
* Assets load correctly for all tasks, including the 2025 gallery images in their current locations.
* Bootstrap components work properly with JavaScript functionality (dropdowns, etc.).
* Forms and UI elements appear consistent and legible without heavy customization.
* Markdown pages are readable and visually consistent with proper image loading.
* Task-specific assets are accessible from their original locations.

 **Deliverables** :

* Enhanced `globals.css` with improved Bootstrap integration and styling.
* Bootstrap JavaScript integration for interactive components.
* Improved image path resolution for task-specific assets.
* Documentation of asset placement and referencing conventions.
* Enhanced accessibility and responsive design improvements.
