# NordPixel Theme System

## 📁 Asset Structure

```
src/assets/
├── images/
│   ├── logos/              # Logo files
│   │   ├── logo-light.svg  # Light mode logo
│   │   ├── logo-dark.svg   # Dark mode logo
│   │   ├── n-mark.svg      # N icon (mobile/shorthand)
│   │   └── favicon.ico
│   ├── branding/           # Brand name variations
│   │   ├── nordpixel-light.svg
│   │   ├── nordpixel-dark.svg
│   │   └── [other variations]
│   └── figures/            # 3D assets and mascots
│       └── orange-cube/    # Orange cube mascot components
├── data/
├── styles/
```

## 🎨 Color Palette

### Dark Mode (Default)
- **Gradient Dark**: `#00181D`
- **Gradient Darker**: `#000E11`
- **Accent Orange**: `#FBB03B` (Primary interactive color)
- **Neutral Gray**: `#DFDFD` (Reduced white, used in special contexts)
- **Text**: `#e6edf3` (Light gray)

### Light Mode
- **Background**: `#ffffff`
- **Text**: `#000000`
- **Accent Orange**: `#FBB03B` (Same across modes)

## 🔤 Typography

- **Headings**: Tomorrow (Bold, 700 weight)
  - h1: 3rem → 3.75rem (md breakpoint)
  - h2: 2.25rem → 3rem
  - h3: 1.5rem → 1.875rem
  - h4: 1.25rem → 1.5rem

- **Body**: IBM Plex Sans Hebrew (300-400 weight)
- **Size Base**: 1rem with 1.5 line height

## 🧊 Orange Cube Mascot

### 3D Version (Three.js)
```typescript
import { OrangeCube3D } from '@components';

<OrangeCube3D size={200} speed={0.005} className="my-component" />
```

**Props:**
- `size`: Canvas size in pixels (default: 200)
- `speed`: Rotation speed (default: 0.005)
- `className`: Custom CSS classes

### 2D Version (CSS Fallback)
```typescript
import { OrangeCube2D } from '@components';

<OrangeCube2D size={150} className="my-component" />
```

**Props:**
- `size`: Cube size in pixels (default: 150)
- `className`: Custom CSS classes

## 🔗 Interactive Elements

All links and interactive elements use the **Accent Orange** (`#FBB03B`):
- Links have smooth transitions
- Hover state: 80% opacity
- Focus state: Orange outline with 2px offset
- Buttons: Orange background on hover

## 🌓 Dark/Light Mode Toggle

The site uses `body.light` class for theme switching:

```typescript
// Dark mode (default)
document.body.classList.remove('light');

// Light mode
document.body.classList.add('light');
```

All color transitions are smooth (0.3s ease).

## 📱 Mobile Logo

Use the **N mark** logo variation for:
- Favicon
- Mobile navigation
- Shorthand contexts
- Tab indicators

---

**Note**: "NordPixel Production" is reserved for watermarks and not displayed on the site.
