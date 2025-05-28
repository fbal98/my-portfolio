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

# Linting
bun run lint
```

## Architecture Overview

This is a modern portfolio website built with:
- **Next.js 15** with App Router for server-side rendering and routing
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with CSS variables and @theme directive
- **Framer Motion** for animations
- **Bun** as the JavaScript runtime and package manager

### Critical Tailwind CSS 4 Configuration

**IMPORTANT**: This project uses Tailwind CSS v4, which has a completely different configuration system than v3:

1. **No `tailwind.config.js`** - Configuration is done in CSS using `@theme` directive
2. **CSS Import**: Use `@import "tailwindcss"` instead of separate `@tailwind` directives
3. **Color Format**: Colors use `oklch()` color space, not HSL/RGB
4. **CSS Variables**: Theme variables are prefixed (e.g., `--color-primary-500`)
5. **PostCSS Plugin**: Uses `@tailwindcss/postcss` instead of `tailwindcss` plugin

### Key Architecture Files
- `src/app/layout.tsx` - Root layout with ThemeProvider and navigation
- `src/app/page.tsx` - Single-page layout with all portfolio sections
- `src/app/projects/[slug]/page.tsx` - Dynamic project detail pages
- `src/app/globals.css` - **Critical**: Contains all Tailwind v4 configuration and custom classes

### Component Architecture
- `/components/common/` - Layout components (Navigation, Footer, ThemeProvider)
- `/components/sections/` - Self-contained page sections that compose the homepage
- `/components/ui/` - Reusable UI components

### Data-Driven Content System
All content is JSON-based and type-safe:
- `src/content/personal-info.json` - Personal details and social links
- `src/content/projects.json` - Portfolio projects with full metadata
- `src/content/experience.json` - Professional experience timeline
- `src/content/skills.json` - Technical and soft skills categorization
- `src/content/education.json` - Educational background

## Critical Development Notes

1. **Tailwind CSS 4 Only**: Never create a `tailwind.config.js` file. All configuration is in `globals.css` using `@theme` directive.

2. **Custom Classes**: All custom utilities (`.text-fluid-*`, `.btn-primary`, `.modern-card`, etc.) are defined in `globals.css` using `@layer` directives.

3. **Color System**: Uses `oklch()` color space with full palette (50-950 shades). Dark mode handled via `.dark` class overrides.

4. **Content Management**: Edit JSON files in `src/content/`, never hardcode content in components.

5. **Responsive Typography**: Uses fluid typography with `clamp()` functions for seamless scaling.

6. **Theme System**: Uses `next-themes` with `attribute="class"` for dark mode support.

## Common Development Tasks

### Adding a New Project
1. Add project data to `src/content/projects.json` with required fields
2. Add project images to `public/images/projects/[project-id]/`
3. Dynamic route `/projects/[slug]` will automatically generate the page

### Modifying Colors or Styling
1. **Theme Colors**: Edit CSS variables in `@theme` block in `globals.css`
2. **Custom Classes**: Add to `@layer components` or `@layer utilities` in `globals.css`
3. **Never**: Create a JavaScript config file for Tailwind

### Adding Page Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx` in the main layout
3. Update `Navigation.tsx` for section links if needed

### Working with Animations
- All animations use Framer Motion
- Common patterns: `initial`, `animate`, `transition` props
- Staggered animations for lists using `delay` calculations
```
