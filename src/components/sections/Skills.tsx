'use client'

import { motion } from 'framer-motion'
import skillsData from '@/content/skills.json'

const skillCategories = [
  { id: 'languages', title: 'Programming Languages', icon: '💻' },
  { id: 'frontend', title: 'Frontend Development', icon: '🎨' },
  { id: 'backend', title: 'Backend Development', icon: '⚙️' },
  { id: 'databases', title: 'Databases', icon: '🗄️' },
  { id: 'tools', title: 'Tools & DevOps', icon: '🛠️' },
]

export default function Skills() {
  const { skills } = skillsData

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-fluid-3xl font-bold text-center mb-16">
            <span className="gradient-text">Technical Skills</span>
          </h2>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills[category.id as keyof typeof skills]
              if (!categorySkills || !Array.isArray(categorySkills)) return null

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-fluid-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={typeof skill === 'string' ? skill : skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            {typeof skill === 'string' ? skill : skill.name}
                          </span>
                          {typeof skill === 'object' && (
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        {typeof skill === 'object' && (
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border"
          >
            <h3 className="text-fluid-xl font-semibold mb-6 text-center">
              Soft Skills & Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}