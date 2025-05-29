'use client'

import { useRef, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { gsap } from '@/animations/gsap-config'
import { useGSAP } from '@/hooks/useGSAP'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { initGSAP } from '@/animations/gsap-config'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null)

  // Initialize GSAP on component mount
  useEffect(() => {
    initGSAP()
  }, [])

  useGSAP(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Split text animation for name
    if (nameRef.current) {
      const chars = nameRef.current.textContent?.split('') || []
      nameRef.current.innerHTML = chars
        .map(char => char === ' ' ? '&nbsp;' : `<span class="inline-block">${char}</span>`)
        .join('')
      
      tl.from(nameRef.current.children, {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformOrigin: '0% 50% -50',
        duration: 0.8,
        stagger: 0.02,
      })
    }

    // Animate role and description
    if (roleRef.current) {
      tl.from(roleRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.4')
    }

    // Animate CTA buttons with elastic effect
    if (ctaRef.current) {
      tl.from(ctaRef.current.children, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.3')
    }

    // Animate social links
    if (socialRef.current) {
      tl.from(socialRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.2')
    }

    // Animate scroll indicator
    if (scrollIndicatorRef.current) {
      tl.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.6,
      }).to(scrollIndicatorRef.current, {
        y: 8,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })
    }

    // Add floating animation to background elements
    gsap.to('.floating-element', {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-5, 5)',
      duration: 'random(3, 5)',
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.5,
        from: 'random',
      },
    })
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-element absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="floating-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-modern text-center relative z-10 max-w-4xl">
        <div className="space-y-8">
          {/* Animated Name */}
          <div className="space-y-6">
            <h1 
              ref={nameRef}
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground"
            >
              Firas Al Kharusi
            </h1>

            <div ref={roleRef} className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Full Stack Developer & IT Applications Specialist
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Leading end-to-end IT solutions delivery at{' '}
                <span className="text-primary-500 font-medium">Vodafone Oman</span>
                {' '}with expertise in React, Node.js, Go, Python, and cloud technologies.
              </p>
            </div>
          </div>

          {/* Animated CTA Section */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <MagneticButton
              as="a"
              href="#about"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                scrollToAbout()
              }}
              className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              strength={0.2}
            >
              Get in Touch
            </MagneticButton>
            
            <MagneticButton
              as="a"
              href="/resume-2025.pdf"
              target="_blank"
              className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              strength={0.2}
            >
              View Resume
            </MagneticButton>
          </div>

          {/* Animated Social Links */}
          <div
            ref={socialRef}
            className="flex justify-center gap-6 pt-12"
          >
            <MagneticButton
              as="a"
              href="https://github.com/fbal98"
              target="_blank"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              aria-label="GitHub"
              strength={0.4}
            >
              <Github className="w-6 h-6" />
            </MagneticButton>
            
            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/firasb98/"
              target="_blank"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              aria-label="LinkedIn"
              strength={0.4}
            >
              <Linkedin className="w-6 h-6" />
            </MagneticButton>
            
            <MagneticButton
              as="a"
              href="mailto:Firass269@gmail.com"
              className="p-3 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              aria-label="Email"
              strength={0.4}
            >
              <Mail className="w-6 h-6" />
            </MagneticButton>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <button
          ref={scrollIndicatorRef}
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}