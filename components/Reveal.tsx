'use client'

/**
 * Reveal — fade-and-rise a block when it scrolls into view (à la anthropic.com).
 * Uses one IntersectionObserver per instance, fires once. The actual motion is
 * CSS (`.reveal` / `.is-visible` in globals.css) so it stays reduced-motion safe.
 */
import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Fail-safe: if the observer is missing, show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
          clearTimeout(fallback)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    // Fail-safe: never leave content hidden if the observer never fires
    // (e.g. throttled/occluded tabs). Below-fold blocks reveal without the
    // scroll cue; on-screen ones are caught by the observer first.
    const fallback = window.setTimeout(() => setVisible(true), 2500)
    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
