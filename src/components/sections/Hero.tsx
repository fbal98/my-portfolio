'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Sparkles, Code, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-noise">
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-modern text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Status Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="status-available animate-pulse-glow">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-3"
            >
              <Sparkles className="w-6 h-6 text-primary-500 animate-pulse" />
              <p className="text-fluid-xl font-medium text-muted-foreground">
                Hello, I&apos;m
              </p>
            </motion.div>

            {/* Name - Ultra Large Typography */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="text-fluid-8xl font-black leading-none tracking-tight"
            >
              <span className="gradient-text text-balance">
                Firas Al Kharusi
              </span>
            </motion.h1>

            {/* Roles with Modern Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap justify-center gap-4 text-fluid-2xl font-bold">
                <span className="text-foreground/90">Full Stack Developer</span>
                <span className="text-primary-500">×</span>
                <span className="text-foreground/90">IT Specialist</span>
              </div>
              
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary rounded-2xl shadow-glow">
                <Code className="w-6 h-6 text-white" />
                <span className="text-fluid-lg font-semibold text-white">
                  Building the Future of Technology
                </span>
                <Zap className="w-6 h-6 text-white animate-pulse" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance"
            >
              Currently leading innovative solutions at{' '}
              <span className="font-semibold text-primary-500">Vodafone Oman</span>
              , specializing in React, Node.js, Python, and cloud-native architectures.
              Passionate about creating exceptional digital experiences.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#projects"
                className="btn-primary text-fluid-lg group"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToProjects()
                }}
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/resume-2025.pdf"
                target="_blank"
                className="btn-secondary text-fluid-lg"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center gap-4 pt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/fbal98', label: 'GitHub', color: 'hover:bg-gray-900' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/firasb98/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
              { icon: Mail, href: 'mailto:Firass269@gmail.com', label: 'Email', color: 'hover:bg-green-600' }
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className={`modern-card p-4 hover:text-white transition-all duration-300 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            {[
              { number: '10+', label: 'Projects Delivered', icon: Code },
              { number: '3+', label: 'Years Experience', icon: Zap },
              { number: '100%', label: 'Client Satisfaction', icon: Sparkles }
            ].map(({ number, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="hero-card text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
              >
                <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:animate-pulse" />
                <div className="text-fluid-2xl font-bold text-foreground mb-1">{number}</div>
                <div className="text-sm text-muted-foreground font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <span className="text-sm text-muted-foreground font-medium">Discover More</span>
          <motion.button
            onClick={scrollToAbout}
            className="p-3 rounded-full border border-border hover:border-primary-500 transition-all duration-300 hover:shadow-glow group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}