import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/public/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/component"),
      "@ui": path.resolve(__dirname, "./src/component/ui"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@css": path.resolve(__dirname, "./src/assets/css"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@context": path.resolve(__dirname, "./src/component/context"),
      "@ly": path.resolve(__dirname, "./src/component/layout"),
    },
  },
  plugins: [react()],
});
