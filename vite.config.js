import path from "path";
import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
    ],
    root: "assets",
    base: "/",
    build: {
        outDir: "../public/build",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                admin: path.resolve(__dirname, "assets/src/admin/main.tsx"),
                welcome: path.resolve(__dirname, "assets/src/welcome/main.tsx"),
            },
        },
    },
    server: {
        origin: "http://localhost:5173",
        cors: true,
    },
});
