/// <reference types="vitest/config" />
import { readFileSync } from "node:fs"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const paket = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8")) as { version: string }

// Relative Pfade, damit die App im Android-WebView (Capacitor) ohne Server läuft.
// Modus "lebenswelt" (npm run build:lebenswelt): flache Dateien trainme.html und trainme-…, ohne Unterordner, für
// das App-Paket der Lebenswelt (das Add-on in Home Assistant kopiert nur einzelne Dateien in einen Ordner).
export default defineConfig(({ mode }) => ({
  base: "./",
  plugins: [react()],
  // Die APK-Builds setzen Version, Build-Nummer und Kanal, damit die App nach Updates suchen kann
  define: {
    __VERSION__: JSON.stringify(process.env.TRAINME_VERSION || paket.version),
    __BUILD__: JSON.stringify(Number(process.env.TRAINME_BUILD || 0)),
    __KANAL__: JSON.stringify(mode === "lebenswelt" ? "lebenswelt" : process.env.TRAINME_KANAL || "lokal"),
  },
  ...(mode === "lebenswelt"
    ? {
        publicDir: false,
        build: {
          outDir: "dist-lebenswelt",
          emptyOutDir: true,
          assetsDir: "",
          chunkSizeWarningLimit: 3000,
          rolldownOptions: { output: { entryFileNames: "trainme-[hash].js", chunkFileNames: "trainme-[name]-[hash].js", assetFileNames: "trainme-[hash].[ext]" } },
        },
      }
    : {}),
  test: { globals: true, environment: "node" },
}))
