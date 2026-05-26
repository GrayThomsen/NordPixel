'use client';

import Image from 'next/image';
import { Clock3, Layers3, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getCoursesCopy } from './courses/course-copy';
import { BOOKABLE_OPTIONS, FOCUS_COURSES, PROGRAM_TRACKS } from './courses/course-catalog';
import { addSelectionToBookingCart } from './courses/booking-storage';
import { type LocalizedText } from './courses/course-types';

let bookingTabRef: Window | null = null;
const BOOKING_SOURCE_TAB_ID_KEY = 'nordpixel-booking-source-tab-id';

function getBookingTabTarget() {
  const existingId = window.sessionStorage.getItem(BOOKING_SOURCE_TAB_ID_KEY);
  if (existingId) {
    return `nordpixel-booking-cart-tab-${existingId}`;
  }

  const newId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  window.sessionStorage.setItem(BOOKING_SOURCE_TAB_ID_KEY, newId);
  return `nordpixel-booking-cart-tab-${newId}`;
}

export function CoursesContent() {
  const { dictionary, locale } = useLanguage();
  const [targetFilter, setTargetFilter] = useState('all');

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

  const copy = getCoursesCopy(locale);

  const targetOptions = [
    { id: 'indskoling', label: copy.filterTargetIndskoling },
    { id: 'mellemtrin', label: copy.filterTargetMellemtrin },
    { id: 'udskoling', label: copy.filterTargetUdskoling },
    { id: 'gymnasium', label: copy.filterTargetGymnasium },
  ];

  const openBookingCart = (initialId: string) => {
    addSelectionToBookingCart(initialId, bookingOptionIds);
    const bookingUrl = `${window.location.origin}/courses/booking?add=${encodeURIComponent(initialId)}&t=${Date.now()}`;

    if (bookingTabRef && !bookingTabRef.closed) {
      bookingTabRef.location.href = bookingUrl;
      bookingTabRef.focus();
      return;
    }

    const bookingTabTarget = getBookingTabTarget();
    const openedTab = window.open(bookingUrl, bookingTabTarget);

    if (!openedTab) {
      window.location.href = bookingUrl;
      return;
    }

    bookingTabRef = openedTab;
    openedTab.focus();
  };

  return (
    <main className="coursesPage">
      <section className="coursesPageHero">
        <h1>{dictionary.courses.title}</h1>
      </section>

      <div className="coursesIntroStack">
        <section className="coursesUvm" aria-label={copy.uvmIntroTitle}>
          <h2>{copy.uvmIntroTitle}</h2>
          <p>{copy.uvmIntroText}</p>
          <div className="coursesUvmRoles">
            <article>
              <h3>{copy.teacherRoleLabel}</h3>
              <p>{copy.teacherRoleText}</p>
            </article>
            <article>
              <h3>{copy.studentRoleLabel}</h3>
              <p>{copy.studentRoleText}</p>
            </article>
          </div>
        </section>

        <section className="coursesCustomTrack" aria-label={copy.customTrackTitle}>
          <div>
            <h3>{copy.customTrackTitle}</h3>
            <p>{copy.customTrackText}</p>
          </div>
          <button
            type="button"
            className="coursesCustomTrackButton"
            onClick={() => openBookingCart('mit-eget-forlob')}
          >
            {copy.customTrackButton}
          </button>
        </section>
      </div>

      <section className="coursesSection coursesSectionTracks" aria-label={copy.filterTitle}>
        <header className="coursesSectionHeader">
          <div className="coursesFiltersHeading">
            <h2>{copy.kindTrack}</h2>
            <p>
              {visibleTracks.length} {copy.filterTracksResult} · {visibleFocusCourses.length} {copy.filterFocusResult}
            </p>
          </div>
          <p className="coursesFiltersTargetOnlyHint">{copy.filterTargetOnlyHint}</p>

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
        </header>

        <div className="coursesTimelines">
          {visibleTracks.length ? visibleTracks.map((track, index) => (
            <article key={track.id} className="timelineTrack" aria-label={translate(track.title)}>
              <div className="timelineTrackContent">
                <div className="timelineTrackHeadingRow">
                  <h3>{translate(track.title)}</h3>
                  <button type="button" className="timelineTrackBookButton timelineTrackBookButtonSubtle" onClick={() => openBookingCart(track.id)}>
                    {copy.bookingOpenCartButton}
                  </button>
                </div>
                <p className="timelineTrackSummary">{translate(track.summary)}</p>

                <ul className="timelineTrackMeta" aria-label={dictionary.courses.programsTitle}>
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

                <div className="timelineTrackTimeline">
                  <p className="timelineTrackTimelineTitle">{dictionary.courses.timelineLabel}</p>
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

                <div className="timelineTrackActions">
                  <button type="button" className="timelineTrackBookButton" onClick={() => openBookingCart(track.id)}>
                    {copy.bookingButton}
                  </button>
                </div>
              </div>

              <figure className="timelineTrackMedia">
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

      <section className="coursesSection coursesSectionFocus" aria-label={dictionary.courses.focusTitle}>
        <header className="coursesSectionHeader">
          <h2>{dictionary.courses.focusTitle}</h2>
          <p>{dictionary.courses.focusIntro}</p>
        </header>

        <div className="focusGrid">
          {visibleFocusCourses.length ? visibleFocusCourses.map((course) => (
            <article key={course.id} className="focusItem">
              <div className="focusItemTop">
                <h3>{translate(course.title)}</h3>
                <button type="button" className="timelineTrackBookButton timelineTrackBookButtonSubtle" onClick={() => openBookingCart(course.id)}>
                  {copy.bookingOpenCartButton}
                </button>
              </div>
              <p>{translate(course.description)}</p>
              <ul className="focusItemMeta">
                <li>
                  <span>{dictionary.courses.durationLabel}</span>
                  <strong>{translate(course.duration)}</strong>
                </li>
                <li>
                  <span>{dictionary.courses.targetGroupLabel}</span>
                  <strong>{translate(course.audience)}</strong>
                </li>
              </ul>
              <p className="focusItemHint">{translate(course.bookingHint)}</p>
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
    </main>
  );
}
