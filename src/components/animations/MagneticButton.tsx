'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from '@/animations/gsap-config'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: 'button' | 'a'
  href?: string
  target?: string
  'aria-label'?: string
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 0.3,
  as: Component = 'button',
  href,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    const text = textRef.current

    let bounds: DOMRect

    const rotateToMouse = (e: MouseEvent) => {
      bounds = button.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY
      const leftX = mouseX - bounds.left
      const topY = mouseY - bounds.top
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      }

      // Apply magnetic effect to button
      gsap.to(button, {
        x: center.x * strength,
        y: center.y * strength,
        duration: 0.3,
        ease: 'power2.out',
      })

      // Apply opposite effect to text for depth
      if (text) {
        gsap.to(text, {
          x: center.x * strength * 0.5,
          y: center.y * strength * 0.5,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const removeRotation = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)',
      })

      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)',
        })
      }
    }

    // Add hover scale effect
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      removeRotation()
    }

    button.addEventListener('mousemove', rotateToMouse as EventListener)
    button.addEventListener('mouseleave', removeRotation as EventListener)
    button.addEventListener('mouseenter', handleMouseEnter as EventListener)
    button.addEventListener('mouseleave', handleMouseLeave as EventListener)

    return () => {
      button.removeEventListener('mousemove', rotateToMouse as EventListener)
      button.removeEventListener('mouseleave', removeRotation as EventListener)
      button.removeEventListener('mouseenter', handleMouseEnter as EventListener)
      button.removeEventListener('mouseleave', handleMouseLeave as EventListener)
    }
  }, [strength])

  const commonClassName = cn(
    'magnetic-button relative inline-flex items-center justify-center overflow-hidden',
    className
  )

  if (Component === 'a' && href) {
    return (
      <a 
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href} 
        className={commonClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span ref={textRef} className="relative z-10">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button 
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={commonClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span ref={textRef} className="relative z-10">
        {children}
      </span>
    </button>
  )
}