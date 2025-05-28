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
- **Framer Motion** for subtle animations
- **Bun** as the JavaScript runtime and package manager

### Design Philosophy

**MINIMALIST FIRST**: This portfolio follows modern minimalist design principles:
- **Ample whitespace** for visual breathing room
- **Limited color palette** - neutral grays + single blue accent
- **Clean typography** with light font weights and proper hierarchy
- **Subtle animations** - no complex particles or flashy effects
- **Content-focused** - every element serves a clear purpose
- **Simple navigation** - only essential sections

### Critical Tailwind CSS 4 Configuration

**IMPORTANT**: This project uses Tailwind CSS v4, which has a completely different configuration system than v3:

1. **No `tailwind.config.js`** - Configuration is done in CSS using `@theme` directive
2. **CSS Import**: Use `@import "tailwindcss"` instead of separate `@tailwind` directives
3. **Color Format**: Colors use `oklch()` color space, not HSL/RGB
4. **CSS Variables**: Theme variables are prefixed (e.g., `--color-primary-500`)
5. **PostCSS Plugin**: Uses `@tailwindcss/postcss` instead of `tailwindcss` plugin

### Simplified Architecture

**Page Structure** (3 sections only):
- `src/app/page.tsx` - Minimal single-page layout: Hero → About → Projects
- `src/app/projects/[slug]/page.tsx` - Dynamic project detail pages
- `src/app/globals.css` - **Critical**: Contains all Tailwind v4 configuration and minimal custom classes

**Component Structure**:
- `/components/common/` - Layout components
  - `Navigation.tsx` - Progressive reveal nav with Bento grid menu
  - `Footer.tsx` - Minimal footer with essential links
  - `ThemeProvider.tsx` - Next.js theme management
  - `Breadcrumb.tsx` - Clean breadcrumb for project pages
  - `ScrollProgress.tsx` - Top progress indicator
  - `SmoothScroll.tsx` - Smooth scrolling behavior
- `/components/sections/` - Three core sections: Hero, About, Projects
- `/components/ui/` - Minimal reusable UI components

**Active Sections**:
1. **Hero** (`Hero.tsx`) - Clean introduction with name, role, and simple CTAs
2. **About** (`About.tsx`) - Contact information and resume download (focused on lead generation)
3. **Projects** (`Projects.tsx`) - Featured projects in clean grid layout

**Removed Sections** (for minimal design):
- ~~Experience~~ - Information moved to resume
- ~~Skills~~ - Shown in project tech stacks instead
- ~~Contact~~ - Integrated into About section

### Data-Driven Content System

All content is JSON-based and type-safe:
- `src/content/personal-info.json` - Personal details, bio, contact info
- `src/content/projects.json` - Portfolio projects (only featured projects shown on homepage)
- `src/content/experience.json` - Professional experience (used in resume, not displayed)
- `src/content/skills.json` - Technical skills (referenced but not displayed as section)
- `src/content/education.json` - Educational background (used in resume)

## Critical Development Notes

1. **Minimalist Design First**: Always prioritize simplicity. Remove before adding. If it doesn't serve the core purpose (intro → contact → projects), it shouldn't be there.

2. **Tailwind CSS 4 Only**: Never create a `tailwind.config.js` file. All configuration is in `globals.css` using `@theme` directive.

3. **Limited Color Palette**: Stick to neutral grays + single blue accent (`primary-500`). Avoid gradients and complex color schemes.

4. **Typography Hierarchy**: Use light font weights (`font-light`) for headings, maintain clear hierarchy without being heavy.

5. **Content Management**: Edit JSON files in `src/content/`, never hardcode content in components.

6. **Animations**: Keep subtle. Use simple `y` transforms and opacity. No complex particles, orbs, or flashy effects. Navigation uses smooth transitions with `requestAnimationFrame`.

7. **Navigation**: Progressive reveal system with three states (full → icons → dots). Bento grid menu for additional options. Mobile-first responsive design.

## Common Development Tasks

### Adding Content

1. **Personal Info**: Update `src/content/personal-info.json`
2. **New Project**: Add to `src/content/projects.json` and set `featured: true` to show on homepage
3. **Project Images**: Add to `public/images/projects/[project-id]/`

### Design Modifications

1. **Colors**: Edit `@theme` block in `globals.css` - stick to minimal palette
2. **Typography**: Adjust fluid text utilities - keep light and clean
3. **Spacing**: Use existing section-padding utilities
4. **Never**: Add complex animations or heavy visual effects

### Navigation System (2025+ Design)

The navigation system in `src/components/common/Navigation.tsx` implements cutting-edge 2025 design patterns:

#### Progressive Reveal Navigation
- **Initial State**: Only the logo "Firas" is visible
- **Scroll Stages**:
  - 0-100px: Full text navigation items
  - 100-400px: Icon-only navigation
  - 400px+: Minimal dot indicators
- **Performance**: Optimized with `requestAnimationFrame` for smooth 60fps scrolling

#### Bento Grid Menu
- **Trigger**: "Menu" button appears after 10% scroll
- **Layout**: 4-column grid with varied tile sizes
- **Sections**:
  - About (2x2) - Main introduction tile
  - Projects (1x2) - Work showcase
  - Contact (1x1) - Quick contact
  - Resume (1x1) - Direct download

#### Navigation Structure
```javascript
const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
]
```

#### Key Features
- **Breadcrumb Navigation**: Added to project detail pages
- **Mobile Responsive**: Clean slide-down menu for mobile
- **Accessibility**: Full ARIA labels and keyboard navigation
- **Performance**: Memoized components and throttled scroll events

### Page Structure

Main page (`src/app/page.tsx`) follows this minimal structure:
```jsx
export default function Home() {
  return (
    <>
      <Hero />     {/* Clean introduction */}
      <About />    {/* Contact + Resume focus */}
      <Projects /> {/* Featured work only */}
    </>
  )
}
```

## Design Guidelines

### DO:
- Use ample whitespace
- Keep animations subtle (simple y-transforms, opacity)
- Focus on content hierarchy
- Maintain single blue accent color
- Use light font weights
- Show only essential information
- Implement smooth scroll-based interactions
- Use progressive enhancement for navigation
- Optimize performance with React best practices

### DON'T:
- Add complex background animations or particles
- Use multiple accent colors or gradients
- Create busy layouts with too much information
- Add unnecessary sections or components
- Use heavy font weights or flashy effects
- Overload the initial DOM (use progressive reveal)
- Forget mobile-first responsive design
- Skip accessibility features

## Content Priorities

1. **Personal Introduction** - Clean, professional first impression
2. **Contact & Resume** - Easy ways for leads to reach out or learn more
3. **Project Showcase** - Curated featured work demonstrating expertise

This minimalist approach ensures fast loading, clear messaging, and better conversion rates for professional opportunities.