import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: '/tcc-react-forged',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))

