# NordPixel Website - Project Goals & Specifications

## Project Overview
Personal portfolio and business website for NordPixel, showcasing WebGL/3D design work, standard web applications, and frontend expertise. Built as a foundation for future full-stack development.

## Technology Stack
- **Build Tool**: Vite
- **Language**: TypeScript
- **Frontend Framework**: React
- **Styling**: Tailwind CSS + Custom CSS
- **3D/WebGL**: Three.js
- **Contact Form**: EmailJS (free tier)
- **Deployment**: TBD

## Page Structure

### 1. Homepage (`/`)
- **Hero Section**
  - Dynamic background 3D element (limited complexity for performance)
  - Status message banner (dynamic text: "Open for commissions", "On vacation", etc.)
  - Smooth animations and transitions
  - Call-to-action button(s)
- **Featured Projects Preview**
- **Footer with navigation**

### 2. Portfolio/Gallery (`/portfolio`)
- Grid/gallery view of all projects
- Project cards with:
  - Thumbnail/preview image
  - Project title and brief description
  - Technology tags
  - Link to detailed project page
- Filtering/sorting capabilities (optional enhancement)
- Responsive design (mobile-friendly)

### 3. Project Detail Pages (`/portfolio/:project-id`)
- Detailed project description
- High-quality images/screenshots
- Interactive 3D elements (if applicable to project)
- Technologies used
- Links to live demo or repository (if applicable)
- Navigation to next/previous projects

### 4. About Page (`/about`)
- Professional bio/introduction
- Services offered (WebGL, 3D design, web applications, frontend work)
- Expertise highlights
- Downloadable CV (to be added later)
- Professional photo (optional)

### 5. Contact Section
- Contact form (integrated with EmailJS)
- Form fields: Name, Email, Subject, Message
- Success/error feedback
- Possibly embedded or as modal

### 6. Navigation
- Persistent header navigation
- Links: Home, Portfolio, About, Contact
- LinkedIn profile link
- Responsive mobile menu

## Design & UX Principles
- **Smooth Interactions**: Smooth animations, transitions, and scrolling effects
- **Performance Optimized**: 
  - Heavy 3D elements limited in scope
  - 3D elements disabled/simplified on mobile devices
  - Lazy loading for images and 3D components
  - Code splitting for optimal load times
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Visual Identity**: Modern, clean, professional aesthetic showcasing design capabilities

## 3D Elements Strategy
- **Hero Background**: Subtle animated 3D scene (limited geometry)
- **Interactive Elements**: Optional 3D models/visualizations on project detail pages
- **Performance Gates**:
  - Disable complex 3D on mobile devices
  - Progressive enhancement: graceful fallbacks
  - Use LOD (Level of Detail) techniques where applicable

## Status Message Feature
- Configurable message display in hero section
- Easy to update without code changes (configuration file or admin interface)
- Examples: "Open for commissions", "On vacation break", "New work coming soon"

## Future Enhancements
- Blog/updates section (deferred)
- Client testimonials
- Advanced analytics
- Full-stack capabilities (backend API, database)
- Admin dashboard for content management
- Email notifications

## Development Phases
1. **Phase 1**: Project setup, basic layout, navigation
2. **Phase 2**: HomePage hero with 3D, status message system
3. **Phase 3**: Portfolio gallery and project detail pages
4. **Phase 4**: About page, CV download setup
5. **Phase 5**: Contact form integration with EmailJS
6. **Phase 6**: Polish, optimization, responsive design refinement
7. **Phase 7**: Deployment and go-live

## Performance Targets
- Lighthouse Performance: 85+
- Core Web Vitals: Good/Excellent
- Initial load time: <3s on 4G
- 3D rendering: 60fps on desktop, graceful degradation on mobile

## Accessibility Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader friendly

---
**Created**: January 28, 2026
**Status**: Initial specification
