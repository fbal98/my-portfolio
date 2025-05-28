'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import projectsData from '@/content/projects.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const { projects } = projectsData
  
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

  return (
    <section id="projects" className="section-padding">
      <div className="container-modern max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Simple Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects demonstrating expertise in full-stack development and innovative solutions.
            </p>
          </div>

          {/* Clean Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={getProjectImage(project.id)}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
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
                    
                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                      {project.links.live && (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      )}
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out all {projects.length} projects.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}