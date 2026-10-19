// Eigene Symbole für TrainMe. Stil: Piktogramme wie Hinweisschilder im Studio, 24er Raster, 1,8 er Linie mit runden
// Enden, dazu eine flächige Akzentform in halbtransparenter Kontextfarbe. Keine Emojis, keine Verläufe.

const S: Record<string, { l: string; f?: string; text?: string }> = {
  // Trainingsarten und Ziele
  hantel: { l: "M2.5 10v4M21.5 10v4M8 12h8M5 7h3v10H5zM16 7h3v10h-3z", f: "M5 7h3v10H5zM16 7h3v10h-3z" },
  dehnen: { l: "M15 4.5a1.8 1.8 0 1 0 0 .1M14.5 7.5c-1.2 3.5-1 7 1 10M15.5 17.5l-2.5 3.5M15.5 17.5l3 3.5M14 10L8.5 6M14.3 10.5l5.2 1", f: "M15 4.5a1.8 1.8 0 1 0 0 .1" },
  puls: { l: "M3 12h4l2-5 3.5 10 2.5-6 1.5 1H21", f: "M3 12h4l2-5 3.5 10 2.5-6 1.5 1H21v7H3z" },
  blatt: { l: "M5 19c0-8 5-13.5 14-14 0 9-5.5 14-14 14zM5 19l7.5-7.5", f: "M5 19c0-8 5-13.5 14-14 0 9-5.5 14-14 14z" },
  muskel: { l: "M4.5 19.5c.3-4 1.2-7 3.5-9.5l2-4c.8-1.5 2.8-1.6 3.5-.2l-.6 3.2h1.6c3.1 0 5 2.4 5 5.3 0 2.8-2.1 5.2-5 5.2z", f: "M4.5 19.5c.3-4 1.2-7 3.5-9.5l2-4c.8-1.5 2.8-1.6 3.5-.2l-.6 3.2h1.6c3.1 0 5 2.4 5 5.3 0 2.8-2.1 5.2-5 5.2z" },
  kraft: { l: "M2 12h20M4 8.5v7M7 6.5v11M17 6.5v11M20 8.5v7", f: "M7 6.5h-.01v11zM5 8h4v8H5zM15 8h4v8h-4z" },
  ball: { l: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 8.5l3.3 2.4-1.3 3.9h-4l-1.3-3.9zM12 4v4.5M4.5 9.5l4.2 1.4M19.5 9.5l-4.2 1.4M7.5 18.5l2.5-3.7M16.5 18.5L14 14.8", f: "M12 8.5l3.3 2.4-1.3 3.9h-4l-1.3-3.9z" },
  spross: { l: "M12 20v-8M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5zM12 14.5c0-3-2.5-5.5-6.5-5.5 0 3.2 2.6 5.5 6.5 5.5zM7 20h10", f: "M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5z" },
  flamme: { l: "M12 21c-3.9 0-6-2.5-6-5.6 0-3.3 2.6-5 3.2-8.4 1.9 1.3 3 3.2 3 5.1 1-.7 1.6-1.9 1.8-3.2C16.3 10.6 18 13 18 15.4c0 3.1-2.1 5.6-6 5.6z", f: "M12 21c-1.8 0-2.8-1.1-2.8-2.5 0-1.6 1.3-2.4 1.7-4 1.6 1 2.8 2.3 2.8 4 0 1.4-.9 2.5-1.7 2.5z" },
  golf: { l: "M8.5 19V3.5l8.5 3.5-8.5 3.5M4 20.5c1.5-1.3 7.5-1.3 9 0", f: "M8.5 3.5L17 7l-8.5 3.5z" },
  // Belohnung und Spiel
  pokal: { l: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H5v1.5a3 3 0 0 0 3 3M16 6h3v1.5a3 3 0 0 1-3 3M12 13v4M9 20.5h6M10 17h4v3.5h-4z", f: "M8 4h8v5a4 4 0 0 1-8 0z" },
  kiste: { l: "M4 10h16v9.5H4zM4 10l1.6-4.5h12.8L20 10M12 10v9.5M10.5 13h3", f: "M4 10h16v3H4z" },
  muenze: { l: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM14.5 9.5h-3.2a1.4 1.4 0 0 0 0 2.8h1.4a1.4 1.4 0 0 1 0 2.8H9.5M12 8v1.5M12 15.1v1.4", f: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" },
  blitz: { l: "M13 3L5 13.5h6L10 21l8-10.5h-6z", f: "M13 3L5 13.5h6L10 21l8-10.5h-6z" },
  kurve: { l: "M4 19.5h16M5 16l4-5 3 3 6-7M15 7h3v3", f: "M5 16l4-5 3 3 6-7v12.5H5z" },
  ziel: { l: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12.1V12", f: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  rakete: { l: "M12 3c3 2 4.5 5.5 4 10l-2 3h-4l-2-3c-.5-4.5 1-8 4-10zM12 9.4v.2M8.4 13.3L6 15.5l1 3.5 3-2.5M15.6 13.3l2.4 2.2-1 3.5-3-2.5M11 19.5l1 1.5 1-1.5", f: "M12 3c3 2 4.5 5.5 4 10l-2 3h-4l-2-3c-.5-4.5 1-8 4-10z" },
  bausteine: { l: "M3.5 9h17v11h-17zM3.5 14.5h17M9 9v5.5M15 14.5V20M7 5h10v4H7z", f: "M7 5h10v4H7z" },
  bett: { l: "M3 18.5V7M3 14h18v4.5M21 14v-1.5a3 3 0 0 0-3-3h-6.5V14M6.8 12.2a1.7 1.7 0 1 0 0-.1", f: "M3 14h18v2H3z" },
  medaille: { l: "M8 3l4 6 4-6M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", f: "M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" },
  schwert: { l: "M14.5 3.5h6v6L10 20l-2.5.5L8 18zM5 15l4 4M3.5 20.5l2-2", f: "M14.5 3.5h6v6L10 20l-2.5.5L8 18z" },
  schild: { l: "M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z", f: "M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" },
  herz: { l: "M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7.5 2c0 5.4-7.5 10-7.5 10z", f: "M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7.5 2c0 5.4-7.5 10-7.5 10z" },
  schloss: { l: "M7.5 11V8a4.5 4.5 0 0 1 9 0v3M5.5 11h13v10h-13zM12 15v2.5", f: "M5.5 11h13v10h-13z" },
  // Gesundheit
  schuh: { l: "M3 16.5h16.5a1.5 1.5 0 0 0 0-3l-5-1.5-2-4H9l-.5 2.5H5zM3 19.5h18M11 10.5l1.3 1.3M12.2 8.8l1.3 1.3", f: "M3 16.5h17v3H3z" },
  mond: { l: "M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z", f: "M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" },
  // Einstellungen
  kalender: { l: "M4 6h16v14H4zM4 10h16M8 3.5v4M16 3.5v4M8 14h2M14 14h2M8 17h2", f: "M4 6h16v4H4z" },
  haus: { l: "M4 11l8-7 8 7M6 9.5V20h12V9.5M10 20v-5h4v5", f: "M10 20v-5h4v5z" },
  pflaster: { l: "M8 19.5L4.5 16a2 2 0 0 1 0-2.8l8.7-8.7a2 2 0 0 1 2.8 0l3.5 3.5a2 2 0 0 1 0 2.8l-8.7 8.7a2 2 0 0 1-2.8 0zM10.5 10.5l3 3", f: "M9.3 12l2.7-2.7 2.7 2.7-2.7 2.7z" },
  verbot: { l: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.4 6.4l11.2 11.2" },
  wiederholen: { l: "M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5V9H15" },
  stoppuhr: { l: "M12 21a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM12 10v3.5l2.5 1.8M9.5 2.5h5M18.5 6.5l1.2-1.2", f: "M12 21a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" },
  sprechblase: { l: "M4 5h16v11H10.5L6 19.5V16H4zM8 9.5h8M8 12.5h5", f: "M4 5h16v11H10.5L6 19.5V16H4z" },
  archiv: { l: "M3.5 5h17v4h-17zM5 9v10.5h14V9M10 13h4", f: "M3.5 5h17v4h-17z" },
  export: { l: "M12 15V3.5M8 7.5l4-4 4 4M5 13v6.5h14V13" },
  import: { l: "M12 3.5V15M8 11l4 4 4-4M5 13v6.5h14V13" },
  info: { l: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.6v.4", f: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" },
  gluehbirne: { l: "M9 17.5h6M10 20.5h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2.2h5.2c0-1 .4-1.7 1-2.2A6 6 0 0 0 12 3z", f: "M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2.2h5.2c0-1 .4-1.7 1-2.2A6 6 0 0 0 12 3z" },
  haken: { l: "M5 12.5l4.5 4.5L19 7.5" },
  geschenk: { l: "M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-1-3-5-4-5-1.5S11 7 12 7zM12 7c1-3 5-4 5-1.5S13 7 12 7z", f: "M3 7h18v3H3z" },
  // Gerätegruppen
  rack: { l: "M6.5 3v18M17.5 3v18M4 21h5M15 21h5M3 8.5h18M6.5 12.5h2.5M17.5 12.5H15", f: "M2 7h3v3H2zM19 7h3v3h-3z" },
  kabel: { l: "M5 3h14M12 3v3.5M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 10.5V16M9 16h6v5H9z", f: "M9 16h6v5H9z" },
  beinpresse: { l: "M4 20.5h16M5.5 20.5l3-8h5M8.5 12.5L13 6l5 5-4.5 4.5zM15.5 8.5l2.5-2.5", f: "M13 6l5 5-4.5 4.5L9 11z" },
  maschine: { l: "M5 3v18M5 4h8v5M3.5 21h17M15.5 21V9h4v12M15.5 12h4M15.5 15h4M15.5 18h4M13 9l-4 4.5", f: "M15.5 9h4v12h-4z" },
  band: { l: "M5 12c0-3.9 3.1-7 7-7M19 12c0 3.9-3.1 7-7 7M5 12c0 3.9 3.1 7 7 7M12 5c3.9 0 7 3.1 7 7M8.5 12h7" },
  fahrrad: { l: "M6 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 14l4-7h5l3 7M10 7l3.5 7H6M8.5 4.5h3", f: "M10 7l3.5 7H6z" },
  wand: { l: "M3 4h18v16H3zM3 9.5h18M3 15h18M9 4v5.5M15 4v5.5M6 9.5V15M12 9.5V15M18 9.5V15M9 15v5M15 15v5", f: "M3 4h6v5.5H3zM12 9.5h6V15h-6zM9 15h6v5H9z" },
  zahl: { l: "M8 3l4 6 4-6M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", f: "M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" },
}

export function Sym(props: { name: string; groesse?: number; farbe?: string; akzent?: string; text?: string; titel?: string }) {
  const [name, zusatz] = props.name.split(":")
  const s = S[name] || S.info
  const text = props.text ?? zusatz
  const g = props.groesse || 22
  return (
    <svg
      width={g}
      height={g}
      viewBox="0 0 24 24"
      className="sym"
      role={props.titel ? "img" : undefined}
      aria-label={props.titel}
      aria-hidden={props.titel ? undefined : true}
      style={{ color: props.farbe, flex: "0 0 auto" }}
    >
      {s.f ? <path d={s.f} fill={props.akzent || "currentColor"} opacity={props.akzent ? 1 : 0.22} /> : null}
      <path d={s.l} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {text ? (
        <text x="12" y="17.6" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="currentColor" fontFamily="system-ui, sans-serif">
          {text}
        </text>
      ) : null}
    </svg>
  )
}

/** Symbol in einem farbigen, abgerundeten Quadrat, wie in den iOS-Einstellungen. */
export function SymKachel(props: { name: string; farbe: string; groesse?: number; text?: string }) {
  const g = props.groesse || 30
  return (
    <span className="symkachel" style={{ background: props.farbe, width: g, height: g }}>
      <Sym name={props.name} groesse={Math.round(g * 0.66)} farbe="#fff" text={props.text} />
    </span>
  )
}
