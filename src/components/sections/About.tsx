'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Mail, Calendar, Award, Coffee, Gamepad2, Bike, Globe2, Users, Code, Zap } from 'lucide-react'
import personalInfo from '@/content/personal-info.json'
import Link from 'next/link'

export default function About() {
  const { bio, interests, languages, location, email } = personalInfo.personal

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Technologies Mastered', value: '20+', icon: Zap },
    { label: 'Client Satisfaction', value: '100%', icon: Award },
  ]

  const interestIcons = {
    'Web3 & Blockchain': Globe2,
    'Coffee Enthusiast': Coffee,
    'Gaming': Gamepad2,
    'Horseback Riding': Bike,
  }

  const languageFlags = {
    'Arabic (Native)': '🇴🇲',
    'English (Fluent)': '🇺🇸',
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-muted/20 to-background">
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
              <Users className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Get to Know Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-fluid-4xl font-black mb-6"
            >
              <span className="gradient-text">About Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            >
              Passionate developer crafting digital experiences with modern technologies
              and a deep commitment to excellence.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative modern-card p-4 bg-gradient-to-br from-background to-muted/50">
                  <Image
                    src="/images/portraits/portrait.jpeg"
                    alt="Firas Al Kharusi - Full Stack Developer"
                    width={500}
                    height={600}
                    className="object-cover rounded-2xl w-full aspect-[4/5] shadow-xl"
                    priority
                  />
                  
                  {/* Floating info card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -right-6 modern-card p-6 shadow-2xl max-w-xs"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">{location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <Link 
                          href={`mailto:${email}`}
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          {email}
                        </Link>
                      </div>
                      <div className="status-available">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">
                          Available for opportunities
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Bio */}
              <div className="space-y-6">
                <h3 className="text-fluid-2xl font-bold">My Journey</h3>
                <p className="text-fluid-base text-muted-foreground leading-relaxed">
                  {bio}
                </p>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  Interests & Hobbies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => {
                    const Icon = interestIcons[interest as keyof typeof interestIcons] || Coffee
                    return (
                      <motion.div
                        key={interest}
                        className="modern-card p-4 group hover:bg-primary/5 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                          <span className="text-sm font-medium">{interest}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-primary" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language) => {
                    const flag = languageFlags[language as keyof typeof languageFlags] || '🌍'
                    return (
                      <motion.div
                        key={language}
                        className="modern-card px-4 py-3 group hover:bg-primary/5 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{flag}</span>
                          <span className="text-sm font-medium">{language}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="modern-card p-6 text-center group hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <div className="text-fluid-2xl font-bold text-foreground mb-2">{value}</div>
                <div className="text-sm text-muted-foreground font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="modern-card p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
              <h3 className="text-fluid-xl font-bold mb-4">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Ready to bring your ideas to life? Let&apos;s discuss how we can create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="btn-primary group">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Get In Touch</span>
                </Link>
                <Link href="/resume-2025.pdf" target="_blank" className="btn-secondary group">
                  <Award className="w-5 h-5 group-hover:animate-pulse" />
                  <span>View Resume</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}