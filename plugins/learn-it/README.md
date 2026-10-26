# learn-it

**Type:** Three skills plus a read-only fact-checker subagent
**Works in:** Claude Code, Cowork, and claude.ai chat. In chat the skills check facts themselves, because agents are not available there. Reading a repo works best in Claude Code; in the app it reads the repo through GitHub links.

**Onboard anyone to anything.** New hires, people switching teams, and anyone catching up on a field that changes every week spend days piecing together repos, docs and jargon. learn-it turns a repo or a concept into a 15-minute, fact-checked lesson with an interactive code map or illustration, in your team's words, and a quiz at the end.

- **For a team:** a lead fills in `team.md` once (your terms, your rules, the repos to learn first, your colors), commits it, and shares the plugin. Every newcomer gets the same quality of walkthrough for every repo.
- **For one person:** skip `team.md`. learn-it asks three questions about you and teaches at your level.

A fact-checker checks every claim against its source or `file:line` before anyone sees it.

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

Every lesson also becomes **an interactive page** you open in your browser, designed for its subject: one illustration of how it really works that you step through (a cross-section for biology, a code map for a repo), then a 10-minute exercise, projects, a "use it tomorrow" checklist and a quiz you click through. One HTML file, no API keys, works offline. Open `skills/learn/examples/mitochondria.html` to see the standard.

A lesson with its page takes about 4 minutes and roughly $1 of usage, because Claude researches, fact-checks, then designs and checks the page.

Each lesson gives you: the idea in one line, why it matters for your job, how it works, a real example, a 10-minute hands-on exercise, common mix-ups, 3 projects (an hour, a day, a week), a "use it tomorrow" checklist, a quiz and links to go deeper. A repo walkthrough adds a folder map, one request traced `file:line` by `file:line`, and the three files to read first.

You can also just ask: "help me understand this repo" or "teach me prompt caching".

## Set it up for your team (10 minutes)

1. Fork this repo, or copy `plugins/learn-it` into your team's own plugin repo.
2. Fill in `skills/learn/team.md`: who you are, the repos to learn first, your terms, your rules, who to ask, your colors.
3. Optional: change `skills/learn/teaching-style.md` to teach your way.
4. Raise `version` in `.claude-plugin/plugin.json`, commit, and share the install line with your team.
5. A new hire runs `/learn-it:repo <your repo>` on day one.

Use made-up or approved data in `team.md`. Run it only on repos your company allows Claude to read.

## Make it yours

Search this folder for `FILL IN`. Pick a level:

| Level | Edit | You learn |
|---|---|---|
| 1. No code | `skills/learn/team.md` (for a team) or `skills/learn/me.md` (for you). Every lesson changes. | Skills are just instructions |
| 2. Still no code | `skills/learn/teaching-style.md`: change the lesson shape to teach your way. Or add your own design rule in `skills/learn/visual.md`. | Supporting files shared by skills |
| 3. A little code | `agents/fact-checker.md`: add a check or change its tools. Or add a hook that saves every lesson to a `lessons/` folder. | Subagents, hooks |

After you edit, check it and reload it:

```bash
claude plugin validate ./plugins/learn-it
```

Then run `/reload-plugins` inside your Claude Code session.

## Credits

The design rules for lesson pages are adapted from Anthropic's `frontend-design` and `playground` skills (Apache-2.0). See `THIRD_PARTY_NOTICES.md`.

## What it reads, changes and runs

- **Reads:** web pages it finds for your topic, and the repo you point it at.
- **Changes:** writes one `learn-it-<topic>.html` page in your current folder, and fills in `me.md` only if you say yes. Nothing else in your project. For a GitHub URL in Claude Code, it makes a shallow clone in your system temp folder and deletes it afterwards. It never runs the repo's install, build or test scripts.
- **Runs:** `git clone --depth 1` for GitHub repos. No hooks, no servers. The lesson page is one self-contained HTML file with no outside scripts, fonts or images. The fact-checker can only read and fetch pages.

## If something is off

- The commands are `/learn-it:learn`, `/learn-it:repo`, `/learn-it:quiz`, with the plugin name first.
- Lessons feel generic? Fill in `me.md`.
- A source page won't open (company network)? The lesson says so at the top and is built from search results. Check the links.
