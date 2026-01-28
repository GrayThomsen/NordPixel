# NordPixel Project Structure Overview

## Directory Tree

```
NordPixel/
├── src/
│   ├── components/
│   │   ├── index.ts                 # Component exports barrel
│   │   ├── Header.tsx               # Navigation header with mobile menu
│   │   ├── Footer.tsx               # Footer with links and social
│   │   ├── Layout.tsx               # Main app layout wrapper
│   │   ├── Button.tsx               # Reusable button component
│   │   └── StatusBanner.tsx         # Dynamic status message banner
│   │
│   ├── pages/
│   │   ├── HomePage.tsx             # Hero + featured projects
│   │   ├── PortfolioPage.tsx        # Projects gallery
│   │   ├── AboutPage.tsx            # About + services + skills
│   │   └── NotFoundPage.tsx         # 404 error page
│   │
│   ├── hooks/
│   │   ├── index.ts                 # Hooks exports barrel
│   │   ├── useIsMobile.ts           # Mobile device detection
│   │   └── useThreeScene.ts         # Three.js scene setup
│   │
│   ├── config/
│   │   └── site.ts                  # Site config, colors, nav links
│   │
│   ├── context/                     # (Ready for state management)
│   │
│   ├── utils/                       # (Ready for utility functions)
│   │
│   ├── assets/
│   │   ├── styles/
│   │   │   └── index.css            # Global CSS + Tailwind + fonts
│   │   └── data/
│   │       └── projects.ts          # Portfolio project data
│   │
│   ├── App.tsx                      # Main app with React Router
│   └── main.tsx                     # React DOM render
│
├── public/                          # Static assets (images, etc.)
│
├── dist/                            # Production build (generated)
│
├── Configuration Files
│   ├── index.html                   # HTML entry point
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── tsconfig.node.json           # TypeScript config for build tools
│   ├── vite.config.ts               # Vite bundler config
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── postcss.config.js            # PostCSS config
│   ├── .eslintrc.yaml               # ESLint rules
│   ├── .gitignore                   # Git ignore rules
│   └── .env.example                 # Environment variables template
│
├── Documentation
│   ├── README.md                    # Project overview
│   ├── WEBSITE_GOALS.md             # Project specification
│   └── SETUP_COMPLETE.md            # Setup guide
│
└── Dependencies (node_modules/)
```

---

## Component Hierarchy

```
App (React Router)
└── Layout
    ├── Header
    │   └── Navigation Menu (Mobile responsive)
    ├── StatusBanner
    ├── Main (Outlet)
    │   ├── HomePage
    │   │   └── HeroCanvas (Three.js)
    │   ├── PortfolioPage
    │   │   └── Project Cards
    │   ├── AboutPage
    │   │   └── Services Grid
    │   └── NotFoundPage
    └── Footer
        └── Social Links
```

---

## Data Flow

```
config/site.ts
├── NAV_LINKS → Header
├── STATUS_MESSAGE → StatusBanner
└── SOCIAL_LINKS → Header, Footer

assets/data/projects.ts
├── Project interface definition
├── Sample projects array
└── Utility functions
    ├── getFeaturedProjects()
    ├── getProjectById()
    └── getProjectsByCategory()
```

---

## Styling Architecture

```
Tailwind CSS (configured in tailwind.config.ts)
├── Color Palette
│   ├── primary-dark: #004042
│   ├── primary-bright: #00c599
│   ├── primary-light: #fff7d6
│   ├── accent: #ff8847
│   ├── secondary-dark: #004042
│   ├── secondary-light: #e1f5ee
│   └── secondary-muted: #49907c
│
├── Typography
│   ├── font-heading: Oldenburg
│   └── font-body: IBM Plex Sans Hebrew
│
└── Animations
    ├── fade-in
    ├── slide-up
    └── slide-down

Global CSS (src/assets/styles/index.css)
├── Font imports
├── Tailwind directives (@tailwind)
├── Base styles (*, body, headings)
├── Custom scrollbar styles
└── Focus states for accessibility
```

---

## Page Features

### HomePage
- **Hero Section**
  - Three.js animated background (desktop only)
  - Main heading and CTA
  - Scroll indicator animation
  
- **Featured Projects**
  - Project card grid
  - View all projects button
  
- **CTA Section**
  - Call-to-action with contact button

### PortfolioPage
- **Gallery Grid**
  - Responsive project cards
  - Technology tags
  - Project filtering ready

### AboutPage
- **Bio Section**
  - Professional introduction
  
- **Services Grid**
  - 4 service cards with descriptions
  
- **Skills Section**
  - Technical skills organized by category
  
- **CV Download**
  - CTA for CV download

---

## Import Patterns

### Using Path Aliases
```typescript
// ✅ Clean imports with aliases
import { Header, Footer, Button } from '@components';
import { useIsMobile } from '@hooks';
import { projects } from '@/assets/data/projects';
import { SITE_NAME } from '@config/site';

// ❌ Avoid relative imports
// import Header from '../../../components/Header';
```

### Component Imports
```typescript
// Individual components
import { Header } from '@components/Header';

// Or using barrel export
import { Header } from '@components';
```

---

## Development Workflow

### Adding a New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Update nav in `src/config/site.ts`

### Creating a New Component
1. Create `src/components/MyComponent.tsx`
2. Add export to `src/components/index.ts`
3. Import with `import { MyComponent } from '@components';`

### Adding Styles
- Use Tailwind classes (configured colors available)
- Add custom CSS in `src/assets/styles/index.css`
- Component-specific styles in component files

### Using Hooks
- Mobile detection: `const isMobile = useIsMobile();`
- Three.js: `const { sceneRef, cameraRef, rendererRef } = useThreeScene(canvasRef);`

---

## Build & Deployment

### Development
```bash
npm run dev
```
- Starts Vite dev server on port 5173
- Hot Module Replacement (HMR) enabled
- Browser auto-opens

### Production Build
```bash
npm run build
```
- TypeScript compilation (`tsc`)
- Vite bundling and minification
- Output to `dist/` folder
- Chunk size warning (normal with Three.js)

### Preview Locally
```bash
npm run preview
```
- Serves production build locally
- Useful for testing production build

---

## Configuration Details

### Color System
The color palette is centralized in `tailwind.config.ts` and can be used:
```tsx
<div className="bg-primary-bright text-primary-dark">
  Content
</div>
```

### Font System
Fonts are imported from Google Fonts in `src/assets/styles/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Oldenburg&family=IBM+Plex+Sans+Hebrew:wght@100;200;300;400;500;600;700&display=swap');
```

### Path Aliases
Configured in both:
- `tsconfig.json` (for IDE/TypeScript)
- `vite.config.ts` (for bundler)

---

## Next Enhancements

### Ready to Add
- [ ] Contact form with EmailJS
- [ ] Project detail pages with dynamic routing
- [ ] Image optimization and lazy loading
- [ ] Analytics integration
- [ ] More complex 3D scenes
- [ ] Blog functionality
- [ ] Admin dashboard

### Performance Optimizations
- [ ] Code splitting for routes
- [ ] Dynamic imports for heavy components
- [ ] Image compression and WebP
- [ ] Service worker for offline support
- [ ] CDN optimization

---

## Helpful Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Clean install (nuclear option)
rm -rf node_modules package-lock.json && npm install
```

---

**Last Updated**: January 28, 2026
