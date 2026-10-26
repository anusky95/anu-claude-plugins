# The visual lesson page

Every lesson and repo walkthrough also becomes one beautiful, interactive page the learner opens in a browser. It is designed for its subject, not stamped from a template.

Open [examples/mitochondria.html](examples/mitochondria.html) before you design. It is the standard to meet: a palette drawn from the subject (stain colors from a microscope slide), one interactive illustration you step through, and quiet, list-based sections below it. Do not copy its colors or layout; copy its level of care.

## What every page must have

1. **A title and one-sentence lede** that says what the learner will understand.
2. **The hero: one interactive illustration of the real mechanism.** Hand-built inline SVG. The learner steps through it with buttons (and the arrow keys), and each step lights up or animates the part it describes, with 2 or 3 sentences of text beside it.
   - For a concept: draw the thing itself (a cross-section, a machine, a network, a timeline), not a flowchart of labeled boxes.
   - For a repo: draw a **code map**. Group the important files into layers (for example "what you type", "instructions", "tools", "data"), draw real connections between them, and make one step-through trace of a real request moving file to file. Clicking a file shows what it does and its `file:line`.
3. **Try it in 10 minutes:** numbered steps.
4. **Projects:** an hour, a day, a week.
5. **Use it tomorrow:** a tick-off checklist.
6. **Check yourself:** 3 clickable questions that show right or wrong with the reason, and a score.
7. **Go deeper:** the source links.

## Design rules

Adapted from Anthropic's `frontend-design` and `playground` skills (Apache-2.0, see `licenses/`).

**Use the team's look first.** If team.md sets colors or a style, use them. Otherwise:

**Ground it in the subject.** Take the palette, shapes and metaphors from the subject's own world: stain colors for cell biology, blueprint blue for networking, ledger green for accounting, the project's own brand colors for a repo. Write a tiny plan first: 4 to 6 named hex colors, one or two typefaces (system fonts only), the hero concept in one sentence. Then check it: if the plan would fit any topic, change it.

**Avoid the look of a generated page.** These are the tells; do not use them unless the subject calls for it:
- a cream background with a serif headline and a terracotta accent;
- a near-black background with one acid-bright accent;
- content chopped into identical rounded cards with the same shadow;
- small all-caps labels above every heading, details joined with middle dots, arrows added to link text;
- numbered markers on things that are not a sequence;
- fade-and-slide animation on every section.

**Spend your boldness in one place:** the hero illustration. Keep everything else quiet: generous space, clear type scale, lines under 80 characters, lists instead of card grids.

**Motion only where it teaches:** the step-through animation in the hero. Nothing else moves. Respect `prefers-reduced-motion`.

**Quality floor, always:**
- One self-contained HTML file. All CSS and JS inline. No CDNs, no external fonts or images, so it works offline.
- Works at phone width (390px): the page itself never scrolls sideways, the illustration comes first, and its labels stay readable (12px or larger on screen). If the illustration is wide (a code map, a long timeline), give phones their own layout: stack the layers top to bottom, or put the SVG in a box that scrolls sideways on its own with a short "swipe to see more" hint. Never let it shrink until the text is unreadable.
- Works in dark mode (`prefers-color-scheme`).
- Visible keyboard focus. Text contrast of at least 4.5:1. Every SVG has a `<title>`.
- Every label in the SVG sits clear of lines and shapes. No text overlaps.

## Accuracy

Every part you draw is a claim. Each shape, label and arrow must match the fact sheet or the code. Put a short "how this picture maps to the facts" list in what you send the fact-checker, so it can check the drawing too.

## Check your own work before handing it over

1. If you can take a screenshot (a browser tool, or Playwright if it is installed), open the page at desktop width and at 390px wide, step through every state, and look. At 390px, check that `document.documentElement.scrollWidth` is 390 (no sideways scroll) and the labels are readable. Fix overlapping labels, clipped text, parts in the wrong place, and anything that looks generic.
2. If you cannot take screenshots, re-read the SVG coordinates for every label and shape and fix collisions, then check the page at phone width in your head: does the hero stack above the text?
3. Remove one decoration you don't need.

## Files

Save it as `learn-it-<short-topic>.html` in the learner's current folder. Leave exactly one new file: delete any helper scripts or scratch copies. In the Claude app, show the page as an HTML artifact instead of saving a file.

FILL IN (optional): add your own brand rule here, for example "always use our company colors for repo walkthroughs".
