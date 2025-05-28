# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun start

# Install dependencies
bun install

# Linting and type checking
bun run lint
bunx tsc --noEmit
```

## Architecture Overview

This is a **modern minimal portfolio** website built with:
- **Next.js 15** with App Router for server-side rendering and routing
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with CSS variables and @theme directive
- **GSAP** for sophisticated animations and interactions
- **Bun** as the JavaScript runtime and package manager

### Design Philosophy

**MINIMALIST FIRST**: This portfolio follows modern minimalist design principles:
- **Ample whitespace** for visual breathing room
- **Limited color palette** - neutral grays + single blue accent
- **Clean typography** with light font weights and proper hierarchy
- **Sophisticated animations** - GSAP-powered smooth interactions inspired by gsap.com
- **Content-focused** - every element serves a clear purpose
- **Simple navigation** - only essential sections
- **Light mode default** - Clean white background with optional dark mode

### Animation System (GSAP-Powered)

**IMPORTANT**: This project uses GSAP for all animations, replacing Framer Motion for better performance and control:

1. **GSAP Core**: Primary animation library with ScrollTrigger plugin
2. **Animation Utilities**: Reusable animation functions in `src/animations/`
3. **React Integration**: Custom hooks wrapping GSAP functionality
4. **Performance Optimized**: 60fps animations with proper cleanup

#### Animation Architecture
```
src/
├── animations/
│   ├── gsap-config.ts         # GSAP configuration and defaults
│   ├── animations.ts          # Reusable animation functions
│   └── timelines.ts           # Complex animation sequences
├── hooks/
│   ├── useGSAP.ts            # GSAP React integration
│   ├── useScrollTrigger.ts    # ScrollTrigger wrapper
│   └── useMagneticHover.ts   # Interactive hover effects
└── components/animations/
    ├── AnimatedText.tsx       # Text animation components
    ├── MagneticButton.tsx     # Interactive magnetic buttons
    ├── ScrollReveal.tsx       # Scroll-triggered reveals
    └── ParallaxLayer.tsx      # Parallax effects
```

### Critical Tailwind CSS 4 Configuration

**IMPORTANT**: This project uses Tailwind CSS v4, which has a completely different configuration system than v3:

1. **No `tailwind.config.js`** - Configuration is done in CSS using `@theme` directive
2. **CSS Import**: Use `@import "tailwindcss"` instead of separate `@tailwind` directives
3. **Color Format**: Colors use `oklch()` color space, not HSL/RGB
4. **CSS Variables**: Theme variables are prefixed (e.g., `--color-primary-500`)
5. **PostCSS Plugin**: Uses `@tailwindcss/postcss` instead of `tailwindcss` plugin
6. **Dark Mode**: Implemented via CSS class toggle with custom color variables

### Theme System

The portfolio supports both light and dark modes:

**Light Mode (Default)**:
- Clean white background (`oklch(0.99 0 0)`)
- Dark text for optimal readability
- Professional, clean appearance

**Dark Mode**:
- Dark background (`oklch(0.05 0 0)`)
- Light text for reduced eye strain
- Triggered via theme toggle in navigation

**Theme Toggle**:
- Available in all navigation states
- Magnetic hover effect
- Persistent localStorage preference
- Smooth transitions between modes

### Simplified Architecture

**Page Structure** (3 sections only):
- `src/app/page.tsx` - Minimal single-page layout: Hero → About → Projects
- `src/app/projects/[slug]/page.tsx` - Dynamic project detail pages
- `src/app/globals.css` - **Critical**: Contains all Tailwind v4 configuration and dark/light mode styles

**Component Structure**:
- `/components/common/` - Layout components
  - `Navigation.tsx` - Progressive reveal nav with theme toggle
  - `ThemeToggle.tsx` - Light/dark mode switcher
  - `Footer.tsx` - Minimal footer with essential links
  - `Breadcrumb.tsx` - Clean breadcrumb for project pages
  - `ScrollProgress.tsx` - Top progress indicator
- `/components/sections/` - Three core sections with GSAP animations
- `/components/animations/` - Reusable GSAP-powered components
- `/components/ui/` - Minimal reusable UI components

**Active Sections**:
1. **Hero** (`Hero.tsx`) - Split-text animations, magnetic buttons, floating backgrounds
2. **About** (`About.tsx`) - Contact cards with staggered reveals, no status indicator
3. **Projects** (`Projects.tsx`) - Featured projects with hover animations and scroll reveals

**Removed Elements** (for minimal design):
- ~~Experience Section~~ - Information moved to resume
- ~~Skills Section~~ - Shown in project tech stacks instead
- ~~Contact Section~~ - Integrated into About section
- ~~"Available for opportunities" status~~ - Removed for cleaner design

### Data-Driven Content System

All content is JSON-based and type-safe:
- `src/content/personal-info.json` - Personal details, bio, contact info
- `src/content/projects.json` - Portfolio projects (only featured projects shown on homepage)
- `src/content/experience.json` - Professional experience (used in resume, not displayed)
- `src/content/skills.json` - Technical skills (referenced but not displayed as section)
- `src/content/education.json` - Educational background (used in resume)

## Critical Development Notes

1. **Minimalist Design First**: Always prioritize simplicity. Remove before adding. If it doesn't serve the core purpose (intro → contact → projects), it shouldn't be there.

2. **GSAP Animations Only**: Use GSAP for all animations. Never add Framer Motion or other animation libraries. Follow the established animation patterns in `src/animations/`.

3. **Tailwind CSS 4 Only**: Never create a `tailwind.config.js` file. All configuration is in `globals.css` using `@theme` directive.

4. **Limited Color Palette**: Stick to neutral grays + single blue accent (`primary-500`). Support both light and dark modes.

5. **Typography Hierarchy**: Use light font weights (`font-light`) for headings, maintain clear hierarchy without being heavy.

6. **Content Management**: Edit JSON files in `src/content/`, never hardcode content in components.

7. **Performance**: All animations run at 60fps. Use GSAP's built-in performance optimizations and proper cleanup.

8. **Accessibility**: Respect `prefers-reduced-motion` and provide proper ARIA labels.

## GSAP Animation Guidelines

### Animation Principles
- **Smooth & Natural**: Use appropriate easing functions (power3.out, elastic.out)
- **Staggered Reveals**: Animate elements in sequence for visual hierarchy
- **Scroll-Triggered**: Tie animations to scroll position for engagement
- **Magnetic Interactions**: Subtle hover effects that respond to cursor proximity
- **Performance First**: Use transform properties and avoid layout thrashing

### Common Animation Patterns

**Text Animations**:
```typescript
// Split character animation
animateText.staggerChars(element, 0.02)

