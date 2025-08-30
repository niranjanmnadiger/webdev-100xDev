import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/todos": "http://localhost:3000", // FE /todos -> BE :3000/todos
    },
  },
});