import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['d6b1-2409-4055-29c-3e50-12a7-f7bf-6be4-54ff.ngrok-free.app'], //paste here ngrok tunnel url
  },
})
