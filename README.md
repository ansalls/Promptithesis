# Promptithesis

> A curated collection of high-signal prompts for AI-assisted software development workflows.

## Summary

`Promptithesis` gathers reusable, composable prompts that reliably produce valuable results when working with AI coding agents. Each prompt is designed to be actionable, iterative, and thorough.

## Capabilities

- **Code review prompts** — general, goal-oriented, and adversarial code reviews paired with implementation follow-through.
- **Architecture review prompts** — sanity-check application architecture and surface refactors worth doing now.
- **Testing prompts** — drive coverage to 100% with a gate, and audit existing tests for meaning and representativeness.
- **Documentation prompts** — generate `AGENTS.md` scaffolding and refresh README content to match the current state of a project.
- **End-to-end verification prompts** — produce comprehensive manual test plans suitable for a user agent to execute against a production deployment.

## Prompt Collection

### Code Review

1. Perform a code review of this repo. Highlight any linter issues, or deviations from best practices.
2. Create a todo list of these ideas and implement all the suggested improvements.

---

1. Review this code base and suggest any fixes or enhancements, particularly those necessary to service the goals of the project.
2. Create a todo list of these ideas and implement all the suggested improvements.

---

1. Perform an adversarial code review of this repo.
2. Create a todo list of these ideas and implement all the suggested improvements.

---

### Architecture

1. Review the architecture of the application and see if it still makes sense, or if it would be beneficial to modify it now before moving further.
2. Create a todo list of these ideas and implement all the suggested improvements.

---

### Testing

Review test coverage and ensure we are at 100%, and gate at this threshold.

---

Review the tests and make sure they are meaningful and representative.

---

### Documentation

Create an .AGENTS file for this repo laying out the requirements, build hints, etc.

---

Update the README to reflect the current state of the project.

---

### End-to-End Verification

Write a detailed list of manual tests that will ensure all endpoint behavior is verified as valid from a full end-to-end perspective for a production user. This should be detailed enough for a user agent to perform and validate, and fully comprehensive of all supported behaviors and functions.

---

## Contributing

Feel free to open a PR to add prompts that have proven useful in your own workflows. I'll give them a run on my next time around and merge them if they prove useful. Please follow the existing format and group prompts under the most relevant section. Do feel free to add additional sections if the suggestions don't obviously group to an existing section.
