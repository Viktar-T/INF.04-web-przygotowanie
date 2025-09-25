======for Task 01 — Course Waitlist & Capacity - +20% Difficulty=========

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\course-waitlist-capacity and all files inside.

Implement course-waitlist-capacity-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 01 — Course Waitlist & Capacity** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Disable the course's **Zapisz** button when the course is full.
- Show a dynamic badge: **Pozostało: N** (updates immediately).
- Persist `enrolled` counts in `localStorage` (load on mount).

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make course-waitlist-capacity-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"localStorage"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `course-waitlist-capacity-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `localStorage`, `conditional-rendering`, `validation`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `course-waitlist-capacity-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `course-waitlist-capacity-advance`
- **Title**: "Course Waitlist & Capacity (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 4
- **Skills**: forms, state, bootstrap, console.log, capacity-management, localStorage, conditional-rendering, validation

**Result**: The course-waitlist-capacity-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 02 — Movie Watchlist with Rating - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\movie-watchlist and all files inside.

Implement movie-watchlist-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 02 — Movie Watchlist with Rating** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Show per-genre counters (e.g., "Dramat: 3").
- Add a genre filter dropdown to show only selected genre entries.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make movie-watchlist-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"genre-filtering"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `movie-watchlist-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `genre-filtering`, `conditional-rendering`, `validation`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `movie-watchlist-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `movie-watchlist-advance`
- **Title**: "Movie Watchlist with Rating (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 5
- **Skills**: forms, state, bootstrap, console.log, arrays, duplicate-detection, genre-filtering, conditional-rendering, validation

**Result**: The movie-watchlist-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 03 — Tag-Filtered Gallery (Chips) - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\tag-filtered-gallery and all files inside.

Implement tag-filtered-gallery-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 03 — Tag-Filtered Gallery (Chips)** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Add a **Pobierz** button on each image that increments a per-image download counter (state + `localStorage`).

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make tag-filtered-gallery-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"download-counter"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `tag-filtered-gallery-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `download-counter`, `localStorage`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `tag-filtered-gallery-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `tag-filtered-gallery-advance`
- **Title**: "Tag-Filtered Gallery (Chips) (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 6
- **Skills**: arrays, filtering, state, bootstrap, console.log, conditional-rendering, download-counter, localStorage

**Result**: The tag-filtered-gallery-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 04 — Single-Answer Quiz - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\single-answer-quiz and all files inside.

Implement single-answer-quiz-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 04 — Single-Answer Quiz** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Add a 30-second countdown; when it reaches 0, disable inputs and log `"Czas minął"`.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make single-answer-quiz-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"countdown-timer"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `single-answer-quiz-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `countdown-timer`, `timers`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `single-answer-quiz-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `single-answer-quiz-advance`
- **Title**: "Single-Answer Quiz (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 7
- **Skills**: forms, state, bootstrap, console.log, validation, countdown-timer, timers, conditional-rendering

**Result**: The single-answer-quiz-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 05 — Mini Shop Line Total - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\mini-shop-line-total and all files inside.

Implement mini-shop-line-total-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 05 — Mini Shop Line Total** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Show VAT (23%) and grand total below the subtotal, updated live.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make mini-shop-line-total-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"vat-calculations"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `mini-shop-line-total-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `vat-calculations`, `calculations`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `mini-shop-line-total-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `mini-shop-line-total-advance`
- **Title**: "Mini Shop Line Total (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 8
- **Skills**: forms, state, bootstrap, console.log, calculations, arrays, vat-calculations, conditional-rendering

**Result**: The mini-shop-line-total-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 06 — Parking Meter - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\parking-meter and all files inside.

Implement parking-meter-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 06 — Parking Meter** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Clamp minutes to 0–180.
- Show inline validation and disable button when invalid.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make parking-meter-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"input-validation"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `parking-meter-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `input-validation`, `calculations`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `parking-meter-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `parking-meter-advance`
- **Title**: "Parking Meter (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 9
- **Skills**: forms, state, bootstrap, console.log, calculations, validation, input-validation, conditional-rendering

**Result**: The parking-meter-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 07 — Appointment Picker - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\appointment-picker and all files inside.

Implement appointment-picker-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 07 — Appointment Picker** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Disable past dates/times dynamically and keep the submit button disabled until valid.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make appointment-picker-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"date-time-validation"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `appointment-picker-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `date-time-validation`, `date-time`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `appointment-picker-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `appointment-picker-advance`
- **Title**: "Appointment Picker (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 10
- **Skills**: forms, state, bootstrap, console.log, date-time, validation, date-time-validation, conditional-rendering

**Result**: The appointment-picker-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 08 — Feedback Form with Counter - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\feedback-form-counter and all files inside.

