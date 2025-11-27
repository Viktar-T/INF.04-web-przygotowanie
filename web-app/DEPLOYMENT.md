# Deployment Guide

This guide provides comprehensive instructions for deploying the Exam Tasks Web Application to various hosting platforms.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git repository (for automated deployments)

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build process creates a `dist/` folder containing all production-ready files.

## 📦 Build Output

The production build generates the following structure:

```
dist/
├── index.html                 # Main HTML file
├── assets/
│   ├── index-[hash].js       # Main application bundle
│   ├── vendor-[hash].js      # React and core dependencies
│   ├── router-[hash].js      # React Router bundle
│   ├── syntax-[hash].js      # Syntax highlighter bundle
│   ├── index-[hash].css      # Main styles
│   ├── bootstrap-[hash].css  # Bootstrap styles
│   └── App-[hash].js         # Individual solution components
└── vite.svg                  # Favicon
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

Vercel provides excellent support for React applications with automatic deployments.

#### Setup Steps:

1. **Connect Repository**:

   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub/GitLab/Bitbucket
   - Click "New Project"
   - Import your repository
2. **Configure Build Settings**:

   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Root Directory: `web-app` (if deploying from monorepo root)
3. **SPA Routing Configuration**:

   - The project includes `vercel.json` which configures Vercel to handle client-side routing
   - This ensures all routes (e.g., `/task/:taskId`) are served correctly
   - The configuration rewrites all requests to `index.html`, allowing React Router to handle routing
4. **Environment Variables** (if needed):

   - Add any required environment variables in the Vercel dashboard
5. **Deploy**:

   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - You'll get a URL like `https://your-app.vercel.app`

#### Custom Domain:

- Go to Project Settings → Domains
- Add your custom domain
- Configure DNS records as instructed

### 2. GitHub Pages

Deploy directly from your GitHub repository.

#### Setup Steps:

1. **Install gh-pages**:

   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add Deploy Script** to `package.json`:

   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```
3. **Deploy**:

   ```bash
   npm run build
   npm run deploy
   ```
4. **Enable GitHub Pages**:

   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Your site will be available at `https://yourusername.github.io/your-repo-name`

## 🔧 Build Optimization

### Vite Configuration

The project includes optimized Vite configuration for production:

```javascript
// vite.config.js
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          bootstrap: ['bootstrap'],
          syntax: ['react-syntax-highlighter']
        }
      }
    }
  }
})
```

### Bundle Analysis

To analyze bundle size:

```bash
npm run build
# Check the build output for chunk sizes
```

### Performance Optimizations

- **Code Splitting**: Automatic code splitting for solution components
- **Lazy Loading**: Dynamic imports for better performance
- **Asset Optimization**: Optimized images and CSS
- **Caching**: Proper cache headers for static assets

## 🌍 Environment Configuration

### Development Environment

```bash
npm run dev
# Runs on http://localhost:5173
```

### Production Environment

```bash
npm run build
npm run preview
# Runs on http://localhost:4173
```

### Environment Variables

Create `.env` files for different environments:

**.env.local** (development):

```
VITE_APP_TITLE=Exam Tasks (Development)
VITE_APP_API_URL=http://localhost:3000
```

**.env.production** (production):

```
VITE_APP_TITLE=Exam Tasks Web Application
VITE_APP_API_URL=https://api.exam-tasks.com
```

## 🔒 Security Considerations

### Content Security Policy

Add CSP headers to your server configuration:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;
```

### HTTPS

Always use HTTPS in production:

- Most hosting platforms provide free SSL certificates
- Configure redirects from HTTP to HTTPS

### Headers

Configure security headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 Monitoring and Analytics

### Performance Monitoring

- **Lighthouse**: Run Lighthouse audits for performance
- **Web Vitals**: Monitor Core Web Vitals
- **Bundle Analyzer**: Use webpack-bundle-analyzer for bundle analysis

### Error Tracking

Consider adding error tracking services:

- Sentry
- LogRocket
- Bugsnag

### Analytics

Add analytics for usage tracking:

- Google Analytics
- Plausible
- Fathom

## 🚨 Troubleshooting

```
# 1. Remove old build
Remove-Item -Recurse -Force dist

# 2. Clear Vite cache
Remove-Item -Recurse -Force node_modules\.vite

# 3. Rebuild
npm run build

# 4. Test preview
npm run preview
```

### Common Deployment Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Routing Issues (SPA)

Ensure your server is configured for single-page applications:

- All routes should serve `index.html`
- Configure fallback routing
- **For Vercel**: The `vercel.json` file is included in the project and handles this automatically
- If you're still experiencing 404 errors on Vercel:
  - Verify that `vercel.json` exists in the `web-app` directory
  - Ensure the Root Directory in Vercel settings points to `web-app` (if deploying from monorepo)
  - Redeploy after adding or updating `vercel.json`

#### Asset Loading Issues

- Check file paths in production
- Verify asset URLs are correct
- Ensure proper MIME types

#### Performance Issues

- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Implement caching strategies

### Debugging Production Builds

```bash
# Build with source maps
npm run build -- --sourcemap

# Preview with debugging
npm run preview
```

## 📈 Scaling Considerations

### CDN Integration

- Use CDN for static assets
- Configure proper cache headers
- Implement cache invalidation

### Load Balancing

- Use multiple server instances
- Implement health checks
- Configure failover

### Database Considerations

- Use external database for dynamic content
- Implement proper indexing
- Consider read replicas

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

### Automated Testing

Add tests to your deployment pipeline:

```bash
npm run lint
npm run test
npm run build
```

## 📞 Support

For deployment issues:

1. Check the troubleshooting section above
2. Review platform-specific documentation
3. Check build logs for errors
4. Verify environment configuration

---

**Last Updated**: December 2024
**Version**: 1.0.0
