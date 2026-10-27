// Alle Dehnfiguren: Übungs-ID → Animation; Beweglichkeitstests getrennt.

import type { Dehnung } from "../../logik/dehnbewegung"
import { RUECKEN } from "./ruecken"
import { SCHULTER } from "./schulter"
import { HUEFTE_A } from "./huefte_a"
import { HUEFTE_B } from "./huefte_b"
import { BEINE } from "./beine"
import { FUSS_GOLF } from "./fuss_golf"
import { TEST_DEHNUNGEN } from "./tests"

export const DEHNUNGEN: Record<string, Dehnung> = { ...RUECKEN, ...SCHULTER, ...HUEFTE_A, ...HUEFTE_B, ...BEINE, ...FUSS_GOLF }
export { TEST_DEHNUNGEN }
