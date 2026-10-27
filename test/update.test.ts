import { neuestesUpdate, versionAus, type Release } from "../src/logik/update"

const rel = (tag: string, name: string, prerelease = false): Release => ({ tag_name: tag, name, prerelease, draft: false, body: "Neu", html_url: "https://github.com/x/" + tag, published_at: "2026-10-20T10:00:00Z", assets: [{ name: "TrainMe.apk", browser_download_url: "https://github.com/x/" + tag + "/TrainMe.apk" }] })

describe("Update", () => {
  it("liest Version und Build aus Tag oder Titel", () => {
    expect(versionAus(rel("v0.4.0.61", "TrainMe 0.4.0.61"))).toEqual({ version: "0.4.0.61", build: 61 })
    expect(versionAus(rel("vorschau", "TrainMe Vorschau 0.4.0.63"))).toEqual({ version: "0.4.0.63", build: 63 })
    expect(versionAus(rel("vorschau", "TrainMe Vorschau"))).toBeNull()
  })

  it("stabil sieht nur stabile, Vorschau auch neuere Vorschauen", () => {
    const liste = [rel("vorschau", "TrainMe Vorschau 0.4.0.63", true), rel("v0.4.0.61", "TrainMe 0.4.0.61"), rel("v0.3.0.50", "TrainMe 0.3.0.50")]
    expect(neuestesUpdate(liste, 55, "stabil")?.version).toBe("0.4.0.61")
    expect(neuestesUpdate(liste, 55, "vorschau")?.version).toBe("0.4.0.63")
    expect(neuestesUpdate(liste, 63, "vorschau")).toBeNull()
    expect(neuestesUpdate(liste, 0, "lokal")).toBeNull()
    expect(neuestesUpdate(liste, 55, "stabil")?.apk).toContain("TrainMe.apk")
  })
})
