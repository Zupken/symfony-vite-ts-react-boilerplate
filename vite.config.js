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
    base: "/build/", // The base path for prod builds
    build: {
        outDir: "../public/build",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                admin: path.resolve(__dirname, "assets/src/admin/main.tsx"),
                welcome: path.resolve(__dirname, "assets/src/welcome/main.tsx"),
                menu: path.resolve(__dirname, "assets/src/menu/main.tsx"),
                assets_poc: path.resolve(__dirname, "assets/src/assetsPoc/main.tsx"),
            },
        },
    },
    server: {
        origin: "http://localhost:5173",
        cors: true,
    },
});
