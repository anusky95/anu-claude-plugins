#!/usr/bin/env node
// learn-it glossary connector: a tiny local MCP server over glossary.json.
// No network, no packages to install. Claude starts it and talks to it over stdin and stdout.
// Tools: list_terms, lookup_term.

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const GLOSSARY = path.join(__dirname, "glossary.json");

function loadTerms() {
  return JSON.parse(fs.readFileSync(GLOSSARY, "utf8")).terms || {};
}

const TOOLS = [
  {
    name: "list_terms",
    description: "List every term in the team glossary.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "lookup_term",
    description:
      "Look up what a team term means, in the team's own words. Use it before explaining any team jargon.",
    inputSchema: {
      type: "object",
      properties: { term: { type: "string", description: "The term, for example 'the ledger'" } },
      required: ["term"],
    },
  },
];

function callTool(name, args) {
  const terms = loadTerms();
  if (name === "list_terms") {
    return Object.keys(terms).join("\n") || "The glossary is empty.";
  }
  if (name === "lookup_term") {
    const wanted = String(args.term || "").trim().toLowerCase();
    const match = Object.keys(terms).find((t) => t.toLowerCase() === wanted);
    return match
      ? `${match}: ${terms[match]}`
      : `"${args.term}" is not in the team glossary. Say so, and do not guess what it means here.`;
  }
  throw new Error(`Unknown tool: ${name}`);
}

function reply(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
}

function fail(id, code, message) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }) + "\n");
}

readline.createInterface({ input: process.stdin }).on("line", (line) => {
  if (!line.trim()) return;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return fail(null, -32700, "Parse error");
  }
  const { id, method, params = {} } = msg;
  if (id === undefined) return; // a notification: nothing to answer

  switch (method) {
    case "initialize":
      return reply(id, {
        protocolVersion: params.protocolVersion || "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "learn-it-glossary", version: "1.0.0" },
      });
    case "ping":
      return reply(id, {});
    case "tools/list":
      return reply(id, { tools: TOOLS });
    case "tools/call":
      try {
        const text = callTool(params.name, params.arguments || {});
        return reply(id, { content: [{ type: "text", text }] });
      } catch (err) {
        return reply(id, { content: [{ type: "text", text: err.message }], isError: true });
      }
    default:
      return fail(id, -32601, `Method not found: ${method}`);
  }
});
