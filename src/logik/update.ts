// App-Updates: Die APKs liegen als GitHub-Releases. Die Build-Nummer (GitHub-Lauf) ist zugleich der Android-
// versionCode, deshalb lässt sie sich zwischen stabilen Versionen und Vorschau vergleichen.

export const RELEASES_API = "https://api.github.com/repos/schale91/TrainMe/releases?per_page=15"
export const RELEASES_SEITE = "https://github.com/schale91/TrainMe/releases"

export interface Release {
  tag_name: string
  name: string | null
  prerelease: boolean
  draft: boolean
  body?: string | null
  html_url: string
  published_at: string | null
  assets: { name: string; browser_download_url: string }[]
}

export interface UpdateInfo {
  /** z. B. 0.4.0.61 */
  version: string
  build: number
  apk: string
  seite: string
  notizen: string
  vorschau: boolean
  datum: string
}

/** Version und Build-Nummer aus Tag oder Titel, z. B. „v0.4.0.61“ oder „TrainMe Vorschau 0.4.0.61“. */
export function versionAus(r: Pick<Release, "tag_name" | "name">): { version: string; build: number } | null {
  for (const text of [r.tag_name, r.name || ""]) {
    const m = /(\d+)\.(\d+)\.(\d+)\.(\d+)/.exec(text)
    if (m) return { version: m.slice(1).join("."), build: Number(m[4]) }
  }
  return null
}

/**
 * Neuestes passendes Update oder null. Stabile Versionen bekommen nur stabile Updates; wer eine Vorschau installiert
 * hat, bekommt auch neuere Vorschauen.
 */
export function neuestesUpdate(releases: Release[], eigenerBuild: number, kanal: string): UpdateInfo | null {
  if (!eigenerBuild) return null
  let best: UpdateInfo | null = null
  for (const r of releases) {
    if (r.draft) continue
    if (r.prerelease && kanal !== "vorschau") continue
    const v = versionAus(r)
    const apk = r.assets.find((a) => a.name.toLowerCase().endsWith(".apk"))
    if (!v || !apk || v.build <= eigenerBuild) continue
    if (best && best.build >= v.build) continue
    best = { version: v.version, build: v.build, apk: apk.browser_download_url, seite: r.html_url, notizen: (r.body || "").trim(), vorschau: r.prerelease, datum: (r.published_at || "").slice(0, 10) }
  }
  return best
}
