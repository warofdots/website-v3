import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages requires a base path matching the repo name
  // Set GITHUB_PAGES=true in your build command for GitHub Pages deployment
  base: process.env.GITHUB_PAGES === "true" ? "/topsecret2-tapwod/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
