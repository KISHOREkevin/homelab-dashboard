import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    watch:{
      ignored:['**/pb_data/**'],
    },
     proxy: {
      '/api': { // This path should match how your frontend code fetches data
        target: 'http://homelab-dashboard-server:8090', // The internal address of your backend container
        changeOrigin: true, // Recommended for proxying
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: if backend doesn't expect /api
      },
       '/_': { // PocketBase also uses paths like /_ for health checks, etc.
         target: 'http://homelab-dashboard-server:8090',
         changeOrigin: true,
       },
       // Add other paths if your frontend needs them (e.g., /uploaded_files/)
    }
  }
})
