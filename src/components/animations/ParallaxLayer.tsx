'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { useParallax } from '@/hooks/useScrollTrigger'
import { cn } from '@/lib/utils'

interface ParallaxLayerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'y' | 'x'
  offset?: number
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'y',
  offset = 0,
}) => {
  const layerRef = useRef<HTMLDivElement>(null)
  
  useParallax(layerRef as React.RefObject<Element>, speed, direction)

  return (
    <div 
      ref={layerRef} 
      className={cn('parallax-layer', className)}
      style={{
        transform: `translate${direction.toUpperCase()}(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}

// Parallax container for multiple layers
interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('parallax-container relative overflow-hidden', className)}>
      {children}
    </div>
  )
}

// Parallax image component
interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  scale?: boolean
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className,
  speed = 0.3,
  scale = true,
}) => {
  const imageRef = useRef<HTMLDivElement>(null)
  
  useParallax(imageRef as React.RefObject<Element>, speed)

  return (
    <div 
      ref={imageRef}
      className={cn(
        'parallax-image relative overflow-hidden',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          'object-cover',
          scale && 'scale-110'
        )}
      />
    </div>
  )
}