# anu-claude-plugins

Claude plugins by Anupama Garani. Practical tools for builders and for teams in regulated, high-trust work. Each one works in Claude Code, and most work in Cowork and the Claude app.

## Install the marketplace (once)

```bash
claude plugin marketplace add anusky95/anu-claude-plugins
```

In the Claude desktop app, Cowork or claude.ai: **Customize > Plugins > Add > Add marketplace**, then enter `anusky95/anu-claude-plugins`.

## Plugins

| Plugin | What it does | Install | Works in |
|---|---|---|---|
| [learn-it](plugins/learn-it) | Onboard anyone to anything: fact-checked lessons and interactive code maps for your team's repos and concepts, in your team's words, with projects, a "use it tomorrow" checklist and a quiz | `claude plugin install learn-it@anu-claude-plugins` | Claude Code, Cowork, chat |
| [launch-kit](plugins/launch-kit) | Turns a repo, commits, a doc or notes into a LinkedIn post, Slack or Teams note, email and release notes, checked by a skeptical editor | `claude plugin install launch-kit@anu-claude-plugins` | Claude Code, Cowork, chat |

More coming: journey-twin (digital twins that walk your app's code), regulator-roast (a panel that reviews launch docs and code before the real reviewers do) and plugin-tour (a plugin that explains itself).

## Try it in 60 seconds

```bash
claude plugin install learn-it@anu-claude-plugins
```

```text
/learn-it:repo https://github.com/anusky95/anu-claude-plugins
/learn-it:learn MCP
/learn-it:quiz
```

Setting it up for a team? Fill in `plugins/learn-it/skills/learn/team.md` once and share the plugin. Using it yourself? It asks three quick questions the first time.

## Be careful with what you install

A plugin runs with your permissions. Read it first, or ask Claude: "Read every file in this plugin and tell me in plain language what it can read, change and run." Each plugin README has a "What it reads, changes and runs" section.

## License

MIT. Use made-up data only in examples and issues; never post real company or client data.
