import { MetadataRoute } from 'next'
import projectsData from '@/content/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.firasb.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
  
  // Dynamic project pages
  const projectPages = projectsData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...projectPages]
}