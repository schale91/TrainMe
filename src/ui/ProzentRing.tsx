// Ring mit dem Anteil vom Maximum im Training: füllt sich bis 100 %, darüber bleibt er voll und färbt sich goldfarben.

import type { ProzentVomMax } from "../logik/prozentring"

const R = 13
const UMFANG = 2 * Math.PI * R

export function ProzentRing(props: { wert: ProzentVomMax }) {
  const { prozent, kg, quelle } = props.wert
  const voll = Math.min(1, Math.max(0, prozent / 100))
  const schwer = prozent >= 90
  return (
    <span
      className={"prozentring" + (schwer ? " schwer" : "")}
      role="img"
      aria-label={prozent + " Prozent vom Maximum von " + String(Math.round(kg * 10) / 10).replace(".", ",") + " kg" + (quelle === "verlauf" ? " (aus deinen Sätzen geschätzt)" : "")}>
      <svg viewBox="0 0 34 34" width="34" height="34" aria-hidden="true">
        <circle cx="17" cy="17" r={R} className="spur" />
        <circle cx="17" cy="17" r={R} className="fuellung" strokeDasharray={UMFANG} strokeDashoffset={UMFANG * (1 - voll)} transform="rotate(-90 17 17)" />
      </svg>
      <b>{prozent}</b>
    </span>
  )
}
