import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontendmentor-project1/",
  plugins: [react()],
  assetsInclude: ["**/*.ttf"],
});
