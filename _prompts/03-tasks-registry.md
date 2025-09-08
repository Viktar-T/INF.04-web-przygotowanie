 **Goal** : Create a centralized registry of tasks and solutions that the UI can read to build lists, filters, and links. Also create fixed filter vocabularies (year, skills).

 **Constraints** :

* Language: **JavaScript** only.
* **Do not** add any custom console components or overlays.
* Registry must be **data-only** (no imports or dynamic logic in this step).
* Keep keys stable, lowercase/kebab-case for IDs.

 **Current Project State** :

* ✅ Basic task data exists in `src/data/tasks.index.js` but needs restructuring
* ✅ Filter data exists in `src/data/filters.js` but needs restructuring  
* ❌ Current data structure doesn't match UI requirements
* ❌ Missing `skillTags` field in task objects
* ❌ Filter structure doesn't match required YEARS/SKILLS format
* ❌ Solution structure needs to be standardized

 **Inputs (initial tasks to register now)** :

* Task **2022-02-22-06** ("Zapisy na kursy") — exam code **INF.04-02-22.06-SG** — year **2022** — skills include: `forms`, `state`, `refs`, `bootstrap`, `console.log`.
  * Solutions:
    * `controlled-useState` (label: "Controlled form (useState)")
    * `uncontrolled-useRef` (label: "Uncontrolled form (useRef)")
* Task **2023-03-23-06** — exam code **INF.04-03-23.06-SG** — year **2023** — skills include: `forms`, `bootstrap`, `console.log`.
  * Solutions:
    * `basic-form` (label: "Basic form")
* Task **2025-01-25-01** — exam code **INF.04-01-25.01-SG** — year **2025** — skills include: `arrays`, `filtering`, `images`, `state`, `bootstrap`.
  * Solutions:
    * `gallery-basic` (label: "Gallery basic")

 **Actions** :

1. **Update `src/data/tasks.index.js`** to use the correct field structure:
   * `taskId` (e.g., `2025-01-25-01`) - **RENAME from current `id`**
   * `title` (human-readable name) - **KEEP current field**
   * `examCode` (e.g., `INF.04-01-25.01-SG`) - **KEEP current field**
   * `year` (number) - **KEEP current field**
   * `skillTags` (array of strings from controlled vocabulary) - **ADD NEW FIELD**
   * `solutions` (array of `{ solutionType, label }`) - **RESTRUCTURE current solutions**
     * `solutionType` is kebab-case (e.g., `controlled-useState`) - **RENAME from current `id`**
     * `label` is the dropdown text shown to users - **RENAME from current `name`**
2. **Ensure each task has at least one solution** and that **the first solution is the default**
3. **Update `src/data/filters.js`** to export the required structure:
   * `YEARS` (unique years present in tasks, sorted desc) - **RENAME from current `years`**
   * `SKILLS` (controlled vocabulary for tagging and filtering) - **RENAME from current `skills`**
4. **Validate that all tasks use only skills from `SKILLS`** to keep filtering consistent
5. **Add inline comments** describing each field and naming conventions

 **Required Data Structure** :

```javascript
// tasks.index.js
export const tasks = [
  {
    taskId: '2022-02-22-06',
    title: 'Course Registration Form',
    examCode: 'INF.04-02-22.06-SG',
    year: 2022,
    skillTags: ['forms', 'state', 'refs', 'bootstrap', 'console.log'],
    solutions: [
      { solutionType: 'controlled-useState', label: 'Controlled form (useState)' },
      { solutionType: 'uncontrolled-useRef', label: 'Uncontrolled form (useRef)' }
    ]
  }
  // ... other tasks
];

// filters.js
export const YEARS = [2025, 2023, 2022]; // sorted desc
export const SKILLS = ['forms', 'state', 'refs', 'bootstrap', 'console.log', 'arrays', 'filtering', 'images'];
```

 **Acceptance criteria** :

* `tasks.index.js` exports tasks with correct field names (`taskId`, `skillTags`, `solutions` with `solutionType`/`label`)
* The **first solution per task** is the intended default for the Home card dropdown
* `filters.js` exports `YEARS` and `SKILLS` (not `years` and `skills`)
* All tasks use only skills from the `SKILLS` controlled vocabulary
* No code that fetches files or mounts components— **data only**
* All IDs and solution keys are stable, kebab-case, and unique

 **Deliverables** :

* Updated `src/data/tasks.index.js` with correct field structure and skill tags
* Updated `src/data/filters.js` with `YEARS` and `SKILLS` exports
* Inline comments explaining the data structure and how to add new tasks safely
