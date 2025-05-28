'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
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
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* The main ScrollProgress component is already in layout.tsx, so this one is redundant. */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-[100] origin-left"
        style={{ scaleX: scrolled ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      /> */}

      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass backdrop-blur-strong py-4 shadow-lg' 
            : 'py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <nav className="container-modern">
          <div className="flex items-center justify-between">
            {/* Ultra-Modern Logo */}
            <Link href="/" className="group relative">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  <div className="absolute inset-0 blur-lg bg-primary/30 animate-pulse" />
                </div>
                <div className="relative">
                  <span className="text-2xl font-black gradient-text relative z-10">Firas</span>
                  <div className="absolute inset-0 blur-xl opacity-50 gradient-text group-hover:opacity-75 transition-opacity" />
                </div>
              </motion.div>
            </Link>

            {/* Glass Morphism Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <motion.div 
                className="glass-dark rounded-2xl p-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                          activeSection === item.href.substring(1)
                            ? 'text-white shadow-glow'
                            : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-primary rounded-xl"
                            layoutId="activeNavItem"
                            transition={{ 
                              type: "spring", 
                              stiffness: 500, 
                              damping: 30,
                              duration: 0.6 
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Modern Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle with Glass Effect */}
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="modern-card p-3 hover:shadow-glow"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-amber-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-blue-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Enhanced Resume Button */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  href="/resume-2025.pdf"
                  target="_blank"
                  className="btn-primary group shadow-glow-lg"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Resume</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden modern-card p-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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

          {/* Ultra-Modern Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="lg:hidden mt-8 overflow-hidden"
              >
                <div className="glass-dark rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* Mobile Navigation Items */}
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <Link
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`block py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                              activeSection === item.href.substring(1)
                                ? 'bg-gradient-primary text-white shadow-glow'
                                : 'text-foreground/80 hover:text-foreground hover:bg-white/10'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Mobile Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/30">
                      <motion.button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="modern-card p-4 hover:shadow-glow"
                        whileHover={{ scale: 1.05, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle theme"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-6 h-6 text-amber-500" />
                        ) : (
                          <Moon className="w-6 h-6 text-blue-500" />
                        )}
                      </motion.button>
                      
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                      >
                        <Link
                          href="/resume-2025.pdf"
                          target="_blank"
                          className="btn-primary group shadow-glow"
                        >
                          <Download className="w-5 h-5 group-hover:animate-bounce" />
                          <span>Resume</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}