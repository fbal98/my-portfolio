'use client'

import { useState, useEffect, useMemo, memo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, User, FolderOpen, Mail, ChevronRight } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showBentoGrid, setShowBentoGrid] = useState(false)
  const [navState, setNavState] = useState<'full' | 'icons' | 'dots'>('full')

  useEffect(() => {
    setMounted(true)
    
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight
          const progress = (currentScrollY / maxScroll) * 100
          
          setScrolled(currentScrollY > 50)
          setScrollProgress(progress)
          
          // Determine navigation state based on scroll
          if (currentScrollY < 100) {
            setNavState('full')
          } else if (currentScrollY < 400) {
            setNavState('icons')
          } else {
            setNavState('dots')
          }
          
          // Enhanced active section detection
          const sections = navItems.map(item => item.href.substring(1))
          const current = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 150 && rect.bottom >= 150
            }
            return false
          })
          setActiveSection(current || '')
          
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-2 backdrop-blur-md bg-background/80' 
            : 'py-6'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container-modern">
          <div className="flex items-center justify-between">
            {/* Progressive Reveal Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="text-2xl font-light tracking-wider">
                Firas
              </Link>
            </motion.div>

            {/* Desktop Navigation - Progressive Reveal */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Navigation items that transform based on scroll */}
              <AnimatePresence mode="wait">
                {navState === 'full' && (
                  <motion.div
                    key="full-nav"
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: scrollProgress > index * 20 ? 1 : 0, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      >
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
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {navState === 'icons' && (
                  <motion.div
                    key="icon-nav"
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                )}

                {navState === 'dots' && (
                  <motion.div
                    key="dot-nav"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bento Grid Menu Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: scrollProgress > 10 ? 1 : 0, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={() => setShowBentoGrid(!showBentoGrid)}
                className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
              >
                Menu
                <ChevronRight className={`w-3 h-3 transition-transform ${showBentoGrid ? 'rotate-90' : ''}`} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Bento Grid Dropdown */}
          <AnimatePresence>
            {showBentoGrid && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-full left-0 right-0 mt-4 hidden lg:block"
              >
                <div className="container-modern">
                  <div className="bg-background border border-border rounded-2xl shadow-xl p-6">
                    <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {bentoItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className={item.className}
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
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-6 overflow-hidden"
              >
                <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl p-6">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
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
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="pt-4 border-t border-border"
                    >
                      <Link
                        href="/resume-2025.pdf"
                        target="_blank"
                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                      >
                        <Download className="w-5 h-5" />
                        <span className="font-light">Resume</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary-500 z-[60]"
        style={{ scaleX: scrollProgress / 100, originX: 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
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