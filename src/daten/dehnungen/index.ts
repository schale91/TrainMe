// Alle Dehnfiguren: Übungs-ID → Animation; Beweglichkeitstests getrennt.

import type { Dehnung } from "../../logik/dehnbewegung"
import { RUECKEN } from "./ruecken"
import { SCHULTER } from "./schulter"
import { HUEFTE_A } from "./huefte_a"
import { HUEFTE_B } from "./huefte_b"
import { BEINE } from "./beine"
import { FUSS_GOLF } from "./fuss_golf"
import { TEST_DEHNUNGEN } from "./tests"
import { KRAFT } from "./kraft"
import { KRAFT_TRIZEPS } from "./kraft_trizeps"
import { KRAFT_DRUECKEN } from "./kraft_druecken"
import { KRAFT_ZUG } from "./kraft_zug"
import { WAND_UEBUNGEN } from "./wand"
import { SEITSTUETZ } from "./seitstuetz"
import { ROLLEN } from "./rolle"
import { KRAFT_UEBERKOPF } from "./kraft_ueberkopf"
import { FESTE_PUNKTE } from "./kontakte"
import { KRAFT_SCHULTER } from "./kraft_schulter"
import { KRAFT_ZIEHEN } from "./kraft_ziehen"
import { KRAFT_BEINE } from "./kraft_beine"
import { KRAFT_KNIEBEUGE } from "./kraft_kniebeuge"
import { KRAFT_HUEFTE } from "./kraft_huefte"
import { KRAFT_HEBEN } from "./kraft_heben"
import { KRAFT_EINBEIN } from "./kraft_einbein"
import { KRAFT_RUMPF } from "./kraft_rumpf"
import { KRAFT_GRIFF } from "./kraft_griff"
import { KRAFT_SCHNELL } from "./kraft_schnell"
import { KRAFT_LAUF } from "./kraft_lauf"
import { KRAFT_REST } from "./kraft_rest"

const ALLE: Record<string, Dehnung> = { ...RUECKEN, ...SCHULTER, ...HUEFTE_A, ...HUEFTE_B, ...BEINE, ...FUSS_GOLF, ...KRAFT, ...KRAFT_TRIZEPS, ...KRAFT_SCHULTER, ...KRAFT_ZIEHEN, ...KRAFT_BEINE, ...KRAFT_KNIEBEUGE, ...KRAFT_HUEFTE, ...KRAFT_HEBEN, ...KRAFT_EINBEIN, ...KRAFT_RUMPF, ...KRAFT_GRIFF, ...KRAFT_SCHNELL, ...KRAFT_LAUF, ...KRAFT_REST, ...KRAFT_DRUECKEN, ...KRAFT_ZUG, ...WAND_UEBUNGEN, ...SEITSTUETZ, ...ROLLEN, ...KRAFT_UEBERKOPF }
/** Feste Kontaktpunkte aus kontakte.ts eintragen */
export const DEHNUNGEN: Record<string, Dehnung> = Object.fromEntries(Object.entries(ALLE).map(([id, d]) => [id, FESTE_PUNKTE[id] && !d.fest ? { ...d, fest: FESTE_PUNKTE[id] } : d]))
export { TEST_DEHNUNGEN }
