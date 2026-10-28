#!/usr/bin/env bash
# learn-it hook: after Claude writes a lesson page, save a dated copy in lessons/.
# Runs after every Write. Ignores every file that is not a learn-it-*.html page.
# It never blocks Claude: it always exits 0.

input="$(cat)"

# Find the path of the file Claude just wrote.
file="$(printf '%s' "$input" | sed -n 's/.*"file_path" *: *"\([^"]*\)".*/\1/p')"

case "$(basename "$file")" in
  learn-it-*.html) ;;   # a lesson page: keep going
  *) exit 0 ;;          # anything else: do nothing
esac

[ -f "$file" ] || exit 0

lessons="${CLAUDE_PROJECT_DIR:-$PWD}/lessons"
mkdir -p "$lessons"
cp "$file" "$lessons/$(date +%Y-%m-%d)-$(basename "$file")"

# FILL IN (optional): also copy lessons to a shared team folder.
exit 0
