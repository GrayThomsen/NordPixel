'use client';

import Image from 'next/image';
import { Clock3, Layers3, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getCoursesCopy } from './courses/course-copy';
import { BOOKABLE_OPTIONS, FOCUS_COURSES, PROGRAM_TRACKS } from './courses/course-catalog';
import { addSelectionToBookingCart, BOOKING_TAB_TARGET } from './courses/booking-storage';
import { type LocalizedText } from './courses/course-types';

export function CoursesContent() {
  const { dictionary, locale } = useLanguage();
  const [subjectQuery, setSubjectQuery] = useState('');
  const [targetFilter, setTargetFilter] = useState('all');

  const translate = (value: LocalizedText) => value[locale];
  const bookingOptionIds = useMemo(() => BOOKABLE_OPTIONS.map((option) => option.id), []);
  const visibleTracks = useMemo(
    () =>
      PROGRAM_TRACKS.filter((track) => {
        const subjectMatches =
          !subjectQuery ||
          [track.title.da, track.title.en, track.summary.da, track.summary.en, track.subjects.da, track.subjects.en]
            .join(' ')
            .toLowerCase()
            .includes(subjectQuery.toLowerCase());
        const targetMatches = targetFilter === 'all' || track.targetKeys.includes(targetFilter);
        return subjectMatches && targetMatches;
      }),
    [subjectQuery, targetFilter],
  );

  const visibleFocusCourses = useMemo(
    () =>
      FOCUS_COURSES.filter((course) => {
        const searchSpace = [course.title.da, course.title.en, course.description.da, course.description.en, course.audience.da, course.audience.en, course.bookingHint.da, course.bookingHint.en]
          .join(' ')
          .toLowerCase();
        const subjectMatches = !subjectQuery || searchSpace.includes(subjectQuery.toLowerCase());
        const targetMatches = targetFilter === 'all' || course.targetKeys.includes(targetFilter);
        return subjectMatches && targetMatches;
      }),
    [subjectQuery, targetFilter],
  );

  const copy = getCoursesCopy(locale);

  const targetOptions = [
    { id: 'indskoling', label: copy.filterTargetIndskoling },
    { id: 'mellemtrin', label: copy.filterTargetMellemtrin },
    { id: 'udskoling', label: copy.filterTargetUdskoling },
    { id: 'gymnasium', label: copy.filterTargetGymnasium },
  ];

  const openBookingCart = (initialId: string) => {
    addSelectionToBookingCart(initialId, bookingOptionIds);
    const bookingUrl = `/courses/booking?add=${encodeURIComponent(initialId)}&t=${Date.now()}`;
    const newTab = window.open(bookingUrl, BOOKING_TAB_TARGET);

    if (!newTab) {
      window.location.href = bookingUrl;
    }
  };

  return (
    <main className="courses-page">
      <section className="courses-page__hero">
        <h1>{dictionary.courses.title}</h1>
        <p>{dictionary.courses.intro}</p>
      </section>

      <section className="courses-section" aria-label={copy.filterTitle}>
        <header className="courses-section__header">
          <div className="courses-filters__heading">
            <h2>{copy.filterTitle}</h2>
            <p>
              {visibleTracks.length} {copy.filterTracksResult} · {visibleFocusCourses.length} {copy.filterFocusResult}
            </p>
          </div>

          <div className="courses-filters">
            <label className="courses-filters__field">
              <span>{copy.filterSubjectLabel}</span>
              <input
                type="search"
                value={subjectQuery}
                onChange={(event) => setSubjectQuery(event.target.value)}
                placeholder={copy.filterSubjectPlaceholder}
              />
            </label>
            <label className="courses-filters__field">
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
            <button type="button" className="courses-filters__reset" onClick={() => {
              setSubjectQuery('');
              setTargetFilter('all');
            }}>
              {copy.filterReset}
            </button>
          </div>
        </header>

        <div className="courses-timelines">
          {visibleTracks.length ? visibleTracks.map((track, index) => (
            <article key={track.id} className="timeline-track" aria-label={translate(track.title)}>
              <div className="timeline-track__content">
                <div className="timeline-track__heading-row">
                  <h3>{translate(track.title)}</h3>
                  <button type="button" className="timeline-track__book-button timeline-track__book-button--subtle" onClick={() => openBookingCart(track.id)}>
                    {copy.bookingOpenCartButton}
                  </button>
                </div>
                <p className="timeline-track__summary">{translate(track.summary)}</p>

                <ul className="timeline-track__meta" aria-label={dictionary.courses.programsTitle}>
                  <li>
                    <Clock3 aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.durationLabel}</p>
                      <span>{translate(track.duration)}</span>
                    </div>
                  </li>
                  <li>
                    <Users aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.targetGroupLabel}</p>
                      <span>{translate(track.targetGroup)}</span>
                    </div>
                  </li>
                  <li>
                    <Layers3 aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.subjectsLabel}</p>
                      <span>{translate(track.subjects)}</span>
                    </div>
                  </li>
                </ul>

                <div className="timeline-track__timeline">
                  <p className="timeline-track__timeline-title">{dictionary.courses.timelineLabel}</p>
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

                <div className="timeline-track__actions">
                  <button type="button" className="timeline-track__book-button" onClick={() => openBookingCart(track.id)}>
                    {copy.bookingButton}
                  </button>
                </div>
              </div>

              <figure className="timeline-track__media">
                <Image
                  src={track.image}
                  alt={translate(track.imageAlt)}
                  fill
                  sizes="(max-width: 880px) 92vw, 38vw"
                  priority={index === 0}
                />
              </figure>
            </article>
          )) : (
            <div className="courses-filters__empty">
              <p>{copy.filterNoResults}</p>
              <button
                type="button"
                className="courses-filters__reset"
                onClick={() => {
                  setSubjectQuery('');
                  setTargetFilter('all');
                }}
              >
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="courses-section courses-section--focus" aria-label={dictionary.courses.focusTitle}>
        <header className="courses-section__header">
          <h2>{dictionary.courses.focusTitle}</h2>
          <p>{dictionary.courses.focusIntro}</p>
        </header>

        <div className="focus-grid">
          {visibleFocusCourses.length ? visibleFocusCourses.map((course) => (
            <article key={course.id} className="focus-item">
              <div className="focus-item__top">
                <h3>{translate(course.title)}</h3>
                <button type="button" className="timeline-track__book-button timeline-track__book-button--subtle" onClick={() => openBookingCart(course.id)}>
                  {copy.bookingOpenCartButton}
                </button>
              </div>
              <p>{translate(course.description)}</p>
              <ul className="focus-item__meta">
                <li>
                  <span>{dictionary.courses.durationLabel}</span>
                  <strong>{translate(course.duration)}</strong>
                </li>
                <li>
                  <span>{dictionary.courses.targetGroupLabel}</span>
                  <strong>{translate(course.audience)}</strong>
                </li>
              </ul>
              <p className="focus-item__hint">{translate(course.bookingHint)}</p>
            </article>
          )) : (
            <div className="courses-filters__empty">
              <p>{copy.filterNoResults}</p>
              <button type="button" className="courses-filters__reset" onClick={() => {
                setSubjectQuery('');
                setTargetFilter('all');
              }}>
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
