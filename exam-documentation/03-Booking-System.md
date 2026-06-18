# Booking System - Kursvælg & Indkøbskurv

## 🛒 Booking System Overblik

Systemet håndterer:
1. **Valg af kurser** på CoursesContent side
2. **Kurv management** (localStorage)
3. **Booking form** med elevantal, email osv
4. **Email sending** via EmailJS

## 📊 Data Struktur

### BookingSelection Type
```typescript
type BookingSelection = Record<string, number>;

// Eksempel:
{
  "focus-html-css": 1,     // 1 HTML/CSS forløb
  "track-beginner": 2,     // 2 beginner tracks
  "focus-javascript": 1,   // 1 JavaScript forløb
}
```

## 🏗️ Booking Storage (booking-storage.ts)

### LocalStorage Keys
```typescript
const BOOKING_STORAGE_KEY = 'nordpixel-booking-cart';
const BOOKING_CART_UPDATED_EVENT = 'nordpixel-booking-cart-updated';
const BOOKING_CART_ATTENTION_EVENT = 'nordpixel-booking-cart-attention';
```

### Læs Kurv fra Storage
```typescript
export function readBookingSelection(allowedIds: string[]): BookingSelection {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as unknown;
    return sanitizeSelection(parsed, new Set(allowedIds));
  } catch {
    return {};
  }
}
```

### Gem Kurv til Storage
```typescript
export function writeBookingSelection(selection: BookingSelection) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(selection));
  window.dispatchEvent(new CustomEvent(BOOKING_CART_UPDATED_EVENT));
}
```

### Tilføj til Kurv
```typescript
export function addSelectionToBookingCart(optionId: string, allowedIds: string[]) {
  const selection = readBookingSelection(allowedIds);
  const next = {
    ...selection,
    [optionId]: (selection[optionId] ?? 0) + 1,
  };

  writeBookingSelection(next);
  window.dispatchEvent(new CustomEvent(BOOKING_CART_ATTENTION_EVENT, { detail: { optionId } }));
  return next;
}
```

### Hent Antal Varer
```typescript
export function getBookingCartCount(allowedIds: string[]): number {
  const selection = readBookingSelection(allowedIds);
  return Object.keys(selection).length;  // Antal unikke kurser
}
```

## 📋 Kursusdata (course-catalog.ts)

### Bookable Options
```typescript
export const BOOKABLE_OPTIONS = [
  {
    id: 'focus-html-css',
    title: { da: 'HTML/CSS forløb', en: 'HTML/CSS course' },
    pricing: {
      basePrice: 5000,
      isByPlanning: false,
      minQuantity: 1,
    },
    // ... mere data
  },
  // ... flere kurser
];
```

### Track Types
```typescript
export const PROGRAM_TRACKS = [
  {
    id: 'track-beginner',
    title: { da: 'Introduktion', en: 'Introduction' },
    targetKeys: ['indskoling', 'mellemtrin'],  // Aldersgrupper
    modules: [/* modul data */],
  },
  // ... flere tracks
];
```

## 🎯 CoursesContent.tsx - Oversigt

### Filter efter Aldersgruppe
```typescript
const targetOptions = [
  { id: 'indskoling', label: 'Indskoling (0-4 klasse)' },
  { id: 'mellemtrin', label: 'Mellemtrin (5-7 klasse)' },
  { id: 'udskoling', label: 'Udskoling (8-9 klasse)' },
  { id: 'gymnasium', label: 'Gymnasium' },
];

const visibleTracks = PROGRAM_TRACKS.filter((track) => {
  const targetMatches = targetFilter === 'all' || track.targetKeys.includes(targetFilter);
  return targetMatches;
});
```

### "Tilføj til Kurv" Button
```typescript
const handleAddToCart = (e: MouseEvent<HTMLButtonElement>, optionId: string) => {
  e.preventDefault();
  
  // Tilføj til kurv
  addSelectionToBookingCart(optionId, bookingOptionIds);
  
  // Åbn kurv prompt
  setIsCartPromptVisible(true);
};
```

## 📝 CoursesBookingContent.tsx - Booking Form

