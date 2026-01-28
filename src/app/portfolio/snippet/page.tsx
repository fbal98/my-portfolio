'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { Instagram, ArrowUpRight, ArrowUpLeft, X, ChevronLeft, ChevronRight, Clock, Expand, MessageCircle, Languages } from 'lucide-react'
import snippetData from '@/content/snippet-projects.json'
import { snippetTranslations } from '@/translations/snippet'
import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from '@/animations/gsap-config'
import Image from 'next/image'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700'],
  display: 'swap',
})

interface LocalizedContent {
  title: string
  projectType: string
  description: string
  deliverables: string[]
}

interface Project {
  id: string
  en: LocalizedContent
  ar: LocalizedContent
  status: 'completed' | 'in-progress'
  technologies: string[]
  duration: string
  year: number
  brandColor: 'snippet-peach' | 'snippet-lavender' | 'snippet-teal' | 'snippet-yellow' | 'snippet-mint'
  images: {
    thumbnail: string | null
    gallery?: string[]
  }
}

type Language = 'en' | 'ar'

export default function SnippetPortfolio() {
  const { metadata, projects } = snippetData as {
    metadata: {
      en: { business: string; tagline: string; description: string; instagram: string }
      ar: { business: string; tagline: string; description: string; instagram: string }
    }
    projects: Project[]
  }

  // Language detection and state
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem('snippet-language') as Language | null
    if (stored) return stored
    return navigator.language.startsWith('ar') ? 'ar' : 'en'
  }

  const [lang, setLang] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Initialize language on mount
  useEffect(() => {
    setLang(getInitialLanguage())
    setMounted(true)
  }, [])

  // Save language preference
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en'
    setLang(newLang)
    localStorage.setItem('snippet-language', newLang)
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; index: number } | null>(null)
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({})
  const [modalVisible, setModalVisible] = useState(false)

  // Get translations for current language
  const t = snippetTranslations[lang]
  const isRTL = lang === 'ar'

  // Set document direction for global navigation
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
      document.documentElement.lang = lang
    }
    return () => {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
    }
  }, [isRTL, lang, mounted])

  // Color configuration
  const getColorConfig = (colorName: string) => {
    const config: Record<string, { main: string; muted: string }> = {
      'snippet-peach': {
        main: 'var(--color-snippet-peach)',
        muted: 'var(--color-snippet-peach-muted)',
      },
      'snippet-lavender': {
        main: 'var(--color-snippet-lavender)',
        muted: 'var(--color-snippet-lavender-muted)',
      },
      'snippet-teal': {
        main: 'var(--color-snippet-teal)',
        muted: 'var(--color-snippet-teal-muted)',
      },
      'snippet-yellow': {
        main: 'var(--color-snippet-yellow)',
        muted: 'var(--color-snippet-yellow-muted)',
      },
      'snippet-mint': {
        main: 'var(--color-snippet-mint)',
        muted: 'var(--color-snippet-mint-muted)',
      },
    }
    return config[colorName] || config['snippet-peach']
  }

  // Open modal with animation
  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalVisible(true)
  }

  // Close modal with animation
  const closeModal = () => {
    setModalVisible(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  // GSAP animations
  useGSAP(() => {
    // Set initial states explicitly with RTL support
    const lineOrigin = isRTL ? 'right center' : 'left center'
    gsap.set('.hero-line', { scaleX: 0, transformOrigin: lineOrigin })
    gsap.set('.hero-badge', { y: 20, opacity: 0 })
    gsap.set('.hero-title', { y: 60, opacity: 0 })
    gsap.set('.hero-subtitle', { y: 40, opacity: 0 })
    gsap.set('.hero-cta', { y: 20, opacity: 0 })
    gsap.set('.project-card', { y: 80, opacity: 0 })
    gsap.set('.cta-section', { y: 60, opacity: 0 })

    // Hero animation timeline
    const tl = gsap.timeline({ delay: 0.3 })

    tl.to('.hero-line', {
      scaleX: 1,
      duration: 0.8,
      ease: 'power3.inOut'
    })
    .to('.hero-badge', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.3')
    .to('.hero-title', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.2')
    .to('.hero-subtitle', {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.6')
    .to('.hero-cta', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.4')

    // Project cards stagger with refined animation
    gsap.to('.project-card', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
      }
    })

    // CTA section
    gsap.to('.cta-section', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 90%',
      }
    })
  }, { scope: containerRef, dependencies: [isRTL] })

  // Lightbox navigation
  const currentGallery = selectedProject?.images.gallery || []

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!lightboxImage || !currentGallery.length) return

    const newIndex = direction === 'next'
      ? (lightboxImage.index + 1) % currentGallery.length
      : (lightboxImage.index - 1 + currentGallery.length) % currentGallery.length

    setLightboxImage({
      src: currentGallery[newIndex],
      index: newIndex
    })
  }, [lightboxImage, currentGallery])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'Escape') setLightboxImage(null)
        if (e.key === 'ArrowLeft') navigateLightbox('prev')
        if (e.key === 'ArrowRight') navigateLightbox('next')
      } else if (selectedProject && e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage, selectedProject, navigateLightbox])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject || lightboxImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProject, lightboxImage])

  return (
    <div ref={containerRef} className={`min-h-screen bg-background overflow-x-hidden ${isRTL ? tajawal.className : ''}`} dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>
      {/* Subtle ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] dark:opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, var(--color-snippet-peach) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03] dark:opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, var(--color-snippet-teal) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative px-6 md:px-12 lg:px-20 pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Language Toggle */}
        <div className={`absolute top-6 z-[100] ${isRTL ? 'left-32 md:left-36' : 'right-32 md:right-36'}`}>
          {mounted && (
            <MagneticButton
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-foreground/5 hover:bg-primary-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(218,165,32,0.3)]"
              strength={0.2}
              aria-label="Toggle language"
            >
              <span className="text-sm font-medium text-foreground/60 hover:text-primary-500 transition-colors">
                {lang === 'en' ? 'AR' : 'EN'}
              </span>
            </MagneticButton>
          )}
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Decorative line */}
          <div
            className="hero-line h-px w-16 mb-8"
            style={{ background: 'var(--color-snippet-peach)' }}
          />

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 mb-8">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--color-snippet-peach)' }}
            />
            <span className="text-sm font-medium tracking-wide text-foreground/60">
              {metadata[lang].business}
            </span>
          </div>

          {/* Title */}
          <h1
            className="hero-title text-[2.75rem] md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[1.1] mb-6"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            {metadata[lang].tagline}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-foreground/50 max-w-lg mb-10 leading-relaxed">
            {metadata[lang].description}
          </p>

          {/* CTA */}
          <a
            href={`https://instagram.com/${metadata[lang].instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02] transition-all duration-300"
          >
            {isRTL ? (
              <>
                <ArrowUpLeft className="w-3.5 h-3.5 text-foreground/40 group-hover:text-foreground/60 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground/90 transition-colors">
                  {metadata[lang].instagram}
                </span>
                <Instagram className="w-4 h-4 text-foreground/60" />
              </>
            ) : (
              <>
                <Instagram className="w-4 h-4 text-foreground/60" />
                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground/90 transition-colors">
                  {metadata[lang].instagram}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </>
            )}
          </a>

        </div>
      </header>

      {/* Projects Grid */}
      <main className="relative px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-medium text-foreground/40 uppercase tracking-widest">
              {t.selectedWork}
            </span>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => {
              const colors = getColorConfig(project.brandColor)

              return (
                <article
                  key={project.id}
                  className="project-card group cursor-pointer rounded-2xl p-3 -m-3 hover:bg-foreground/[0.02] transition-all duration-300"
                  onClick={() => openModal(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl group-hover:shadow-black/[0.08] dark:group-hover:shadow-black/30 transition-all duration-500">
                    {/* Skeleton loader */}
                    {!imageLoaded[project.id] && (
                      <div
                        className="absolute inset-0 animate-pulse"
                        style={{ background: colors.muted }}
                      />
                    )}

                    {project.images.thumbnail && (
                      <Image
                        src={project.images.thumbnail}
                        alt={project[lang].title}
                        fill
                        className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] ${
                          imageLoaded[project.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(prev => ({ ...prev, [project.id]: true }))}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}

                    {/* Subtle gradient overlay always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                    {/* View label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <Expand className="w-4 h-4" />
                        {t.viewProject}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/80 text-white backdrop-blur-sm shadow-sm"
                    >
                      {project.year}
                    </div>

                    {/* Image count badge */}
                    {project.images.gallery && project.images.gallery.length > 0 && (
                      <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/80 text-white backdrop-blur-sm shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span className="w-1 h-1 rounded-full bg-white opacity-50" />
                        {project.images.gallery.length} {t.shots}
                      </div>
                    )}

                    {/* Color accent bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: colors.main }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h2 className="text-base font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors truncate">
                          {project[lang].title}
                        </h2>
                        <p
                          className="text-[13px] font-medium"
                          style={{ color: colors.main }}
                        >
                          {project[lang].projectType}
                        </p>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-foreground/[0.03] group-hover:bg-foreground/[0.08] transition-all duration-300"
                      >
                        {isRTL ? (
                          <ArrowUpLeft
                            className="w-4 h-4 text-foreground/40 group-hover:text-foreground/70 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          />
                        ) : (
                          <ArrowUpRight
                            className="w-4 h-4 text-foreground/40 group-hover:text-foreground/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          />
                        )}
                      </div>
                    </div>

                    <p className="text-[13px] text-foreground/50 leading-relaxed line-clamp-2 mb-3">
                      {project[lang].description}
                    </p>

                    {/* Tech preview */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-foreground/[0.04] text-foreground/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] text-foreground/30 font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="cta-section relative px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--color-snippet-peach-muted), var(--color-snippet-lavender-muted))'
            }}
          >
            {/* Decorative elements */}
            <div
              className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-64 opacity-30`}
              style={{
                background: 'radial-gradient(circle, var(--color-snippet-peach) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <h2
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                {t.haveProjectInMind}
              </h2>
              <p className="text-foreground/60 max-w-md mb-8">
                {t.haveProjectDescription}
              </p>
              <a
                href={`https://instagram.com/${metadata[lang].instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.startConversation}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-border/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <span>{metadata[lang].business} {new Date().getFullYear()}</span>
          <a
            href={`https://instagram.com/${metadata[lang].instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/70 transition-colors"
          >
            {metadata[lang].instagram}
          </a>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          ref={modalRef}
          className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto transition-all duration-300 ${
            modalVisible ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/0'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div
            className={`relative w-full max-w-4xl mx-4 my-8 md:my-16 transition-all duration-300 ${
              modalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className={`absolute -top-12 ${isRTL ? 'left-0 md:-left-12' : 'right-0 md:-right-12'} w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-105`}
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-background rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero image */}
              {selectedProject.images.thumbnail && (
                <div className="relative aspect-video bg-foreground/5">
                  <Image
                    src={selectedProject.images.thumbnail}
                    alt={selectedProject[lang].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              )}

              {/* Header */}
              <div className="p-6 md:p-8 -mt-16 relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3"
                      style={{
                        background: `color-mix(in oklch, ${getColorConfig(selectedProject.brandColor).main} 15%, transparent)`,
                        color: getColorConfig(selectedProject.brandColor).main
                      }}
                    >
                      {selectedProject[lang].projectType}
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-light tracking-tight"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {selectedProject[lang].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/50 bg-foreground/5 px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedProject.duration}</span>
                    <span className="text-foreground/30">·</span>
                    <span>{selectedProject.year}</span>
                  </div>
                </div>

                <p className="text-foreground/60 leading-relaxed max-w-2xl mb-6">
                  {selectedProject[lang].description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-full bg-foreground/5 text-foreground/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {selectedProject.images.gallery && selectedProject.images.gallery.length > 0 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xs font-medium text-foreground/40 uppercase tracking-widest mb-4">
                    {t.screenshots}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.images.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightboxImage({ src: img, index: idx })}
                        className="group/img relative aspect-[4/3] rounded-lg overflow-hidden bg-foreground/5 ring-1 ring-foreground/5 hover:ring-foreground/20 transition-all"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject[lang].title} ${t.screenshots} ${idx + 1}`}
                          fill
                          className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                          <Expand className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity drop-shadow-lg" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              <div className="px-6 md:px-8 pb-8 pt-4 border-t border-border/30 mx-6 md:mx-8 mb-6">
                <h3 className="text-xs font-medium text-foreground/40 uppercase tracking-widest mb-4">
                  {t.whatWasDelivered}
                </h3>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {selectedProject[lang].deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-foreground/60"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: getColorConfig(selectedProject.brandColor).main }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          {/* Navigation */}
          {currentGallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
                className={`absolute ${isRTL ? 'right-4 md:right-8' : 'left-4 md:left-8'} top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 z-10`}
                aria-label={t.previousImage}
              >
                {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
                className={`absolute ${isRTL ? 'left-4 md:left-8' : 'right-4 md:right-8'} top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 z-10`}
                aria-label={t.nextImage}
              >
                {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>
            </>
          )}

          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            className={`absolute top-4 ${isRTL ? 'left-4 md:left-8' : 'right-4 md:right-8'} w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 z-10`}
            aria-label={t.closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image counter */}
          {currentGallery.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium">
              {lightboxImage.index + 1} / {currentGallery.length}
            </div>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={t.screenshots}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
