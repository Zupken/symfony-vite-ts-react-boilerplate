import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
    ],
    root: 'assets',
    base: '/',
    build: {
        outDir: '../public/build',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                admin: "./src/admin.tsx",
                dashboard: "./src/dashboard.tsx",
                welcome: "./src/welcome/main.tsx",
            },
        },
    },
    server: {
        origin: 'http://localhost:5173',
        cors: true,
    },
});