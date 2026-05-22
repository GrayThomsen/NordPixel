export const BOOKING_STORAGE_KEY = 'nordpixel-booking-cart';
export const BOOKING_CART_UPDATED_EVENT = 'nordpixel-booking-cart-updated';

export type BookingSelection = Record<string, number>;

function sanitizeSelection(raw: unknown, allowedIds: Set<string>): BookingSelection {
  if (!raw || typeof raw !== 'object') {
    return {};
  }

  const next: BookingSelection = {};
  for (const [id, quantity] of Object.entries(raw as Record<string, unknown>)) {
    if (!allowedIds.has(id)) {
      continue;
    }

    const value = typeof quantity === 'number' ? quantity : Number(quantity);
    if (!Number.isFinite(value) || value < 1) {
      continue;
    }

    next[id] = Math.max(1, Math.floor(value));
  }

  return next;
}

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

export function writeBookingSelection(selection: BookingSelection) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(selection));
  window.dispatchEvent(new CustomEvent(BOOKING_CART_UPDATED_EVENT));
}

export function addSelectionToBookingCart(optionId: string, allowedIds: string[]) {
  const selection = readBookingSelection(allowedIds);
  const next = {
    ...selection,
    [optionId]: selection[optionId] ?? 1,
  };

  writeBookingSelection(next);
  return next;
}

export function getBookingCartCount(allowedIds: string[]): number {
  const selection = readBookingSelection(allowedIds);
  return Object.keys(selection).length;
}
