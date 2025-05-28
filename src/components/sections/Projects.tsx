'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Calendar, Star, Award, Zap, Globe, Smartphone, Server } from 'lucide-react'
import projectsData from '@/content/projects.json'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All Projects', icon: Code, count: 0 },
  { id: 'featured', name: 'Featured', icon: Star, count: 0 },
  { id: 'web', name: 'Web Apps', icon: Globe, count: 0 },
  { id: 'mobile', name: 'Mobile', icon: Smartphone, count: 0 },
  { id: 'backend', name: 'Backend', icon: Server, count: 0 },
  { id: 'automation', name: 'Automation', icon: Zap, count: 0 },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const { projects } = projectsData

  // Update category counts
  const updatedCategories = categories.map(category => ({
    ...category,
    count: category.id === 'all' 
      ? projects.length 
      : category.id === 'featured'
      ? projects.filter(p => p.featured).length
      : projects.filter(p => p.category === category.id).length
  }))

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'featured') return project.featured
    return project.category === activeCategory
  })

  const getProjectImage = (projectId: string) => {
    // Map project IDs to their image paths
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

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Award className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Featured Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-fluid-4xl font-black mb-6"
            >
              <span className="gradient-text">Project Portfolio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            >
              A collection of projects showcasing my expertise in full-stack development, 
              mobile applications, and innovative solutions across various technologies.
            </motion.p>
          </div>

          {/* Enhanced Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {updatedCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`glass-dark px-6 py-4 rounded-2xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                    activeCategory === category.id
                      ? 'bg-gradient-primary text-white shadow-glow scale-105'
                      : 'text-foreground/70 hover:text-foreground hover:scale-105'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                  
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-primary rounded-2xl -z-10"
                      layoutId="activeCategory"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="modern-card h-full overflow-hidden relative">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                      <Image
                        src={getProjectImage(project.id)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Project Actions */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.links.github && (
                          <Link
                            href={project.links.github}
                            target="_blank"
                            className="modern-card p-3 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5 group-hover/btn:animate-pulse" />
                          </Link>
                        )}
                        {project.links.live && (
                          <Link
                            href={project.links.live}
                            target="_blank"
                            className="modern-card p-3 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5 group-hover/btn:animate-pulse" />
                          </Link>
                        )}
                        <Link
                          href={`/projects/${project.id}`}
                          className="modern-card p-3 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                        >
                          <Eye className="w-5 h-5 group-hover/btn:animate-pulse" />
                        </Link>
                      </motion.div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-primary rounded-full shadow-glow">
                            <Star className="w-4 h-4 text-white fill-white" />
                            <span className="text-xs font-semibold text-white">Featured</span>
                          </div>
                        </div>
                      )}

                      {/* Status Badge */}
                      {project.status && (
                        <div className="absolute top-4 right-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${
                            project.status === 'completed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              project.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                            } animate-pulse`} />
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="space-y-3">
                        <h3 className="text-fluid-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        {project.year && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                        )}
                        
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 text-xs text-muted-foreground bg-muted rounded-full">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* View Details Link */}
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="https://github.com/fbal98"
              target="_blank"
              className="btn-secondary group shadow-lg"
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}