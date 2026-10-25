---
name: quiz
description: Quiz the user on a concept or codebase they just learned, one question at a time, grading each answer and explaining it. Use when the user asks to be quizzed or tested, or says they want to check what they learned.
argument-hint: [optional topic; default is the last lesson in this conversation]
disable-model-invocation: true
---

# Learn it: quiz me

Topic: $ARGUMENTS

1. **Pick the material.** Use the most recent `/learn-it:learn` or `/learn-it:repo` lesson in this conversation. If there is none and no topic was given, ask what to be quizzed on. If a topic was given but no lesson exists, run the learn skill's Steps 1 and 2 first, quietly, so questions come from real sources.
2. **Ask 5 questions, one at a time.** Mix: 2 multiple choice, 2 "explain in your own words", 1 "what would happen if...". Get harder as they go. Do not reveal the answer before they reply.
3. **Grade each answer** as Right, Partly right, or Not yet. Say why in one or two sentences, quoting the lesson or source. Be warm and direct. Never pretend a wrong answer is right.
4. **At the end,** show the score, the one idea they should review, and one next topic to learn. Suggest the exact command, for example `/learn-it:learn <next topic>`.

Read [me.md](../learn/me.md) so questions fit the learner's level and job.

FILL IN (optional): change the mix or the number of questions to match how you teach.
