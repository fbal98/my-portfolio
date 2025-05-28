'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/animations/gsap-config'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  duration?: number
  delay?: number
  start?: string
  end?: string
  toggleActions?: string
  once?: boolean
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fadeIn',
  duration = 0.8,
  delay = 0,
  start = 'top 80%',
  end = 'bottom 20%',
  toggleActions = 'play none none reverse',
  once = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const getAnimationProps = () => {
    switch (animation) {
      case 'fadeIn':
        return { opacity: 0 }
      case 'slideUp':
        return { opacity: 0, y: 100 }
      case 'slideDown':
        return { opacity: 0, y: -100 }
      case 'slideLeft':
        return { opacity: 0, x: 100 }
      case 'slideRight':
        return { opacity: 0, x: -100 }
      case 'scale':
        return { opacity: 0, scale: 0.8 }
      case 'rotate':
        return { opacity: 0, rotation: -10 }
      default:
        return { opacity: 0 }
    }
  }

  useGSAP(() => {
    if (!containerRef.current) return

    const animationProps = getAnimationProps()

    gsap.from(containerRef.current, {
      ...animationProps,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        end,
        toggleActions: once ? 'play none none none' : toggleActions,
      },
    })
  }, [animation, duration, delay, start, end, toggleActions, once])

  return (
    <div ref={containerRef} className={cn('scroll-reveal', className)}>
      {children}
    </div>
  )
}

// Batch scroll reveal for multiple elements
interface BatchScrollRevealProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  animation?: ScrollRevealProps['animation']
  stagger?: number
  duration?: number
  start?: string
}

export const BatchScrollReveal: React.FC<BatchScrollRevealProps> = ({
  children,
  className,
  itemClassName,
  animation = 'slideUp',
  stagger = 0.1,
  duration = 0.6,
  start = 'top 85%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const items = containerRef.current.children

    gsap.from(items, {
      opacity: 0,
      y: animation === 'slideUp' ? 50 : 0,
      x: animation === 'slideLeft' ? 50 : animation === 'slideRight' ? -50 : 0,
      scale: animation === 'scale' ? 0.9 : 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        toggleActions: 'play none none reverse',
      },
    })
  }, [animation, stagger, duration, start])

  return (
    <div ref={containerRef} className={cn('batch-scroll-reveal', className)}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  )
}