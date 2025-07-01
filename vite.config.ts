import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['1493-125-23-171-6.ngrok-free.app'], //paste here ngrok tunnel url
  },
})
