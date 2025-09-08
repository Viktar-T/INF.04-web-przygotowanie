# Project Brief

## Tech & Constraints

* Use  **JavaScript** .
* Students will inspect behavior using  **browser DevTools** .
* **Do not** create or use `ConsolePane.jsx` (or any custom console panel).

## Pages

There are four page types:

1. **Home Page**

* Shows a **list of exam tasks** as cards.
* Each card displays:
  * **Title** (e.g., “Zapisy na kursy”)
  * **Exam code** (e.g., “INF.04-02-22.06”)
  * **Year** (e.g., “2022”)
  * **Skill tags** (e.g., `forms`, `console.log`, `bootstrap`)
* Each card contains:
  * A **dropdown** to choose a **solution type**
    * Default: **“Controlled form (useState)”**
    * Alternative(s): e.g., **“Uncontrolled form (useRef)”**
  * Buttons:  **“Task description”** ,  **“App”** , **“Code”**
    * “App” and “Code” must open pages  **for the currently selected solution** .
* A **search/filter bar** at the top:
  * Filter by **year**
  * Filter by **skill**
  * (Optional) free-text search

2. **App Page** (opened via “App”)

* Displays the **pure web app** for the chosen task & solution.
* No custom consoles or overlays. Students use  **DevTools** .

3. **Code Page** (opened via “Code”)

* Displays the **source code** from the related `App.js` of the chosen task & solution.

4. **Task Description Page** (opened via “Task description”)

* Renders **markdown** content loaded from the task’s `.md` file.

## Navigation / Routing (suggested, not mandatory)

* `/` → Home
* `/task/:taskId` → Task Description Page
* `/app/:taskId/:solutionType` → App Page
* `/code/:taskId/:solutionType` → Code Page

## Data Model (suggested, not mandatory)

<pre class="overflow-visible!" data-start="1689" data-end="2339"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"id"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"title"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"examCode"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"year"</span><span>:</span><span></span><span>2022</span><span>,</span><span>
  </span><span>"skills"</span><span>:</span><span></span><span>[</span><span>"forms"</span><span>,</span><span></span><span>"console.log"</span><span>,</span><span></span><span>"bootstrap"</span><span>]</span><span>,</span><span>
  </span><span>"solutions"</span><span>:</span><span></span><span>[</span><span>
    </span><span>{</span><span>
      </span><span>"type"</span><span>:</span><span></span><span>"controlled"</span><span>,</span><span> 
      </span><span>"label"</span><span>:</span><span></span><span>"Controlled form (useState)"</span><span>,</span><span>
      </span><span>"appPath"</span><span>:</span><span></span><span>"/app/:taskId/controlled"</span><span>,</span><span>
      </span><span>"codePath"</span><span>:</span><span></span><span>"/code/:taskId/controlled"</span><span>,</span><span>
      </span><span>"sourceFile"</span><span>:</span><span></span><span>"App.js"</span><span>,</span><span>
      </span><span>"descriptionMd"</span><span>:</span><span></span><span>"task.md"</span><span>
    </span><span>}</span><span>,</span><span>
    </span><span>{</span><span>
      </span><span>"type"</span><span>:</span><span></span><span>"uncontrolled"</span><span>,</span><span>
      </span><span>"label"</span><span>:</span><span></span><span>"Uncontrolled form (useRef)"</span><span>,</span><span>
      </span><span>"appPath"</span><span>:</span><span></span><span>"/app/:taskId/uncontrolled"</span><span>,</span><span>
      </span><span>"codePath"</span><span>:</span><span></span><span>"/code/:taskId/uncontrolled"</span><span>,</span><span>
      </span><span>"sourceFile"</span><span>:</span><span></span><span>"App.js"</span><span>,</span><span>
      </span><span>"descriptionMd"</span><span>:</span><span></span><span>"task.md"</span><span>
    </span><span>}</span><span>
  </span><span>]</span><span>
</span><span>}</span></span></code></div></div></pre>
