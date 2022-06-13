import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
const path = require("path");

export default ({ mode }) => {
  return defineConfig({
    server: { https: true },
    base: mode == "production" ? `/public/` : "",
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
    plugins: [react(), mkcert()],
  });
};
