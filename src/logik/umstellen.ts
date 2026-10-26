// Planänderungen anwenden: sofort (Jahresplan ab dem laufenden Block neu), vorgemerkt bis zum nächsten Block oder
// verworfen. Vorgemerktes wird beim Start der App übernommen, sobald der neue Block begonnen hat.

import { naechsterBlock, nebensachen, planTeil, sporte, ziele } from "./auswahl"
import { neuPlanen, saisonFuer } from "./jahresplan"
import type { Profil } from "./typen"

export type Wann = "jetzt" | "block" | "nie"

function mitNeuemJahresplan(alt: Profil, neu: Profil, ab: string): Profil {
  const anders = JSON.stringify(sporte(alt)) !== JSON.stringify(sporte(neu)) || JSON.stringify(ziele(alt)) !== JSON.stringify(ziele(neu))
  return neu.jahresplan && anders ? { ...neu, jahresplan: neuPlanen(neu, ab, saisonFuer(neu)) } : neu
}

export function umstellen(profil: Profil, entwurf: Profil, wann: Wann, heute: string): Profil {
  if (wann === "jetzt") return mitNeuemJahresplan(profil, { ...entwurf, vorgemerkt: undefined }, heute)
  const basis = nebensachen(profil, entwurf)
  if (wann === "nie") return basis
  return { ...basis, vorgemerkt: { ab: naechsterBlock(profil, heute), aenderung: planTeil(entwurf) } }
}

/** Vorgemerkte Änderung übernehmen, wenn ihr Block begonnen hat (oder sofort, wenn erzwungen). */
export function vorgemerktAnwenden(profil: Profil, heute: string, sofort = false): Profil {
  const v = profil.vorgemerkt
  if (!v || (!sofort && heute < v.ab)) return profil
  const neu: Profil = { ...profil, ...v.aenderung, vorgemerkt: undefined }
  return mitNeuemJahresplan(profil, neu, heute)
}

