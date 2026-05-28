# NordPixel Repository Guidelines

## Scope
- These guidelines apply to changes in this repository.
- Keep changes minimal, focused, and consistent with existing structure.

## Tech Stack And Structure
- Framework: Next.js App Router with TypeScript.
- Main app code lives under src/app.
- Shared language state and dictionaries live under src/context.
- Shared copy for major pages is centralized in src/context/page-copy.ts and consumed via src/context/language-dictionary.ts.
- Course domain copy is centralized in src/app/components/courses/course-copy.ts.

## Localization And Copy Rules
- Do not hardcode user-facing DA/EN copy directly in components when it can live in dictionary/copy modules.
- Prefer dictionary keys for all UI text that appears in navigation, buttons, labels, hints, status text, and dialogs.
- Prefer dictionary keys for accessibility microcopy too (aria-label, skip links, menu labels, footer labels).
- Avoid inline locale conditionals for copy (for example locale === 'da' ? '...' : '...') unless there is a strong technical reason.
- Keep DA and EN versions parallel in meaning and tone.
- For Home, Contact, Editor intro, and cart prompt copy, keep source-of-truth in page-copy and dictionary wiring.

## Accessibility
- Keep interactive elements keyboard accessible.
- Add clear aria-label text where visual labels are not sufficient.
- Accessibility labels should follow the same localization rules as visible copy.

## Metadata And Routing Copy
- Keep metadata titles/descriptions intentional and aligned with page intent.
- If metadata is localized, use a single structured source to avoid drift across routes.
- Canonical URLs must match the route.

## Component And Data Boundaries
- Keep presentation components in src/app/components.
- Keep content data in dedicated content modules, not embedded in JSX.
- Keep constants and assets in existing asset/data files (for example src/assets/site-footer.ts, course catalog modules).

## Styling And UI Implementation
- Reuse existing design tokens and global styles in src/styles.
- Avoid unnecessary one-off style patterns when an existing class/token can be reused.
- Keep responsive behavior explicit for mobile and desktop layouts.

## Change Quality
- Preserve existing naming patterns and folder structure.
- Avoid broad refactors unless requested.
- Ensure new copy keys are added to both da and en variants.
- Keep implementation straightforward and readable.

## Current Known Gap To Avoid Repeating
- Some header/footer and shell accessibility microcopy is currently hardcoded in components.
- New work should not add more hardcoded microcopy; add keys to dictionary instead.
