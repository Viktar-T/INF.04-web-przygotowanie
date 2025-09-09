# React Exam-Style Tasks — Printable Briefs

> All tasks are self-contained, exam-ready briefs. Each includes a description, requirements, key features, and a +20% difficulty option. Use JavaScript (not TypeScript) and React with Vite unless stated otherwise. Keep solutions focused on a single component unless the task explicitly suggests otherwise.

---

## Task 01 — Course Waitlist & Capacity

### Description
Implement a simple course sign-up form where each course has a capacity and a current enrollment count. When a student submits the form, accept the signup if capacity allows; otherwise, indicate that there are no spots left.

### Requirements
- Inputs: **Imię i nazwisko** (text), **Kurs** (select).
- Predefined courses with fields: `id`, `name`, `capacity`, `enrolled`.
- On submit:
  - If `enrolled < capacity`: increase `enrolled` and log `"Zapisano: {name} na {courseName}"`.
  - Else: log `"Brak miejsc: {courseName}"`.
- Render remaining seats per course.
- Use controlled inputs; no external libraries beyond Bootstrap classes.
- Do not use a backend or async calls.

### Key Features
- Live remaining seats indicator per course.
- Single source of truth for course data (React state).
- Disable submit if form invalid.

### +20% Difficulty Option
- Disable the course’s **Zapisz** button when the course is full.
- Show a dynamic badge: **Pozostało: N** (updates immediately).
- Persist `enrolled` counts in `localStorage` (load on mount).

---

## Task 02 — Movie Watchlist with Rating

### Description
Create a watchlist form to add movies with a chosen genre and rating. Prevent duplicate entries (same title+genre).

### Requirements
- Inputs: **Tytuł** (text), **Gatunek** (select), **Ocena** (1–5, radio).
- On “Dodaj”, log object: `{ tytul, gatunek, ocena }`.
- Prevent duplicates: same title (case-insensitive) and genre cannot be added twice.
- Render a list of added movies.

### Key Features
- Duplicate detection with case-insensitive comparison.
- Clear after submit; focus first input.
- Basic validation with Bootstrap states.

### +20% Difficulty Option
- Show per-genre counters (e.g., “Dramat: 3”).
- Add a genre filter dropdown to show only selected genre entries.

---

## Task 03 — Tag-Filtered Gallery (Chips)

### Description
Display an image gallery with categories. Users toggle category chips (badges) to filter visible images.

### Requirements
- Provided static data: `images = [{ id, src, title, categories: string[] }]`.
- Render category chips; active chips determine which images show.
- After each toggle, log visible image ids as `[1, 5, 9]`.

### Key Features
- Chip toggling UI (Bootstrap badges or btn-outline).
- Efficient filtering of arrays.
- Accessible labels for images.

### +20% Difficulty Option
- Add a **Pobierz** button on each image that increments a per-image download counter (state + `localStorage`).

---

## Task 04 — Single-Answer Quiz

### Description
Show one question with four radio options. The user selects an answer and presses **Sprawdź** to see if it is correct.

### Requirements
- Data: `{ pytanie, odpowiedzi: string[], poprawnyIndex }`.
- Radios are required; on submit, log `"Poprawna"` or `"Błędna"`.
- UI uses Bootstrap cards and buttons.

### Key Features
- Clean controlled radio group.
- Immediate feedback without page reload.
- Disabled submit until an option is chosen.

### +20% Difficulty Option
- Add a 30-second countdown; when it reaches 0, disable inputs and log `"Czas minął"`.

---

## Task 05 — Mini Shop Line Total

### Description
Let users select a product and quantity to compute a line total and keep a running subtotal with VAT.

### Requirements
- Products: `{ id, name, price }` (price is number).
- Inputs: **Produkt** (select), **Ilość** (number, min 1).
- On **Dodaj**, log: `"Pozycja: {name}; ilość: {qty}; suma: {sum.toFixed(2)}"`.
- Render a table of added lines and a subtotal.

### Key Features
- Derived values (line total, subtotal) from state.
- Numeric input constraints.
- Currency formatting with `toFixed`.

### +20% Difficulty Option
- Show VAT (23%) and grand total below the subtotal, updated live.

---

## Task 06 — Parking Meter

### Description
Compute a parking fee based on entered minutes with a base rate plus per-block price.

### Requirements
- Input: **Minuty** (number).
- Fee formula (example): base 2 PLN + 1 PLN per 30-minute block (ceil).
- On **Oblicz**, log a breakdown: `"Min: X; Bloki: Y; Opłata: Z PLN"`.
- Bootstrap form with validation messages.

### Key Features
- Ceiling block arithmetic.
- Clear, readable breakdown string.
- Guard against negative/NaN inputs.

