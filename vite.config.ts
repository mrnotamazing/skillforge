import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the same build works locally, on GitHub Pages
  // (served from /skillforge/), and anywhere else it is hosted.
  base: './',
  plugins: [react(), tailwindcss()],
});
