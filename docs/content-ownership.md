# Content ownership

How Campus GEM website copy is sourced after the editorial redesign.

## Canonical product links

| Link | Source of truth |
| --- | --- |
| Eagles Camp 2026 registration | `campRegister` in `src/constants/site.ts` → `https://portal.campusgem.org/f/camp2026` |
| Love Feast WhatsApp | `src/constants/pages.ts` / `social.ts` |
| Bible Study Telegram | activity `bibleStudy.cta` |

Camp registration is **forced** in `getActivityPage("camp")` and `getEvents()` for `eagles-camp-2026`, even if Sanity has an older Google Form URL.

## What Sanity owns (when published)

- Site settings (contact, vision/mission text, social)
- Activity page hero images + titles (body/story beats still primarily local)
- Events list metadata (CTA for camp overridden to portal)
- Sermons, gallery albums, Hall of Fame portraits
- Confession sections (falls back to `confessionSections` in `pages.ts`)
- Pastor profile fields

## What local constants own

- Story titles, scripture bands, beats, closing lines (`activityPages` in `pages.ts`)
- Navigation / footer / search index
- Homepage section copy and atmospheres
- Fallback images under `/public/images`

## Editor workflow

1. Prefer updating **images and factual dates** in Sanity Studio.
2. Prefer updating **storytelling copy / scripture** in `src/constants/pages.ts` until story fields are added to schemas.
3. After Studio changes to camp CTA, confirm the live site still points at `campRegister.href`.
