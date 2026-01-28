# NordPixel - Quick Reference Card

## 🚀 Quick Start

```bash
# Install & run
npm install
npm run dev

# Navigate to http://localhost:5173
```

---

## 🎨 Your Color Palette

| Name | Hex | Tailwind Class |
|------|-----|---|
| Primary Dark | #004042 | `bg-primary-dark` / `text-primary-dark` |
| Primary Bright | #00c599 | `bg-primary-bright` / `text-primary-bright` |
| Primary Light | #fff7d6 | `bg-primary-light` / `text-primary-light` |
| Accent | #ff8847 | `bg-accent` / `text-accent` |
| Secondary Light | #e1f5ee | `bg-secondary-light` / `text-secondary-light` |
| Secondary Muted | #49907c | `bg-secondary-muted` / `text-secondary-muted` |

## 🔤 Fonts

- **Headings**: `font-heading` → Oldenburg
- **Body**: `font-body` → IBM Plex Sans Hebrew

---

## 📁 File Shortcuts

| Purpose | File |
|---------|------|
| Site settings | `src/config/site.ts` |
| Projects data | `src/assets/data/projects.ts` |
| Global styles | `src/assets/styles/index.css` |
| Colors/fonts | `tailwind.config.ts` |
| Routes | `src/App.tsx` |

---

## 📄 Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `HomePage.tsx` | Hero + featured projects |
| `/portfolio` | `PortfolioPage.tsx` | All projects gallery |
| `/about` | `AboutPage.tsx` | About + services + skills |
| `*` | `NotFoundPage.tsx` | 404 page |

---

## 🧩 Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `Header` | Navigation + logo | `components/Header.tsx` |
| `Footer` | Footer with links | `components/Footer.tsx` |
| `Button` | Reusable button | `components/Button.tsx` |
| `StatusBanner` | Status message | `components/StatusBanner.tsx` |
| `Layout` | Main wrapper | `components/Layout.tsx` |

---

## 🪝 Hooks

| Hook | Purpose |
|------|---------|
| `useIsMobile()` | Detect mobile device |
| `useThreeScene()` | Three.js scene setup |

---

## 💡 Common Tasks

### Update Status Message
```typescript
// src/config/site.ts
export const STATUS_MESSAGE = {
  active: true,
  text: '🔥 Open for commissions!',
  bgColor: 'bg-primary-bright',
  textColor: 'text-primary-dark',
};
```

### Add Project to Portfolio
```typescript
// src/assets/data/projects.ts
{
  id: 'my-project',
  title: 'My Awesome Project',
  shortDescription: 'Brief description',
  description: 'Detailed description',
  image: '/images/project.jpg',
  technologies: ['React', 'Three.js'],
  category: 'webgl',
  featured: true,
}
```

### Update Social Links
```typescript
// src/config/site.ts
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
};
```

### Create Button Variants
```tsx
<Button variant="primary" size="lg">Primary</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="outline" size="sm">Outline</Button>
```

---

## 🎯 Priority Next Steps

1. **Update projects** → `src/assets/data/projects.ts`
2. **Add images** → place in `public/` folder
3. **Update config** → `src/config/site.ts`
4. **Set up EmailJS** → follow their setup
5. **Deploy** → Vercel/Netlify/GitHub Pages

---

## 🛠️ Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Check code quality
```

---

## 📚 Documentation Files

- **README.md** - Project overview
- **WEBSITE_GOALS.md** - Project specification
- **SETUP_COMPLETE.md** - Detailed setup guide
- **PROJECT_STRUCTURE.md** - Architecture overview
- **This file** - Quick reference

---

## ⚡ Performance Tips

- 3D elements auto-disable on mobile ✓
- Status banner is lazy-rendered ✓
- Images ready for lazy loading
- Code splitting configured
- Bundle size: ~644KB (Three.js included)

---

## 📞 Need Help?

- Tailwind Classes: https://tailwindcss.com/docs
- React Router: https://reactrouter.com/
- Three.js: https://threejs.org/docs/
- Vite: https://vitejs.dev/guide/

---

**Setup Date**: January 28, 2026
**Status**: ✅ Ready for Development
