import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: { host: true, port: 5173, strictPort: true },
});
