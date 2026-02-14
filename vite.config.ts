import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Adjust this to your preferred build directory
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return
          }

          if (id.includes('apexcharts') || id.includes('react-apexcharts')) {
            return 'charts-vendor'
          }

          if (
            id.includes('@googlemaps') ||
            id.includes('@react-google-maps/api') ||
            id.includes('use-places-autocomplete')
          ) {
            return 'maps-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src")
    }
  },
  define: {
    'import.meta.env.API_KEY': process.env.VITE_API_KEY,
  },
})
