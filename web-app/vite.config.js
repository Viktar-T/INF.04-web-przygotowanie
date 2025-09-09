import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build for production
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Optimize chunk splitting
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          bootstrap: ['bootstrap'],
          syntax: ['react-syntax-highlighter'],
          markdown: ['react-markdown', 'remark-gfm', 'rehype-raw']
        },
        // Optimize asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable compression
    terserOptions: {
      compress: {
        drop_console: false, // Keep console.log for exam tasks
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'bootstrap', 'react-syntax-highlighter', 'react-markdown', 'remark-gfm', 'rehype-raw']
  },
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    host: true
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
    host: true
  }
})
