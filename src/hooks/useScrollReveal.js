import { useEffect } from 'react'

export default function useScrollReveal(containerRef) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const targets = containerRef.current.querySelectorAll('[data-reveal]')
    const revealed = new WeakSet()
    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting || motion.matches) continue

        revealed.add(target)
        target.dataset.revealed = ''
        observer.unobserve(target)
      }
    }, { rootMargin: '0px 0px 24px' })

    function syncMotionPreference() {
      observer.disconnect()
      if (motion.matches) return

      for (const target of targets) {
        if (!revealed.has(target)) observer.observe(target)
      }
    }

    syncMotionPreference()
    motion.addEventListener('change', syncMotionPreference)

    return () => {
      motion.removeEventListener('change', syncMotionPreference)
      observer.disconnect()
    }
  }, [containerRef])
}

