/// <reference types="vitest/config" />
import { readFileSync } from "node:fs"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const paket = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8")) as { version: string }

// Relative Pfade, damit die App im Android-WebView (Capacitor) ohne Server läuft
export default defineConfig({
  base: "./",
  plugins: [react()],
  // Die APK-Builds setzen Version, Build-Nummer und Kanal, damit die App nach Updates suchen kann
  define: {
    __VERSION__: JSON.stringify(process.env.TRAINME_VERSION || paket.version),
    __BUILD__: JSON.stringify(Number(process.env.TRAINME_BUILD || 0)),
    __KANAL__: JSON.stringify(process.env.TRAINME_KANAL || "lokal"),
  },
  test: { globals: true, environment: "node" },
})
