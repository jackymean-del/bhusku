/**
 * Hero line-network — a calm, self-drawing constellation of nodes and links,
 * echoing anthropic.com's animated "net". Pure SVG + CSS (classes live in
 * globals.css), so it works in static export and honours reduced motion.
 */
const NODES = [
  { x: 66, y: 92 }, { x: 198, y: 56 }, { x: 346, y: 104 }, { x: 120, y: 196 },
  { x: 270, y: 178 }, { x: 414, y: 214 }, { x: 62, y: 312 }, { x: 190, y: 326 },
  { x: 332, y: 296 }, { x: 240, y: 410 }, { x: 436, y: 360 },
]
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7],
  [5, 8], [6, 7], [7, 8], [7, 9], [8, 10], [4, 8], [2, 4], [9, 10], [8, 9],
]
const GOLD = new Set([4, 9]) // brand-accent nodes

export function HeroNet() {
  return (
    <div className="rounded-[22px] border border-[#ECE7FF] bg-[#FBFAFF] p-5 shadow-[0_24px_60px_-30px_rgba(124,111,224,0.55)]">
      <svg
        viewBox="0 0 480 440"
        className="h-auto w-full"
        role="img"
        aria-label="An abstract network of connected nodes — the studio, connected"
      >
        <defs>
          <radialGradient id="heroNetGlow" cx="52%" cy="40%" r="62%">
            <stop offset="0%" stopColor="#7C6FE0" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7C6FE0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="480" height="440" fill="url(#heroNetGlow)" />

        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            className="net-line"
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#7C6FE0"
            strokeOpacity={0.3}
            strokeWidth={1.4}
            strokeLinecap="round"
            pathLength={1}
            style={{ animationDelay: `${260 + i * 70}ms` }}
          />
        ))}

        {NODES.map((n, i) => {
          const gold = GOLD.has(i)
          return (
            <circle
              key={i}
              className={`net-node ${gold ? 'pulse' : ''}`}
              cx={n.x}
              cy={n.y}
              r={gold ? 5.5 : 3.6}
              fill={gold ? '#D4920E' : '#7C6FE0'}
              style={{ animationDelay: `${900 + i * 55}ms` }}
            />
          )
        })}
      </svg>
    </div>
  )
}
