import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist' 
  },
  server: {
    proxy: {
      '/contacto': {
        target: 'http://localhost:5000', // Cambia esto por la dirección de tu servidor Express
        changeOrigin: true,
        rewrite: path => path.replace(/^\/contacto/, '')
      }
    }
  }
});
