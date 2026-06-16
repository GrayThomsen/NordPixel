'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, Clock3, Layers3, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { type MouseEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { courseLanguage } from '../../context/courseLanguage';
import { BOOKABLE_OPTIONS, FOCUS_COURSES, PROGRAM_TRACKS } from './courses/course-catalog';
import { addSelectionToBookingCart } from './courses/booking-storage';
import { type LocalizedText } from './courses/course-types';

export function CoursesContent() {
  const { locale } = useLanguage();
  const router = useRouter();
  const [targetFilter, setTargetFilter] = useState('all');
  const [isCartPromptVisible, setIsCartPromptVisible] = useState(false);

  const translate = (value: LocalizedText) => value[locale];
  const bookingOptionIds = useMemo(() => BOOKABLE_OPTIONS.map((option) => option.id), []);
  const visibleTracks = useMemo(
    () =>
      PROGRAM_TRACKS.filter((track) => {
        const targetMatches = targetFilter === 'all' || track.targetKeys.includes(targetFilter);
        return targetMatches;
      }),
    [targetFilter],
  );

  const visibleFocusCourses = useMemo(
    () =>
      FOCUS_COURSES.filter((course) => {
        const targetMatches = targetFilter === 'all' || course.targetKeys.includes(targetFilter);
        return targetMatches;
      }),
    [targetFilter],
  );

  const courseCopy = courseLanguage[locale];
  const copy = courseCopy.page;

  const targetOptions = [
    { id: 'indskoling', label: copy.filterTargetIndskoling },
    { id: 'mellemtrin', label: copy.filterTargetMellemtrin },
    { id: 'udskoling', label: copy.filterTargetUdskoling },
    { id: 'gymnasium', label: copy.filterTargetGymnasium },
  ];

  const animateBookButton = (button: HTMLButtonElement) => {
    button.classList.remove('isClicked');
    // Forced reflow for the animation to restart.
    void button.offsetWidth;
    button.classList.add('isClicked');
    window.setTimeout(() => {
      button.classList.remove('isClicked');
    }, 260);
  };

  const openBookingCart = (initialId: string) => {
    addSelectionToBookingCart(initialId, bookingOptionIds);
    setIsCartPromptVisible(true);
  };

  const handleBookClick = (initialId: string, event: MouseEvent<HTMLButtonElement>) => {
    animateBookButton(event.currentTarget);
    openBookingCart(initialId);
  };

  const toggleCardFromContainerClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest('button, a, input, select, textarea, summary')) {
      return;
    }

    const details = event.currentTarget.querySelector('[data-card-details]');
    if (details instanceof HTMLDetailsElement) {
      details.open = !details.open;
    }
  };

  const cartPromptCopy = courseCopy.coursesCartPrompt;

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === 'da' ? 'da-DK' : 'en-US', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    });

  const getEstimatedPrice = (basePrice: number) => basePrice;

  return (
    <div className="coursesPage">
      <div className="coursesIntroStack">
        <section className="coursesUvm" aria-label={copy.uvmIntroTitle}>
          <h1>{copy.uvmIntroTitle}</h1>
          <p>{copy.uvmIntroText}</p>
        </section>

        <section className="coursesCustomTrack" aria-label={copy.customTrackTitle}>
          <div>
            <h3>{copy.customTrackTitle}</h3>
            <p>{copy.customTrackText}</p>
            <p className="coursesCustomTrackOffer">{copy.customTrackOfferLine}</p>
          </div>
          <button
            type="button"
            className="coursesCustomTrackButton"
            onClick={(event) => handleBookClick('mit-eget-forlob', event)}
          >
            {copy.customTrackButton}
          </button>
        </section>
      </div>

      <section className="coursesSection coursesSectionTracks" aria-label={copy.filterTitle}>
        <header className="coursesSectionHeader">
          <div className="coursesFiltersHeading">
            <h2>{copy.kindTrack}</h2>
          </div>
          <p className="coursesPricingIntro">{copy.pricingBundleTitle}: {copy.pricingBundleText}</p>

          <div className="coursesFilters">
            <label className="coursesFiltersField">
              <span>{copy.filterTargetLabel}</span>
              <select value={targetFilter} onChange={(event) => setTargetFilter(event.target.value)}>
                <option value="all">{copy.filterAllTargets}</option>
                {targetOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" className="coursesFiltersReset" onClick={() => {
              setTargetFilter('all');
            }}>
              {copy.filterReset}
            </button>
          </div>

          <p className="coursesFiltersOverview">
            {visibleTracks.length} {copy.filterTracksResult} · {visibleFocusCourses.length} {copy.filterFocusResult}
          </p>
        </header>

        <div className="coursesTimelines">
          {visibleTracks.length ? visibleTracks.map((track, index) => (
            <article
              key={track.id}
              className="timelineTrack"
              aria-label={translate(track.title)}
              onClick={toggleCardFromContainerClick}
            >
              {/* Left content column: compact header + expanded details + sticky CTA. */}
              <div className="timelineTrackMain">
                {/* Single source of truth for collapsed/expanded track state. */}
                <details className="timelineTrackDetails" data-card-details>
                  {/* Compact summary shown in collapsed state. */}
                  <summary className="timelineTrackDetailsSummary">
                    <div className="timelineTrackSummaryHead">
                      <div>
                        <h3>{translate(track.title)}</h3>
                        <p className="timelineTrackSummaryLine">{translate(track.summary)}</p>
                        <p className="timelineTrackCompactMeta">
                          {track.timeline.length} {locale === 'da' ? 'moduler' : 'modules'}
                        </p>
                      </div>
                    </div>
                  </summary>
                  {/* Full details shown when the track is expanded. */}
                  <div className="timelineTrackContent">
                    <p className="timelineTrackSummary">{translate(track.summary)}</p>

                    <ul className="timelineTrackMeta" aria-label={courseCopy.courses.programsTitle}>
                      <li>
                        <Clock3 aria-hidden="true" />
                        <div>
                          <p>{courseCopy.courses.durationLabel}</p>
                          <span>{translate(track.duration)}</span>
                        </div>
                      </li>
                      <li>
                        <Users aria-hidden="true" />
                        <div>
                          <p>{courseCopy.courses.targetGroupLabel}</p>
                          <span>{translate(track.targetGroup)}</span>
                        </div>
                      </li>
                      <li>
                        <Layers3 aria-hidden="true" />
                        <div>
                          <p>{courseCopy.courses.subjectsLabel}</p>
                          <span>{translate(track.subjects)}</span>
                        </div>
                      </li>
                    </ul>

                    <div className="timelineTrackPricing" aria-label={copy.pricingEstimatedLabel}>
                      <p>{copy.pricingEstimatedLabel}</p>
                      <strong>{formatPrice(getEstimatedPrice(track.pricing.basePrice))}</strong>
                    </div>

                    <div className="timelineTrackAudienceNote">
                      <p>
                        {locale === 'da'
                          ? 'Et tydeligt og praksisnært forløb for lærere og ledelser, der ønsker en rolig ramme, faglig progression og et produkt, der er let at forankre i skolens hverdag.'
                          : 'A clear, practice-oriented track for teachers and school leadership who want a calm structure, strong progression, and an outcome that is easy to anchor in everyday school life.'}
                      </p>
                    </div>

                    <div className="timelineTrackTimelineDetails">
                      <div className="timelineTrackDetailsSummary timelineTrackDetailsSummarySubtle">
                        <span>{courseCopy.courses.timelineLabel}</span>
                        <em className="timelineTrackSectionCount">{track.timeline.length} {locale === 'da' ? 'moduler' : 'modules'}</em>
                      </div>
                      <div className="timelineTrackTimeline">
                        <ol>
                          {track.timeline.map((step) => (
                            <li key={`${track.id}-${translate(step.module)}`}>
                              <p>{translate(step.module)}</p>
                              <strong>{translate(step.duration)}</strong>
                              <span>{translate(step.focus)}</span>
                              <em>{translate(step.workload)}</em>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </details>
                <div className="timelineTrackActions">
                  <button type="button" className="timelineTrackBookButton" onClick={(event) => handleBookClick(track.id, event)}>
                    {copy.bookingButton}
                  </button>
                  <div className="cardToggleIndicator" aria-hidden="true">
                    <ChevronDown className="cardToggleIndicatorIcon" />
                  </div>
                </div>
              </div>
              {/* Right media column spans full card height in both states. */}
              <figure className="timelineTrackMedia timelineTrackMediaPreview">
                <Image
                  src={track.image}
                  alt={translate(track.imageAlt)}
                  fill
                  sizes="(max-width: 880px) 38vw, 320px"
                  priority={index === 0}
                />
              </figure>
            </article>
          )) : (
            <div className="coursesFiltersEmpty">
              <p>{copy.filterNoResults}</p>
              <button
                type="button"
                className="coursesFiltersReset"
                onClick={() => {
                  setTargetFilter('all');
                }}
              >
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="coursesSection coursesSectionFocus" aria-label={courseCopy.courses.focusTitle}>
        <header className="coursesSectionHeader">
          <h2>{courseCopy.courses.focusTitle}</h2>
          <p>{courseCopy.courses.focusIntro}</p>
        </header>

        <div className="focusGrid">
          {visibleFocusCourses.length ? visibleFocusCourses.map((course) => (
            <article key={course.id} className="focusItem" onClick={toggleCardFromContainerClick}>
              {/* Single source of truth for collapsed/expanded focus card state. */}
              <details className="focusItemDetails" data-card-details>
                {/* Compact summary shown in collapsed state. */}
                <summary className="focusItemSummary">
                  <div>
                    <h3>{translate(course.title)}</h3>
                    <p className="focusItemSummaryLine">
                      {translate(course.duration)}
                    </p>
                    <p className="focusItemSummaryLine">{translate(course.description)}</p>
                  </div>
                </summary>
                {/* Full details shown when the focus card is expanded. */}
                <div className="focusItemBody">
                  <p>{translate(course.description)}</p>
                  <div className="focusItemPricing" aria-label={copy.pricingEstimatedLabel}>
                    <span>{copy.pricingEstimatedLabel}</span>
                    <strong>{formatPrice(getEstimatedPrice(course.pricing.basePrice))}</strong>
                  </div>
                  <ul className="focusItemMeta">
                    <li>
                      <span>{courseCopy.courses.durationLabel}</span>
                      <strong>{translate(course.duration)}</strong>
                    </li>
                    <li>
                      <span>{courseCopy.courses.targetGroupLabel}</span>
                      <strong>{translate(course.audience)}</strong>
                    </li>
                  </ul>
                  <p className="focusItemHint">{translate(course.bookingHint)}</p>
                </div>
              </details>

              <div className="timelineTrackActions">
                <button type="button" className="timelineTrackBookButton" onClick={(event) => handleBookClick(course.id, event)}>
                  {copy.bookingButton}
                </button>
                <div className="cardToggleIndicator" aria-hidden="true">
                  <ChevronDown className="cardToggleIndicatorIcon" />
                </div>
              </div>
            </article>
          )) : (
            <div className="coursesFiltersEmpty">
              <p>{copy.filterNoResults}</p>
              <button type="button" className="coursesFiltersReset" onClick={() => {
                setTargetFilter('all');
              }}>
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>

      {isCartPromptVisible ? (
        <div className="coursesCartPrompt" role="status" aria-live="polite">
          <button
            type="button"
            className="coursesCartPromptClose"
            aria-label={cartPromptCopy.close}
            onClick={() => setIsCartPromptVisible(false)}
          >
            x
          </button>
          <p className="coursesCartPromptTitle">{cartPromptCopy.title}</p>
          <p className="coursesCartPromptText">{cartPromptCopy.text}</p>
          <div className="coursesCartPromptActions">
            <button
              type="button"
              className="coursesCartPromptPrimary"
              onClick={() => {
                setIsCartPromptVisible(false);
                router.push('/courses/booking');
              }}
            >
              {cartPromptCopy.goToCart}
            </button>
            <button
              type="button"
              className="coursesCartPromptSecondary"
              onClick={() => setIsCartPromptVisible(false)}
            >
              {cartPromptCopy.continueBrowsing}
            </button>
          </div>
        </div>
      ) : null}
      <p className="coursesPriceDisclaimer">{copy.pricingTransportNote} {copy.pricingEstimateDisclaimer}</p>
    </div>
  );
}
