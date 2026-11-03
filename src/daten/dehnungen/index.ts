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
import { KRAFT_BRUST } from "./kraft_brust"
import { KRAFT_SCHULTER } from "./kraft_schulter"

export const DEHNUNGEN: Record<string, Dehnung> = { ...RUECKEN, ...SCHULTER, ...HUEFTE_A, ...HUEFTE_B, ...BEINE, ...FUSS_GOLF, ...KRAFT, ...KRAFT_TRIZEPS, ...KRAFT_BRUST, ...KRAFT_SCHULTER }
export { TEST_DEHNUNGEN }
