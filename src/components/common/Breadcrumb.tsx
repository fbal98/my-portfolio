'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <motion.ol 
        className="flex items-center space-x-2 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Home */}
        <li>
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        
        {/* Separator */}
        <li className="text-muted-foreground/50">
          <ChevronRight className="w-4 h-4" />
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
          >
            {item.href ? (
              <>
                <Link 
                  href={item.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <ChevronRight className="w-4 h-4 ml-2 text-muted-foreground/50" />
                )}
              </>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </nav>
  )
}