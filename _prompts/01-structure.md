update my current web-app project structure. Do not write business logic yet.

├─ public/
│  └─ assets/
│     └─ 2025/               # (images for gallery task, add later)
└─ src/
   ├─ main.jsx               # app bootstrap
   ├─ styles/
   │  └─ globals.css
   ├─ routing/
   │  └─ router.jsx          # defines routes (Step Two)
   ├─ pages/
   │  ├─ HomePage.jsx
   │  ├─ TaskDescriptionPage.jsx
   │  ├─ AppPage.jsx
   │  └─ CodePage.jsx
   ├─ components/
   │  ├─ TaskCard.jsx
   │  ├─ FilterBar.jsx
   │  ├─ MarkdownRenderer.jsx
   │  ├─ Tag.jsx
   │  └─ Badge.jsx
   ├─ data/
   │  ├─ tasks.index.js      # registry of tasks + solutions (Step Three)
   │  └─ filters.js          # year/skill lists
   └─ tasks/                 # one folder per exam task
      ├─ 2022-02-22-06/
      │  ├─ problem.md
      │  └─ solutions/
      │     ├─ controlled-useState/
      │     │  ├─ App.js
      │     │  └─ meta.json
      │     └─ uncontrolled-useRef/
      │        ├─ App.js
      │        └─ meta.json
      ├─ 2023-03-23-06/
      │  ├─ problem.md
      │  └─ solutions/
      │     └─ basic-form/
      │        ├─ App.js
      │        └─ meta.json
      └─ 2025-01-25-01/
         ├─ problem.md
         └─ solutions/
            └─ gallery-basic/
               ├─ App.js
               └─ meta.json
