import path from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    publicDir: 'public',
    plugins: [react()],
    server: {
        allowedHosts: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});