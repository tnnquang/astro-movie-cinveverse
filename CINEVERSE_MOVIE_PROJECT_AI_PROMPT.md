# 🎬 CineVerse - Enterprise Movie Platform AI Development Prompt

## ⚠️ CRITICAL INSTRUCTIONS FOR AI (Claude AI / Gemini 3 Pro)

You are tasked with building **CineVerse**, a production-grade, enterprise-level movie streaming platform frontend. This is NOT a simple project - it requires meticulous attention to detail, exceptional design quality, full accessibility compliance, and comprehensive feature implementation.

**IMPORTANT**: Read this ENTIRE prompt before writing ANY code. Understand the full scope, then execute systematically.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Design System & Aesthetics](#3-design-system--aesthetics)
4. [WCAG 2.1 Accessibility Requirements](#4-wcag-21-accessibility-requirements)
5. [API Integration Specification](#5-api-integration-specification)
6. [Public Website Pages](#6-public-website-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Component Architecture](#8-component-architecture)
9. [State Management & Data Flow](#9-state-management--data-flow)
10. [Performance Optimization](#10-performance-optimization)
11. [File & Folder Structure](#11-file--folder-structure)
12. [Implementation Phases](#12-implementation-phases)
13. [Quality Checklist](#13-quality-checklist)

---

## 1. Project Overview

### 1.1 Project Name
**CineVerse** - A Modern Cinematic Experience Platform

### 1.2 Project Description
Build a comprehensive movie streaming platform with:
- **Public Website**: Movie browsing, searching, filtering, watching, and discovery
- **Admin Dashboard**: Content management, analytics, and system administration
- **Full WCAG 2.1 AAA Compliance**: Accessible to all users including those with disabilities
- **Enterprise-Grade Architecture**: Scalable, maintainable, and production-ready

### 1.3 Target Audience
- **Primary**: Movie enthusiasts aged 18-45
- **Secondary**: Families with children (parental controls consideration)
- **Admin Users**: Content managers, system administrators

### 1.4 Core Features
- Movie/Series/Anime browsing and discovery
- Advanced search and filtering system
- Video streaming with episode management
- User watchlist and history (client-side)
- Admin content management dashboard
- Multi-language support (Vietnamese primary, English secondary)
- Dark/Light theme support
- Responsive design (Mobile-first)

---

## 2. Technology Stack

### 2.1 Core Framework
```
Framework: Astro 5.x (Latest stable)
Rendering: Hybrid (SSR + SSG + Islands Architecture)
```

### 2.2 Frontend Technologies
```yaml
UI Framework: Astro with React Islands for interactive components
Styling: TailwindCSS 4.x with custom design system
API Client: openapi-typescript + openapi-fetch (type-safe API calls)
State Management: Nanostores (Astro-optimized) + React Context for islands
Animation: Framer Motion / Motion for React islands
Icons: Lucide React + Custom SVG icons
Video Player: Video.js or Plyr with HLS.js support
```

### 2.3 Development Tools
```yaml
Package Manager: pnpm (preferred) or npm
TypeScript: Strict mode enabled
Linting: ESLint + Prettier + eslint-plugin-astro
Testing: Vitest + Testing Library + Playwright (E2E)
Build: Vite (via Astro)
Accessibility Testing: axe-core + pa11y
```

### 2.4 API Integration
```yaml
API Base URL: https://cinevserse-api.nhatquang.shop
API Spec: OpenAPI 3.0 (swagger)
Type Generation: openapi-typescript for auto-generated types
HTTP Client: openapi-fetch with interceptors
```

---

## 3. Design System & Aesthetics

### 3.1 Design Philosophy
**"Cinematic Elegance meets Modern Minimalism"**

Create an interface that feels like stepping into a premium cinema experience. The design should evoke the feeling of red velvet curtains, dramatic lighting, and the anticipation before a film begins.

### 3.2 Visual Identity

#### Color Palette
```css
:root {
  /* Primary - Deep Cinema Red */
  --color-primary-50: #fef2f2;
  --color-primary-100: #fee2e2;
  --color-primary-200: #fecaca;
  --color-primary-300: #fca5a5;
  --color-primary-400: #f87171;
  --color-primary-500: #ef4444;
  --color-primary-600: #dc2626;
  --color-primary-700: #b91c1c;
  --color-primary-800: #991b1b;
  --color-primary-900: #7f1d1d;
  --color-primary-950: #450a0a;
  
  /* Secondary - Luxurious Gold */
  --color-secondary-50: #fefce8;
  --color-secondary-100: #fef9c3;
  --color-secondary-200: #fef08a;
  --color-secondary-300: #fde047;
  --color-secondary-400: #facc15;
  --color-secondary-500: #eab308;
  --color-secondary-600: #ca8a04;
  --color-secondary-700: #a16207;
  --color-secondary-800: #854d0e;
  --color-secondary-900: #713f12;
  --color-secondary-950: #422006;
  
  /* Neutral - Cinema Dark */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;
  --color-neutral-950: #09090b;
  
  /* Accent - Electric Blue (for CTAs and highlights) */
  --color-accent-500: #3b82f6;
  --color-accent-600: #2563eb;
  
  /* Semantic Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Theme Variables */
  --bg-primary: var(--color-neutral-950);
  --bg-secondary: var(--color-neutral-900);
  --bg-tertiary: var(--color-neutral-800);
  --text-primary: var(--color-neutral-50);
  --text-secondary: var(--color-neutral-300);
  --text-muted: var(--color-neutral-500);
}

/* Light Theme Override */
[data-theme="light"] {
  --bg-primary: var(--color-neutral-50);
  --bg-secondary: var(--color-neutral-100);
  --bg-tertiary: var(--color-neutral-200);
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-700);
  --text-muted: var(--color-neutral-500);
}
```

#### Typography System
```css
/* Font Families - AVOID generic fonts like Inter, Roboto, Arial */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  /* Display Font - Elegant, Cinematic */
  --font-display: 'Playfair Display', Georgia, serif;
  
  /* Body Font - Clean, Readable */
  --font-body: 'Source Sans 3', system-ui, sans-serif;
  
  /* Mono Font - Code, Technical */
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Type Scale (using fluid typography) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3rem);
  --text-5xl: clamp(3rem, 2.25rem + 3.75vw, 4rem);
  --text-6xl: clamp(3.75rem, 2.75rem + 5vw, 5rem);
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

#### Spacing System
```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

#### Border Radius
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;
}
```

#### Shadow System
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  
  /* Cinematic Glow Effects */
  --shadow-glow-primary: 0 0 20px rgb(239 68 68 / 0.4), 0 0 40px rgb(239 68 68 / 0.2);
  --shadow-glow-secondary: 0 0 20px rgb(234 179 8 / 0.4), 0 0 40px rgb(234 179 8 / 0.2);
  --shadow-glow-accent: 0 0 20px rgb(59 130 246 / 0.4), 0 0 40px rgb(59 130 246 / 0.2);
}
```

### 3.3 Motion & Animation Guidelines

```css
:root {
  /* Durations */
  --duration-75: 75ms;
  --duration-100: 100ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-300: 300ms;
  --duration-500: 500ms;
  --duration-700: 700ms;
  --duration-1000: 1000ms;
  
  /* Easings */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  
  /* Cinematic Easings */
  --ease-cinematic-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-cinematic-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-cinematic-in-out: cubic-bezier(0.87, 0, 0.13, 1);
}

/* Animation Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: var(--shadow-glow-primary);
  }
  50% {
    box-shadow: 0 0 30px rgb(239 68 68 / 0.6), 0 0 60px rgb(239 68 68 / 0.3);
  }
}

/* Utility Classes */
.animate-fade-in {
  animation: fadeIn var(--duration-500) var(--ease-cinematic-out);
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-500) var(--ease-cinematic-out);
}

.animate-shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### 3.4 Visual Effects & Backgrounds

```css
/* Gradient Backgrounds */
.bg-gradient-cinematic {
  background: linear-gradient(
    135deg,
    var(--color-neutral-950) 0%,
    var(--color-neutral-900) 50%,
    var(--color-primary-950) 100%
  );
}

.bg-gradient-hero {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(239, 68, 68, 0.15) 0%,
    transparent 50%
  ),
  linear-gradient(to bottom, var(--color-neutral-950), var(--color-neutral-900));
}

/* Noise Texture Overlay */
.texture-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}

/* Glass Morphism */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Vignette Effect for Hero Sections */
.vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}
```

### 3.5 Component Design Patterns

#### Card Design
```
Movie cards should feature:
- Aspect ratio: 2:3 (poster) or 16:9 (thumbnail)
- Hover state: Scale(1.05) with elevated shadow
- Overlay gradient for text readability
- Loading skeleton with shimmer effect
- Focus visible ring for accessibility
- Badge system for categories/quality/year
```

#### Button Hierarchy
```
Primary: Solid background with glow effect
Secondary: Ghost/outline style
Tertiary: Text only with underline on hover
Destructive: Red variant for dangerous actions
All buttons: Min touch target 44x44px (WCAG)
```

#### Form Elements
```
Input fields: Dark background with subtle border
Focus state: Glow ring effect
Error state: Red border with error message
Labels: Always visible (no placeholder-only)
Helper text: Below input, smaller size
```

---

## 4. WCAG 2.1 Accessibility Requirements

### 4.1 Compliance Level
**Target: WCAG 2.1 Level AAA** (Full compliance)

### 4.2 Perceivable

#### 4.2.1 Text Alternatives (1.1)
```
- All images MUST have descriptive alt text
- Decorative images: alt="" or role="presentation"
- Complex images: Long description via aria-describedby
- Icons with meaning: Include sr-only text or aria-label
- Video thumbnails: Describe the movie/scene

Example:
<img 
  src="/poster.jpg" 
  alt="Movie poster for Avatar: The Way of Water showing blue Na'vi characters underwater"
  loading="lazy"
/>

<button aria-label="Play movie trailer">
  <PlayIcon aria-hidden="true" />
</button>
```

#### 4.2.2 Time-based Media (1.2)
```
- Video player MUST support captions/subtitles
- Provide audio descriptions for important visual content
- Transcript availability for all video content
- Controls for caption customization (size, color, background)
```

#### 4.2.3 Adaptable (1.3)
```
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- Semantic HTML elements (nav, main, aside, article, section)
- ARIA landmarks for all major sections
- Tables have proper headers and captions
- Form inputs have associated labels

Structure Example:
<body>
  <header role="banner">
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main id="main-content" role="main">
    <section aria-labelledby="trending-heading">
      <h2 id="trending-heading">Trending Movies</h2>
      ...
    </section>
  </main>
  <aside aria-label="Sidebar">...</aside>
  <footer role="contentinfo">...</footer>
</body>
```

#### 4.2.4 Distinguishable (1.4)
```
Color Contrast Requirements:
- Normal text: 7:1 ratio (AAA)
- Large text (18pt+): 4.5:1 ratio (AAA)
- UI components: 3:1 ratio minimum
- Focus indicators: 3:1 ratio minimum

Text Sizing:
- Base font: 16px minimum
- Line height: 1.5 minimum for body text
- Paragraph spacing: 2x font size
- Letter spacing: 0.12em minimum for body
- Word spacing: 0.16em minimum

Text Resizing:
- Content must be readable at 200% zoom
- No horizontal scrolling at 320px viewport
- Text remains readable without loss of content
```

### 4.3 Operable

#### 4.3.1 Keyboard Accessible (2.1)
```typescript
// All interactive elements must be keyboard accessible
// Custom focus management for modals and dropdowns

// Focus trap for modals
const useFocusTrap = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
      if (e.key === 'Escape') {
        // Close modal
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    firstFocusable?.focus();
    
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [containerRef]);
};

// Skip to main content link
<a 
  href="#main-content" 
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
         focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white 
         focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
>
  Skip to main content
</a>
```

#### 4.3.2 Enough Time (2.2)
```
- No auto-playing carousels without pause control
- Session timeouts: Warn 20 seconds before, allow extension
- Animations can be paused via prefers-reduced-motion
- Video auto-play only if muted and with visible controls
```

#### 4.3.3 Seizures and Physical Reactions (2.3)
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* No flashing content more than 3 times per second */
/* All animations must be subtle and non-disruptive */
```

#### 4.3.4 Navigable (2.4)
```
- Skip links at the top of every page
- Descriptive page titles: "Movie Name | CineVerse"
- Focus order follows visual order
- Link purpose clear from context
- Multiple ways to find pages (search, nav, sitemap)
- Headings describe content accurately
- Visible focus indicators on all interactive elements

Focus Styles:
.focus-visible:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

#### 4.3.5 Input Modalities (2.5)
```
- Touch targets: 44x44px minimum
- No motion-only gestures (provide alternatives)
- Pointer cancellation: Action on release, not press
- Label in name: Accessible name includes visible label
```

### 4.4 Understandable

#### 4.4.1 Readable (3.1)
```html
<!-- Language declaration -->
<html lang="vi">

<!-- Language changes within content -->
<p>This movie is called <span lang="en">The Dark Knight</span></p>

<!-- Abbreviations -->
<abbr title="High Definition">HD</abbr>
```

#### 4.4.2 Predictable (3.2)
```
- No automatic context changes on focus
- Consistent navigation across pages
- Consistent identification of UI elements
- Form submission only on explicit user action
```

#### 4.4.3 Input Assistance (3.3)
```typescript
// Form validation with clear error messages
interface FormFieldProps {
  label: string;
  error?: string;
  description?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  description,
  required,
  children
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const descId = `${id}-description`;
  
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-error" aria-hidden="true">*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      
      {description && (
        <p id={descId} className="form-description">
          {description}
        </p>
      )}
      
      {React.cloneElement(children as React.ReactElement, {
        id,
        'aria-describedby': description ? descId : undefined,
        'aria-invalid': error ? 'true' : undefined,
        'aria-errormessage': error ? errorId : undefined,
      })}
      
      {error && (
        <p id={errorId} className="form-error" role="alert">
          <AlertCircle className="w-4 h-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};
```

### 4.5 Robust

#### 4.5.1 Compatible (4.1)
```
- Valid HTML (W3C validator compliant)
- Unique IDs throughout the document
- ARIA attributes used correctly
- Custom components have proper roles and states
- Works with screen readers (NVDA, JAWS, VoiceOver)
- Works with voice control software
```

### 4.6 Testing Requirements
```
Tools to Use:
- axe DevTools browser extension
- WAVE evaluation tool
- Lighthouse accessibility audit
- Screen reader testing (NVDA, VoiceOver)
- Keyboard-only navigation testing
- Color contrast analyzer
- pa11y CLI for automated testing

Automated Testing Setup:
import { axe } from 'vitest-axe';

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<MovieCard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## 5. API Integration Specification

### 5.1 API Base Configuration

```typescript
// src/lib/api/client.ts
import createClient from 'openapi-fetch';
import type { paths } from './schema'; // Generated from OpenAPI spec

const API_BASE_URL = 'https://cinevserse-api.nhatquang.shop';

export const apiClient = createClient<paths>({
  baseUrl: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Error handling wrapper
export async function fetchApi<T>(
  fetcher: () => Promise<{ data?: T; error?: any }>
): Promise<T> {
  const { data, error } = await fetcher();
  
  if (error) {
    throw new ApiError(error.message || 'API request failed', error);
  }
  
  if (!data) {
    throw new ApiError('No data returned from API');
  }
  
  return data;
}

export class ApiError extends Error {
  constructor(message: string, public details?: any) {
    super(message);
    this.name = 'ApiError';
  }
}
```

### 5.2 API Endpoints Reference

#### Categories & Countries
```typescript
// GET /crawler/ophim/categories
// Response: Array of category objects
interface Category {
  _id: string;
  name: string;
  slug: string;
}

// GET /crawler/ophim/countries  
// Response: Array of country objects
interface Country {
  _id: string;
  name: string;
  slug: string;
}
```

#### Film Listings
```typescript
// GET /crawler/ophim/list-film
// Params: limit, lastView, lastCreatedAt, lastId, firstView, firstCreatedAt, firstId
// Response: Paginated film list with cursor-based pagination

// GET /crawler/ophim/list-film-by-type
// Params: type (hoathinh | single | series), + pagination params

// GET /crawler/ophim/list-film-by-category
// Params: category (slug), + pagination params

// GET /crawler/ophim/list-film-by-country
// Params: country (slug), + pagination params

// GET /crawler/ophim/list-film-by-year
// Params: year (number), + pagination params

// GET /crawler/ophim/list-film-by-actor
// Params: actor (name), + pagination params

// GET /crawler/ophim/list-film-by-director
// Params: director (name), + pagination params

// GET /crawler/ophim/cinema
// Params: pagination params
// Response: Films available in cinemas

// GET /crawler/ophim/hot
// Params: limit
// Response: Trending/most viewed films
```

#### Film Details & Episodes
```typescript
// GET /crawler/ophim/info/{slug}
// Response: Complete film information
interface Film {
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: 'series' | 'single' | 'hoathinh';
  status: string;
  poster_url: string;
  thumb_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chipieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: Category[];
  country: Country[];
  created: { time: string };
  modified: { time: string };
}

// GET /crawler/ophim/info/{slug}/episodes
// Response: Array of episode data with server information

// GET /crawler/ophim/info/{slug}/episodes/{episode}?serverName=Server%201
// Response: Specific episode streaming data
```

#### Search & Filter
```typescript
// GET /crawler/ophim/search/{keyword}
// Response: Films matching keyword in name, origin_name, or slug

// POST /crawler/ophim/search (Filter)
interface FilterFilmsDto {
  keyword?: string;
  countries?: string[];      // Array of country slugs
  categories?: string[];     // Array of category slugs
  types?: ('series' | 'single' | 'hoathinh')[];
  isCinema?: boolean;
  lastCursor?: PaginationCursor;
  firstCursor?: PaginationCursor;
  limit?: number;            // 1-100, default 20
}

// POST /crawler/ophim/advance-filter
interface AdvanceFilterDto {
  keyword?: string;
  include?: FilterOptions;
  exclude?: FilterOptions;
  lastCursor?: PaginationCursor;
  firstCursor?: PaginationCursor;
  limit?: number;
}

interface FilterOptions {
  countries?: string[];
  categories?: string[];
  types?: ('series' | 'single' | 'hoathinh')[];
  isCinema?: boolean;
}

interface PaginationCursor {
  view: number;
  createdAt: string;
  id: string;
}
```

#### Admin Operations
```typescript
// POST /crawler/ophim (Admin - Start crawling)
interface CrawlRequest {
  start: number;
  end: number;
  crawlAll?: boolean;
}

// PUT /crawler/ophim/info/{slug} (Admin - Update film)
// Body: Film update data

// GET /crawler/ophim/update-view/{slug}
// Increment view count (call when user watches)
```

### 5.3 API Service Layer

```typescript
// src/lib/api/services/filmService.ts
import { apiClient, fetchApi } from '../client';

export const filmService = {
  // Get all films with pagination
  async getFilms(params?: {
    limit?: number;
    lastView?: number;
    lastCreatedAt?: string;
    lastId?: string;
  }) {
    return fetchApi(() => 
      apiClient.GET('/crawler/ophim/list-film', {
        params: { query: params }
      })
    );
  },

  // Get film by slug
  async getFilmBySlug(slug: string) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/info/{slug}', {
        params: { path: { slug } }
      })
    );
  },

  // Get film episodes
  async getFilmEpisodes(slug: string) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/info/{slug}/episodes', {
        params: { path: { slug } }
      })
    );
  },

  // Get specific episode
  async getEpisode(slug: string, episode: string, serverName?: string) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/info/{slug}/episodes/{episode}', {
        params: { 
          path: { slug, episode },
          query: { serverName }
        }
      })
    );
  },

  // Get hot/trending films
  async getHotFilms(limit = 20) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/hot', {
        params: { query: { limit } }
      })
    );
  },

  // Search films
  async searchFilms(keyword: string) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/search/{keyword}', {
        params: { path: { keyword } }
      })
    );
  },

  // Filter films
  async filterFilms(filter: FilterFilmsDto) {
    return fetchApi(() =>
      apiClient.POST('/crawler/ophim/search', {
        body: filter
      })
    );
  },

  // Advanced filter
  async advancedFilter(filter: AdvanceFilterDto) {
    return fetchApi(() =>
      apiClient.POST('/crawler/ophim/advance-filter', {
        body: filter
      })
    );
  },

  // Get films by type
  async getFilmsByType(type: 'hoathinh' | 'single' | 'series', params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-type', {
        params: { query: { type, ...params } }
      })
    );
  },

  // Get films by category
  async getFilmsByCategory(category: string, params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-category', {
        params: { query: { category, ...params } }
      })
    );
  },

  // Get films by country
  async getFilmsByCountry(country: string, params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-country', {
        params: { query: { country, ...params } }
      })
    );
  },

  // Get films by year
  async getFilmsByYear(year: number, params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-year', {
        params: { query: { year, ...params } }
      })
    );
  },

  // Get cinema films
  async getCinemaFilms(params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/cinema', {
        params: { query: params }
      })
    );
  },

  // Get films by actor
  async getFilmsByActor(actor: string, params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-actor', {
        params: { query: { actor, ...params } }
      })
    );
  },

  // Get films by director
  async getFilmsByDirector(director: string, params?: PaginationParams) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/list-film-by-director', {
        params: { query: { director, ...params } }
      })
    );
  },

  // Increment view count
  async incrementView(slug: string) {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/update-view/{slug}', {
        params: { path: { slug } }
      })
    );
  },
};

// src/lib/api/services/metadataService.ts
export const metadataService = {
  // Get all categories
  async getCategories() {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/categories')
    );
  },

  // Get all countries
  async getCountries() {
    return fetchApi(() =>
      apiClient.GET('/crawler/ophim/countries')
    );
  },
};

// src/lib/api/services/adminService.ts
export const adminService = {
  // Start crawling
  async startCrawl(params: { start: number; end: number; crawlAll?: boolean }) {
    return fetchApi(() =>
      apiClient.POST('/crawler/ophim', {
        body: params
      })
    );
  },

  // Update film
  async updateFilm(slug: string, data: any) {
    return fetchApi(() =>
      apiClient.PUT('/crawler/ophim/info/{slug}', {
        params: { path: { slug } },
        body: data
      })
    );
  },
};
```

---

## 6. Public Website Pages

### 6.1 Page Structure Overview

```
PUBLIC PAGES:
├── / (Home)
├── /phim (All Movies - Browse)
├── /phim/[slug] (Movie Detail)
├── /phim/[slug]/xem-phim (Watch Page)
├── /phim/[slug]/xem-phim/[episode] (Watch Episode)
├── /the-loai (Categories Hub)
├── /the-loai/[slug] (Category Page)
├── /quoc-gia (Countries Hub)
├── /quoc-gia/[slug] (Country Page)
├── /nam/[year] (Year Page)
├── /dao-dien/[name] (Director Page)
├── /dien-vien/[name] (Actor Page)
├── /tim-kiem (Search Results)
├── /loc-phim (Advanced Filter)
├── /phim-le (Single Movies)
├── /phim-bo (TV Series)
├── /hoat-hinh (Anime)
├── /phim-chieu-rap (Cinema Releases)
├── /xu-huong (Trending)
├── /danh-sach-yeu-thich (Watchlist - Client Storage)
├── /lich-su-xem (Watch History - Client Storage)
├── /cai-dat (Settings)
├── /gioi-thieu (About)
├── /lien-he (Contact)
├── /dieu-khoan (Terms)
├── /chinh-sach-bao-mat (Privacy)
└── /ho-tro (Help/FAQ)
```

### 6.2 Detailed Page Specifications

#### 6.2.1 Home Page (`/`)

**Purpose**: Landing page showcasing featured content and easy navigation

**Sections**:
1. **Hero Section**
   - Full-width cinematic banner with featured movie
   - Auto-rotate featured movies (5 max, with controls)
   - Movie title, description, rating, play/details buttons
   - Background: Blurred poster with gradient overlay
   - ARIA: Live region for slide changes

2. **Trending Now** (GET /crawler/ophim/hot)
   - Horizontal scrollable carousel
   - 10-20 trending movies
   - Skeleton loading state

3. **New Releases** (GET /crawler/ophim/list-film)
   - Grid layout (4-6 columns responsive)
   - Latest 12 movies
   - "View All" link to /phim

4. **Categories Quick Access** (GET /crawler/ophim/categories)
   - Pill/chip style navigation
   - Top 10-15 categories
   - Animated hover effects

5. **Movies by Type**
   - Tab sections: Phim Lẻ | Phim Bộ | Hoạt Hình
   - 6 movies per type
   - Lazy-loaded content

6. **Cinema Releases** (GET /crawler/ophim/cinema)
   - Special section with cinema badge
   - Premium card design
   - 6 movies

7. **Browse by Country** (GET /crawler/ophim/countries)
   - Flag icons with country names
   - Grid of popular countries

**Components Needed**:
- HeroCarousel
- MovieCard
- MovieCarousel
- CategoryPills
- CountryGrid
- SkeletonLoader

---

#### 6.2.2 Browse All Movies (`/phim`)

**Purpose**: Main movie browsing page with infinite scroll

**Features**:
- Infinite scroll pagination (cursor-based)
- Grid layout (responsive 2-6 columns)
- Sort options: Newest, Most Viewed, A-Z
- Quick filter chips: Type, Year, Country
- Total count display
- Back to top button

**API**: GET /crawler/ophim/list-film

**Components**:
- FilterBar
- SortDropdown
- MovieGrid
- InfiniteScrollLoader
- BackToTop

---

#### 6.2.3 Movie Detail Page (`/phim/[slug]`)

**Purpose**: Complete information about a movie

**Sections**:
1. **Hero Section**
   - Large backdrop image
   - Poster thumbnail
   - Title (Vietnamese + Original)
   - Metadata: Year, Duration, Quality, Language
   - Rating display
   - Action buttons: Watch, Add to List, Share

2. **Description**
   - Full synopsis (expandable if long)
   - Collapsible content

3. **Cast & Crew**
   - Director links (to /dao-dien/[name])
   - Actor links (to /dien-vien/[name])
   - Horizontal scrollable

4. **Episodes** (if series)
   - Server selection tabs
   - Episode grid
   - Current progress indicator

5. **Categories & Tags**
   - Clickable category chips
   - Country badge

6. **Related Movies**
   - Based on same category
   - Horizontal carousel

7. **Trailer** (if available)
   - Embedded YouTube/video player
   - Modal or inline

**API**: 
- GET /crawler/ophim/info/{slug}
- GET /crawler/ophim/info/{slug}/episodes

**SEO**:
- Dynamic meta tags
- Structured data (Movie schema)
- Open Graph tags

---

#### 6.2.4 Watch Page (`/phim/[slug]/xem-phim` or `/phim/[slug]/xem-phim/[episode]`)

**Purpose**: Video streaming page

**Features**:
1. **Video Player**
   - HLS streaming support
   - Quality selection
   - Playback speed control
   - Subtitle support (if available)
   - Picture-in-picture
   - Fullscreen
   - Keyboard shortcuts (space, arrows, f, m)
   - Volume control
   - Progress bar with preview thumbnails

2. **Episode Navigation** (for series)
   - Server selection
   - Episode list sidebar
   - Previous/Next buttons
   - Auto-play next episode toggle

3. **Theater Mode**
   - Minimal UI
   - Dark surroundings
   - Lights toggle

4. **Movie Info Bar**
   - Title
   - Current episode info
   - Quick actions

**API**:
- GET /crawler/ophim/info/{slug}/episodes/{episode}
- GET /crawler/ophim/update-view/{slug} (on play)

**Accessibility**:
- Full keyboard control
- Screen reader announcements
- Caption controls

---

#### 6.2.5 Category Page (`/the-loai/[slug]`)

**Purpose**: Browse movies by category

**Features**:
- Category title and description
- Infinite scroll grid
- Sub-filter options
- Breadcrumb navigation

**API**: GET /crawler/ophim/list-film-by-category

---

#### 6.2.6 Country Page (`/quoc-gia/[slug]`)

**Purpose**: Browse movies by country

**Features**:
- Country flag and name
- Infinite scroll grid
- Popular in this country section

**API**: GET /crawler/ophim/list-film-by-country

---

#### 6.2.7 Year Page (`/nam/[year]`)

**Purpose**: Browse movies by release year

**Features**:
- Year selector (dropdown or slider)
- Grid display
- Year navigation

**API**: GET /crawler/ophim/list-film-by-year

---

#### 6.2.8 Director Page (`/dao-dien/[name]`)

**Purpose**: Browse movies by director

**Features**:
- Director name display
- Filmography grid
- Total films count

**API**: GET /crawler/ophim/list-film-by-director

---

#### 6.2.9 Actor Page (`/dien-vien/[name]`)

**Purpose**: Browse movies by actor

**Features**:
- Actor name display
- Filmography grid
- Total films count

**API**: GET /crawler/ophim/list-film-by-actor

---

#### 6.2.10 Search Results (`/tim-kiem?q=keyword`)

**Purpose**: Display search results

**Features**:
- Search input (pre-filled)
- Results count
- Grid display
- No results state
- Search suggestions

**API**: GET /crawler/ophim/search/{keyword}

---

#### 6.2.11 Advanced Filter (`/loc-phim`)

**Purpose**: Complex filtering interface

**Features**:
1. **Filter Panel**
   - Category multi-select
   - Country multi-select
   - Type checkboxes
   - Year range
   - Cinema release toggle
   - Include/Exclude mode

2. **Results Area**
   - Active filters display
   - Results count
   - Clear all filters
   - Grid display

**API**: POST /crawler/ophim/advance-filter

---

#### 6.2.12 Type Pages

**Phim Lẻ** (`/phim-le`) - Single movies
**Phim Bộ** (`/phim-bo`) - TV Series  
**Hoạt Hình** (`/hoat-hinh`) - Anime

**API**: GET /crawler/ophim/list-film-by-type

---

#### 6.2.13 Cinema Releases (`/phim-chieu-rap`)

**Purpose**: Theater releases

**Features**:
- Premium card design
- Showtimes info (if available)
- Special badge

**API**: GET /crawler/ophim/cinema

---

#### 6.2.14 Trending (`/xu-huong`)

**Purpose**: Most popular/viewed movies

**Features**:
- Ranked list display
- View count display
- Time filter (today, week, month)

**API**: GET /crawler/ophim/hot

---

#### 6.2.15 Watchlist (`/danh-sach-yeu-thich`)

**Purpose**: User's saved movies (client-side storage)

**Features**:
- LocalStorage persistence
- Add/Remove functionality
- Empty state
- Sync across tabs

---

#### 6.2.16 Watch History (`/lich-su-xem`)

**Purpose**: Recently watched movies (client-side storage)

**Features**:
- LocalStorage persistence
- Continue watching section
- Progress indicator
- Clear history option

---

#### 6.2.17 Settings (`/cai-dat`)

**Purpose**: User preferences

**Features**:
- Theme toggle (Dark/Light/System)
- Language preference
- Playback settings
- Accessibility options
- Clear data option

---

#### 6.2.18 Static Pages

**/gioi-thieu** (About)
- Platform introduction
- Features overview
- Team info (optional)

**/lien-he** (Contact)
- Contact form
- Social links
- Support email

**/dieu-khoan** (Terms)
- Terms of service content

**/chinh-sach-bao-mat** (Privacy)
- Privacy policy content

**/ho-tro** (Help/FAQ)
- Accordion FAQ
- Search support articles
- Contact support

---

## 7. Admin Dashboard Pages

### 7.1 Dashboard Structure

```
ADMIN PAGES (/admin):
├── /admin (Dashboard Home)
├── /admin/dang-nhap (Login)
├── /admin/phim (Films Management)
│   ├── /admin/phim/danh-sach (List All Films)
│   ├── /admin/phim/[slug]/chinh-sua (Edit Film)
│   └── /admin/phim/thong-ke (Film Statistics)
├── /admin/crawler (Crawler Management)
│   ├── /admin/crawler/cau-hinh (Configuration)
│   ├── /admin/crawler/trang-thai (Status)
│   └── /admin/crawler/lich-su (History)
├── /admin/the-loai (Categories Management)
├── /admin/quoc-gia (Countries Management)
├── /admin/bao-cao (Reports & Analytics)
│   ├── /admin/bao-cao/tong-quan (Overview)
│   ├── /admin/bao-cao/luot-xem (Views Report)
│   └── /admin/bao-cao/xu-huong (Trends Report)
├── /admin/cai-dat (Settings)
│   ├── /admin/cai-dat/chung (General)
│   ├── /admin/cai-dat/api (API Settings)
│   └── /admin/cai-dat/cache (Cache Management)
└── /admin/nhat-ky (Activity Logs)
```

### 7.2 Detailed Admin Page Specifications

#### 7.2.1 Admin Login (`/admin/dang-nhap`)

**Features**:
- Email/Password form
- Remember me option
- Forgot password link (placeholder)
- Error handling
- Rate limiting notice

**Security**:
- CSRF protection
- Client-side validation
- Secure storage of session

---

#### 7.2.2 Dashboard Home (`/admin`)

**Purpose**: Overview and quick actions

**Widgets**:
1. **Stats Cards**
   - Total Films count
   - Total Views (today/week/month)
   - New Films (today)
   - Active Categories

2. **Quick Actions**
   - Start Crawler
   - View Recent Films
   - Check System Status

3. **Recent Activity**
   - Latest added films
   - Recent crawl operations
   - System events

4. **Charts**
   - Views trend (line chart)
   - Films by category (pie chart)
   - Films by country (bar chart)

5. **System Status**
   - API health
   - Database status
   - Last crawl time

---

#### 7.2.3 Films Management (`/admin/phim`)

##### 7.2.3.1 Films List (`/admin/phim/danh-sach`)

**Features**:
- Data table with columns:
  - Thumbnail
  - Name (Vietnamese + Original)
  - Type
  - Year
  - Views
  - Status
  - Actions
- Search functionality
- Filter by: Type, Category, Country, Year
- Pagination
- Bulk actions (future)
- Export functionality

**Actions per Film**:
- View Details
- Edit
- View on Site
- Update View Count

---

##### 7.2.3.2 Edit Film (`/admin/phim/[slug]/chinh-sua`)

**Features**:
- Form sections:
  - Basic Info (name, origin_name, slug)
  - Content (description)
  - Media (poster_url, thumb_url, trailer_url)
  - Metadata (year, time, quality, lang)
  - Classification (type, category, country)
  - Cast (actor, director arrays)
  - Episodes management
  - Status settings

**API**: PUT /crawler/ophim/info/{slug}

---

##### 7.2.3.3 Film Statistics (`/admin/phim/thong-ke`)

**Features**:
- Top viewed films
- Views by period
- Category distribution
- Growth metrics

---

#### 7.2.4 Crawler Management (`/admin/crawler`)

##### 7.2.4.1 Crawler Configuration (`/admin/crawler/cau-hinh`)

**Features**:
- Crawl range settings (start/end pages)
- Crawl all toggle
- Schedule settings (placeholder)
- Source configuration

---

##### 7.2.4.2 Crawler Status (`/admin/crawler/trang-thai`)

**Features**:
- Current crawl progress
- Real-time logs
- Pause/Resume controls
- Cancel option

---

##### 7.2.4.3 Crawler History (`/admin/crawler/lich-su`)

**Features**:
- Past crawl operations
- Success/Failure status
- Duration
- Films added count

---

#### 7.2.5 Categories Management (`/admin/the-loai`)

**Features**:
- Categories list table
- Film count per category
- View films by category link

**API**: GET /crawler/ophim/categories

---

#### 7.2.6 Countries Management (`/admin/quoc-gia`)

**Features**:
- Countries list table
- Film count per country
- View films by country link

**API**: GET /crawler/ophim/countries

---

#### 7.2.7 Reports & Analytics (`/admin/bao-cao`)

**Overview Dashboard**:
- Key metrics summary
- Trend indicators
- Quick insights

**Views Report**:
- Time-based analytics
- Top performing content
- Geographic distribution (placeholder)

**Trends Report**:
- Rising content
- Category trends
- Search trends (placeholder)

---

#### 7.2.8 Settings (`/admin/cai-dat`)

**General Settings**:
- Site name
- Contact email
- Maintenance mode toggle

**API Settings**:
- API endpoint configuration
- Rate limiting settings
- Timeout configuration

**Cache Management**:
- Clear cache button
- Cache statistics
- Auto-refresh settings

---

#### 7.2.9 Activity Logs (`/admin/nhat-ky`)

**Features**:
- Chronological event log
- Filter by type
- User actions (client-side)
- System events

---

## 8. Component Architecture

### 8.1 Component Categories

```
COMPONENTS:
├── ui/ (Base UI Components)
│   ├── Button
│   ├── Input
│   ├── Select
│   ├── Checkbox
│   ├── Radio
│   ├── Switch
│   ├── Slider
│   ├── Modal
│   ├── Dropdown
│   ├── Tooltip
│   ├── Toast
│   ├── Badge
│   ├── Avatar
│   ├── Card
│   ├── Skeleton
│   ├── Spinner
│   ├── Progress
│   └── Tabs
│
├── layout/ (Layout Components)
│   ├── Header
│   ├── Footer
│   ├── Sidebar
│   ├── Navigation
│   ├── Breadcrumb
│   ├── Container
│   └── Grid
│
├── movie/ (Movie-specific Components)
│   ├── MovieCard
│   ├── MovieGrid
│   ├── MovieCarousel
│   ├── MovieHero
│   ├── MovieInfo
│   ├── MovieMeta
│   ├── EpisodeList
│   ├── EpisodeCard
│   ├── ServerSelector
│   ├── CategoryBadge
│   ├── QualityBadge
│   └── RatingDisplay
│
├── player/ (Video Player Components)
│   ├── VideoPlayer
│   ├── PlayerControls
│   ├── VolumeControl
│   ├── ProgressBar
│   ├── QualitySelector
│   ├── SubtitleSelector
│   └── FullscreenToggle
│
├── search/ (Search Components)
│   ├── SearchBar
│   ├── SearchResults
│   ├── SearchSuggestions
│   ├── FilterPanel
│   └── FilterChips
│
├── admin/ (Admin-specific Components)
│   ├── AdminHeader
│   ├── AdminSidebar
│   ├── DataTable
│   ├── StatCard
│   ├── ChartWidget
│   ├── ActivityLog
│   └── FormBuilder
│
└── common/ (Shared Components)
    ├── SEOHead
    ├── ErrorBoundary
    ├── LoadingScreen
    ├── EmptyState
    ├── Pagination
    ├── InfiniteScroll
    ├── BackToTop
    ├── ThemeToggle
    └── LanguageToggle
```

### 8.2 Component Specification Examples

#### MovieCard Component
```typescript
interface MovieCardProps {
  movie: {
    _id: string;
    name: string;
    origin_name: string;
    slug: string;
    poster_url: string;
    thumb_url: string;
    year: number;
    quality: string;
    lang: string;
    episode_current: string;
    type: 'series' | 'single' | 'hoathinh';
    category: { name: string; slug: string }[];
  };
  variant?: 'default' | 'compact' | 'featured';
  showMeta?: boolean;
  onAddToWatchlist?: () => void;
}

// Features:
// - Lazy-loaded image with skeleton
// - Hover overlay with quick info
// - Focus visible ring for a11y
// - Keyboard accessible
// - Badge for type/quality/year
// - Responsive sizing
```

#### VideoPlayer Component
```typescript
interface VideoPlayerProps {
  source: string; // HLS stream URL
  poster?: string;
  title: string;
  episodeInfo?: {
    current: number;
    total: number;
    serverName: string;
  };
  onEnded?: () => void;
  onTimeUpdate?: (time: number) => void;
  autoPlay?: boolean;
  startTime?: number;
}

// Features:
// - HLS.js integration
// - Custom controls
// - Keyboard shortcuts
// - Picture-in-picture
// - Fullscreen API
// - Volume with mute
// - Playback speed
// - Subtitle toggle
// - Quality selection
// - Progress bar with seek preview
// - Mobile touch gestures
// - ARIA labels throughout
```

---

## 9. State Management & Data Flow

### 9.1 State Architecture

```typescript
// Using Nanostores for Astro-compatible state

// src/stores/theme.ts
import { atom } from 'nanostores';

type Theme = 'dark' | 'light' | 'system';
export const $theme = atom<Theme>('dark');

export const toggleTheme = () => {
  $theme.set($theme.get() === 'dark' ? 'light' : 'dark');
};

// src/stores/watchlist.ts
import { persistentAtom } from '@nanostores/persistent';

interface WatchlistItem {
  slug: string;
  name: string;
  poster_url: string;
  addedAt: string;
}

export const $watchlist = persistentAtom<WatchlistItem[]>('watchlist', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addToWatchlist = (movie: Omit<WatchlistItem, 'addedAt'>) => {
  const current = $watchlist.get();
  if (!current.find(m => m.slug === movie.slug)) {
    $watchlist.set([...current, { ...movie, addedAt: new Date().toISOString() }]);
  }
};

export const removeFromWatchlist = (slug: string) => {
  $watchlist.set($watchlist.get().filter(m => m.slug !== slug));
};

export const isInWatchlist = (slug: string) => {
  return $watchlist.get().some(m => m.slug === slug);
};

// src/stores/history.ts
import { persistentAtom } from '@nanostores/persistent';

interface HistoryItem {
  slug: string;
  name: string;
  poster_url: string;
  episode?: string;
  progress?: number;
  watchedAt: string;
}

export const $watchHistory = persistentAtom<HistoryItem[]>('history', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addToHistory = (movie: Omit<HistoryItem, 'watchedAt'>) => {
  const current = $watchHistory.get();
  const filtered = current.filter(m => m.slug !== movie.slug);
  $watchHistory.set([
    { ...movie, watchedAt: new Date().toISOString() },
    ...filtered,
  ].slice(0, 50)); // Keep last 50
};

// src/stores/search.ts
import { atom } from 'nanostores';

export const $searchQuery = atom<string>('');
export const $searchResults = atom<any[]>([]);
export const $isSearching = atom<boolean>(false);

// src/stores/player.ts
import { atom, map } from 'nanostores';

export const $playerState = map({
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  isMuted: false,
  isFullscreen: false,
  quality: 'auto',
  playbackRate: 1,
});

// src/stores/ui.ts
import { atom } from 'nanostores';

export const $isSidebarOpen = atom<boolean>(false);
export const $isSearchModalOpen = atom<boolean>(false);
export const $isPlayerTheaterMode = atom<boolean>(false);
```

### 9.2 Data Fetching Patterns

```typescript
// Server-side data fetching in Astro pages
---
// src/pages/phim/[slug].astro
import { filmService } from '@/lib/api/services/filmService';

const { slug } = Astro.params;

let film;
let episodes;
let error;

try {
  [film, episodes] = await Promise.all([
    filmService.getFilmBySlug(slug),
    filmService.getFilmEpisodes(slug),
  ]);
} catch (e) {
  error = e;
}

if (error || !film) {
  return Astro.redirect('/404');
}
---

// Client-side data fetching with React Query in islands
// src/components/MovieGrid.tsx
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { filmService } from '@/lib/api/services/filmService';

export function MovieGrid({ type }: { type?: string }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['films', type],
    queryFn: ({ pageParam }) => 
      type 
        ? filmService.getFilmsByType(type, pageParam)
        : filmService.getFilms(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  // ... render logic
}
```

---

## 10. Performance Optimization

### 10.1 Image Optimization

```typescript
// Image component with lazy loading and blur placeholder
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

// Use Astro's Image component or implement:
// - Lazy loading with IntersectionObserver
// - LQIP (Low Quality Image Placeholder)
// - WebP format with fallback
// - Responsive srcset
// - Native loading="lazy" attribute
```

### 10.2 Code Splitting

```
- Astro Islands for interactive components
- Dynamic imports for modals/dialogs
- Route-based code splitting
- Component lazy loading
```

### 10.3 Caching Strategy

```typescript
// API response caching
const CACHE_CONFIG = {
  categories: { ttl: 3600 * 24 },     // 24 hours
  countries: { ttl: 3600 * 24 },      // 24 hours
  filmDetail: { ttl: 3600 },          // 1 hour
  filmList: { ttl: 300 },             // 5 minutes
  hotFilms: { ttl: 300 },             // 5 minutes
  search: { ttl: 60 },                // 1 minute
};

// Implement SWR or React Query caching
// Service Worker for offline support
```

### 10.4 Performance Metrics Targets

```
- First Contentful Paint (FCP): < 1.0s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Lighthouse Performance: > 90
```

---

## 11. File & Folder Structure

```
cineverse/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── global.css
│   │       ├── variables.css
│   │       ├── typography.css
│   │       ├── animations.css
│   │       └── utilities.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   ├── movie/
│   │   │   ├── MovieCard.tsx
│   │   │   ├── MovieGrid.tsx
│   │   │   ├── MovieCarousel.tsx
│   │   │   ├── MovieHero.tsx
│   │   │   ├── EpisodeList.tsx
│   │   │   └── index.ts
│   │   ├── player/
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── PlayerControls.tsx
│   │   │   └── index.ts
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── index.ts
│   │   ├── admin/
│   │   │   ├── AdminLayout.astro
│   │   │   ├── DataTable.tsx
│   │   │   ├── StatCard.tsx
│   │   │   └── index.ts
│   │   └── common/
│   │       ├── SEOHead.astro
│   │       ├── ErrorBoundary.tsx
│   │       ├── Pagination.tsx
│   │       └── index.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── MainLayout.astro
│   │   ├── AdminLayout.astro
│   │   └── WatchLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── phim/
│   │   │   ├── index.astro
│   │   │   ├── [slug]/
│   │   │   │   ├── index.astro
│   │   │   │   └── xem-phim/
│   │   │   │       ├── index.astro
│   │   │   │       └── [episode].astro
│   │   ├── the-loai/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── quoc-gia/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── nam/
│   │   │   └── [year].astro
│   │   ├── dao-dien/
│   │   │   └── [name].astro
│   │   ├── dien-vien/
│   │   │   └── [name].astro
│   │   ├── tim-kiem.astro
│   │   ├── loc-phim.astro
│   │   ├── phim-le.astro
│   │   ├── phim-bo.astro
│   │   ├── hoat-hinh.astro
│   │   ├── phim-chieu-rap.astro
│   │   ├── xu-huong.astro
│   │   ├── danh-sach-yeu-thich.astro
│   │   ├── lich-su-xem.astro
│   │   ├── cai-dat.astro
│   │   ├── gioi-thieu.astro
│   │   ├── lien-he.astro
│   │   ├── dieu-khoan.astro
│   │   ├── chinh-sach-bao-mat.astro
│   │   ├── ho-tro.astro
│   │   ├── admin/
│   │   │   ├── index.astro
│   │   │   ├── dang-nhap.astro
│   │   │   ├── phim/
│   │   │   │   ├── danh-sach.astro
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── chinh-sua.astro
│   │   │   │   └── thong-ke.astro
│   │   │   ├── crawler/
│   │   │   │   ├── cau-hinh.astro
│   │   │   │   ├── trang-thai.astro
│   │   │   │   └── lich-su.astro
│   │   │   ├── the-loai.astro
│   │   │   ├── quoc-gia.astro
│   │   │   ├── bao-cao/
│   │   │   │   ├── tong-quan.astro
│   │   │   │   ├── luot-xem.astro
│   │   │   │   └── xu-huong.astro
│   │   │   ├── cai-dat/
│   │   │   │   ├── chung.astro
│   │   │   │   ├── api.astro
│   │   │   │   └── cache.astro
│   │   │   └── nhat-ky.astro
│   │   ├── 404.astro
│   │   └── 500.astro
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── schema.d.ts (generated)
│   │   │   └── services/
│   │   │       ├── filmService.ts
│   │   │       ├── metadataService.ts
│   │   │       └── adminService.ts
│   │   ├── utils/
│   │   │   ├── cn.ts (classnames helper)
│   │   │   ├── format.ts
│   │   │   ├── date.ts
│   │   │   └── accessibility.ts
│   │   └── constants/
│   │       ├── routes.ts
│   │       ├── config.ts
│   │       └── seo.ts
│   ├── stores/
│   │   ├── theme.ts
│   │   ├── watchlist.ts
│   │   ├── history.ts
│   │   ├── search.ts
│   │   ├── player.ts
│   │   └── ui.ts
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useFocusTrap.ts
│   │   └── useKeyboard.ts
│   ├── types/
│   │   ├── film.ts
│   │   ├── api.ts
│   │   └── global.d.ts
│   └── env.d.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   └── a11y/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .env.example
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
└── README.md
```

---

## 12. Implementation Phases

### Phase 1: Foundation (Week 1-2)
```
1. Project setup
   - Initialize Astro project
   - Configure TailwindCSS
   - Setup TypeScript
   - Generate OpenAPI types
   - Configure API client

2. Design system
   - Implement CSS variables
   - Create base UI components
   - Setup typography
   - Configure animations

3. Layout components
   - Header/Navigation
   - Footer
   - Base layouts

4. Core pages (basic)
   - Home page structure
   - 404/500 pages
```

### Phase 2: Movie Features (Week 3-4)
```
1. Movie components
   - MovieCard
   - MovieGrid
   - MovieCarousel
   - MovieHero

2. Public pages
   - Home page (complete)
   - Browse all movies
   - Movie detail page
   - Category/Country pages
   - Type pages (phim-le, phim-bo, hoat-hinh)

3. Search & Filter
   - Search bar
   - Search results page
   - Advanced filter page
```

### Phase 3: Video Player (Week 5)
```
1. Video player
   - HLS integration
   - Custom controls
   - Keyboard shortcuts
   - Fullscreen support

2. Watch pages
   - Watch page layout
   - Episode navigation
   - Server selection
   - Theater mode

3. History & Watchlist
   - LocalStorage setup
   - Watchlist page
   - History page
   - Continue watching
```

### Phase 4: Admin Dashboard (Week 6-7)
```
1. Admin layout
   - Admin navigation
   - Sidebar
   - Authentication (basic)

2. Dashboard
   - Stats cards
   - Charts
   - Quick actions

3. Content management
   - Films list table
   - Film edit form
   - Categories/Countries view

4. Crawler management
   - Crawler configuration
   - Status monitoring
```

### Phase 5: Polish & Optimization (Week 8)
```
1. Accessibility
   - Full WCAG audit
   - Screen reader testing
   - Keyboard navigation
   - Color contrast fixes

2. Performance
   - Image optimization
   - Code splitting
   - Caching strategy
   - Lighthouse optimization

3. Testing
   - Unit tests
   - Integration tests
   - E2E tests
   - A11y tests

4. Documentation
   - README
   - Component docs
   - API documentation
```

---

## 13. Quality Checklist

### Pre-Development
- [ ] Design system documented
- [ ] API types generated
- [ ] Environment configured
- [ ] ESLint/Prettier setup

### Per Component
- [ ] TypeScript types complete
- [ ] Responsive design (mobile-first)
- [ ] Dark/Light theme support
- [ ] Loading/Error/Empty states
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Focus indicators visible
- [ ] Animations respect prefers-reduced-motion
- [ ] Unit tests written

### Per Page
- [ ] SEO meta tags
- [ ] Open Graph tags
- [ ] Structured data
- [ ] Heading hierarchy correct
- [ ] Landmarks defined
- [ ] Skip links functional
- [ ] Loading states
- [ ] Error boundaries

### Pre-Launch
- [ ] WCAG 2.1 AAA audit passed
- [ ] Lighthouse > 90 all categories
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Screen reader testing
- [ ] E2E tests passing
- [ ] Performance budget met
- [ ] Security headers configured

---

## 14. Additional Notes

### Image URL Handling
The API returns poster/thumbnail URLs that may need prefix handling:
```typescript
const getImageUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `https://phimimg.com/${path}`;
};
```

### Error Handling Strategy
```typescript
// Graceful degradation for API failures
// Show cached content when possible
// User-friendly error messages
// Retry mechanisms for transient failures
```

### Vietnamese Language Support
```typescript
// Ensure proper UTF-8 encoding
// Vietnamese slug handling
// Date formatting in Vietnamese
// UI text translations
```

---

## 🚀 START BUILDING!

This prompt contains everything needed to build CineVerse from scratch. Follow the implementation phases, use ALL the APIs provided, and create a production-ready, accessible, beautifully designed movie platform.

**Remember**:
1. Read this ENTIRE prompt first
2. Start with Phase 1
3. Test accessibility continuously
4. Follow the design system strictly
5. Use TypeScript strictly
6. Implement ALL pages listed
7. Create reusable components
8. Optimize performance throughout

**Good luck, AI! Build something amazing! 🎬✨**
