// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({ plugins: [react()] });


import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devpath-learning/",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});