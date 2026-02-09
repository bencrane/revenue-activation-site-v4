# Landing Page Setup Prompt for Claude Code

## Role

You are a senior full-stack engineer building a production landing page with Stripe-level attention to detail and craft.

## Tech Stack

- Next.js 14+ (App Router)
- Tailwind CSS
- Shadcn/ui for components
- TypeScript

## Project Setup

Initialize a new project with:

1. Next.js with App Router and TypeScript
2. Tailwind CSS configured
3. Shadcn/ui installed
4. Folder structure:
   - `/app` — pages and layouts
   - `/components/ui` — shadcn components
   - `/components/sections` — page sections
   - `/components/shared` — layout primitives
   - `/lib` — utilities
   - `/types` — TypeScript types

## Design System (Stripe-level rigor)

### 1. Spacing scale (religious consistency)

- Use Tailwind's default scale exclusively
- Every margin/padding must be from: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Sections use consistent vertical rhythm: `py-16 md:py-24 lg:py-32`
- Never use arbitrary values (no `mt-[37px]`)

### 2. Typography system

```
Display: text-7xl (72px), font-bold, tracking-tight, leading-none
H1: text-5xl (48px), font-bold, tracking-tight, leading-tight
H2: text-4xl (36px), font-semibold, leading-tight
H3: text-2xl (24px), font-semibold, leading-snug
Body: text-base (16px), leading-relaxed
Small: text-sm (14px), leading-normal
```

- Line height is deliberate, not default
- Letter spacing on large text (tracking-tight)
- Consistent font weights (bold for display/h1, semibold for h2/h3)

### 3. Color system (minimal palette)

```javascript
// tailwind.config.js
colors: {
  background: '#000000',      // true black
  surface: '#0a0a0a',         // slightly lighter for cards
  border: '#1a1a1a',          // subtle borders
  text: {
    primary: '#ffffff',
    secondary: '#a3a3a3',     // neutral-400
    muted: '#737373',         // neutral-500
  },
  accent: '#00D9B1',          // teal
  'accent-hover': '#00BF9D',  // darker teal
}
```

- Use these tokens exclusively
- No random hex codes in components
- Accent color used sparingly (CTAs, highlights only)

### 4. Component architecture

Build these foundational components first:

```typescript
// components/shared/Section.tsx
- Full-width container
- Consistent vertical padding
- Optional background color prop
- className override support

// components/shared/Container.tsx
- Max-width: 1280px (max-w-7xl)
- Horizontal padding: px-6 lg:px-8
- Centered: mx-auto

// components/shared/Heading.tsx
- Variants for Display, H1, H2, H3
- Optional accent color on specific words via children parsing
- Proper semantic HTML (h1, h2, etc)
```

## Interaction Design (Stripe polish)

### 1. Animations

- Subtle fade-ins on scroll (use Framer Motion or CSS)
- Smooth transitions (`transition-all duration-200 ease-in-out`)
- Hover states on all interactive elements
- No bounce/spring animations - keep it professional

### 2. Interactive elements

- Buttons have clear hover/active states
- Focus states for keyboard navigation (`ring-2 ring-accent`)
- Smooth color transitions on hover
- Cursor changes to pointer on clickable items

### 3. Micro-interactions

- Nav links fade on hover
- CTAs lift slightly on hover (`translate-y-[-2px]`)
- Cards have subtle border glow on hover

## Accessibility (non-negotiable)

- Semantic HTML (nav, main, section, article)
- Proper heading hierarchy (only one h1)
- Focus indicators on all interactive elements
- Color contrast meets WCAG AA (white on black = perfect)
- Alt text on images (when we add them)

## Performance

- No unnecessary JavaScript
- Images optimized with next/image
- Fonts loaded efficiently
- No layout shift (proper aspect ratios, sizing)

## Responsive Design (mobile-first)

- Build mobile first (base styles)
- Add `md:` breakpoint (768px)
- Add `lg:` breakpoint (1024px)
- Add `xl:` breakpoint (1280px)
- Test every breakpoint - no assumptions

## Build These Core Components Now

### 1. Layout

- Root layout with proper meta tags
- Navigation component (logo left, links center, CTA right)
- Footer placeholder

### 2. Primitives

- Section wrapper
- Container
- Heading (with variants)
- Button (primary and secondary variants)

### 3. Show me

- The tailwind.config.js
- The globals.css
- The component structure
- A blank homepage using these primitives

## What NOT to do

- Lorem ipsum
- Placeholder sections
- Example content
- Generic stock components

---

**Build the foundation with Stripe-level craft. Show me what you've created.**