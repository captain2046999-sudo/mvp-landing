# Personal AI Server Landing Page MVP

This repository contains the MVP landing page for validating demand for a premium local AI infrastructure product.

The project is currently in the validation stage. The goal is not immediate ecommerce checkout. The goal is to test whether AI power users are interested in a Personal AI Server and willing to apply for early access, book a demo, and express price intent.

## Positioning

Personal AI Server

Run Large AI Models Locally. Own Your AI. No Cloud GPU Required.

The product is positioned as local AI infrastructure for LLMs, agents, RAG, image generation, voice models, and private AI workflows.

## Validation Goals

- 100 early access applications
- 10 demo call bookings
- 10+ users indicating budget above USD 3,299
- 5%+ landing page form completion rate
- 1%+ demo CTA click rate

## Repository Structure

```text
.
|-- docs/
|   |-- prd-v2.1.md
|   |-- development-plan.md
|   `-- qa-launch-checklist.md
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

The existing `index.html`, `style.css`, and `script.js` are the initial placeholder page. The actual Personal AI Server landing page implementation starts in Issue #3.

## Source Documents

- `docs/prd-v2.1.md`: product requirements, positioning, page copy, and wireframe
- `docs/development-plan.md`: issue backlog, phases, and implementation order
- `docs/qa-launch-checklist.md`: MVP QA and launch readiness checklist

## Development Order

1. Issue #2: Migrate PRD and establish project baseline
2. Issue #3: Create static landing page shell
3. Issue #4: Implement Founding User application form
4. Issue #5: Add FAQ accordion and copy guardrails
5. Issue #6: Add analytics event hooks
6. Issue #7: Visual QA and launch checklist

## Local Development

The current placeholder page can be opened directly in a browser:

```text
index.html
```

No build step is required yet. If a framework is introduced later, update this README with install, run, test, and deploy commands.

## Messaging Guardrails

- Do not lead with AMD, TOPS, or chip-first messaging in the hero.
- Do not position the page as a generic mini PC or workstation store.
- Do not claim unlimited AI or guaranteed model performance without validation.
- Use guarded language such as "70B-class quantized workflows" and "validated configurations."
- Make 128GB unified memory and local AI infrastructure the core differentiation.

## Issue Workflow

Each development issue should be implemented separately, reviewed, tested, and committed with a message that references the issue number.
