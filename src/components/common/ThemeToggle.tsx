'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { MagneticButton } from '@/components/animations/MagneticButton'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <MagneticButton
        className="p-2 rounded-full bg-foreground/5 hover:bg-primary-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(218,165,32,0.3)]"
        strength={0.2}
        aria-label="Loading theme toggle"
      >
        <div className="w-5 h-5" />
      </MagneticButton>
    )
  }

  return (
    <MagneticButton
      onClick={toggleTheme}
      className="p-2 rounded-full bg-foreground/5 hover:bg-primary-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(218,165,32,0.3)]"
      strength={0.2}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground/60 hover:text-primary-500 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-foreground/60 hover:text-primary-500 transition-colors" />
      )}
    </MagneticButton>
  )
}