'use client'

import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import projectsData from '@/content/projects.json'
import Image from 'next/image'
import { useGSAP } from '@/hooks/useGSAP'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { AnimatedText } from '@/components/animations/AnimatedText'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { gsap } from '@/animations/gsap-config'

export default function Projects() {
  const { projects } = projectsData
  const projectsGridRef = useRef<HTMLDivElement>(null)
  const viewAllRef = useRef<HTMLDivElement>(null)
  
  // Show only featured projects for simplicity
  const featuredProjects = projects.filter(project => project.featured)

  const getProjectImage = (projectId: string) => {
    const imageMap: Record<string, string> = {
      'hotel-management-system': '/images/projects/hms/homeScreen.PNG',
      'bring-a-flatbed': '/images/projects/bafb/1.jpeg',
      'cinema-web-app': '/images/projects/cinema/1.png',
      'food-app': '/images/projects/food/1.png',
      'tictactoe': '/images/projects/tictactoe/screenshot.png',
      'monopoly-game': '/images/projects/monopoly/1.PNG',
      'todo-list-app': '/images/projects/todos/1.png',
      'perfect-circle': '/images/projects/perfect-circle/Capture.PNG',
      'image-to-text': '/images/projects/imgToText/1.PNG',
      'hash-join': '/images/projects/hashjoin/1.PNG',
      'mp3player': '/images/projects/mp3player/1.PNG',
      'rythem': '/images/projects/rythem/1.PNG'
    }
    return imageMap[projectId] || '/images/projects/project1.jpg'
  }

  useGSAP(() => {
    // Animate project cards with stagger
    if (projectsGridRef.current) {
      const cards = projectsGridRef.current.children
      
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.15,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Add hover animations to each card
      Array.from(cards).forEach((card) => {
        const image = card.querySelector('.project-image')
        const techStack = card.querySelectorAll('.tech-badge')
        
        // Image hover effect
        card.addEventListener('mouseenter', () => {
          if (image) {
            gsap.to(image, {
              scale: 1.1,
              duration: 0.6,
              ease: 'power2.out',
            })
          }
          
          // Stagger tech badges
          gsap.to(techStack, {
            y: -2,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          })
        })
        
        card.addEventListener('mouseleave', () => {
          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
            })
          }
          
          gsap.to(techStack, {
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          })
        })
      })
    }

    // Animate view all section with scale effect
    if (viewAllRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: viewAllRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
      
      tl.from(viewAllRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(viewAllRef.current.querySelector('p'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(viewAllRef.current.querySelector('.magnetic-button'), {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.3')
    }
  }, [])

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="container-modern max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Animated Header */}
          <ScrollReveal animation="fadeIn" className="text-center space-y-4">
            <AnimatedText
              as="h2"
              animation="splitWords"
              className="text-4xl md:text-5xl font-light text-foreground"
              stagger={0.1}
            >
              Selected Work
            </AnimatedText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects demonstrating expertise in full-stack development and innovative solutions.
            </p>
          </ScrollReveal>

          {/* Project Grid with GSAP animations */}
          <div 
            ref={projectsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="border border-border rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:border-primary-500/50">
                  {/* Project Image with parallax effect */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={getProjectImage(project.id)}
                      alt={project.title}
                      fill
                      className="project-image object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-foreground group-hover:text-primary-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack with hover animations */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge px-2 py-1 text-xs bg-muted text-muted-foreground rounded transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Project Links with magnetic effect */}
                    <div className="flex gap-3 pt-2">
                      {project.links.live && (
                        <MagneticButton
                          as="a"
                          href={project.links.live}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                          strength={0.1}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </MagneticButton>
                      )}
                      {project.links.github && (
                        <MagneticButton
                          as="a"
                          href={project.links.github}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                          strength={0.1}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div ref={viewAllRef} className="text-center pt-16">
            <div className="space-y-4">
              <p className="text-muted-foreground font-light">
                {projects.length} projects in total
              </p>
              <div className="group">
                <MagneticButton
                  as="a"
                  href="/projects"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary-500 transition-colors duration-300 font-light border-b border-transparent hover:border-primary-500/50"
                  strength={0.1}
                >
                  View all work
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}