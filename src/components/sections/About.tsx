'use client'

import { useRef } from 'react'
import { Mail, MapPin, FileText, ExternalLink } from 'lucide-react'
import personalInfo from '@/content/personal-info.json'
import Link from 'next/link'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/animations/gsap-config'

export default function About() {
  const { bio, location, email } = personalInfo.personal
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate cards with stagger effect
    if (cardsRef.current) {
      const cards = cardsRef.current.children
      
      // Create a timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false, // Set to true to debug
        },
      })
      
      // Set initial state and animate both cards with consistent timing
      tl.fromTo(cards, 
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15, // Reduced stagger for tighter sequence
          ease: 'power2.out',
          clearProps: 'all', // Clean up inline styles after animation
        }
      )
    }

  }, [])

  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      {/* Animated background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container-modern max-w-4xl relative z-10">
        <div className="text-center space-y-12">
          {/* Animated About Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Contact & Resume Cards with GSAP */}
          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {/* Contact Card */}
            <div className="group p-6 border border-border rounded-lg space-y-4 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <h3 className="text-xl font-medium text-foreground">Get in Touch</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <Link 
                    href={`mailto:${email}`}
                    className="hover:text-primary-500 transition-colors"
                  >
                    {email}
                  </Link>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{location}</span>
                </div>
              </div>
              
              <a
                href={`mailto:${email}`}
                className="btn-luxury inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>

            {/* Resume Card */}
            <div className="group p-6 border border-border rounded-lg space-y-4 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
              <h3 className="text-xl font-medium text-foreground">Resume</h3>
              
              <p className="text-muted-foreground text-sm">
                Download my latest resume to see my full experience, education, and technical skills.
              </p>
              
              <a
                href="/resume-2025.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download PDF
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}