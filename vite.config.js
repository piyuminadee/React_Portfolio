import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});