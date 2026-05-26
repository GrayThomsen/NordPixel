'use client';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { Minus, Plus, Send } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getCoursesCopy } from './courses/course-copy';
import { BOOKABLE_OPTIONS, BOOKING_EMAIL } from './courses/course-catalog';
import { addSelectionToBookingCart, readBookingSelection, writeBookingSelection, type BookingSelection } from './courses/booking-storage';
import { type LocalizedText } from './courses/course-types';

type CoursesBookingContentProps = {
  initialAddId?: string;
};

export function CoursesBookingContent({ initialAddId }: CoursesBookingContentProps) {
  const { locale } = useLanguage();
  const copy = getCoursesCopy(locale);

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

    writeBookingSelection(selectedQuantities);
  }, [isCartHydrated, selectedQuantities]);

  const setQuantity = (optionId: string, quantity: number) => {
    if (!Number.isFinite(quantity)) {
      return;
    }

    setBookingStatus('idle');
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

  const submitBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedItems.length) {
      setBookingStatus('selection-error');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const ownerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
      to_email: BOOKING_EMAIL,
      locale,
    };

    setBookingStatus('sending');

    try {
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
      setBookingStatus('send-error');
    }
  };

  return (
    <main className="bookingCartPage">
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
        <section className="bookingCartPageTopSummary" aria-label={copy.cartSummaryTopTitle}>
          <p className="bookingCartPageTopSummaryTitle">{copy.cartSummaryTopTitle}</p>
          <p className="bookingCartPageTopSummaryHint">{copy.cartSummaryTopHint}</p>
          <p className="bookingCartPageTopSummaryCount">
            {selectedItems.length} {copy.bookingSummaryCountUnit}
          </p>
        </section>
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
                <span>{copy.studentsLabel}</span>
                <input
                  type="number"
                  min={0}
                  value={form.students}
                  onChange={(event) => setForm((prev) => ({ ...prev, students: event.target.value }))}
                  placeholder={copy.studentsPlaceholder}
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
    </main>
  );
}
