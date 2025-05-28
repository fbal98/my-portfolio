'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, FileText, ExternalLink } from 'lucide-react'
import personalInfo from '@/content/personal-info.json'
import Link from 'next/link'

export default function About() {
  const { bio, location, email } = personalInfo.personal

  return (
    <section id="about" className="section-padding">
      <div className="container-modern max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Simple About Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Contact & Resume Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg space-y-4"
            >
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
              
              <Link
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </Link>
            </motion.div>

            {/* Resume Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg space-y-4"
            >
              <h3 className="text-xl font-medium text-foreground">Resume</h3>
              
              <p className="text-muted-foreground text-sm">
                Download my latest resume to see my full experience, education, and technical skills.
              </p>
              
              <Link
                href="/resume-2025.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download PDF
                <ExternalLink className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>

          {/* Simple Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-green-500/20 bg-green-500/5 rounded-full"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Available for opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}