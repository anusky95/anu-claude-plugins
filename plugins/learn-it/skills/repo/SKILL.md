---
name: repo
description: Explain a GitHub repository or local codebase so a newcomer can understand it in about 15 minutes, with a map of the folders, how the main flow works, where to start reading, a hands-on exercise and a quiz. Use when the user shares a GitHub link or folder and asks what it does, how it works, or how to get started with it.
argument-hint: [GitHub URL, owner/repo, or a local folder; empty means the current project]
---

# Learn it: a codebase

Repo: $ARGUMENTS

## Step 1. Know the learner

Read [me.md](../learn/me.md). If it is filled in, use it. If its FILL IN lines are blank, ask the same three questions as the learn skill's Step 1 (job, how technical, where they'll try things) in one short message and wait, with the same "skip" option and the same offer to save the answers to me.md.

## Step 2. Get the code

Pick the first case that fits:

- **A local folder, or nothing given inside a code project:** read it where it is.
- **A GitHub URL or owner/repo, and you can run commands:** `git clone --depth 1 <url>` into a temporary folder and read it there. Never run its install scripts, build or tests.
- **A GitHub URL, no commands available (for example the Claude app):** fetch the repo page, its README, and the main files through their raw GitHub links.

Read, in this order: the README, the dependency or package file, the entry point, then the 5 to 10 files that matter most. Skip generated, vendored and lock files.

Note every claim with the file it came from, and the line where it matters.

## Step 3. Write the walkthrough

Use this shape:

1. **In one line.** What it does and who it is for.
2. **Why you'd care.** Tied to the learner's role in me.md.
3. **The map.** A folder tree of only the parts that matter, one short line each.
4. **How it works.** Follow one real request or command from start to finish, step by step, each step naming the `file:line`.
5. **Run it.** The exact steps from the README to try it, or "No run instructions in the README" if there are none.
6. **Start reading here.** The 3 files a newcomer should open first, and why.
7. **Try it in 10 minutes.** One small, safe change to make and see (for example change a message, add a print, edit a config), with what they should see.
8. **Projects to build on it.** 3 ideas sized an hour, a day and a week, tied to the learner's role: a small change, a new feature, and a way to use it at work.
9. **Use it tomorrow.** A short checklist before using this repo at work: check its license (name the file), how recently it was updated, what it runs or connects to, any secrets or data it touches, and who at work should review it. Then the first concrete step.
10. **Check yourself.** 3 multiple-choice questions about this repo. Answers at the end with the `file:line` that proves each.

Follow the rules in [teaching-style.md](../learn/teaching-style.md) for tone and length. Also plan the code map for the visual page now (see [visual.md](../learn/visual.md)): the layers, the files in each, the connections, and the request you will trace. Include that plan, with `file:line` for each part, in what the fact-checker sees.

## Step 4. Fact-check

Required. Hand the `fact-checker` agent the walkthrough and the path to the code (or the links you fetched). It confirms every `file:line` and claim. Apply its REQUIRED fixes. Without agents, check each `file:line` yourself.

## Step 5. Make the visual page

Always do this. Follow [visual.md](../learn/visual.md) and meet the standard of [examples/mitochondria.html](../learn/examples/mitochondria.html). The hero is an interactive code map: files grouped into layers, real connections, a step-through trace of one real request, and click a file to see what it does and its `file:line`. Take the palette from the project itself (its logo, docs or README) when it has one. Save it as `learn-it-<repo-name>.html` in the learner's current folder, not inside the clone.

## Step 6. Hand it over

Show the walkthrough, then the path of the visual page: "Open it in your browser and step through the code map, then take the quiz." In the Claude app, show the page as an HTML artifact. End with: "Every file reference was checked against the code. Say `/learn-it:quiz` to test yourself."
