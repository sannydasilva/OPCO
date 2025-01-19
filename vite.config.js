import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/OPCO/", // Chemin du sous-dossier GitHub Pages
  plugins: [react()],
});