### +20% Difficulty Option
- Clamp minutes to 0–180.
- Show inline validation and disable button when invalid.

---

## Task 07 — Appointment Picker

### Description
Simple appointment booking with name, date, and time. Reject past times.

### Requirements
- Inputs: **Imię**, **Data**, **Godzina**.
- On submit, compose an ISO datetime string and log `{ name, iso }`.
- Reject past times relative to now; show alert.

### Key Features
- Combining date and time inputs.
- Real-time validation vs. current time.
- User-friendly error messaging.

### +20% Difficulty Option
- Disable past dates/times dynamically and keep the submit button disabled until valid.

---

## Task 08 — Feedback Form with Counter

### Description
Collect feedback with a 200-character limit and a live counter.

### Requirements
- Inputs: **Imię**, **Email**, **Komentarz** (textarea, max 200).
- Show live counter “Pozostało: N”.
- On submit, log `{ name, email, comment }`.

### Key Features
- Character counting and visual limit cues.
- Email format check (simple regex).
- Success alert with summary.

### +20% Difficulty Option
- Counter changes color when ≤ 30 characters remain.
- Disable submit if email fails a simple pattern check.

---

## Task 09 — Searchable List

### Description
Filter a static list of 30 names via text input; show count of matches.

### Requirements
- Data: `names: string[]`.
- Input: **Szukaj** (text).
- Case-insensitive substring match; log filtered length after each change.

### Key Features
- Efficient filtering with `toLowerCase`.
- “Liczba wyników: N” indicator.
- Empty search shows all items.

### +20% Difficulty Option
- Highlight matching substrings within names (wrap match in `<mark>` visually).

---

## Task 10 — Tabs (Nav-Pills)

### Description
Create three tabs: **Info**, **Lista**, **Ustawienia**. Persist the active tab in state and report tab changes.

### Requirements
- Use Bootstrap nav-pills.
- Clicking a tab switches visible content.
- Log `"Tab: Info|Lista|Ustawienia"` on switch.

### Key Features
- Visual active state for tabs.
- Conditional rendering of tab panels.
- Keyboard/accessibility-friendly tab controls.

### +20% Difficulty Option
- Persist the last active tab in `localStorage` and restore on load.

---

## Task 11 — FAQ Accordion

### Description
An accordion with three questions; only one panel open at a time.

### Requirements
- Data: `[{ id, title, content }]`.
- Clicking a question opens its panel; close others.
- Log `"Otwórz: {id}"` and `"Zamknij: {id}"` events.

### Key Features
- Controlled single-open accordion.
- Smooth transitions using Bootstrap utilities.
- ARIA attributes for accessibility.

### +20% Difficulty Option
- Add “Otwórz wszystkie / Zamknij wszystkie” with correct state synchronization.

---

## Task 12 — Stopwatch

### Description
Implement a stopwatch with Start, Stop, and Reset; allow lap capture.

### Requirements
- Display elapsed seconds (integer).
- Buttons: **Start**, **Stop**, **Reset**, **Lap**.
- Log lap times as an array `[t1, t2, ...]`.

### Key Features
- Interval management and cleanup.
- Disable **Start** while running.
- Clear laps on reset.

### +20% Difficulty Option
- Persist last elapsed value and laps in `localStorage` and restore on load.

---

## Task 13 — Todo with Priority

### Description
Add tasks with priority and filter visible tasks by priority.

### Requirements
- Inputs: **Zadanie** (text), **Priorytet** (Low/Med/High radios).
- On add, log `{ text, priority }` and render list.
- Filters: three switches to show/hide each priority.

### Key Features
- Filtering logic across multiple categories.
- Badges for visual priority cues.
- Prevent empty tasks; trim whitespace.

### +20% Difficulty Option
- Sort visible tasks by priority order: High → Med → Low.

---

## Task 14 — Star Rating Widget

### Description
Clickable 5-star rating with numeric label.

### Requirements
- Hover preview (temporary), click to set value (1–5).
- Log `"Ocena: N"` on change.
- Keyboard support: Left/Right, Enter to set.

### Key Features
- Accessible star buttons with ARIA/role.
- Distinguish hover vs. committed state.
- Clear visual feedback.

### +20% Difficulty Option
- Add “Wyczyść ocenę” button and log `"Ocena: 0"` when cleared.

---

## Task 15 — Pagination Demo

### Description
Paginate a list of 42 static items with selectable page size.

### Requirements
- Controls: page size select (5/10), **Prev**, **Next**.
- Show “Pozycje X–Y z 42” and render only the current slice.
- Log `"Strona: {n}"` and `"Rozmiar: {k}"` on changes.

### Key Features
- Correct page math and boundaries.
- Disable buttons at bounds.
- Keep page in range when size changes.

