import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/React_Portfolio/',
  build: {
    
    outDir: 'dist',
    assetsDir: 'assests',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assests/[name].[hash].[ext]',
        entryFileNames: 'assests/[name].[hash].js',
      }
    }
  }
});