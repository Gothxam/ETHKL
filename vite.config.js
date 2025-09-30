import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ethkl/',   // 👈 lowercase, must match your repo name exactly
})