// Word-by-word reveal
animateText.staggerWords(element, 0.1)

// Typewriter effect
animateText.typewriter(element, "Your text", 0.5)
```

**Scroll Reveals**:
```typescript
// Basic scroll reveal
<ScrollReveal animation="slideUp">
  <YourContent />
</ScrollReveal>

// Batch reveal with stagger
<BatchScrollReveal stagger={0.1}>
  {items.map(item => <Item key={item.id} />)}
</BatchScrollReveal>
```

**Interactive Elements**:
```typescript
// Magnetic button
<MagneticButton strength={0.2}>
  Click me
</MagneticButton>

// Parallax layer
<ParallaxLayer speed={0.3}>
  <YourContent />
</ParallaxLayer>
```

## Common Development Tasks

### Adding Content

1. **Personal Info**: Update `src/content/personal-info.json`
2. **New Project**: Add to `src/content/projects.json` and set `featured: true` to show on homepage
3. **Project Images**: Add to `public/images/projects/[project-id]/`

### Design Modifications

1. **Colors**: Edit `@theme` block in `globals.css` - stick to minimal palette and ensure dark mode support
2. **Typography**: Adjust fluid text utilities - keep light and clean
3. **Spacing**: Use existing section-padding utilities
4. **Animations**: Use established GSAP patterns, never add complex effects
5. **Theme**: Test both light and dark modes for consistency

### Navigation System (2025+ Design)

The navigation system implements cutting-edge design patterns:

#### Progressive Reveal Navigation
- **Initial State**: Logo "Firas" + theme toggle
- **Scroll Stages**:
  - 0-100px: Full text navigation items + theme toggle
  - 100-400px: Icon-only navigation + theme toggle
  - 400px+: Minimal dot indicators + theme toggle
- **Performance**: Optimized with `requestAnimationFrame` for smooth 60fps scrolling

#### Theme Toggle Integration
- **Always Visible**: Theme toggle appears in all navigation states
- **Magnetic Effect**: Subtle hover interaction
- **Accessibility**: Proper ARIA labels and keyboard support
- **Persistence**: Saves theme preference to localStorage

#### Bento Grid Menu
- **Trigger**: "Menu" button appears after 10% scroll
- **Layout**: 4-column grid with varied tile sizes
- **Sections**:
  - About (2x2) - Main introduction tile
  - Projects (1x2) - Work showcase
  - Contact (1x1) - Quick contact
  - Resume (1x1) - Direct download

### Page Structure

Main page (`src/app/page.tsx`) follows this minimal structure:
```jsx
export default function Home() {
  return (
    <>
      <Hero />     {/* GSAP text animations, magnetic buttons */}
      <About />    {/* Staggered card reveals, no status */}
      <Projects /> {/* Scroll reveals, hover effects */}
    </>
  )
}
```

## Design Guidelines

### DO:
- Use ample whitespace
- Implement GSAP animations following established patterns
- Focus on content hierarchy
- Maintain single blue accent color
- Use light font weights
- Show only essential information
- Test both light and dark modes
- Implement smooth scroll-based interactions
- Use magnetic hover effects on interactive elements
- Optimize performance with GSAP best practices

### DON'T:
- Add Framer Motion or other animation libraries
- Use multiple accent colors or gradients
- Create busy layouts with too much information
- Add unnecessary sections or components
- Use heavy font weights or flashy effects
- Add status indicators or availability badges
- Overload the initial DOM (use progressive reveal)
- Forget mobile-first responsive design
- Skip accessibility features
- Break the minimalist philosophy

## Content Priorities

1. **Personal Introduction** - Clean, professional first impression with smooth animations
2. **Contact & Resume** - Easy ways for leads to reach out or learn more
3. **Project Showcase** - Curated featured work with engaging hover effects

This minimalist approach with sophisticated GSAP animations ensures fast loading, clear messaging, better conversion rates, and a memorable user experience that reflects modern web design standards.