### +20% Difficulty Option
- Add direct page input (number) with validation.

---

## Task 16 — Sortable Table (Two Columns)

### Description
Display a table of `{ name, score }`. Clicking a header toggles sort asc/desc.

### Requirements
- Visual sort indicator (▲/▼).
- Default sort by name asc.
- Log `"Sort: field=score dir=desc"` format.

### Key Features
- Stable sorting logic.
- Secondary sort by name on score ties.
- Re-render performance considerations.

### +20% Difficulty Option
- Add a “Reset sort” button to restore default order.

---

## Task 17 — Dependent Dropdowns

### Description
Select a country; then select a city from that country.

### Requirements
- Data: `{ country, cities: string[] }[]`.
- Disable or empty city select until country chosen.
- On submit, log `{ country, city }`.

### Key Features
- Controlled dependency between inputs.
- Placeholder “Wybierz…” options.
- Edge-case: no cities available.

### +20% Difficulty Option
- If a country has no cities, show a non-blocking info alert and allow submitting `{ city: null }` explicitly.

---

## Task 18 — Controlled vs Uncontrolled Toggle

### Description
Render one simple form in either controlled or uncontrolled mode based on a radio toggle.

### Requirements
- Radios: **Controlled** / **Uncontrolled**.
- Show the same inputs in both modes.
- On submit, log values in a consistent shape.

### Key Features
- Demonstrates two React form paradigms.
- Clear state vs. ref usage.
- Unified submit handler.

### +20% Difficulty Option
- In uncontrolled mode, clear native inputs via refs after submit; in controlled mode, clear via state.

---

## Task 19 — Unit Converter (°C ↔ °F)

### Description
Two inputs: Celsius and Fahrenheit. Editing either updates the other.

### Requirements
- Prevent feedback loops and handle empty inputs.
- Round displayed values to 1 decimal.
- Log conversions on each valid change: `"C→F: 20 → 68"` or `"F→C: 86 → 30"`.

### Key Features
- Bidirectional data flow with guards.
- Numeric parsing and rounding.
- Graceful handling of invalid input.

### +20% Difficulty Option
- Add a reset button and a history list of the last five conversions.

---

## Task 20 — Color Preview + Contrast Helper

### Description
Preview a background color with overlaid text and a simple contrast indicator.

### Requirements
- Inputs: **Kolor tła** (`#RRGGBB`) and **Tekst** (string).
- Card preview updates live.
- Compute relative luminance with a simple formula and indicate “OK” vs “Niski kontrast”.

### Key Features
- Live reactive styling.
- Basic color math without libraries.
- Assistive badge for readability.

### +20% Difficulty Option
- Provide a toggle for light/dark text and show which choice has better contrast.

---

## Task 21 — Keyboard Shortcuts

### Description
Support Enter to submit and Esc to clear for a small add-item form.

### Requirements
- Inputs: text only; adds item to a list.
- Enter submits if valid; Esc clears the input.
- Log which shortcut was used: `"Submit: Enter"` or `"Clear: Escape"`.

### Key Features
- Keydown handling and preventing default behavior.
- Focus management returning to the input.
- Validation before submission.

### +20% Difficulty Option
- Disable Enter if input invalid; show inline validation message.

---

## Task 22 — Two-Step Form (Inline Wizard)

### Description
Collect personal data (Step 1) and preferences (Step 2) in a two-step wizard.

### Requirements
- Controls: **Dalej**, **Wstecz**, **Zakończ**.
- Validate each step before moving on.
- On finish, log combined object of both steps.

### Key Features
- Step state and progress indicator (1/2).
- Data preservation when moving back.
- Clear success state on completion.

### +20% Difficulty Option
- Persist intermediate data in `localStorage` and restore on mount.

---

## Task 23 — Random Quote (No Immediate Repeats)

### Description
Display a random quote that cannot repeat immediately. Track views per quote.

### Requirements
- Data: `quotes: string[]`.
- Button **Następny** picks a different quote than current.
- Log index each time: `"Quote: i"`.

### Key Features
- Random selection with exclusion of current index.
- View counts per quote in state.
- Badge the most viewed quote.

### +20% Difficulty Option
- Persist view counts and last shown index in `localStorage`.

---

## Task 24 — Visual Bar List (No Libraries)

### Description
Render horizontal bars representing percentages for items; allow updating a selected item’s value.

### Requirements
- Data: `[{ label, valuePercent }]` (0–100).
- Each row has a bar whose width is `value%`.
- Clicking a bar logs its value: `"Klik: label=value"`.

### Key Features
- Inline styles computed from state.
- Accessible labels and ARIA attributes.
- Input to update a selected item live.

### +20% Difficulty Option
- Validate updates (0–100), show inline errors, and animate width changes smoothly.
