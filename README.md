# NordPixel Website

A modern portfolio and business website for NordPixel, featuring WebGL/3D design work, web applications, and frontend expertise.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **3D/Graphics**: Three.js
- **Routing**: React Router v6
- **Contact**: EmailJS

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components for each route
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── context/          # React context for state management
├── config/           # Configuration files
├── assets/
│   ├── styles/       # Global CSS and Tailwind styles
│   └── data/         # Static data (projects, etc.)
└── App.tsx           # Main app component with routing
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Custom color palette with Tailwind
- 🎯 Interactive 3D elements with Three.js
- ⚡ Performance optimized (desktop/mobile aware)
- ♿ Accessibility focused
- 📧 Email contact form with EmailJS

## Color Palette

- **Primary Dark**: #004042
- **Primary Bright**: #00c599
- **Primary Light**: #fff7d6
- **Accent**: #ff8847
- **Secondary Light**: #e1f5ee
- **Secondary Muted**: #49907c

## Typography

- **Headings**: Oldenburg
- **Body Text**: IBM Plex Sans Hebrew

## Next Steps

1. Update project data in `src/assets/data/projects.ts`
2. Add project images/thumbnails
3. Set up EmailJS credentials
4. Create project detail pages
5. Implement contact form
6. Deploy to hosting platform

---

**Created**: January 28, 2026
