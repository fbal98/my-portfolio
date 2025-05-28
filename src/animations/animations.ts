import { gsap } from './gsap-config'
import { easings, durations, staggers } from './gsap-config'

// Text animation utilities
export const animateText = {
  // Fade in from bottom
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: durations.normal,
      ease: easings.reveal,
      delay,
    })
  },

  // Fade in from top
  fadeInDown: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      y: -50,
      opacity: 0,
      duration: durations.normal,
      ease: easings.reveal,
      delay,
    })
  },

  // Fade in with rotation
  fadeInRotate: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      rotationX: -90,
      y: 50,
      transformOrigin: '0% 50% -50',
      duration: durations.normal,
      ease: easings.reveal,
      delay,
    })
  },

  // Typewriter effect
  typewriter: (element: string | Element, text: string, delay = 0) => {
    const tl = gsap.timeline({ delay })
    const el = typeof element === 'string' ? document.querySelector(element) : element
    
    if (el) {
      el.textContent = ''
      tl.to(el, {
        text: { value: text },
        duration: text.length * 0.05,
        ease: 'none',
      })
    }
    
    return tl
  },

  // Stagger characters
  staggerChars: (element: string | Element, staggerAmount = staggers.chars) => {
    const selector = typeof element === 'string' ? `${element} .char` : element
    const chars = typeof element === 'string' 
      ? gsap.utils.toArray(selector)
      : gsap.utils.toArray('.char', element as Element)
    
    return gsap.from(chars, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      stagger: staggerAmount,
      duration: durations.normal,
      ease: easings.heroText,
      transformOrigin: '0% 50% -50',
    })
  },

  // Stagger words
  staggerWords: (element: string | Element, staggerAmount = staggers.words) => {
    const selector = typeof element === 'string' ? `${element} .word` : element
    const words = typeof element === 'string' 
      ? gsap.utils.toArray(selector)
      : gsap.utils.toArray('.word', element as Element)
    
    return gsap.from(words, {
      opacity: 0,
      y: 50,
      stagger: staggerAmount,
      duration: durations.normal,
      ease: easings.reveal,
    })
  },
}

// Element animation utilities
export const animateElement = {
  // Scale in
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      scale: 0,
      opacity: 0,
      duration: durations.normal,
      ease: easings.elastic,
      delay,
    })
  },

  // Slide in from left
  slideInLeft: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: durations.normal,
      ease: easings.reveal,
      delay,
    })
  },

  // Slide in from right
  slideInRight: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      x: 100,
      opacity: 0,
      duration: durations.normal,
      ease: easings.reveal,
      delay,
    })
  },

  // Reveal with clip path
  revealClip: (element: string | Element, direction = 'left', delay = 0) => {
    const clipPaths = {
      left: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      right: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      top: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      bottom: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    }

    return gsap.from(element, {
      clipPath: clipPaths[direction as keyof typeof clipPaths],
      duration: durations.slow,
      ease: easings.reveal,
      delay,
    })
  },

  // Blur in
  blurIn: (element: string | Element, delay = 0) => {
    return gsap.from(element, {
      filter: 'blur(20px)',
      opacity: 0,
      duration: durations.slow,
      ease: easings.smooth,
      delay,
    })
  },
}

// Hover animation utilities
export const animateHover = {
  // Magnetic effect
  magnetic: (element: HTMLElement, strength = 0.3) => {
    const bounds = element.getBoundingClientRect()
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - bounds.left - bounds.width / 2
      const y = e.clientY - bounds.top - bounds.height / 2
      
      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  },

  // Scale on hover
  scale: (element: HTMLElement, scale = 1.1) => {
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  },

  // Rotate on hover
  rotate: (element: HTMLElement, rotation = 10) => {
    const handleMouseEnter = () => {
      gsap.to(element, {
        rotation,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(element, {
        rotation: 0,
        duration: durations.fast,
        ease: easings.hover,
      })
    }
    
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  },
}

// Scroll animation utilities
export const animateScroll = {
  // Parallax effect
  parallax: (element: string | Element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  },

  // Fade on scroll
  fadeOnScroll: (element: string | Element) => {
    return gsap.to(element, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  },

  // Scale on scroll
  scaleOnScroll: (element: string | Element, endScale = 1.5) => {
    return gsap.to(element, {
      scale: endScale,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  },

  // Rotate on scroll
  rotateOnScroll: (element: string | Element, rotation = 360) => {
    return gsap.to(element, {
      rotation,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  },
}

// Batch animations for performance
export const batchAnimate = (elements: string | Element[], animation: (element: Element, delay: number) => void, staggerAmount = staggers.normal) => {
  const targets = gsap.utils.toArray(elements) as Element[]
  return targets.forEach((target, index) => {
    animation(target, index * staggerAmount)
  })
}

// Create timeline with default settings
export const createTimeline = (options = {}) => {
  return gsap.timeline({
    defaults: {
      duration: durations.normal,
      ease: easings.default,
    },
    ...options,
  })
}