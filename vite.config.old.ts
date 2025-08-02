import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/tcc-react-forged/', // Use '/' for dev, GitHub path for build
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))

