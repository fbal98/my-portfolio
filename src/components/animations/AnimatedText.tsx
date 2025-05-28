'use client'

import React, { useRef } from 'react'
import { animateText } from '@/animations/animations'
import { useGSAP } from '@/hooks/useGSAP'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  children: string
  className?: string
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInRotate' | 'typewriter' | 'splitChars' | 'splitWords'
  delay?: number
  stagger?: number
  as?: keyof HTMLElementTagNameMap
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  stagger = 0.02,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!textRef.current) return

    switch (animation) {
      case 'fadeInUp':
        animateText.fadeInUp(textRef.current, delay)
        break
      
      case 'fadeInDown':
        animateText.fadeInDown(textRef.current, delay)
        break
      
      case 'fadeInRotate':
        animateText.fadeInRotate(textRef.current, delay)
        break
      
      case 'typewriter':
        animateText.typewriter(textRef.current, children, delay)
        break
      
      case 'splitChars':
        // Split text into characters
        const chars = children.split('').map((char) => 
          char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
        ).join('')
        textRef.current.innerHTML = chars
        animateText.staggerChars(textRef.current, stagger)
        break
      
      case 'splitWords':
        // Split text into words
        const words = children.split(' ').map(word => 
          `<span class="word">${word}</span>`
        ).join(' ')
        textRef.current.innerHTML = words
        animateText.staggerWords(textRef.current, stagger)
        break
    }
  }, [children, animation, delay, stagger])

  if (Component === 'div') {
    return (
      <div ref={containerRef as React.RefObject<HTMLDivElement>} className={cn('animated-text', className)}>
        <span ref={textRef as React.RefObject<HTMLSpanElement>}>{children}</span>
      </div>
    )
  } else if (Component === 'h1') {
    return (
      <h1 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={cn('animated-text', className)}>
        <span ref={textRef as React.RefObject<HTMLSpanElement>}>{children}</span>
      </h1>
    )
  } else if (Component === 'h2') {
    return (
      <h2 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={cn('animated-text', className)}>
        <span ref={textRef as React.RefObject<HTMLSpanElement>}>{children}</span>
      </h2>
    )
  } else if (Component === 'p') {
    return (
      <p ref={containerRef as React.RefObject<HTMLParagraphElement>} className={cn('animated-text', className)}>
        <span ref={textRef as React.RefObject<HTMLSpanElement>}>{children}</span>
      </p>
    )
  }
  
  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} className={cn('animated-text', className)}>
      <span ref={textRef as React.RefObject<HTMLSpanElement>}>{children}</span>
    </div>
  )
}

// Specialized components for common use cases
export const HeadlineText: React.FC<Omit<AnimatedTextProps, 'as'>> = (props) => (
  <AnimatedText {...props} as="h1" animation="splitChars" />
)

export const SubheadingText: React.FC<Omit<AnimatedTextProps, 'as'>> = (props) => (
  <AnimatedText {...props} as="h2" animation="fadeInUp" />
)

export const ParagraphText: React.FC<Omit<AnimatedTextProps, 'as'>> = (props) => (
  <AnimatedText {...props} as="p" animation="fadeInUp" />
)