# Changes

## 2026-06-04 — Initial build — Hot Take Slot Machine

**What:** Built the complete v1 application from scratch per design.md. Created all files in the specified structure: `lib/modes.js` (11 mode definitions + `pickModes` + example hot takes), `app/api/generate/route.js` (3 parallel Gemini calls via `@google/generative-ai`), and all four components (`Header`, `HotTakeInput`, `EssayCard`, `EssayList`) with paired CSS Modules. Main `page.js` is a client component orchestrating hot take input, API call, and per-essay reveal state.

**Why:** First implementation — blank repo, building to spec.

**Deviation from design.md:** None. All 11 modes implemented, labeled A/B/C, Reveal / Reveal All buttons, discussion prompt, example chips, CSS Modules throughout, no storage, API key server-side only.

## 2026-09-25 — Make example hot takes collapsible

**What:** Updated `HotTakeInput` component and CSS module to make the "Try one:" example hot takes section collapsible with a toggle button, starting collapsed by default.
**Why:** The growing list of example takes was taking up too much vertical space and cluttering the initial front page view.
**Deviation from design.md:** Example chips are now tucked behind an expandable toggle rather than rendered open by default.

## 2026-09-25 — Add essay download and remove UI reveal buttons

**What:** Removed on-screen Reveal / Reveal All buttons and mode pills from `EssayCard`, `EssayList`, and `page.js`. Added a "Download essays (.txt)" button in `EssayList` that exports all three essays along with their hot take and corresponding mode types into a single text file.
**Why:** Revealing the modes in the web UI was not helpful during interactive discussion; exporting all essays with their associated mode types into a downloadable text file allows instructors and students to archive and review the full text and strategies offline.
**Deviation from design.md:** Mode reveal buttons in the UI are removed; essay modes are now included in the downloaded text file instead of revealed in the browser.

## 2026-09-25 — Switch essay labeling from A/B/C to #1/#2/#3

**What:** Changed essay labels in `EssayCard` and `EssayList` export from "Essay A", "Essay B", "Essay C" to "Essay #1", "Essay #2", "Essay #3".
**Why:** Some hot takes or essay types discuss A-B-C structures or lettered concepts, and using A/B/C labels for the essay cards causes confusion.
**Deviation from design.md:** Essays are now numbered #1, #2, #3 instead of lettered A, B, C.