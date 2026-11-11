/// <reference types="vite/client" />
declare const __VERSION__: string
/** Build-Nummer des GitHub-Laufs (= Android versionCode), 0 bei lokalen Builds */
declare const __BUILD__: number
/** "stabil", "vorschau" oder "lokal" */
declare const __KANAL__: string

declare module "virtual:uebungen-kern" {
  const kern: import("./logik/typen").Uebung[]
  export default kern
}
declare module "virtual:uebungen-texte" {
  const texte: Record<string, import("./logik/typen").UebungInfo>
  export default texte
}
