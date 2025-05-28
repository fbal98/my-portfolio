import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin } from 'lucide-react'
import projectsData from '@/content/projects.json'
import experienceData from '@/content/experience.json'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.projects.find((p) => p.id === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Firas Al Kharusi`,
    description: project.longDescription || project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  // Find related experience if it's a work project
  const relatedExperience = project.role 
    ? experienceData.experience.find(exp => 
        project.duration && exp.duration.includes(project.duration.split(' ')[0])
      )
    : null

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-4">
            {project.title}
          </h1>
          
          {/* Status and Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {project.status && (
              <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                project.status === 'completed' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-yellow-500/10 text-yellow-500'
              }`}>
                {project.status}
              </span>
            )}
            
            {project.year && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year}
              </div>
            )}
            
            {project.role && (
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {project.role}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
              </Link>
            )}
          </div>
        </header>

        {/* Project Description */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-fluid-2xl font-semibold mb-4">Overview</h2>
          <p className="text-foreground/80 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Achievements */}
        {project.achievements && (
          <section className="mb-12">
            <h2 className="text-fluid-2xl font-semibold mb-4">Key Achievements</h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-foreground/80">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-fluid-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Related Experience */}
        {relatedExperience && (
          <section className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-fluid-lg font-semibold mb-2">Related Experience</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {relatedExperience.position} at {relatedExperience.company}
            </p>
            <p className="text-sm text-foreground/70">
              {relatedExperience.description}
            </p>
          </section>
        )}
      </div>
    </div>
  )
}