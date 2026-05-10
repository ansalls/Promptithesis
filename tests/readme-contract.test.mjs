import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

function getPromptCollection(markdown) {
  const start = markdown.match(/^## Prompt Collection\s*$/m);
  assert.ok(start, "README must include ## Prompt Collection");

  const tail = markdown.slice(start.index + start[0].length);
  const nextTopLevel = tail.match(/^## /m);
  return nextTopLevel ? tail.slice(0, nextTopLevel.index) : tail;
}

function getSectionBodies(collection) {
  const sections = [...collection.matchAll(/^### .+$/gm)];
  assert.ok(sections.length > 0, "prompt collection must contain ### sections");

  return sections.map((section, index) => {
    const next = sections[index + 1];
    return collection.slice(section.index + section[0].length, next?.index).trim();
  });
}

test("README keeps the dashboard anchor sections at the top", () => {
  const lines = readme.split(/\r?\n/);
  let nextContentLine = 1;

  assert.equal(lines[0], "# Promptithesis");
  while (lines[nextContentLine] === "") {
    nextContentLine += 1;
  }

  if (lines[nextContentLine]?.startsWith("> ")) {
    nextContentLine += 1;
  }

  while (lines[nextContentLine] === "") {
    nextContentLine += 1;
  }

  const summaryIndex = nextContentLine;
  const capabilitiesIndex = lines.indexOf("## Capabilities");
  const promptCollectionIndex = lines.indexOf("## Prompt Collection");

  assert.equal(lines[summaryIndex], "## Summary");
  assert.ok(capabilitiesIndex > summaryIndex);
  assert.ok(promptCollectionIndex > capabilitiesIndex);
});

test("each prompt has promptithesis terminal metadata", () => {
  const collection = getPromptCollection(readme);
  const sectionBodies = getSectionBodies(collection);
  let promptCount = 0;

  for (const sectionBody of sectionBodies) {
    const prompts = sectionBody
      .split(/^---\s*$/m)
      .map((prompt) => prompt.trim())
      .filter(Boolean);

    for (const prompt of prompts) {
      promptCount += 1;
      assert.match(prompt, /^<!-- promptithesis\n/);

      const metadataEnd = prompt.indexOf("-->");
      assert.notEqual(metadataEnd, -1, "metadata comment must be closed");

      const metadata = prompt.slice("<!-- promptithesis".length, metadataEnd);
      assert.match(metadata, /(?:^|\n)use-cases: terminal\s*(?:\n|$)/);
      assert.match(metadata, /(?:^|\n)tags: .+\s*(?:\n|$)/);
      assert.match(metadata, /(?:^|\n)owner: promptithesis\s*(?:\n|$)/);
      assert.doesNotMatch(
        metadata,
        /(?:^|\n)(?:use-cases|contexts|atlas-contexts): .*\b(?:all|inbox)\b/,
      );
    }
  }

  assert.equal(promptCount, 9);
});
