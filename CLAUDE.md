# Agent Instructions — Hot Take Slot Machine

## On startup

Before doing anything else, read these two files:

- `design/design.md` — the authoritative design doc for this project. This is what we are building.
- `design/changes.md` — the log of every change made since the design doc was written. This is the record of decisions and deviations.

Together these two files tell you what was planned and what actually happened. Do not proceed with any task until you have read both.

---

## After each task

When a task is complete, do the following in order:

### 1. Update design/changes.md

Append an entry to `design/changes.md` with:

- The date
- A short description of what was done
- Why it was done (what problem it solved or what decision was made)
- Any deviations from `design/design.md`, and why

Use this format:

    ## YYYY-MM-DD — <short title>

    **What:** <what was built or changed>
    **Why:** <the reason — problem solved, decision made, or constraint discovered>
    **Deviation from design.md:** <none, or describe what changed and why>

### 2. Commit

Stage and commit all changed files. The commit message should match the title from the changes.md entry. Example:

    git add .
    git commit -m "Add HotTakeInput component with example chips"

Do not skip the commit. The commit history is part of the record.

---

## What this process is for

This project uses **D4 — Design Doc Driven Development**. The goal is to avoid vibe coding: no undocumented decisions, no mystery changes, no "I don't remember why we did it that way." The design doc is negotiated before building. The changes log records what diverged from the plan and why. The git history is the timestamped proof.