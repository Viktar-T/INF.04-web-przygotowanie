# Troubleshooting Guide

This guide helps resolve common issues when working with the Exam Tasks Web Application.

## 🚨 Common Issues

### Development Issues

#### 1. Development Server Won't Start

**Problem**: `npm run dev` fails or port is already in use.

**Solutions**:
```bash
# Kill process using port 5173
npx kill-port 5173

# Use different port
npm run dev -- --port 3000

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 2. Build Failures

**Problem**: `npm run build` fails with errors.

**Solutions**:
```bash
# Install missing dependencies
npm install --save-dev terser

# Clear build cache
rm -rf dist node_modules/.vite

# Check for syntax errors
npm run lint

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 3. Hot Module Replacement Not Working

**Problem**: Changes don't reflect in browser automatically.

**Solutions**:
- Check browser console for errors
- Restart development server
- Clear browser cache
- Check file paths and imports

#### 4. Import/Export Errors

**Problem**: Module not found or import errors.

**Solutions**:
- Verify file paths are correct
- Check file extensions (.jsx vs .js)
- Ensure proper export statements
- Check for circular dependencies

### Runtime Issues

#### 5. Images Not Loading

**Problem**: Images in markdown or solutions don't display.

**Solutions**:
- Verify image files exist in correct folders
- Check image paths in markdown files
- Ensure proper file extensions (.jpg, .png, .gif)
- Check browser network tab for 404 errors

**Example Fix**:
```markdown
<!-- Correct -->
![Image](img/image-1.png)

<!-- Incorrect -->
![Image](img/image-1)  <!-- Missing extension -->
```

#### 6. Solution Components Not Loading

**Problem**: Dynamic imports fail or components don't render.

**Solutions**:
- Verify solution folder structure:
  ```
  src/tasks/taskId/solutions/solutionType/App.jsx
  ```
- Check that App.jsx exists and exports default
- Verify task registry has correct solutionType
- Check browser console for import errors

**Example Fix**:
```javascript
// Ensure proper export in App.jsx
export default App;

// Check task registry
{
  solutionType: 'correct-name',  // Must match folder name
  label: 'Solution Label'
}
```

#### 7. Console Outputs Not Appearing

**Problem**: Required console.log statements not visible.

**Solutions**:
- Open browser DevTools (F12)
- Go to Console tab
- Interact with the solution to trigger console outputs
- Check for JavaScript errors preventing execution
- Verify console.log statements are in correct functions

**Example**:
```javascript
// Ensure console.log is in event handlers
const onSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted'); // This should appear in console
};
```

#### 8. Routing Issues

**Problem**: Navigation doesn't work or shows 404 errors.

**Solutions**:
- Check route definitions in router.jsx
- Verify URL parameters match route patterns
- Ensure all route components are properly imported
- Check for typos in route paths

**Example Fix**:
```javascript
// Correct route definition
<Route path="/task/:taskId" element={<TaskDescriptionPage />} />

// URL should be: /task/2022-02-22-06
```

### Styling Issues

#### 9. Bootstrap Styles Not Applied

**Problem**: Components don't have Bootstrap styling.

**Solutions**:
- Verify Bootstrap CSS is imported in main.jsx
- Check for CSS conflicts in globals.css
- Ensure proper Bootstrap class names
- Check for missing Bootstrap JavaScript

**Example Fix**:
```javascript
// main.jsx should include
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

#### 10. Responsive Design Issues

**Problem**: Layout breaks on mobile or tablet.

**Solutions**:
- Check Bootstrap grid classes
- Verify viewport meta tag in index.html
- Test on different screen sizes
- Use browser dev tools responsive mode

**Example Fix**:
```html
<!-- Ensure viewport meta tag exists -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Performance Issues

#### 11. Slow Loading

**Problem**: Application loads slowly.

**Solutions**:
- Check network tab in DevTools
- Optimize image sizes
- Use production build for testing
- Check for large bundle sizes

**Diagnosis**:
```bash
# Check bundle size
npm run build
# Look for large chunks in output
```

#### 12. Memory Leaks

**Problem**: Application becomes slow over time.

**Solutions**:
- Check for proper cleanup in useEffect
- Remove event listeners on unmount
- Avoid memory leaks in solution components
- Use React DevTools Profiler

