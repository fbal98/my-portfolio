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
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}