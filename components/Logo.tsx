/**
 * bhusku family mark — the "Fader U", built on the golden circle.
 *
 * Same identity as schedU's SchedULogo (a U whose asymmetric stem also reads as
 * a `b`, with a gold "fader knob" riding the right stem) — per the brand system
 * one mark carries the whole family. This is that mark, reconstructed so every
 * dimension is a φ-power of ONE radius. Nothing here is eyeballed.
 *
 *   φ = 1.618…      ρ = 20  (the bowl's centre-line radius, the master unit)
 *
 *   Golden-circle progression — one radius generates the whole glyph:
 *     enclosing circle   ρ·φ   = 32.36   (bounds the mark)
 *     bowl               ρ     = 20      (a TRUE semicircle; chord = diameter)
 *     stroke width       ρ/φ   = 12.36
 *     gold knob radius   ρ/φ²  =  7.64
 *
 *   Balance (viewBox 100×100, every number is a % of the tile):
 *     • Stems are the two vertical TANGENTS to the bowl circle (x = 50 ± ρ).
 *     • Long left stem : short right stem = ρ·φ : ρ = φ : 1 — the asymmetry
 *       that makes the glyph read as both U and b.
 *     • Knob centre shares the left-stem's top height (y = 21.64); it rides the
 *       right-stem axis (x = 70). The entrance slides it down that track.
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
        {/* The U (which is also a b): vertical tangents + true semicircular bowl,
            stroke = ρ/φ. Left stem ρ·φ tall, right stem ρ tall. */}
        <path
          className="bm-u"
          d="M30 21.64 V54 A20 20 0 0 0 70 54 V34"
          pathLength={100}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={12.36}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The gold fader knob — radius ρ/φ², on the right-stem axis */}
        <circle className="bm-knob" cx={70} cy={21.64} r={7.64} fill="#D4920E" />
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
