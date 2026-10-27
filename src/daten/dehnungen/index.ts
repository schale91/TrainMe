// Alle Dehnfiguren: Übungs-ID → Animation; Beweglichkeitstests getrennt.

import type { Dehnung } from "../../logik/dehnbewegung"
import { RUECKEN } from "./ruecken"
import { SCHULTER } from "./schulter"
import { TEST_DEHNUNGEN } from "./tests"

export const DEHNUNGEN: Record<string, Dehnung> = { ...RUECKEN, ...SCHULTER }
export { TEST_DEHNUNGEN }
