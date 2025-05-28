'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-modern text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Simple Introduction */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground"
            >
              Firas Al Kharusi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Full Stack Developer & IT Specialist
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Building digital solutions at{' '}
                <span className="text-primary-500 font-medium">Vodafone Oman</span>
                {' '}with expertise in React, Node.js, Python, and cloud technologies.
              </p>
            </motion.div>
          </div>

          {/* Minimal CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToAbout()
              }}
              className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Get in Touch
            </Link>
            
            <Link
              href="/resume-2025.pdf"
              target="_blank"
              className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
            >
              View Resume
            </Link>
          </motion.div>

          {/* Clean Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 pt-12"
          >
            <Link
              href="https://github.com/fbal98"
              target="_blank"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/firasb98/"
              target="_blank"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            
            <Link
              href="mailto:Firass269@gmail.com"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.6 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  )
}