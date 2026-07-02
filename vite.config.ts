import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Served from https://<user>.github.io/mr/ in production; root in dev.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mr/' : '/',
  plugins: [react(), tailwindcss()],
}))
