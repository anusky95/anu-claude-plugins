# learn-it

**Type:** Three skills plus a read-only fact-checker subagent
**Works in:** Claude Code, Cowork, and claude.ai chat. In chat the skills check facts themselves, because agents are not available there. Reading a repo works best in Claude Code; in the app it reads the repo through GitHub links.

Your AI tutor for a field that changes every week. Learn any concept or GitHub repo in about 15 minutes, from official sources or the real code, at your level. Every lesson ends with projects to build, a "use it tomorrow" checklist and a quiz. A fact-checker checks every claim before you see it.

## Install

### Claude Code (terminal)

```bash
claude plugin marketplace add anusky95/anu-claude-plugins
claude plugin install learn-it@anu-claude-plugins
```

No install needed to just try it. From a clone of this repo:

```bash
claude --plugin-dir ./plugins/learn-it
```

### Claude desktop app, Cowork, or claude.ai

1. Open **Customize > Plugins**, then **Add > Add marketplace**.
2. Enter `anusky95/anu-claude-plugins`, pick **learn-it**, and select **Add**.

Prefer a file? Download `learn-it.zip` from the repo's Releases page and use **Add > Upload plugin**.

## Run it

```text
/learn-it:learn MCP                                     a concept, from official sources
/learn-it:repo https://github.com/owner/repo            a codebase, mapped and explained
/learn-it:quiz                                          5 questions on your last lesson, graded
```

The first time, it asks 3 quick questions (your job, how technical you are, where you'll try things) and offers to save the answers to `me.md`.

Every lesson also becomes **a visual page** you open in your browser: a diagram of how it works with numbered callouts, the steps, project cards, a "use it tomorrow" checklist and a quiz you click through. No API keys; the diagram draws with Mermaid when you are online and falls back to text when you are not.

Each lesson gives you: the idea in one line, why it matters for your job, how it works, a real example, a 10-minute hands-on exercise, common mix-ups, 3 projects (an hour, a day, a week), a "use it tomorrow" checklist, a quiz and links to go deeper. A repo walkthrough adds a folder map, one request traced `file:line` by `file:line`, and the three files to read first.

You can also just ask: "help me understand this repo" or "teach me prompt caching".

## Make it yours

Search this folder for `FILL IN`. Pick a level:

| Level | Edit | You learn |
|---|---|---|
| 1. No code | `skills/learn/me.md`: your role, what you know, how you like to learn. Every lesson changes. | Skills are just instructions |
| 2. Still no code | `skills/learn/teaching-style.md`: change the lesson shape to teach your way. Or change the colors in `skills/learn/lesson-template.html`. | Supporting files shared by skills |
| 3. A little code | `agents/fact-checker.md`: add a check or change its tools. Or add a hook that saves every lesson to a `lessons/` folder. | Subagents, hooks |

After you edit, check it and reload it:

```bash
claude plugin validate ./plugins/learn-it
```

Then run `/reload-plugins` inside your Claude Code session.

## What it reads, changes and runs

- **Reads:** web pages it finds for your topic, and the repo you point it at.
- **Changes:** writes one `learn-it-<topic>.html` page in your current folder, and fills in `me.md` only if you say yes. Nothing else in your project. For a GitHub URL in Claude Code, it makes a shallow clone in a temporary folder. It never runs the repo's install, build or test scripts.
- **Runs:** `git clone --depth 1` for GitHub repos. No hooks, no servers. The visual page loads Mermaid 10.9.1 from cdn.jsdelivr.net to draw the diagram, and nothing else. The fact-checker can only read and fetch pages.

## If something is off

- The commands are `/learn-it:learn`, `/learn-it:repo`, `/learn-it:quiz`, with the plugin name first.
- Lessons feel generic? Fill in `me.md`.
- A source page won't open (company network)? The lesson says so at the top and is built from search results. Check the links.
