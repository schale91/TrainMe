// Eigenes Paketformat für das 3D-Modell: Die Lizenz erlaubt das Modell in der App, aber nicht als offene Datei.
// Aufbau: Kennung „TMFG“, Version, dann die Modelldaten mit einem Schlüsselstrom verschlüsselt.

const KENNUNG = [0x54, 0x4d, 0x46, 0x47]

function strom(laenge: number): Uint8Array {
  const out = new Uint8Array(laenge)
  let x = 0x2f6b9e13
  for (let i = 0; i < laenge; i++) {
    // xorshift32
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    out[i] = x & 0xff
  }
  return out
}

export function packen(daten: Uint8Array): Uint8Array {
  const s = strom(daten.length)
  const out = new Uint8Array(daten.length + 8)
  out.set(KENNUNG, 0)
  out[4] = 1
  for (let i = 0; i < daten.length; i++) out[8 + i] = daten[i] ^ s[i]
  return out
}

export function entpacken(paket: Uint8Array): Uint8Array {
  if (paket.length < 8 || KENNUNG.some((k, i) => paket[i] !== k)) throw new Error("Kein TrainMe-Modell")
  const n = paket.length - 8
  const s = strom(n)
  const out = new Uint8Array(n)
  for (let i = 0; i < n; i++) out[i] = paket[8 + i] ^ s[i]
  return out
}
