/**
 * bhusku family mark — the "Fader U".
 *
 * Same identity as schedU's SchedULogo (a U whose asymmetric stem also reads as
 * a `b`, with a gold "fader knob" riding the right stem) — per the brand system
 * one mark carries the whole family. This is that mark, rebuilt on a clean
 * geometric grid and made to animate.
 *
 * Geometry (viewBox 100×100, so every number is a percentage of the tile):
 *   • Long left stem : short right stem = 39 : 24 ≈ 1.62  → the golden ratio (φ).
 *     That single proportion is what makes the glyph read as both U and b.
 *   • The bowl is a true semicircle (r = 19, chord = diameter) — perfectly
 *     geometric, no eyeballed curve.
 *   • The gold knob sits on the right stem's axis (x = 69) like a control on a
 *     fader track; the entrance animation slides it down that track and settles.
 *   • Stroke 14 with round caps — heavy enough to feel powerful, light enough
 *     to stay minimal at 24px.
 */
import type { CSSProperties } from 'react'

interface MarkProps {
  size?: number
  /** Play the draw-on + knob-slide entrance once on mount. */
  animate?: boolean
  className?: string
  style?: CSSProperties
}

export function BhuskuMark({ size = 34, animate = false, className = '', style }: MarkProps) {
  return (
    <span
      className={`bm-tile ${className}`}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.28), ...style }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width={size} height={size} className={animate ? 'bm-animate' : undefined}>
        {/* The U (which is also a b): φ-ratio stems + semicircular bowl */}
        <path
          className="bm-u"
          d="M31 19 V58 A19 19 0 0 0 69 58 V34"
          pathLength={100}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The gold fader knob */}
        <circle className="bm-knob" cx={69} cy={20} r={8.5} fill="#D4920E" />
      </svg>
    </span>
  )
}

/** Mark + "bhusku" wordmark lockup. `hover` adds the interactive fader nudge. */
export function BhuskuLockup({
  size = 32,
  animate = false,
  hover = false,
}: { size?: number; animate?: boolean; hover?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${hover ? 'bm-hover' : ''}`}>
      <BhuskuMark size={size} animate={animate} />
      <span className="text-[19px] font-extrabold lowercase tracking-[-0.4px] text-[#13111E]">
        bhusku
      </span>
    </span>
  )
}
