'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react'
import personalInfo from '@/content/personal-info.json'
import Link from 'next/link'

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
}

export default function Contact() {
  const { email, phone, socialLinks } = personalInfo.personal

  return (
    <section id="contact" className="section-padding">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-fluid-3xl font-bold text-center mb-16">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-fluid-lg text-foreground/80 mb-8">
                I&apos;m always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Email */}
              <Link
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{email}</p>
                </div>
              </Link>

              {/* Phone */}
              <Link
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{phone}</p>
                </div>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4"
            >
              {Object.entries(socialLinks).map(([platform, url]) => {
                if (platform === 'website') return null
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                return (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 hover:scale-110 transition-all"
                    aria-label={`Connect on ${platform}`}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                )
              })}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16 space-y-8"
            >
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`mailto:${email}`}
                    className="btn-primary text-fluid-lg group shadow-glow-lg min-w-[200px]"
                  >
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Send Me an Email</span>
                  </Link>
                </motion.div>
                
                <span className="text-muted-foreground text-sm font-medium hidden sm:block">or</span>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/resume-2025.pdf"
                    target="_blank"
                    className="btn-secondary text-fluid-lg group min-w-[200px]"
                  >
                    <span>View Resume</span>
                  </Link>
                </motion.div>
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80 border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}