### Form State
```typescript
const [selectedQuantities, setSelectedQuantities] = useState<BookingSelection>({});
const [form, setForm] = useState({
  name: '',
  school: '',
  ean: '',
  email: '',
  phone: '',
  students: '',
  classes: '',
  message: '',
});
```

### Hydration
```typescript
useEffect(() => {
  // Læs kurv fra localStorage
  const selection = readBookingSelection(allowedIds);
  setSelectedQuantities(selection);
  setIsCartHydrated(true);
}, [allowedIds, initialAddId]);
```

### Mængde Update
```typescript
const setQuantity = (optionId: string, quantity: number) => {
  const normalized = Math.max(0, Math.floor(quantity));
  
  if (normalized < 1) {
    // Fjern fra kurv
    const next = { ...selectedQuantities };
    delete next[optionId];
    setSelectedQuantities(next);
  } else {
    // Opdater mængde
    setSelectedQuantities({
      ...selectedQuantities,
      [optionId]: normalized,
    });
  }
};
```

## 📧 Email Sending (EmailJS)

### Formular Submission
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setBookingStatus('sending');

  try {
    // Forbind EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Send email
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: BOOKING_EMAIL,
      from_name: form.name,
      from_email: form.email,
      school: form.school,
      // ... mere form data
    });

    setBookingStatus('success');
  } catch (error) {
    setBookingStatus('send-error');
  }
};
```

## 🔄 Complete Flow: Booking Process

```
1. Bruger på /courses siden
    ↓
2. Klikker "Tilføj til Kurv" på et kursuskort
    ↓
3. addSelectionToBookingCart() opdaterer localStorage
    ↓
4. Kurv-tæller i header opdateres
    ↓
5. Bruger navigerer til /courses/booking
    ↓
6. readBookingSelection() henter varer fra localStorage
    ↓
7. Bruger udfylder navn, email, telefonummer
    ↓
8. Bruger justerer mængder (+ / -)
    ↓
9. Bruger klikker "Send booking"
    ↓
10. Formular valideres
    ↓
11. EmailJS sender email til BOOKING_EMAIL
    ↓
12. Success besked vises
```

## 💾 localStorage Struktur

```json
{
  "nordpixel-booking-cart": {
    "focus-html-css": 1,
    "track-beginner": 2
  }
}
```

## 🎨 Pris-beregning

### Pricing Model
```typescript
type PricingModel = {
  basePrice: number;           // Pris per enhed
  isByPlanning?: boolean;      // "Pris efter aftale"
  minQuantity?: number;        // Min antal
};
```

### Beregn Total
```typescript
const pricingRows = selectedItems.map((option) => {
  const quantity = selectedQuantities[option.id] ?? 0;
  const subtotal = option.pricing.basePrice * quantity;
  
  return {
    title: translate(option.title),
    quantity,
    subtotal,
    isByPlanning: option.pricing.isByPlanning,
  };
});

const total = pricingRows.reduce((sum, row) => sum + row.subtotal, 0);
```

## 🔐 Validering

### Selection Sanitering
```typescript
function sanitizeSelection(raw: unknown, allowedIds: Set<string>): BookingSelection {
  if (!raw || typeof raw !== 'object') {
    return {};
  }

  const next: BookingSelection = {};
  for (const [id, quantity] of Object.entries(raw as Record<string, unknown>)) {
    // Kun tillad kendte kursus IDs
    if (!allowedIds.has(id)) continue;

    // Valider mængde
    const value = typeof quantity === 'number' ? quantity : Number(quantity);
    if (!Number.isFinite(value) || value < 1) continue;

    next[id] = Math.max(1, Math.floor(value));
  }

  return next;
}
```

## 📊 Eksamen Fokus

1. **BookingSelection Type**: Hvad indeholder den?
2. **localStorage Flow**: Hvordan gemmes/læses?
3. **Validering**: Hvordan sikres korrekte data?
4. **Event System**: Hvad gør BOOKING_CART_UPDATED_EVENT?
5. **Form Handling**: Hvordan håndteres form submission?
6. **EmailJS**: Hvordan sendes email?
7. **Hydration**: Hvad betyder det?
