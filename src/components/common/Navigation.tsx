'use client'

import { useState, useEffect, useMemo, memo, useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download, User, FolderOpen, Mail, ChevronRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { gsap } from '@/animations/gsap-config'
import { ScrollTrigger } from '@/animations/gsap-config'
import { useGSAP } from '@/hooks/useGSAP'
import { easings, durations } from '@/animations/gsap-config'

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showBentoGrid, setShowBentoGrid] = useState(false)
  const [navState, setNavState] = useState<'full' | 'icons' | 'dots'>('full')

  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const bentoGridRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Refs for navigation state containers
  const fullNavRef = useRef<HTMLDivElement>(null)
  const iconNavRef = useRef<HTMLDivElement>(null)
  const dotNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // GSAP context for animations
  const { contextSafe } = useGSAP({ scope: navRef })

  // Initial mount animations
  useLayoutEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      // Initial animation for header
      gsap.from(headerRef.current, {
        opacity: 0,
        duration: durations.normal,
        ease: easings.reveal,
      })

      // Logo animation
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: durations.normal,
        ease: easings.reveal,
        delay: 0.1,
      })

      // Initial state - nav items should be visible at 0px
      if (navState === 'full' && fullNavRef.current) {
        gsap.set(fullNavRef.current, { opacity: 1, y: 0 })
        
        // Animate nav items in
        const items = fullNavRef.current.querySelectorAll('.nav-item')
        gsap.from(items, {
          opacity: 0,
          y: -20,
          duration: durations.fast,
          stagger: 0.1,
          ease: easings.reveal,
          delay: 0.2,
        })

        // Theme toggle animation
        const themeToggle = fullNavRef.current.querySelector('.theme-toggle')
        if (themeToggle) {
          gsap.from(themeToggle, {
            opacity: 0,
            scale: 0.8,
            duration: durations.fast,
            ease: easings.reveal,
            delay: 0.4,
          })
        }
      }

      // Mobile menu button animation
      const mobileMenuBtn = navRef.current?.querySelector('.mobile-menu-btn')
      if (mobileMenuBtn) {
        gsap.from(mobileMenuBtn, {
          opacity: 0,
          duration: durations.normal,
          ease: easings.reveal,
          delay: 0.3,
        })
      }
    }, navRef)

    return () => ctx.revert()
  }, [mounted, navState])

  // Scroll-based animations and state management
  useLayoutEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      // Create ScrollTrigger for navigation states
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const currentScrollY = self.scroll()
          const maxScroll = self.end - self.start
          const progress = (currentScrollY / maxScroll) * 100
          
          setScrolled(currentScrollY > 50)
          
          // Update progress bar
          if (progressBarRef.current) {
            gsap.to(progressBarRef.current, {
              scaleX: progress / 100,
              duration: 0.1,
              ease: 'none',
            })
          }
          
          // Determine navigation state based on scroll
          let newState: 'full' | 'icons' | 'dots' = 'full'
          if (currentScrollY < 100) {
            newState = 'full'
          } else if (currentScrollY < 400) {
            newState = 'icons'
          } else {
            newState = 'dots'
          }
          
          // Only update if state changed
          if (newState !== navState) {
            setNavState(newState)
          }
          
          // Menu button visibility
          if (menuButtonRef.current) {
            gsap.to(menuButtonRef.current, {
              opacity: progress > 10 ? 1 : 0,
              x: progress > 10 ? 0 : 20,
              duration: durations.fast,
              ease: easings.reveal,
            })
          }
        },
      })

      // Active section detection
      navItems.forEach(item => {
        const section = document.querySelector(item.href)
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 150px',
            end: 'bottom 150px',
            onToggle: (self) => {
              if (self.isActive) {
                setActiveSection(item.href.substring(1))
              }
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [mounted, navState])

  // Navigation state transitions
  useLayoutEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Hide all states first
      gsap.set([fullNavRef.current, iconNavRef.current, dotNavRef.current], {
        opacity: 0,
        display: 'none',
      })

      // Show and animate the current state
      switch (navState) {
        case 'full':
          if (fullNavRef.current) {
            tl.set(fullNavRef.current, { display: 'flex' })
              .to(fullNavRef.current, {
                opacity: 1,
                duration: durations.fast,
                ease: easings.reveal,
              })
          }
          break
          
        case 'icons':
          if (iconNavRef.current) {
            tl.set(iconNavRef.current, { display: 'flex' })
              .fromTo(iconNavRef.current, 
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: durations.fast, ease: easings.reveal }
              )
          }
          break
          
        case 'dots':
          if (dotNavRef.current) {
            tl.set(dotNavRef.current, { display: 'flex' })
              .fromTo(dotNavRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: durations.fast, ease: easings.reveal }
              )
          }
          break
      }
    })

    return () => ctx.revert()
  }, [mounted, navState])

  // Bento Grid animations
  const toggleBentoGrid = contextSafe(() => {
    if (showBentoGrid) {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => setShowBentoGrid(false),
      })
      
      if (bentoGridRef.current) {
        const items = bentoGridRef.current.querySelectorAll('.bento-item')
        tl.to(items, {
          opacity: 0,
          y: 20,
          duration: durations.fast,
          stagger: 0.05,
          ease: easings.hide,
        })
        .to(bentoGridRef.current, {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: durations.fast,
          ease: easings.hide,
        }, '-=0.2')
      }
    } else {
      // Open animation
      setShowBentoGrid(true)
      
      // Wait for DOM update
      requestAnimationFrame(() => {
        if (bentoGridRef.current) {
          const tl = gsap.timeline()
          const items = bentoGridRef.current.querySelectorAll('.bento-item')
          
          tl.fromTo(bentoGridRef.current,
            { opacity: 0, y: -20, scale: 0.95, display: 'block' },
            { opacity: 1, y: 0, scale: 1, duration: durations.fast, ease: easings.elastic }
          )
          .fromTo(items,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: durations.fast, stagger: 0.05, ease: easings.reveal },
            '-=0.2'
          )
        }
      })
    }
  })

  // Mobile menu animations
  const toggleMobileMenu = contextSafe(() => {
    if (isOpen) {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => setIsOpen(false),
      })
      
      if (mobileMenuRef.current) {
        const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-item')
        tl.to(items, {
          opacity: 0,
          x: -20,
          duration: durations.fast,
          stagger: 0.05,
          ease: easings.hide,
        })
        .to(mobileMenuRef.current, {
          opacity: 0,
          height: 0,
          duration: durations.fast,
          ease: easings.hide,
        }, '-=0.2')
      }
      
      // Rotate menu icon
      gsap.to('.menu-icon', {
        rotation: 90,
        opacity: 0,
        duration: durations.instant,
      })
      gsap.fromTo('.x-icon',
        { rotation: -90, opacity: 0 },
        { rotation: 0, opacity: 1, duration: durations.instant }
      )
    } else {
      // Open animation
      setIsOpen(true)
      
      requestAnimationFrame(() => {
        if (mobileMenuRef.current) {
          const tl = gsap.timeline()
          const items = mobileMenuRef.current.querySelectorAll('.mobile-nav-item')
          
          tl.fromTo(mobileMenuRef.current,
            { opacity: 0, height: 0 },
            { opacity: 1, height: 'auto', duration: durations.fast, ease: easings.reveal }
          )
          .fromTo(items,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: durations.fast, stagger: 0.1, ease: easings.reveal },
            '-=0.2'
          )
        }
      })
      
      // Rotate menu icon
      gsap.to('.x-icon', {
        rotation: 90,
        opacity: 0,
        duration: durations.instant,
      })
      gsap.fromTo('.menu-icon',
        { rotation: -90, opacity: 0 },
        { rotation: 0, opacity: 1, duration: durations.instant }
      )
    }
  })

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
    setShowBentoGrid(false)
  }

  // Memoize Bento Grid content for performance
  const bentoItems = useMemo(() => [
    {
      id: 'about',
      title: 'About Me',
      description: 'Full Stack Developer specializing in modern web applications',
      icon: User,
      href: '#about',
      preview: '/images/portraits/portrait.jpeg',
      className: 'col-span-2 row-span-2',
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Featured work and case studies',
      icon: FolderOpen,
      href: '#projects',
      preview: '/images/projects/trip-management/1.jpeg',
      className: 'col-span-1 row-span-2',
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch',
      icon: Mail,
      href: '#about',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 'resume',
      title: 'Resume',
      description: 'Download CV',
      icon: Download,
      href: '/resume-2025.pdf',
      isExternal: true,
      className: 'col-span-1 row-span-1',
    },
  ], [])

  if (!mounted) return null

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-2 backdrop-blur-md bg-background/80' 
            : 'py-6'
        }`}
      >
        <nav ref={navRef} className="container-modern">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef}>
              <Link href="/" className="text-2xl font-light tracking-wider">
                Firas
              </Link>
            </div>

            {/* Desktop Navigation - Progressive Reveal */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Full text navigation */}
              <div ref={fullNavRef} className="flex items-center gap-6">
                {navItems.map((item) => (
                  <div key={item.name} className="nav-item">
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`text-sm font-light transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'text-primary-500'
                          : 'text-foreground/70 hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div className="theme-toggle">
                  <ThemeToggle />
                </div>
              </div>

              {/* Icon navigation */}
              <div ref={iconNavRef} className="flex items-center gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary-500 text-white'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    }`}
                    aria-label={item.name}
                  >
                    <item.icon className="w-4 h-4" />
                  </Link>
                ))}
                <ThemeToggle />
              </div>

              {/* Dot navigation */}
              <div ref={dotNavRef} className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary-500 w-8'
                        : 'bg-foreground/30 hover:bg-foreground/50'
                    }`}
                    aria-label={item.name}
                  />
                ))}
                <div className="ml-2">
                  <ThemeToggle />
                </div>
              </div>

              {/* Bento Grid Menu Button */}
              <button
                ref={menuButtonRef}
                onClick={toggleBentoGrid}
                className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 opacity-0"
              >
                Menu
                <ChevronRight className={`w-3 h-3 transition-transform ${showBentoGrid ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Mobile Theme Toggle and Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 mobile-menu-btn"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <X className="w-6 h-6 x-icon absolute inset-0" style={{ opacity: isOpen ? 1 : 0 }} />
                  <Menu className="w-6 h-6 menu-icon absolute inset-0" style={{ opacity: isOpen ? 0 : 1 }} />
                </div>
              </button>
            </div>
          </div>

          {/* Bento Grid Dropdown */}
          {showBentoGrid && (
            <div
              ref={bentoGridRef}
              className="absolute top-full left-0 right-0 mt-4 hidden lg:block"
            >
              <div className="container-modern">
                <div className="bg-background border border-border rounded-2xl shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {bentoItems.map((item) => (
                      <div
                        key={item.id}
                        className={`bento-item ${item.className}`}
                      >
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full p-6 rounded-xl border border-border bg-card hover:bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                          >
                            <BentoContent item={item} />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="block h-full p-6 rounded-xl border border-border bg-card hover:bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                          >
                            <BentoContent item={item} />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {isOpen && (
            <div
              ref={mobileMenuRef}
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl p-6">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="mobile-nav-item">
                      <Link
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-primary-500 text-white'
                            : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-light">{item.name}</span>
                      </Link>
                    </div>
                  ))}
                  
                  <div className="mobile-nav-item pt-4 border-t border-border">
                    <Link
                      href="/resume-2025.pdf"
                      target="_blank"
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-light">Resume</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Progress indicator */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary-500 z-[60] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </>
  )
}

// Define proper types for BentoItem
interface BentoItem {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  preview?: string
  className: string
  isExternal?: boolean
}

// Memoized Bento Grid Content Component for performance
const BentoContent = memo(({ item }: { item: BentoItem }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <item.icon className="w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform" />
        {item.isExternal && (
          <Download className="w-4 h-4 text-foreground/40" />
        )}
      </div>
      {item.preview && (
        <div className="relative w-full h-24 mb-4 rounded-lg overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
          {/* Placeholder for image - would need next/image in real implementation */}
          <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-primary-500/5" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-medium text-sm mb-1">{item.title}</h3>
        <p className="text-xs text-foreground/60">{item.description}</p>
      </div>
    </div>
  )
})

BentoContent.displayName = 'BentoContent'