**Example Fix**:
```javascript
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## 🔧 Advanced Troubleshooting

### Debugging Production Builds

#### 1. Enable Source Maps
```bash
# Build with source maps for debugging
npm run build -- --sourcemap
```

#### 2. Check Build Output
```bash
# Analyze bundle contents
npm run build
# Check dist/ folder for all required files
```

#### 3. Test Production Locally
```bash
npm run build
npm run preview
# Test all functionality in production mode
```

### Browser-Specific Issues

#### 1. Internet Explorer Compatibility
- Use modern browsers (Chrome, Firefox, Safari, Edge)
- IE is not supported due to modern JavaScript features

#### 2. Safari Issues
- Check for WebKit-specific CSS issues
- Verify flexbox and grid support
- Test on actual Safari browser

#### 3. Mobile Browser Issues
- Test on actual devices, not just dev tools
- Check touch event handling
- Verify viewport configuration

### Network Issues

#### 1. CORS Errors
- Check if running on HTTPS vs HTTP
- Verify asset loading from correct domain
- Check for mixed content warnings

#### 2. Asset Loading Failures
- Verify file paths are correct
- Check for case sensitivity issues
- Ensure proper MIME types

## 🛠️ Development Tools

### Useful Commands

```bash
# Check for linting errors
npm run lint

# Fix auto-fixable linting errors
npm run lint -- --fix

# Check dependency vulnerabilities
npm audit

# Update dependencies
npm update

# Clear all caches
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Browser DevTools

#### 1. Console Tab
- Check for JavaScript errors
- View console.log outputs
- Test JavaScript expressions

#### 2. Network Tab
- Monitor asset loading
- Check for failed requests
- Analyze loading times

#### 3. Elements Tab
- Inspect DOM structure
- Check CSS classes
- Verify Bootstrap styling

#### 4. Sources Tab
- Set breakpoints for debugging
- Step through code execution
- Check variable values

### React DevTools

Install React DevTools browser extension:
- Chrome: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Firefox: [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

Use for:
- Component tree inspection
- Props and state debugging
- Performance profiling

## 📋 Checklist for Common Issues

### Before Reporting Issues

- [ ] Check browser console for errors
- [ ] Verify all dependencies are installed
- [ ] Test in different browsers
- [ ] Check network connectivity
- [ ] Verify file paths and imports
- [ ] Test with fresh browser session
- [ ] Check for typos in code
- [ ] Verify Bootstrap classes are correct

### When Adding New Tasks

- [ ] Verify folder structure matches convention
- [ ] Check task registry entry is correct
- [ ] Ensure solution App.jsx exports default
- [ ] Test markdown rendering
- [ ] Verify image paths in problem.md
- [ ] Check console.log outputs work
- [ ] Test all solution types
- [ ] Verify responsive design

### Before Deployment

- [ ] Run production build successfully
- [ ] Test all routes in production mode
- [ ] Verify all assets load correctly
- [ ] Check responsive design
- [ ] Test on different devices
- [ ] Verify accessibility features
- [ ] Check performance metrics
- [ ] Test error handling

## 🆘 Getting Help

### Self-Help Resources

1. **Check this troubleshooting guide first**
2. **Review the README.md for setup instructions**
3. **Check the QA_REPORT.md for known issues**
4. **Review ASSET_CONVENTIONS.md for file organization**

### When to Seek Help

Seek help if you encounter:
- Build errors that persist after following solutions
- Runtime errors that don't appear in this guide
- Performance issues that can't be resolved
- Browser compatibility issues
- Deployment problems

### Providing Information

When reporting issues, include:
- Browser and version
- Operating system
- Error messages (screenshot or copy/paste)
- Steps to reproduce the issue
- Expected vs actual behavior
- Console output (if applicable)

## 🔄 Maintenance

### Regular Maintenance Tasks

#### Weekly
- Check for dependency updates
- Review error logs
- Test on different browsers

#### Monthly
- Update dependencies
- Review performance metrics
- Check for security vulnerabilities

#### Quarterly
- Review and update documentation
- Test on new browser versions
- Update deployment configurations

### Monitoring

Set up monitoring for:
- Application performance
- Error rates
- User experience metrics
- Security vulnerabilities

---

**Last Updated**: December 2024  
**Version**: 1.0.0
