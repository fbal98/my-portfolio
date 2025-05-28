import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/animations/gsap-config'
import { scrollTriggerDefaults } from '@/animations/gsap-config'

interface ScrollTriggerOptions {
  trigger?: string | Element | React.RefObject<Element>
  start?: string
  end?: string
  toggleActions?: string
  scrub?: boolean | number
  pin?: boolean | string | Element
  pinSpacing?: boolean
  onUpdate?: (self: ScrollTrigger) => void
  onEnter?: (self: ScrollTrigger) => void
  onLeave?: (self: ScrollTrigger) => void
  onEnterBack?: (self: ScrollTrigger) => void
  onLeaveBack?: (self: ScrollTrigger) => void
  onToggle?: (self: ScrollTrigger) => void
  onRefresh?: (self: ScrollTrigger) => void
  markers?: boolean
}

export const useScrollTrigger = (
  options: ScrollTriggerOptions,
  dependencies: React.DependencyList = []
) => {
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    const getTriggerElement = () => {
      if (!options.trigger) return undefined
      
      if (typeof options.trigger === 'string') {
        return document.querySelector(options.trigger) || undefined
      }
      
      if ('current' in options.trigger) {
        return options.trigger.current || undefined
      }
      
      return options.trigger
    }

    const triggerElement = getTriggerElement()
    
    triggerRef.current = ScrollTrigger.create({
      ...scrollTriggerDefaults,
      ...options,
      trigger: triggerElement,
    } as ScrollTrigger.Vars)

    return () => {
      triggerRef.current?.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return triggerRef.current
}

// Hook for batch ScrollTrigger animations
export const useBatchScrollTrigger = (
  selector: string,
  animationOptions: {
    from: gsap.TweenVars
    to: gsap.TweenVars
    stagger?: number | gsap.StaggerVars
  },
  scrollTriggerOptions: Partial<ScrollTriggerOptions> = {}
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    const triggers = ScrollTrigger.batch(elements, {
      start: scrollTriggerOptions.start || scrollTriggerDefaults.start,
      end: scrollTriggerOptions.end || scrollTriggerDefaults.end,
      onEnter: (batch: Element[]) => {
        gsap.fromTo(batch, animationOptions.from, {
          ...animationOptions.to,
          stagger: animationOptions.stagger || 0.1,
        })
      },
      onLeave: (batch: Element[]) => {
        gsap.to(batch, animationOptions.from)
      },
      onEnterBack: (batch: Element[]) => {
        gsap.to(batch, animationOptions.to)
      },
      onLeaveBack: (batch: Element[]) => {
        gsap.to(batch, animationOptions.from)
      },
    })

    return () => {
      triggers.forEach(trigger => trigger.kill())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector])
}

// Hook for progress-based animations
export const useScrollProgress = (
  containerRef: React.RefObject<Element>,
  onProgress: (progress: number) => void
) => {
  useEffect(() => {
    if (!containerRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        onProgress(self.progress)
      },
    })

    return () => {
      trigger.kill()
    }
  }, [containerRef, onProgress])
}

// Hook for pinned sections
export const usePinnedSection = (
  sectionRef: React.RefObject<Element>,
  options: {
    start?: string
    end?: string
    pinSpacing?: boolean
  } = {}
) => {
  useEffect(() => {
    if (!sectionRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: options.start || 'top top',
      end: options.end || 'bottom top',
      pinSpacing: options.pinSpacing !== false,
    })

    return () => {
      trigger.kill()
    }
  }, [sectionRef, options])
}

// Hook for parallax scrolling
export const useParallax = (
  elementRef: React.RefObject<Element>,
  speed = 0.5,
  direction: 'y' | 'x' = 'y'
) => {
  useEffect(() => {
    if (!elementRef.current) return

    const property = direction === 'y' ? 'yPercent' : 'xPercent'
    
    gsap.to(elementRef.current, {
      [property]: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      const currentElement = elementRef.current
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === currentElement) {
          trigger.kill()
        }
      })
    }
  }, [elementRef, speed, direction])
}