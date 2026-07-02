import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Base path per host: root '/' on Netlify (and dev), '/mr/' on GitHub Pages.
export default defineConfig(({ command }) => ({
  base:
    process.env.NETLIFY || command !== 'build' ? '/' : '/mr/',
  plugins: [react(), tailwindcss()],
}))
