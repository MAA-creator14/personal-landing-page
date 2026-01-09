# Personal Landing Page

A modern, playful yet professional personal landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Animated introduction with scroll indicator
- **Contact Section**: Email and LinkedIn cards with copy-to-clipboard functionality
- **CV Section**: Professional highlights with downloadable CV
- **AI Tools Section**: Grid showcase of AI tools used
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Animations**: Smooth entrance animations using Framer Motion
- **Accessibility**: ARIA labels, keyboard navigation, and focus states

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Space Grotesk (headings)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Information

Edit `src/components/Contact.tsx` and replace:
- Email address
- LinkedIn URL

### Update CV

1. Place your CV file in the `public` folder
2. Update the file name in `src/components/CVSection.tsx`

### Customize Colors

Edit `tailwind.config.ts` to modify the color palette.

### Update AI Tools

Edit `src/data/aiTools.ts` to add, remove, or modify AI tools.

## Project Structure

```
personal-landing-page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── src/
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
└── public/
    └── cv-placeholder.pdf
```

## Performance

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## License

MIT

