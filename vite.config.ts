import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['f6fb-2401-4900-597b-82a7-cb4e-de88-7ed6-e5de.ngrok-free.app'], //paste here ngrok tunnel url
  },
})
