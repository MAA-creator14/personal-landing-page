# Personal Landing Page - Project Plan

## Project Overview
Building a modern, playful yet professional personal landing page for Marc, a Product Manager at Treatwell, using Next.js, TypeScript, and Tailwind CSS.

## Technology Stack

### Core Framework
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Additional Libraries
- **Fonts**: Google Fonts (Inter for body, Space Grotesk for headings)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Color Palette (No Blues)

### Primary Colors
- **Coral**: #FF6B6B / #FF8787 (light variant)

### Secondary Colors
- **Amber**: #FFA94D / #FFD43B (light variant)

### Accent Colors
- **Sage Green**: #8BC34A / #AED581 (light variant)

### Neutral Colors
- **Dark Gray**: #2D2D2D
- **Light Gray**: #F8F9FA

### Background
- **Off-white**: #FFFCF7

## Project Structure

```
personal-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── metadata.ts
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   ├── CVSection.tsx
│   │   ├── AITools.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── data/
│   │   └── aiTools.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── cv-placeholder.pdf
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Implementation Plan

### Phase 1: Project Setup
- [x] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS with custom colors
- [ ] Set up project structure
- [ ] Install dependencies (Framer Motion, Lucide React)
- [ ] Configure Google Fonts
- [ ] Set up TypeScript paths

### Phase 2: Core Components

#### Hero Section
- [ ] Name and tagline
- [ ] Animated text entrance
- [ ] Scroll indicator
- [ ] Full viewport height
- [ ] Centered content
- [ ] Responsive typography

#### Contact Section
- [ ] Email card with hover effect
- [ ] LinkedIn card with external link icon
- [ ] Optional GitHub/Twitter cards
- [ ] Copy-to-clipboard functionality for email
- [ ] Grid layout (2 columns on desktop, 1 on mobile)
- [ ] Hover lift effect
- [ ] Icon + text

#### CV Section
- [ ] Brief professional highlights
- [ ] Download button with icon
- [ ] Hover animation
- [ ] Professional summary

#### AI Tools Section
- [ ] Grid layout (responsive)
- [ ] Tool cards with icons
- [ ] Hover effects showing descriptions
- [ ] Tools: ChatGPT, Claude, Cursor, Perplexity, Notion AI, Midjourney, GitHub Copilot
- [ ] 3 columns on desktop, 2 on tablet, 1 on mobile
- [ ] Card-based design
- [ ] Tool icon/emoji
- [ ] Tool name (heading)
- [ ] One-line description
- [ ] Subtle border with accent color on hover

#### Footer
- [ ] Copyright notice
- [ ] Social links
- [ ] Built with Next.js badge

### Phase 3: Polish & Optimization
- [ ] Add smooth scroll behavior
- [ ] Implement responsive design breakpoints
- [ ] Add meta tags for SEO
- [ ] Optimize performance
- [ ] Ensure accessibility (ARIA labels, keyboard navigation)
- [ ] Test across devices

## Component Specifications

### Hero Component
- Full viewport height
- Centered content
- Animated text with stagger effect
- Subtle scroll indicator
- Responsive typography

### Contact Cards
- Grid layout (2 columns on desktop, 1 on mobile)
- Hover lift effect
- Icon + text
- Click to copy email
- External link for LinkedIn

### AI Tools Grid
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Card-based design
- Tool icon/emoji
- Tool name (heading)
- One-line description
- Subtle border with accent color on hover

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Accessibility Features

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images
- Color contrast ratios meeting WCAG AA

## Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## SEO Meta Tags

- **Title**: "Marc - Product Manager | SaaS & AI Product Development"
- **Description**: Custom description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## Animation Strategy

- Entrance animations on scroll (subtle fade-in)
- Hover states on all interactive elements
- Smooth scrolling between sections
- Page load animations (stagger effects)
- No animations that cause motion sickness

## Development Phases Timeline

### Phase 1 (Setup): 30 minutes
- Project initialization
- Dependencies installation
- Basic configuration

### Phase 2 (Components): 2-3 hours
- Build all main components
- Implement responsive design
- Add animations

### Phase 3 (Polish): 1-2 hours
- Performance optimization
- Accessibility testing
- Cross-browser testing
- Final refinements

## Testing Checklist

- [ ] Desktop responsive (1920px, 1440px, 1024px)
- [ ] Tablet responsive (768px)
- [ ] Mobile responsive (375px, 414px)
- [ ] All links working
- [ ] Email copy functionality
- [ ] Download CV button
- [ ] Smooth scroll behavior
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Lighthouse audit (95+ score)

## Key Features

### Contact Section Features
- Email with copy-to-clipboard
- LinkedIn with external link
- Optional social media links
- Hover animations

### AI Tools Features
- Grid of 7 AI tools
- Each tool has:
  - Icon/emoji
  - Name
  - Description
  - Category (chat, code, design, productivity)
- Hover effects reveal more information

### CV Section Features
- Professional highlights
- Download button
- Brief summary of experience
- Link to full CV

### Hero Section Features
- Name: Marc
- Tagline: Product Manager at Treatwell
- Animated entrance
- Scroll indicator
- Full-height section

## Technical Notes

### Font Loading
- Use Google Fonts CDN
- Preload critical fonts
- Fallback fonts for performance

### Animation Performance
- Use Framer Motion for smooth animations
- Prefer transform and opacity for performance
- Avoid animating layout properties

### Image Optimization
- Use Next.js Image component
- Optimize all images
- Provide proper alt text

### Code Organization
- Component-based architecture
- Reusable UI components
- Type-safe with TypeScript
- Clean separation of concerns

