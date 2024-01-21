import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Set the production mode
    target: 'modules', // ES module output
    minify: 'terser',   // Minify with Terser
  },
});
