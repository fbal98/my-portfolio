import { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from '@/animations/gsap-config'
import { useGSAP as useGSAPCore } from '@gsap/react'

// Re-export the official useGSAP hook
export { useGSAP } from '@gsap/react'

// Custom wrapper with additional functionality
export const useGSAPContext = (
  callback: (context: gsap.Context) => void,
  dependencies: React.DependencyList = [],
  scope?: React.RefObject<Element> | Element | string
) => {
  const result = useGSAPCore(
    (context) => {
      callback(context)
    },
    { dependencies: [...dependencies], scope }
  )

  return result.context
}

// Hook for timeline management
export const useTimeline = (options = {}) => {
  const timeline = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    timeline.current = gsap.timeline(options)
    
    return () => {
      timeline.current?.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return timeline.current
}

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  target: React.RefObject<Element> | string,
  animationCallback: (element: Element) => gsap.core.Tween | gsap.core.Timeline,
  scrollTriggerOptions = {}
) => {
  useLayoutEffect(() => {
    const element = typeof target === 'string' 
      ? document.querySelector(target) 
      : target.current

    if (!element) return

    const animation = animationCallback(element)
    
    // ScrollTrigger is added via the animation itself, not by direct assignment

    return () => {
      animation?.kill()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, scrollTriggerOptions])
}

// Hook for element visibility detection
export const useInView = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const isInView = useRef(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      isInView.current = entry.isIntersecting
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return { isInView: isInView.current, hasAnimated: hasAnimated.current }
}

// Hook for mouse position tracking
export const useMousePosition = () => {
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return position.current
}

// Hook for debounced resize handling
export const useResize = (callback: () => void, delay = 100) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(callback, delay)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [callback, delay])
}

// Hook for reduced motion preference
export const useReducedMotion = () => {
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mediaQuery.matches

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion.current
}