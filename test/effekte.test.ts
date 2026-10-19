// Schutz vor einem Android-Absturz: Effekte mit Ausdruck als Rumpf geben dessen Wert an React zurück. Liefert die
// WebView dort etwas (z. B. bei window.scrollTo), versucht React es als Aufräumfunktion aufzurufen und stürzt ab.

const quellen = import.meta.glob<string>(["../src/**/*.ts", "../src/**/*.tsx"], { query: "?raw", import: "default", eager: true })

it("kein useEffect gibt einen Ausdruck zurück", () => {
  const treffer = Object.entries(quellen).flatMap(([datei, text]) =>
    text
      .split("\n")
      .map((z, i) => (/use(Layout)?Effect\(\(\) => [^{]/.test(z) ? datei + ":" + (i + 1) : ""))
      .filter(Boolean),
  )
  expect(Object.keys(quellen).length).toBeGreaterThan(20)
  expect(treffer).toEqual([])
})
