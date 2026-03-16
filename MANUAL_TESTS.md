# Manual Tests — promptithesis

This document describes manual test cases that verify all repository content is
correct, complete, and consistent. These tests are written to be executable by
a human reviewer or an AI agent performing end-to-end validation.

---

## 1. Repository Structure

**Goal:** Verify all expected files are present and no unexpected files exist.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1.1 | List all files in the repository root. | `README.md`, `.AGENTS`, `MANUAL_TESTS.md` are present. No source code, build artifacts, or dependency directories exist. |
| 1.2 | Confirm no hidden files other than `.git` and `.AGENTS` are present. | Only `.git/` and `.AGENTS` appear as hidden entries. |

---

## 2. README.md — Content Completeness

**Goal:** Verify that `README.md` contains every prompt category and all
individual prompts listed in the project spec.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 2.1 | Open `README.md` and read the top-level heading. | Heading is `# promptithesis`. |
| 2.2 | Verify a **Purpose** section exists and describes the project goal. | Section is present and explains the prompt-collection goal. |
| 2.3 | Verify a **Code Review** section exists under `## Prompt Collection`. | Section heading `### Code Review` is present. |
| 2.4 | Confirm the following three code-review prompts are present (exact wording may vary but meaning must match): | All three blockquotes appear. |
| | • "Perform a code review of this repo. Highlight any linter issues, or deviations from best practices." | ✓ |
| | • "Review this code base and suggest any fixes or enhancements, particularly those necessary to service the goals of the project." | ✓ |
| | • "Perform an adversarial code review of this repo." | ✓ |
| 2.5 | Confirm each code-review prompt has a nested follow-up prompt: "Create a todo list of these ideas and implement all the suggested improvements." | All three nested `> >` prompts are present. |
| 2.6 | Verify an **Architecture** section exists with the architecture-review prompt and its follow-up. | Section and both prompts present. |
| 2.7 | Verify a **Testing** section exists with: | Both prompts present. |
| | • "Review test coverage and ensure we are at 100%, and gate at this threshold." | ✓ |
| | • "Review the tests and make sure they are meaningful and representative." | ✓ |
| 2.8 | Verify a **Documentation** section exists with: | Both prompts present. |
| | • "Create a .AGENTS file for this repo laying out the requirements, build hints, etc." | ✓ |
| | • "Update the readme to reflect the current state of the project." | ✓ |
| 2.9 | Verify an **End-to-End Verification** section exists with the manual-tests prompt. | Section and prompt present. |
| 2.10 | Verify a **Contributing** section exists at the end of the file. | Section is present. |

---

## 3. README.md — Formatting

**Goal:** Verify that `README.md` follows consistent Markdown formatting.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 3.1 | Check that every section under `## Prompt Collection` uses `###` headings. | All subsections use `###`. |
| 3.2 | Check that every primary prompt is wrapped in a `>` blockquote. | All primary prompts use `>`. |
| 3.3 | Check that every follow-up prompt is wrapped in a `> >` nested blockquote immediately below its parent. | All follow-up prompts use `> >`. |
| 3.4 | Check that prompts are separated by horizontal rules (`---`). | `---` separators appear between distinct prompt groups. |
| 3.5 | Verify there are no broken Markdown links. | No `[text](url)` entries point to non-existent anchors or URLs. |

---

## 4. .AGENTS — Content Completeness

**Goal:** Verify that `.AGENTS` contains all required guidance sections.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 4.1 | Open `.AGENTS` and confirm it starts with a top-level heading. | `# .AGENTS — Agent Guidance for promptithesis` (or equivalent). |
| 4.2 | Verify a **Project Overview** section describes the repo type and purpose. | Section is present. |
| 4.3 | Verify a **Repository Structure** section lists all current files with brief descriptions. | All three files (`README.md`, `.AGENTS`, `MANUAL_TESTS.md`) are listed. |
| 4.4 | Verify a **Goals** section outlines what the project aims to achieve. | Section is present. |
| 4.5 | Verify a **Contribution Guidelines for Agents** section explains formatting rules and what not to add. | Section is present and covers Markdown format and the "no source code" rule. |
| 4.6 | Verify a **Linting & Validation** section describes how to validate the repo. | Section is present and references `MANUAL_TESTS.md`. |
| 4.7 | Confirm the `.AGENTS` file itself is valid plain text with no binary or non-UTF-8 content. | File opens cleanly in any text editor. |

---

## 5. MANUAL_TESTS.md — Self-Referential Check

**Goal:** Verify that this file is complete and references the correct file names.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 5.1 | Open `MANUAL_TESTS.md` and confirm it contains at least five numbered test sections. | Sections 1 through 5 are present. |
| 5.2 | Confirm every file referenced in this document (`README.md`, `.AGENTS`, `MANUAL_TESTS.md`) exists in the repository. | All three files exist. |
| 5.3 | Confirm this file uses consistent table formatting (header row + separator row + data rows). | All tables are properly formatted. |

---

## 6. Cross-File Consistency

**Goal:** Verify that all three files are consistent with each other.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 6.1 | Compare the file list in `.AGENTS` → Repository Structure with the actual files present. | They match exactly. |
| 6.2 | Confirm that the prompt categories in `README.md` correspond to the sections described in `.AGENTS` contribution guidelines. | Categories align. |
| 6.3 | Confirm that `MANUAL_TESTS.md` covers every file mentioned in `.AGENTS` → Repository Structure. | All files are tested. |
