'use client';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { Minus, Plus, Send } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { courseLanguage } from '../../context/courseLanguage';
import { BOOKABLE_OPTIONS, BOOKING_EMAIL } from './courses/course-catalog';
import { addSelectionToBookingCart, readBookingSelection, writeBookingSelection, type BookingSelection } from './courses/booking-storage';
import { type LocalizedText } from './courses/course-types';

type CoursesBookingContentProps = {
  initialAddId?: string;
};

export function CoursesBookingContent({ initialAddId }: CoursesBookingContentProps) {
  const { locale } = useLanguage();
  const copy = courseLanguage[locale].page;

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
  const [isCartHydrated, setIsCartHydrated] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'selection-error' | 'config-error' | 'send-error' | 'sending' | 'success'>('idle');

  const translate = (value: LocalizedText) => value[locale];
  const allowedIds = useMemo(() => BOOKABLE_OPTIONS.map((option) => option.id), []);

  useEffect(() => {
    // First render hydrates cart from localStorage, optionally adding one item from URL.
    const addId = initialAddId;
    const hasValidAddId = addId ? allowedIds.includes(addId) : false;

    if (hasValidAddId && addId) {
      setSelectedQuantities(addSelectionToBookingCart(addId, allowedIds));
      setIsCartHydrated(true);
      return;
    }

    setSelectedQuantities(readBookingSelection(allowedIds));
    setIsCartHydrated(true);
  }, [allowedIds, initialAddId]);

  useEffect(() => {
    if (!isCartHydrated) {
      return;
    }

    // Persist every cart change after hydration, so reloads keep the same selection.
    writeBookingSelection(selectedQuantities);
  }, [isCartHydrated, selectedQuantities]);

  const setQuantity = (optionId: string, quantity: number) => {
    if (!Number.isFinite(quantity)) {
      return;
    }

    setBookingStatus('idle');
    // Normalize all user input to whole positive numbers and remove zero-quantity rows.
    setSelectedQuantities((prev) => {
      const normalized = Math.max(0, Math.floor(quantity));
      if (normalized < 1) {
        const next = { ...prev };
        delete next[optionId];
        return next;
      }

      return {
        ...prev,
        [optionId]: normalized,
      };
    });
  };

  const selectedItems = BOOKABLE_OPTIONS.filter((option) => selectedQuantities[option.id]);
  const bookingHeroReminders = [copy.cartPageReminder1, copy.cartPageReminder2, copy.cartPageReminder3].filter(Boolean);

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === 'da' ? 'da-DK' : 'en-US', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    });

  const pricingRows = selectedItems.map((option) => {
    const quantity = selectedQuantities[option.id] ?? 0;
    const subtotal = option.pricing.basePrice * quantity;
    return {
      id: option.id,
      title: translate(option.title),
      quantity,
      basePrice: option.pricing.basePrice,
      isByPlanning: option.pricing.isByPlanning ?? false,
      subtotal,
    };
  });

  const subtotalPrice = pricingRows.reduce((total, row) => total + row.subtotal, 0);
  const hasPlanningPricedItems = pricingRows.some((row) => row.isByPlanning);

  // Build plain text pricing lines for the booking email template.
  const pricingBreakdown = pricingRows
    .map(
      (row) =>
        row.isByPlanning
          ? `${row.title} x${row.quantity}: ${copy.pricingByPlanningShort}`
          : `${row.title} x${row.quantity} (${formatPrice(row.basePrice)}) = ${formatPrice(row.subtotal)}`,
    )
    .join('\n');

  const submitBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Booking requires at least one selected course before sending contact details.
    if (!selectedItems.length) {
      setBookingStatus('selection-error');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const ownerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Fail fast when EmailJS runtime configuration is missing.
    if (!serviceId || !ownerTemplateId || !publicKey) {
      setBookingStatus('config-error');
      return;
    }

    const chosenLines = selectedItems
      .map((option) => {
        const kind = option.kind === 'track' ? copy.kindTrack : copy.kindFocus;
        return `${kind}: ${translate(option.title)} x${selectedQuantities[option.id]}`;
      })
      .join('\n');

    const selectedCourses = selectedItems
      .map((option) => `${translate(option.title)} x${selectedQuantities[option.id]}`)
      .join(', ');

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      school: form.school,
      ean: form.ean || '-',
      phone: form.phone || '-',
      students: form.students || '-',
      classes: form.classes || '-',
      course: selectedCourses,
      message: form.message || '-',
      booking_lines: chosenLines,
      pricing_breakdown: pricingBreakdown || '-',
      subtotal_price: formatPrice(subtotalPrice),
      discount_label: copy.bookingDiscountTierText,
      discount_note: copy.pricingBundleText,
      total_price: formatPrice(subtotalPrice),
      to_email: BOOKING_EMAIL,
      locale,
    };

    setBookingStatus('sending');

    try {
      // Send one owner-facing booking email containing both selections and contact form data.
      await emailjs.send(serviceId, ownerTemplateId, templateParams, { publicKey });
      setBookingStatus('success');

      setSelectedQuantities({});
      setForm({
        name: '',
        school: '',
        ean: '',
        email: '',
        phone: '',
        students: '',
        classes: '',
        message: '',
      });
      writeBookingSelection({});
    } catch {
      // Keep user input in place on failure so they can retry without re-entering everything.
      setBookingStatus('send-error');
    }
  };

  return (
    <div className="bookingCartPage">
      <header className="bookingCartPageHero">
        <div className="bookingCartPageHeroMain">
          <h1>{copy.cartPageTitle}</h1>
          <p>{copy.cartPageIntro}</p>
          {bookingHeroReminders.map((reminder) => (
            <p key={reminder}>{reminder}</p>
          ))}
          <Link href="/courses" className="bookingCartPageBackLink">
            {copy.cartBackToCourses}
          </Link>
        </div>
      </header>

      <form className="bookingCart" onSubmit={submitBooking}>
        <section className="bookingCartCatalog" aria-label={copy.cartCatalogTitle}>
          <header className="bookingCartSectionHeader">
            <h2>{copy.cartCatalogTitle}</h2>
            <p>{copy.cartCatalogHint}</p>
          </header>

          <div className="bookingCatalogGrid">
            {BOOKABLE_OPTIONS.map((option) => {
              const quantity = selectedQuantities[option.id] ?? 0;
              const isSelected = quantity > 0;
              const itemKindClass = option.kind === 'track' ? 'bookingItemTrack' : 'bookingItemFocus';
              return (
                <article key={option.id} className={`bookingItem ${itemKindClass} ${isSelected ? 'isSelected' : ''}`}>
                  <h3>{translate(option.title)}</h3>

                  <p className="bookingItemPrice">
                    {option.pricing.isByPlanning
                      ? `${copy.pricingEstimatedLabel}: ${copy.pricingByPlanningShort}`
                      : `${copy.pricingEstimatedLabel}: ${formatPrice(option.pricing.basePrice)}`}
                  </p>

                  <p className="bookingItemQtyLabel">{copy.quantityLabel}</p>

                  <div className="bookingItemQty" role="group" aria-label={`${copy.quantityLabel} ${translate(option.title)}`}>
                    <button
                      type="button"
                      onClick={() => setQuantity(option.id, quantity - 1)}
                      disabled={quantity <= 0}
                      aria-label={`${copy.quantityDecrease} ${translate(option.title)}`}
                    >
                      <Minus aria-hidden="true" />
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={quantity}
                      onChange={(event) => setQuantity(option.id, Number(event.target.value))}
                      onFocus={(event) => event.target.select()}
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(option.id, quantity + 1)}
                      aria-label={`${copy.quantityIncrease} ${translate(option.title)}`}
                    >
                      <Plus aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="bookingCartSidebar">
          <section className="bookingSummary" aria-label={copy.modalSelectionLabel}>
            <div className="bookingSummaryHeader">
              <div>
                <p>{copy.modalSelectionLabel}</p>
                <span>{copy.modalSelectionHint}</span>
              </div>
              <p className="bookingSummaryCount">
                {selectedItems.length} {copy.bookingSummaryCountUnit}
              </p>
            </div>

            {selectedItems.length ? (
              <div className="bookingSummaryChips">
                {selectedItems.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className="bookingSummaryChip"
                    onClick={() => setQuantity(option.id, 0)}
                  >
                    <span>{translate(option.title)}</span>
                    <strong>{selectedQuantities[option.id]}x</strong>
                    <em>{copy.removeSelection}</em>
                  </button>
                ))}
              </div>
            ) : (
              <p className="bookingSummaryEmpty">{copy.sectionEmpty}</p>
            )}

            {selectedItems.length ? (
              <div className="bookingSummaryPricing" aria-label={copy.bookingPricingTitle}>
                <p className="bookingSummaryPricingTitle">{copy.bookingPricingTitle}</p>
                {pricingRows.map((row) => (
                  <p key={row.id} className="bookingSummaryPricingLine">
                    <span>{row.title} x{row.quantity}</span>
                    <strong>{row.isByPlanning ? copy.pricingByPlanningShort : formatPrice(row.subtotal)}</strong>
                  </p>
                ))}
                <p className="bookingSummaryPricingMeta">{copy.pricingBundleText}</p>
                <p className="bookingSummaryPricingLine bookingSummaryPricingTotal">
                  <span>{copy.bookingSubtotalLabel}</span>
                  <strong>{hasPlanningPricedItems ? `${formatPrice(subtotalPrice)} + ${copy.pricingByPlanningShort}` : formatPrice(subtotalPrice)}</strong>
                </p>
                <p className="bookingSummaryPricingLine bookingSummaryPricingDiscount">
                  <span>{copy.bookingDiscountLabel}</span>
                  <strong>{copy.bookingDiscountTierText}</strong>
                </p>
              </div>
            ) : null}
          </section>

          <section className="bookingContact" aria-label={copy.cartContactTitle}>
            <p className="bookingFormSectionLabel">{copy.cartContactTitle}</p>
            <div className="bookingFields">
              <label>
                <span>{copy.nameLabel}</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  required
                />
              </label>
              <label>
                <span>{copy.schoolLabel}</span>
                <input
                  type="text"
                  value={form.school}
                  onChange={(event) => setForm((prev) => ({ ...prev, school: event.target.value }))}
                  required
                />
              </label>
              <label>
                <span>{copy.eanLabel}</span>
                <input
                  type="text"
                  value={form.ean}
                  onChange={(event) => setForm((prev) => ({ ...prev, ean: event.target.value }))}
                  placeholder={copy.eanPlaceholder}
                />
              </label>
              <label>
                <span>{copy.emailLabel}</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                />
              </label>
              <label>
                <span>{copy.phoneLabel}</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder={copy.phonePlaceholder}
                  required
                />
              </label>
              <label>
                <span>{copy.classesLabel}</span>
                <input
                  type="number"
                  min={0}
                  value={form.classes}
                  onChange={(event) => setForm((prev) => ({ ...prev, classes: event.target.value }))}
                  placeholder={copy.classesPlaceholder}
                />
              </label>
              <label>
                <span>{copy.studentsLabel}</span>
                <input
                  type="number"
                  min={0}
                  value={form.students}
                  onChange={(event) => setForm((prev) => ({ ...prev, students: event.target.value }))}
                  placeholder={copy.studentsPlaceholder}
                />
              </label>
              <label className="bookingFieldFullRow">
                <span>{copy.messageLabel}</span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder={copy.messagePlaceholder}
                  rows={4}
                />
              </label>
            </div>

            {bookingStatus === 'selection-error' ? <p className="bookingFormError">{copy.selectError}</p> : null}
            {bookingStatus === 'config-error' ? <p className="bookingFormError">{copy.configError}</p> : null}
            {bookingStatus === 'send-error' ? <p className="bookingFormError">{copy.sendError}</p> : null}
            {bookingStatus === 'success' ? <p className="bookingFormSuccess">{copy.sendSuccess}</p> : null}

            <button type="submit" className="bookingFormSubmit" disabled={bookingStatus === 'sending'}>
              <Send aria-hidden="true" />
              {bookingStatus === 'sending' ? copy.submitSendingLabel : copy.submitLabel}
            </button>
          </section>
        </aside>
      </form>
    </div>
  );
}
