# launch-kit

**Type:** Skill with an argument, plus a read-only subagent
**Works in:** Claude Code, Cowork. In claude.ai chat the skill works and does the editor's review itself, because agents are not available there.

Turn what you shipped into what you share. Point it at a repo, your last few commits, a document or a messy brain dump, and get a LinkedIn post, a Slack or Teams announcement, an email blurb and (for code) release notes. A skeptical editor checks every draft for invented claims, hype and things you should never post before you see it.

Built for developers and non-developers alike: the "build" step is editing a plain English file about how you write.

## Install

### Claude Code (terminal)

```bash
claude plugin marketplace add anusky95/anu-claude-plugins
claude plugin install launch-kit@anu-claude-plugins
```

No install needed to just try it. From a clone of this repo:

```bash
claude --plugin-dir ./plugins/launch-kit
```

### Claude desktop app, Cowork, or claude.ai

1. Open **Customize > Plugins**, then **Add > Add marketplace**.
2. Enter `anusky95/anu-claude-plugins`, pick **launch-kit**, and select **Add**.

Prefer a file? Download `launch-kit.zip` from the repo's Releases page and use **Add > Upload plugin**.

## Run it

```text
/launch-kit:draft workshop
```

Claude asks you three quick questions about tonight, then gives you a LinkedIn post and a Slack message you can copy, plus a short list of what the editor changed.

More ways to run it:

```text
/launch-kit:draft .                 the project you are in (Claude Code)
/launch-kit:draft commits           your recent commits, as release notes plus a post
/launch-kit:draft ./notes/q3.md     a document
/launch-kit:draft                   then paste your notes
```

You can also just ask: "write a LinkedIn post about this repo".

## Make it yours

Search this folder for `FILL IN`. Each one marks a line you should change. Pick a level:

| Level | Edit | You learn |
|---|---|---|
| 1. No code | `skills/draft/voice.md`: your role, audience, tone, words you never use, what you can never mention. Paste a post you wrote. | Skills are just instructions |
| 2. Still no code | `skills/draft/formats.md`: add a format your team uses (newsletter paragraph, changelog entry, X post). | Supporting files |
| 3. A little code | `agents/skeptic-editor.md`: add a check, or change `tools:`. Or add a `hooks/hooks.json` that reminds you to run the kit after `git push`. | Subagents, hooks |

After you edit, check it and reload it:

```bash
claude plugin validate ./plugins/launch-kit
```

Then run `/reload-plugins` inside your Claude Code session.

## What it reads, changes and runs

- **Reads:** the folder, file or text you point it at. For a git repo it runs `git log` (read-only).
- **Changes:** nothing, unless you ask it to save a draft to a file.
- **Runs:** no hooks and no servers. The `skeptic-editor` agent can only read.

## If something is off

- The command is `/launch-kit:draft`, with the plugin name first.
- Drafts sound generic? Fill in `voice.md`, especially the sample of how you write.
- In Claude Code, open `/plugin` and check the **Errors** tab.
