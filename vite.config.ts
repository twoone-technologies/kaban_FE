import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Adjust this to your preferred build directory
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
