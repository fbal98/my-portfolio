'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'
import experienceData from '@/content/experience.json'

export default function Experience() {
  const { experience } = experienceData

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-fluid-3xl font-bold text-center mb-16">
            <span className="gradient-text">Professional Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Experience items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                  </div>

                  {/* Content card */}
                  <div className="md:ml-20 bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-fluid-xl font-semibold">{item.position}</h3>
                        <p className="text-fluid-base text-primary font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                        {item.contractFrom && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Building className="w-4 h-4 mr-1" />
                            Contract via {item.contractFrom}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-sm text-foreground/70">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}