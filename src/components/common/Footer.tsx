import Link from 'next/link'
import personalInfo from '@/content/personal-info.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, socialLinks } = personalInfo.personal

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} {name}. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={socialLinks.github}
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume-2025.pdf"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}