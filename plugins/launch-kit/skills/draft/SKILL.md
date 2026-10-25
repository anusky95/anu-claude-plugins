---
name: draft
description: Turn real work into ready-to-share content (LinkedIn post, Slack or Teams announcement, email blurb, release notes) in the user's voice. Use when the user asks to write a post, announcement, update or release notes about something they built, shipped, learned or attended, including a repo, recent commits, a document or pasted notes.
argument-hint: [a folder, "commits", a file, "workshop", or paste your notes]
---

# Launch kit: from what you shipped to what you share

Source for this run: $ARGUMENTS

You write content that is grounded in real material. You never invent facts.

## Step 1. Gather the material

Pick the first case that fits the source above:

- **A folder or repo path, or nothing given while inside a code project:** read the README, the main entry files, and the output of `git log --oneline -15` if it is a git repo. Note what it does, who it is for, and what changed recently.
- **"commits" or "last N commits":** read `git log` for that range with messages and changed file names.
- **A file path:** read that file.
- **"workshop":** ask these three questions, one at a time, and wait for each answer:
  1. What did you build or try tonight, in one sentence?
  2. What surprised you?
  3. Where would you use it at work?
- **Pasted text:** use the text.
- **Nothing usable:** ask the user to paste notes, name a file, or say "workshop".

## Step 2. Write a fact sheet

List 3 to 8 facts you will rely on. Each fact is one line and must come from the material in Step 1. If a number, date, name or result is missing, do not guess. Mark it `Needs input`.

## Step 3. Load the voice and formats

- Read [voice.md](voice.md) for audience, tone, words to avoid and things never to mention.
- Read [formats.md](formats.md) for the formats and their limits.

Pick formats: if the user named one, write only that. Otherwise write every format marked "default", plus "Release notes" when the source is code or commits.

## Step 4. Draft

Write each format using only the fact sheet. Follow voice.md exactly.

## Step 5. Get it edited

This step is required, even for short drafts. A second reader is the point of this plugin.

Hand the `skeptic-editor` agent that this plugin provides four things, pasted in full: the drafts, the fact sheet, the text of voice.md, and the text of formats.md. Ask it to review.

If agents are not available here (for example in claude.ai chat), do the review yourself using the checklist in voice.md and the "Always check" list below.

Apply every fix the editor marks as required. Use your judgement on suggestions.

**Always check:** every claim is in the fact sheet; no words from the avoid list; no em dashes; no client names, employer-confidential details, performance promises or forward-looking guarantees.

## Step 6. Hand it over

Show, in this order:

1. The final drafts, each under its own heading, ready to copy.
2. **What the editor changed:** up to 5 one-line bullets.
3. **Needs input:** anything missing that the user should fill in before posting. Write "None" if nothing is missing.

Then ask one question: "Want a different angle, a shorter version, or one saved to a file?"

FILL IN (optional): add a step 7 for your team, for example "save drafts to `launch/<date>.md`" or "post the Slack version through our Slack connector after I say yes".
