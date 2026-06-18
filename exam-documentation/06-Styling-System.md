# Styling System - Design Tokens & CSS

## 🎨 Styling Arkitektur

NordPixel bruger:
1. **Design Tokens** (CSS variabler)
2. **Tailwind CSS** (utility classes)
3. **Custom CSS** (globals.css)
4. **Responsive Design** (mobile-first)

---

## 🎯 Design Tokens (design-tokens.css)

### Farver

```css
:root {
  /* Brand Colors */
  --brand-navy: #0f1f22;           /* Mørk blå */
  --brand-orange: #ff8c42;         /* Orange */
  --brand-orange-soft: #fff5ef;    /* Blød orange */
  
  /* Text Colors */
  --text-primary: #1a1a1a;         /* Hovedtekst */
  --text-muted: #666666;           /* Dæmpet tekst */
  
  /* Surface Colors */
  --surface-page: #ffffff;         /* Baggrund */
  --surface-muted: #f5f5f5;        /* Dæmpet baggrund */
  --surface-panel: #e8e8e8;        /* Panel baggrund */
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-heading: 'Tomorrow', 'Arial Black', sans-serif;
  --font-body: 'Google Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  
  /* Font Sizes */
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  
  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

### Spacing

```css
:root {
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
}
```

---

## 🌈 Tailwind Config

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      // Brand colors defined in design-tokens.css (CSS custom properties)
      // Use var(--brand-*) instead of Tailwind color utilities
      fontFamily: {
        'heading': ['Tomorrow', 'sans-serif'],
        'body': ['Google Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
};
```

---

## 📝 Custom CSS Structure (globals.css)

### 1. Reset & Base Styles
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: var(--font-body);
  line-height: 1.5;
  color: var(--text-primary);
}
```

### 2. Typography Utilities
```css
h1 {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: clamp(1.25rem, 4vw, 2.25rem);
  font-weight: var(--font-weight-bold);
}

p {
  line-height: 1.6;
  color: var(--text-primary);
}
```

### 3. Component Utilities
```css
/* Links */
a {
  color: var(--brand-orange);
  text-decoration: none;
  transition: color 200ms ease-in-out;
}

a:hover {
  color: var(--brand-navy);
}

/* Buttons */
button {
  font-family: var(--font-body);
  padding: var(--space-md) var(--space-lg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

---

## 📐 Responsive Design

### Breakpoints (Tailwind)
```
xs: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Container Queries (Modern)
```css
.courseCard {
  @container (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Fluid Typography (clamp)
```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* Min: 1.5rem, Preferred: 5vw, Max: 3rem */
}

.landingLead {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}
```

---

## 🌙 Dark Mode Support

### CSS Custom Properties
```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f5f5f5;
    --surface-page: #1a1a1a;
  }
}
```

### Icon Fallbacks
```typescript
<picture>
  <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
  <img src="/logo-light.png" alt="Logo" />
</picture>
```

---

## 🎭 CSS Grid & Flexbox

### Hero Section (CSS Grid)
```css
.landingHeroGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

@media (max-width: 768px) {
  .landingHeroGrid {
    grid-template-columns: 1fr;
  }
}
```

### Navigation (Flexbox)
```css
.siteNav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
```

---

## ✨ Animations

### Keyframes
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### Usage
```css
.landingHeroTitle {
  animation: fadeIn 0.6s ease-in-out;
}

.courseCard {
  animation: slideUp 0.6s ease-out;
}
```

---

## 🌈 Color Mixing (Modern CSS)

```css
.text-muted {
  color: color-mix(in oklab, var(--text-primary) 78%, var(--text-muted) 22%);
}

.surface-soft {
  background: color-mix(in oklab, var(--surface-page) 88%, white 12%);
}
```

---

## 📦 Component Classes

### Landing Hero
```css
.landingHero {
  padding: clamp(1.2rem, 4vw, 2rem);
  background: linear-gradient(135deg, var(--surface-page), var(--surface-muted));
}

.landingHeroTitle {
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: 1.2;
  color: var(--brand-navy);
}
```

### Course Cards
```css
.courseCard {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  background: var(--surface-muted);
  transition: all 200ms ease-in-out;
}

.courseCard:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

### WebLab Editor
```css
.editorPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  height: 100vh;
}

.editorPane {
  border-right: 1px solid var(--surface-panel);
  background: var(--surface-page);
}

.previewPane {
  background: white;
  overflow: hidden;
}
```

---

## 🎯 Design System Principles

1. **Consistency**: Brug design tokens overalt
2. **Hierarchy**: Brug font sizes og weights for at skabe struktur
3. **Whitespace**: Brug spacing tokens for konsistent afstand
4. **Color**: Max 3-4 farver + neutrale farver
5. **Typography**: Max 2 font families
6. **Responsiveness**: Mobile-first approach

---

## 📊 Styling Eksamen Fokus

1. **Design Tokens**: Hvad gemmes i CSS variabler?
2. **Tailwind**: Hvordan extends vi config?
3. **Typography**: Hvilke font families bruges?
4. **Breakpoints**: Hvad er mobile/tablet/desktop?
5. **CSS Grid**: Hvordan bruges den i layout?
6. **Animations**: Hvilke transitions bruges?
7. **Color Mixing**: Hvad gør `color-mix()`?
8. **Responsiveness**: Mobile-first eller desktop-first?
