# Hot Take Slot Machine — Design Doc v0.1
*FP Writing Pedagogy Tool · Draft for discussion*

---

## Name

**Hot Take Slot Machine** — primary name. Casual, approachable, captures the randomness mechanic.

*Alternate: Hot Take One-Armed Bandit — same vibe, slightly harder to say.*

---

## What it does

A student (or instructor) types in any arguable position. The tool picks three essay modes at random — with replacement, so repeats are possible — and sends each one to Gemini with a tailored system prompt. Three short essays (~3 paragraphs each) come back. Students read them in small groups and discuss what rhetorical strategy each one is deploying before any reveal happens.

The pedagogical core is the **hidden reveal**: students engage more carefully when they have to detect the strategy rather than be told it. The randomness means students can't game the distribution, and the instructor sees fresh results every time.

---

## Essay modes (11)

- Makes the argument well
- Makes the argument badly
- Hedges the argument
- Argues the opposite
- Attacks a strawman
- Agrees without arguing (sycophant)
- Motte-and-bailey
- All vibe, no argument
- Concedes and abandons
- Pivots mid-argument
- Evidence pile, no reasoning

Three modes drawn at random per generation. Repeats allowed — you might get three hedges. That's fine and pedagogically interesting.

---

## Tech stack

**Frontend:** Next.js (App Router) deployed on Vercel. Client component handles state — hot take input, loading, essay display, per-essay reveal.

**API route:** Single Next.js API route at `/api/generate`. Receives hot take + selected modes from client. Makes three parallel calls to Gemini. Returns essays array. API key lives server-side only — never touches the client.

**AI backend:** Google Gemini (Flash tier). Dramatically cheaper than Claude or GPT-4 for this use case. Three ~150-word essays per generation costs fractions of a cent. Model: `gemini-2.0-flash`.

**Storage:** None. Fully stateless. Each session is ephemeral. Firestore integration is a planned future addition for research data collection — not in scope for the initial build.

**CSS:** CSS Modules. One `.module.css` file per component. No Tailwind, no inline styles.

---

## File structure

    app/
      api/generate/route.js
      components/
        Header.js + Header.module.css
        HotTakeInput.js + HotTakeInput.module.css
        EssayCard.js + EssayCard.module.css
        EssayList.js + EssayList.module.css
      globals.css
      layout.js
      page.js + page.module.css
    lib/
      modes.js   ← mode definitions, prompts, random picker

---

## Data flow

1. Student types hot take → clicks Generate → `pickModes(3)` runs client-side, selects 3 random modes
2. POST to `/api/generate` with `{ hotTake, modes }`
3. API route fires 3 parallel Gemini calls (one per mode). Each prompt includes the mode instruction + hot take + a preamble instructing Gemini not to label or announce its strategy.
4. Three essays returned as `{ essays: [string, string, string] }`. Mode labels stored in client state, not revealed in UI until the student clicks Reveal.

---

## UX notes

- Essays labeled A, B, C — not 1, 2, 3. Reduces "which one is right" framing.
- Each essay has its own Reveal button. Also a Reveal All. Instructor can choose when to reveal — mid-discussion or after.
- Mode label shows as a colored pill on reveal — not a grade or judgment, just the strategy name.
- Discussion prompt at the bottom of each run: "Which essay is actually arguing the position? Can you find the sentence that gives it away?"
- Example hot takes pre-loaded as one-click chips so students don't stall on input.

---

## Open questions

1. **Firestore timing:** Build the Firestore layer before fall term, or run stateless for one term first and add it once the research design is clearer?
2. **Gemini model quality:** Flash is cheapest but is essay quality good enough for nuanced modes (motte-and-bailey, the pivot)? Worth a head-to-head test against Claude Haiku before committing.
3. **Instructor controls:** Should the instructor be able to lock which modes are in the pool for a given class session? Or is full randomness always better?
4. **Suite routing:** Does this live at the root `/` or at `/hot-take` as part of a larger suite that also includes the misinformation tool?
5. **IRB:** If running across multiple FP sections and collecting session data, is IRB review required? Determine before adding Firestore.

---

## Not in scope (v1)

- Firestore / data storage
- Student login or auth
- Instructor dashboard
- Misinformation tool
- Section tagging
- Export / research data pipeline

---

*Stack: Next.js App Router · Gemini API · Vercel · CSS Modules · no backend storage*