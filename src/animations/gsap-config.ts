import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Configure GSAP defaults
gsap.config({
  nullTargetWarn: false,
  force3D: true,
})

// Default animation settings
export const animationDefaults = {
  ease: 'power3.inOut',
  duration: 0.6,
}

// Easing functions
export const easings = {
  // Standard eases
  default: 'power3.inOut',
  in: 'power3.in',
  out: 'power3.out',
  inOut: 'power3.inOut',
  
  // Special eases
  smooth: 'power2.inOut',
  snappy: 'power4.out',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'bounce.out',
  
  // Custom eases for specific use cases
  heroText: 'power3.out',
  reveal: 'power2.out',
  hide: 'power2.in',
  hover: 'power2.out',
}

// Duration presets
export const durations = {
  instant: 0.1,
  fast: 0.25,
  normal: 0.5,
  slow: 0.8,
  xslow: 1.2,
}

// Stagger presets
export const staggers = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  chars: 0.02,
  words: 0.05,
}

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
  markers: false, // Set to true for debugging
}

// Breakpoints for responsive animations
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Initialize GSAP with custom settings
export const initGSAP = () => {
  // Set up responsive animations
  ScrollTrigger.matchMedia({
    // Desktop animations
    '(min-width: 1024px)': function() {
      ScrollTrigger.defaults({
        ...scrollTriggerDefaults,
      })
    },
    
    // Tablet animations
    '(min-width: 768px) and (max-width: 1023px)': function() {
      ScrollTrigger.defaults({
        ...scrollTriggerDefaults,
        start: 'top 85%',
      })
    },
    
    // Mobile animations
    '(max-width: 767px)': function() {
      ScrollTrigger.defaults({
        ...scrollTriggerDefaults,
        start: 'top 90%',
      })
    },
  })
  
  // Handle reduced motion preference
  if (prefersReducedMotion()) {
    gsap.globalTimeline.timeScale(10) // Speed up all animations
  }
}

// Utility to kill all animations
export const killAllAnimations = () => {
  gsap.killTweensOf('*')
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

// Utility to refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger }