---
name: learn
description: Teach a concept, tool, technique or new AI release in about 10 minutes, from official sources, at the learner's level, with a hands-on exercise and a quiz. Use when the user asks to learn, understand, explain or get up to speed on a topic, especially something new or fast-moving in AI or software.
argument-hint: [topic, a link, or a question]
---

# Learn it: a concept

Topic: $ARGUMENTS

If no topic was given, ask: "What do you want to learn?" and wait.

## Step 1. Know the learner

Read [me.md](me.md). If it is filled in, use it and go on.

If its FILL IN lines are still blank, ask these three questions in ONE short message, then wait:

1. What's your job? (for example "compliance analyst at a bank" or "backend developer")
2. How technical are you? (a) new to this, (b) I can read code, (c) I write code every day
3. Where will you try things? (a) the Claude app, (b) Claude Code in a terminal, (c) both

Add: "Or say skip and I'll assume a curious professional who is new to this."

Use the answers for this lesson. Then, if you can edit files, offer once: "Want me to save this to me.md so I don't ask again?" If they say yes, fill in me.md's FILL IN lines with their answers in their words, and change nothing else in the file.

## Step 2. Go to the source

Do not teach from memory. Things in AI change every week.

- If the user gave a link, fetch it first.
- Search the web for the topic. Prefer, in this order: official docs, the official announcement or release notes, the original paper or spec, then well-known reference sites.
- Open 2 to 4 of the best pages. Note the date of each.
- If sources disagree or the topic is newer than they are, say so.
- If a page cannot be opened, try another good source. If none can be opened, teach from the search results you did get, keep the lesson shorter, and say at the top: "I couldn't open the full sources, so this lesson is built from search results. Check the links before relying on it."

Write a short list of facts you will teach, each with the link it came from. Do not use facts you cannot link. Projects and "use it tomorrow" advice are your suggestions, so they need no link, but they must not state new facts.

## Step 3. Write the lesson

Follow [teaching-style.md](teaching-style.md) exactly, shaped by me.md. Also plan the hero illustration for the visual page now (see [visual.md](visual.md)): what it draws, its steps, and how each part maps to a fact. Include that plan in what the fact-checker sees.

## Step 4. Fact-check

This step is required. Hand the `fact-checker` agent from this plugin the lesson and the fact list with links. Apply every fix it marks REQUIRED. If agents are not available here (for example in claude.ai chat), check each claim against its link yourself.

## Step 5. Make the visual page

Always do this. Follow [visual.md](visual.md) and meet the standard of [examples/mitochondria.html](examples/mitochondria.html): design a page for this subject, with one interactive illustration of the real mechanism, and check your own work before handing it over. Save it as `learn-it-<short-topic>.html`.

## Step 6. Hand it over

Show the lesson. Under it, one line: "Fact-checked against N sources, as of <today's date>." Then give the path of the visual page and say: "Open it in your browser and step through the picture, then take the quiz." In the Claude app, show the page as an HTML artifact. End with: "Say `/learn-it:quiz` when you're ready to test yourself, or ask me to go deeper on any part."

FILL IN (optional): add a step for your team, for example "save the lesson to `lessons/<topic>.md`".
