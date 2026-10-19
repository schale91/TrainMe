/// <reference types="vitest/config" />
import { readFileSync } from "node:fs"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const paket = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8")) as { version: string }

// Relative Pfade, damit die App im Android-WebView (Capacitor) ohne Server läuft
export default defineConfig({
  base: "./",
  plugins: [react()],
  define: { __VERSION__: JSON.stringify(paket.version) },
  test: { globals: true, environment: "node" },
})
