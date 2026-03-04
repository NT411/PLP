import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Registers the React plugin so Vite can transform JSX and enable the React dev workflow.
export default defineConfig({
  plugins: [react()],
})
