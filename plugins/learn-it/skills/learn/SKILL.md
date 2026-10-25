---
name: learn
description: Teach a concept, tool, technique or new AI release in about 10 minutes, from official sources, at the learner's level, with a hands-on exercise and a quiz. Use when the user asks to learn, understand, explain or get up to speed on a topic, especially something new or fast-moving in AI or software.
argument-hint: [topic, a link, or a question]
---

# Learn it: a concept

Topic: $ARGUMENTS

If no topic was given, ask: "What do you want to learn?" and wait.

## Step 1. Know the learner

Read [me.md](me.md). If its FILL IN lines are blank, assume a curious professional who is new to the topic, and say so in one line at the end.

## Step 2. Go to the source

Do not teach from memory. Things in AI change every week.

- If the user gave a link, fetch it first.
- Search the web for the topic. Prefer, in this order: official docs, the official announcement or release notes, the original paper or spec, then well-known reference sites.
- Open 2 to 4 of the best pages. Note the date of each.
- If sources disagree or the topic is newer than they are, say so.
- If a page cannot be opened, try another good source. If none can be opened, teach from the search results you did get, keep the lesson shorter, and say at the top: "I couldn't open the full sources, so this lesson is built from search results. Check the links before relying on it."

Write a short list of facts you will teach, each with the link it came from. Do not use facts you cannot link. Projects and "use it tomorrow" advice are your suggestions, so they need no link, but they must not state new facts.

## Step 3. Write the lesson

Follow [teaching-style.md](teaching-style.md) exactly, shaped by me.md.

## Step 4. Fact-check

This step is required. Hand the `fact-checker` agent from this plugin the lesson and the fact list with links. Apply every fix it marks REQUIRED. If agents are not available here (for example in claude.ai chat), check each claim against its link yourself.

## Step 5. Hand it over

Show the lesson. Under it, one line: "Fact-checked against N sources, as of <today's date>." Then: "Say `/learn-it:quiz` when you're ready to test yourself, or ask me to go deeper on any part."

FILL IN (optional): add a step for your team, for example "save the lesson to `lessons/<topic>.md`".
