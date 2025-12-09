# Design: Career Portfolio Website

## Context
The project needs to transform from a VuePress documentation site to a modern personal career portfolio. The site must:
- Deploy on Vercel (requirement)
- Display four career periods with visual appeal
- Support animations and images
- Be extensible for future content additions
- Work reliably in production

Current state: VuePress 1.9.10 (legacy, EOL), basic documentation structure.

## Goals / Non-Goals

### Goals
- Modern, maintainable tech stack supported by Vercel
- Beautiful UI with animations and visual elements
- Responsive design for all devices
- Fast page loads and good performance
- Easy to extend with new career period details
- SEO-friendly structure

### Non-Goals
- Backend API or database (static site only)
- User authentication or CMS
- Real-time features
- Complex state management (minimal client-side state)

## Decisions

### Decision: Use Next.js 14+ (App Router) with TypeScript
**Rationale:**
- Vercel's first-class support for Next.js (created by Vercel)
- Excellent performance with App Router and React Server Components
- Built-in image optimization (`next/image`)
- Easy deployment with zero configuration
- Strong TypeScript support
- Modern React patterns (Server Components, Server Actions)
- Excellent animation support with Framer Motion

**Alternatives considered:**
- **VuePress 2.x**: Still documentation-focused, less flexible for custom portfolio design
- **Nuxt 3**: Good option but Next.js has better Vercel integration
- **Astro**: Great for static sites but less dynamic animation support
- **Remix**: Good but less mature ecosystem for portfolio sites
- **Pure React + Vite**: More setup required, no built-in optimizations

### Decision: Use Tailwind CSS for styling
**Rationale:**
- Rapid UI development
- Consistent design system
- Excellent animation utilities
- Small bundle size with JIT compilation
- Great developer experience

**Alternatives considered:**
- **CSS Modules**: More verbose, less utility-focused
- **Styled Components**: Runtime overhead, larger bundle
- **CSS-in-JS libraries**: Performance concerns with SSR

### Decision: Use Framer Motion for animations
**Rationale:**
- Industry standard for React animations
- Declarative API
- Excellent performance
- Supports complex animations (scroll, gesture, layout)
- Works seamlessly with Next.js

**Alternatives considered:**
- **GSAP**: More powerful but heavier, less React-native
- **React Spring**: Good but less intuitive API
- **CSS animations**: Limited interactivity

### Decision: Use Next.js Image component with external image hosting
**Rationale:**
- Built-in optimization and lazy loading
- Responsive images with srcset
- Placeholder support
- External hosting (e.g., Cloudinary, Imgix) for better CDN performance

**Alternatives considered:**
- **Local images**: Larger repo size, slower builds
- **Base64 inline**: Poor performance

### Decision: Career timeline as main navigation structure
**Rationale:**
- Clear chronological progression
- Easy to understand user journey
- Natural expansion points for each period
- Works well for portfolio narrative

**Structure:**
```
Home (landing with timeline overview)
├── Period 1: Telecom (2007-2012)
├── Period 2: Gaming (2012-2018)
├── Period 3: SaaS/Blockchain (2018-2020)
└── Period 4: Quant Trading (2020-present)
```

Each period can expand into detailed pages later.

## Risks / Trade-offs

### Risk: Migration complexity from VuePress
**Mitigation**: Complete rebuild rather than migration. Archive old docs, start fresh.

### Risk: Performance with animations
**Mitigation**: Use Framer Motion's performance optimizations, lazy load animations, use `will-change` CSS sparingly.

### Risk: Image loading performance
**Mitigation**: Next.js Image component with proper sizing, WebP format, lazy loading, CDN hosting.

### Trade-off: Static vs Dynamic
**Decision**: Static site generation (SSG) for all pages. No need for ISR or SSR since content is static.

## Migration Plan

1. **Phase 1: Setup** (Week 1)
   - Initialize Next.js project
   - Configure Tailwind CSS
   - Set up TypeScript
   - Configure Vercel deployment

2. **Phase 2: Core Structure** (Week 1)
   - Create layout components
   - Implement career timeline component
   - Create page structure for 4 periods
   - Basic responsive design

3. **Phase 3: Visual Design** (Week 2)
   - Add animations with Framer Motion
   - Integrate image assets
   - Polish UI/UX
   - Add visual effects

4. **Phase 4: Content & Polish** (Week 2)
   - Add career period content
   - SEO optimization
   - Performance optimization
   - Testing

5. **Phase 5: Deployment** (Week 2)
   - Deploy to Vercel
   - Verify functionality
   - Archive old VuePress structure

**Rollback**: Keep old VuePress code in archive branch. Can revert if needed.

## Open Questions
- Image hosting preference? (Cloudinary, Imgix, or Vercel's image optimization)
- Color scheme preferences? (Can be decided during design phase)
- Specific animation preferences? (Subtle vs. bold)