Implement feedback-form-counter-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 08 — Feedback Form with Counter** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Counter changes color when ≤ 30 characters remain.
- Disable submit if email fails a simple pattern check.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make feedback-form-counter-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"email-validation"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `feedback-form-counter-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `email-validation`, `character-count`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `feedback-form-counter-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `feedback-form-counter-advance`
- **Title**: "Feedback Form with Counter (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 11
- **Skills**: forms, state, bootstrap, console.log, validation, character-count, email-validation, conditional-rendering

**Result**: The feedback-form-counter-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 09 — Searchable List - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\searchable-list and all files inside.

Implement searchable-list-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 09 — Searchable List** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Highlight matching substrings within names (wrap match in `<mark>` visually).

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make searchable-list-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"text-highlighting"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `searchable-list-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `text-highlighting`, `search`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `searchable-list-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `searchable-list-advance`
- **Title**: "Searchable List (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 12
- **Skills**: arrays, filtering, state, bootstrap, console.log, search, text-highlighting, conditional-rendering

**Result**: The searchable-list-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 10 — Tabs (Nav-Pills) - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\tabs-nav-pills and all files inside.

Implement tabs-nav-pills-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 10 — Tabs (Nav-Pills)** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Persist the last active tab in `localStorage` and restore on load.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make tabs-nav-pills-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"tab-persistence"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `tabs-nav-pills-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `tab-persistence`, `localStorage`, `navigation`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `tabs-nav-pills-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `tabs-nav-pills-advance`
- **Title**: "Tabs (Nav-Pills) (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 13
- **Skills**: state, bootstrap, console.log, conditional-rendering, navigation, tab-persistence, localStorage

**Result**: The tabs-nav-pills-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 11 — FAQ Accordion - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\faq-accordion and all files inside.

Implement faq-accordion-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 11 — FAQ Accordion** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Add "Otwórz wszystkie / Zamknij wszystkie" with correct state synchronization.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make faq-accordion-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"bulk-actions"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `faq-accordion-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `bulk-actions`, `accordion`, `conditional-rendering`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `faq-accordion-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `faq-accordion-advance`
- **Title**: "FAQ Accordion (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 14
- **Skills**: state, bootstrap, console.log, conditional-rendering, accordion, bulk-actions

**Result**: The faq-accordion-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== for Task 12 — Stopwatch - +20% Difficulty Option ====

Analyze the structure of **`web-app\public\tasks\2022-02-22-06`** and all files inside.

Analyse web-app\src\tasks\stopwatch and all files inside.

Implement stopwatch-advance with +20% Difficulty Option with a **similar folder structure** and create both **`problem.md`** and **`App.js`** for:

**Task 12 — Stopwatch** , (from `@react-exam-24tasks.md`).

+20% Difficulty Option

- Persist last elapsed value and laps in `localStorage` and restore on load.

The **`problem.md`** file should follow the same format and style as  **`web-app\public\tasks\2022-02-22-06\problem.md`** .

The **solution (`App.js`)** should implement the application.

### General Standards (INF.04 exam requirements):

* **Single Component Structure** — Build the app as one main component.
* **Bootstrap Integration** — Apply Bootstrap classes for all styling.
* **Console Logging** — Log all required outputs to the console for verification.
* **Form Validation** — Include proper form handling and validation for inputs.
* **Clean Code** — Use meaningful variable names and proper formatting.
* **State Management** — Utilize React hooks (`useState`, `useEffect`) for all state handling.
* **Conditional Rendering** — Show or hide UI elements depending on state.
* **Array Manipulation** — Dynamically work with arrays in state (e.g., adding, updating, filtering).

**UPDATE: Make stopwatch-advance task visible on home page**

Update the following files to register the new task:

1. **`web-app/src/data/filters.js`**:
   - Add **"Level 3"** to `COMPLEXITY_LEVELS` array
   - Add **"timer-persistence"** to the `SKILLS` array

2. **`web-app/src/data/tasks.index.js`**:
   - Add new task entry for `stopwatch-advance`
   - Set complexity level to **"Level 3"**
   - Add appropriate skill tags including `timer-persistence`, `localStorage`, `intervals`, `timers`
   - Configure the solution component mapping

3. **`web-app/src/data/solutionComponents.js`**:
   - Add the dynamic import mapping for the new task solution
   - Register `stopwatch-advance-controlled-useState` component

**Task Configuration:**
- **Task ID**: `stopwatch-advance`
- **Title**: "Stopwatch (Advanced)"
- **Complexity Level**: **Level 3** (now available in filters)
- **Year**: 2024
- **Week**: 15
- **Skills**: state, refs, bootstrap, console.log, intervals, timers, timer-persistence, localStorage

**Result**: The stopwatch-advance task is now fully integrated into the web application and visible on the home page with Level 3 complexity filtering enabled!

============== [CONTINUE WITH REMAINING TASKS 13-24 FOLLOWING SAME PATTERN] ==============

[Note: The remaining tasks 13-24 from react-exam-24tasks.md should follow the same pattern as above, with each task having its own section including: analysis instructions, implementation requirements, +20% difficulty options, problem.md and App.js creation instructions, general standards, home page integration steps, and task configuration details.]