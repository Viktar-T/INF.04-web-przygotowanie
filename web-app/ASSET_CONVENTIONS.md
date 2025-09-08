# Asset Placement and Referencing Conventions

This document describes how assets are organized and referenced in the web-app project.

## Asset Organization

### Task-Specific Assets
Task-specific assets are kept in their original locations within the task folder structure:

```
src/tasks/<taskId>/
├── problem.md                    # Task description markdown
├── img/                          # Task reference images
│   ├── image-1.png
│   └── ...
├── pliki3/                       # Additional task assets (2025 gallery)
│   ├── obraz1.jpg
│   ├── obraz2.jpg
│   └── ...
└── solutions/
    └── <solutionType>/
        ├── App.jsx               # Solution component
        ├── App.css               # Solution-specific styles
        └── meta.json             # Solution metadata
```

### Asset Types

1. **Reference Images** (`img/` folder)
   - Used in task descriptions (problem.md)
   - Show expected UI/functionality
   - Referenced in markdown as `![alt](img/image.png)`

2. **Data Assets** (`pliki3/` folder - 2025 gallery task)
   - Contains actual data files for solutions
   - Images used by the running application
   - Referenced in solution code as relative paths

3. **Solution Assets** (within solution folders)
   - CSS files specific to solutions
   - Any additional assets needed by the solution
   - Referenced using relative imports in solution code

## Referencing Conventions

### In Markdown Files (problem.md)
Images in markdown files are referenced using relative paths:

```markdown
![Task Screenshot](img/image-1.png)
![Gallery Example](pliki3/obraz1.jpg)
```

The MarkdownRenderer component automatically resolves these paths to:
- `/src/tasks/<taskId>/img/image-1.png`
- `/src/tasks/<taskId>/pliki3/obraz1.jpg`

### In Solution Code (App.jsx)
Assets are referenced using relative imports or paths:

```javascript
// CSS imports
import './App.css';

// Image references (for 2025 gallery)
const imagePath = `pliki3/obraz${id}.jpg`;

// Data file imports
import dataFile from './data.txt?raw';
```

### Path Resolution Rules

1. **Absolute paths** (starting with `/`) - used as-is
2. **External URLs** (starting with `http`) - used as-is  
3. **Relative paths** - resolved relative to task folder:
   - `img/image.png` → `/src/tasks/<taskId>/img/image.png`
   - `pliki3/obraz1.jpg` → `/src/tasks/<taskId>/pliki3/obraz1.jpg`
   - `./img/image.png` → `/src/tasks/<taskId>/img/image.png`

## Vite Asset Handling

The project uses Vite for asset bundling. Key considerations:

1. **Static Assets**: Images and files in task folders are served as static assets
2. **Raw Text Imports**: Use `?raw` suffix for importing text files
3. **Dynamic Imports**: Use dynamic imports for solution components
4. **Asset Optimization**: Vite automatically optimizes and serves assets

## Best Practices

1. **Keep assets in task folders** - Don't move to public/ directory
2. **Use descriptive filenames** - Make asset purposes clear
3. **Optimize images** - Use appropriate formats and sizes
4. **Document in meta.json** - Include asset information in solution metadata
5. **Test asset loading** - Verify all assets load correctly in development

## Error Handling

The MarkdownRenderer includes fallback handling for missing images:

- Shows placeholder with error information
- Displays expected vs actual paths
- Gracefully handles network errors
- Maintains page layout when images fail to load

## Examples

### 2022 Task (Course Registration)
```
src/tasks/2022-02-22-06/
├── img/
│   └── image-1.png              # Reference screenshot
└── solutions/
    └── controlled-useState/
        └── App.jsx              # References Bootstrap CSS
```

### 2025 Task (Photo Gallery)
```
src/tasks/2025-01-25-01/
├── img/
│   ├── Obraz-2.png             # Reference images
│   ├── Obraz-3.png
│   └── Obraz-4.png
├── pliki3/                     # Gallery data
│   ├── obraz1.jpg              # Gallery images
│   ├── obraz2.jpg
│   └── ...
└── solutions/
    └── gallery-basic/
        ├── App.jsx             # References pliki3/ images
        └── App.css             # Gallery-specific styles
```

This organization ensures that:
- Assets remain self-contained within tasks
- Solutions can access their required data
- Markdown descriptions can reference images
- The build process handles all assets correctly
