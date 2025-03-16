import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "docs",
    },
    base: mode === "production" ? "Portfolio" : "/",
}));
