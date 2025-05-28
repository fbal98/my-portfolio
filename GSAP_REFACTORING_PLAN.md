# GSAP Animation Refactoring Plan

## Overview
This document outlines a comprehensive plan to refactor the portfolio website to incorporate GSAP (GreenSock Animation Platform) animations, inspired by the sophisticated animation patterns seen on gsap.com.

## Design Philosophy
While maintaining the existing minimalist design principles, we'll enhance the user experience with:
- **Smooth, performant animations** that feel natural and responsive
- **Scroll-triggered reveals** that bring content to life as users navigate
- **Micro-interactions** that provide feedback and delight
- **Subtle parallax effects** that add depth without overwhelming

## Animation Patterns to Implement

### 1. Text Animations
- **Split Text Effects**: Break headlines into individual characters/words for staggered animations
- **Text Reveal Masks**: Smooth reveals with clipping masks
- **Morphing Typography**: Smooth transitions between text states
- **Typewriter Effects**: Progressive text reveals for key messages

### 2. Scroll-Based Animations
- **ScrollTrigger Integration**: Tie animations to scroll progress
- **Parallax Layers**: Multi-speed scrolling for depth
- **Pinned Sections**: Sections that stick during scroll for storytelling
- **Progress Indicators**: Visual scroll progress with GSAP

### 3. Interactive Elements
- **Magnetic Buttons**: Buttons that respond to cursor proximity
- **Hover Morphing**: Shape transformations on hover
- **Elastic Effects**: Spring-based animations for natural movement
- **Custom Cursor**: Interactive cursor that responds to elements

### 4. Page Transitions
- **Smooth Route Changes**: GSAP-powered page transitions
- **Content Morphing**: Elements that transform between pages
- **Loading Sequences**: Elegant loading animations
- **Exit Animations**: Smooth content removal

### 5. Advanced Effects
- **WebGL Integration**: For complex visual effects (optional)
- **SVG Morphing**: Dynamic shape animations
- **Timeline Sequences**: Complex multi-step animations
- **Physics-Based Motion**: Natural movement patterns

## Technical Implementation

### Dependencies
```json
{
  "gsap": "^3.12.5",
  "@gsap/react": "^2.1.0",
  "gsap/ScrollTrigger": "included",
  "gsap/TextPlugin": "included",
  "gsap/DrawSVGPlugin": "club",
  "gsap/MorphSVGPlugin": "club",
  "gsap/SplitText": "club"
}
```

### Architecture Changes

#### 1. Animation System Structure
```
src/
├── animations/
│   ├── gsap-config.ts         # GSAP global configuration
│   ├── animations.ts          # Reusable animation functions
│   └── timelines.ts           # Complex timeline sequences
├── hooks/
│   ├── useGSAP.ts            # GSAP React integration hook
│   ├── useScrollTrigger.ts    # ScrollTrigger wrapper
│   ├── useSplitText.ts       # Text splitting utilities
│   └── useMagneticHover.ts   # Magnetic hover effect
└── components/
    └── animations/
        ├── AnimatedText.tsx    # Text animation wrapper
        ├── ParallaxLayer.tsx   # Parallax container
        ├── MagneticButton.tsx  # Interactive button
        └── CustomCursor.tsx    # Custom cursor component
```

#### 2. Component Refactoring

**Hero Section**
- Split text animations for headline
- Staggered fade-ins for subtitle and CTAs
- Parallax background elements
- Smooth scroll indicator animation

**Navigation**
- Magnetic hover effects on nav items
- Smooth morphing between nav states
- Elastic menu transitions
- Progress-based transformations

**About Section**
- ScrollTrigger reveals for content blocks
- Animated skill meters
- Hover effects on contact links
- Smooth image reveals

**Projects Section**
- Staggered card animations on scroll
- 3D hover transformations
- Smooth image loading sequences
- Interactive project previews

**Project Detail Pages**
- Page transition animations
- Image gallery with GSAP effects
- Smooth content reveals
- Interactive media viewers

### Performance Considerations

1. **Lazy Loading**: Load GSAP plugins only when needed
2. **RAF Management**: Use GSAP's built-in RAF for optimal performance
3. **GPU Acceleration**: Leverage transform3d for smooth animations
4. **Batch Operations**: Group animations for efficiency
5. **Mobile Optimization**: Reduced animations on mobile devices

### Migration Strategy

#### Phase 1: Foundation (Week 1)
1. Install GSAP and configure build system
2. Create base animation utilities and hooks
3. Set up GSAP React integration
4. Implement basic ScrollTrigger setup

#### Phase 2: Core Animations (Week 2)
1. Refactor Hero section with text animations
2. Add scroll-based reveals to all sections
3. Implement navigation enhancements
4. Create reusable animation components

#### Phase 3: Interactive Features (Week 3)
1. Add magnetic hover effects
2. Implement custom cursor
3. Create page transitions
4. Add micro-interactions

#### Phase 4: Polish & Optimization (Week 4)
1. Fine-tune animation timings
2. Optimize performance
3. Add loading sequences
4. Test across devices

## Animation Specifications

### Timing Functions
- **Default Ease**: "power3.inOut"
- **Entrance**: "power2.out"
- **Exit**: "power2.in"
- **Elastic**: "elastic.out(1, 0.5)"
- **Bounce**: "bounce.out"

### Duration Guidelines
- **Micro-interactions**: 0.2-0.4s
- **Content reveals**: 0.6-0.8s
- **Page transitions**: 0.8-1.2s
- **Complex sequences**: 1.5-2.5s

### Stagger Patterns
- **Text reveals**: 0.02s per character
- **List items**: 0.1s per item
- **Grid items**: 0.05s with position-based delay
- **Navigation items**: 0.15s per item

## Code Examples

### Hero Text Animation
```typescript
// Split text and animate
const splitText = new SplitText(".hero-headline", { 
  type: "chars, words" 
});

gsap.from(splitText.chars, {
  duration: 0.8,
  opacity: 0,
  y: 100,
  rotationX: -90,
  stagger: 0.02,
  ease: "power3.out",
  transformOrigin: "0% 50% -50"
});
```

### Scroll-Triggered Section
```typescript
gsap.fromTo(".section", 
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  }
);
```

### Magnetic Button
```typescript
const magneticEffect = (element: HTMLElement) => {
  const bounds = element.getBoundingClientRect();
  
  element.addEventListener("mousemove", (e) => {
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    
    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  });
};
```

## Success Metrics
- **Performance**: All animations run at 60fps
- **Loading**: Initial animations complete within 2s
- **Accessibility**: Respect prefers-reduced-motion
- **Mobile**: Smooth performance on mid-range devices
- **SEO**: No impact on core web vitals

## Next Steps
1. Review and approve plan
2. Set up development environment
3. Create proof-of-concept animations
4. Begin phased implementation
5. Conduct user testing
6. Iterate based on feedback

---

This refactoring will transform the portfolio from a static minimalist site to a dynamic, engaging experience while maintaining the clean aesthetic and professional focus.