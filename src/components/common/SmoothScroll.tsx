'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scroll behavior to all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleClick)

    // Add scroll padding for fixed header
    document.documentElement.style.scrollPaddingTop = '80px'

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}