# The visual lesson page

Every lesson and repo walkthrough also becomes one page the learner can open in a browser: a diagram with numbered callouts, the steps, project cards, a checklist and a clickable quiz.

## How to make it

1. Copy [lesson-template.html](lesson-template.html) to a new file named `learn-it-<short-topic>.html` in the learner's current folder. In the Claude app, show the finished page as an HTML artifact instead of saving a file.
2. Replace ONLY the JSON inside `<script type="application/json" id="lesson">`. Do not change anything else in the file.
3. The JSON must be valid. Use `\n` for line breaks inside strings, and never put `</script>` inside it.

## The JSON

```json
{
  "title": "MCP, the plug standard for AI tools",
  "kind": "concept or repo",
  "learner": "Compliance analyst, bank (from me.md)",
  "date": "2026-10-26",
  "oneLine": "One sentence, the same as the lesson's 'In one line'.",
  "whyItMatters": "Two or three sentences tied to the learner's role.",
  "diagram": {
    "mermaid": "flowchart LR\n  A[\"1. Host app\"] --> B[\"2. Client\"] --> C[\"3. Server\"]",
    "caption": "What the picture shows, in a few words"
  },
  "callouts": [
    { "n": 1, "title": "Host app", "text": "One or two plain sentences." }
  ],
  "map": "Repo walkthroughs only: the folder tree as plain text, or leave it out.",
  "steps": [
    { "title": "Short step name", "text": "One or two sentences.", "ref": "file.js:12 or a source link, optional" }
  ],
  "example": "One concrete example from the sources, optional.",
  "exercise": { "title": "What they will do", "steps": ["Step one", "Step two"], "success": "What they should see" },
  "mixups": ["Common mix-up one"],
  "projects": [
    { "size": "1 hour", "title": "Short name", "text": "What it is and why." },
    { "size": "1 day", "title": "", "text": "" },
    { "size": "1 week", "title": "", "text": "" }
  ],
  "tomorrow": ["First step tomorrow", "What to check at work"],
  "quiz": [
    { "q": "Question?", "options": ["Option A", "Option B", "Option C"], "answer": 1, "why": "Why B is right, with its source or file:line." }
  ],
  "sources": [{ "title": "Official docs", "url": "https://example.com" }],
  "factCheck": "Fact-checked against 3 sources as of 2026-10-26."
}
```

## The diagram is the heart of the page

- Draw the real mechanism, not a decoration: what calls what, what flows where, in what order.
- 4 to 8 boxes. Number the boxes in the order a reader should follow them ("1. ...", "2. ..."), and write one callout per number with the same title.
- Put every box label in double quotes, escaped inside the JSON: `A[\"1. Host app\"]`.
- Pick the shape that fits:
  - `flowchart TD` (top to bottom) for most processes. It stays readable on any screen.
  - `flowchart LR` (left to right) only for 4 boxes or fewer. A longer row shrinks the text until no one can read it.
  - `sequenceDiagram` for messages going back and forth between two or three parties.
- Show real branches where they exist, for example a decision diamond `D{\"Exit code 2?\"}` with "yes, blocked" and "no, allowed" arrows. A straight line of boxes is the last resort.
- Group related boxes with `subgraph` when there are two clear sides, like "Your computer" and "The service".
- Keep box labels short (under 30 characters). Put the detail in the callouts, not the boxes.
- For a repo, draw how one real request or command moves through the files. Put file names in the boxes.
- Every box and arrow must be supported by the lesson's facts. The fact-checker checks the diagram too.

FILL IN (optional): change the template's colors in its `:root` block to your brand.
