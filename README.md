# Personal AI Server Landing Page MVP

This repository contains the MVP landing page for validating demand for a premium local AI infrastructure product.

The project is currently in the validation stage. The goal is not immediate ecommerce checkout. The goal is to test whether AI power users are interested in a Personal AI Server, willing to apply for early access, and willing to express price intent.

## Positioning

Personal AI Server

Run Large AI Models Locally. Own Your AI. No Cloud GPU Required.

The product is positioned as local AI infrastructure for LLMs, agents, RAG, image generation, voice models, and private AI workflows.

## Validation Goals

- 100 qualified early access applications
- 10 qualified founding user call requests collected through the application funnel
- 10+ users indicating budget above USD 3,299
- 5%+ landing page form completion rate
- Clear evidence that AI power users understand and value 128GB unified memory for local AI workflows

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
|-- assets/
|   `-- personal-ai-server-hero.jpg
|-- tests/
|   |-- issue-4-validation-checks.js
|   |-- issue-5-validation-checks.js
|   |-- issue-6-validation-checks.js
|   `-- issue-7-launch-readiness-checks.js
`-- README.md
```

The current MVP is a static landing page with PRD-aligned copy, founding user form validation, FAQ guardrails, and production analytics hooks.

## Source Documents

- `docs/prd-v2.1.md`: product requirements, positioning, page copy, and wireframe
- `docs/development-plan.md`: issue backlog, phases, and implementation order
- `docs/qa-launch-checklist.md`: MVP QA and launch readiness checklist

## Development Order

1. Issue #2: Migrate PRD and establish project baseline - completed
2. Issue #3: Create static landing page shell - completed
3. Issue #4: Implement Founding User application form - completed
4. Issue #5: Add FAQ accordion and copy guardrails - completed
5. Issue #6: Add analytics event hooks - completed
6. Issue #7: Visual QA and launch checklist - in progress
7. Issue #9: Vercel deploy and hosted QA - in progress
8. Issue #10: Analytics and lead capture setup - in progress

Issue #1 is a test issue and is not part of the official implementation sequence.

## Local Development

The current page can be opened directly in a browser:

```text
index.html
```

No build step is required yet. If a framework is introduced later, update this README with install, run, test, and deploy commands.

## Validation Checks

Run the static validation checks after editing the page:

```text
node tests/issue-4-validation-checks.js
node tests/issue-5-validation-checks.js
node tests/issue-6-validation-checks.js
node tests/issue-7-launch-readiness-checks.js
```

The checks cover PRD positioning, FAQ guardrails, form fields, single-destination lead capture, analytics script presence, privacy-safe analytics payloads, and responsive launch-readiness basics. Hosted desktop/mobile browser QA and live analytics dashboard checks are still required before paid traffic starts.

## Lead Capture Configuration

All lead-generation CTAs use one destination only:

```text
https://tally.so/r/81ryAo
```

To change the destination later, update only `window.PAS_CONFIG.TALLY_FORM_URL` in `index.html`. `script.js` reads that value and applies it to every `data-lead-cta` and `data-tally-link` link.

The on-page qualification form captures:

- Name
- Email
- Persona
- Use case
- Budget range
- Desired model

The form submit button text is `Apply for Early Access`.

## Analytics

The page includes GA4 and Microsoft Clarity tracking for the MVP validation funnel.

- GA4 measurement ID: `G-V81RVYZK5H`
- Clarity project ID: `x3lkfxqt3i`
- Primary lead destination: `https://tally.so/r/81ryAo`

Tracked events:

| Event | Trigger | Parameters |
|---|---|---|
| `cta_click` | Any lead-generation CTA click | `location`, `button_text` |
| `form_start` | First interaction with the qualification form | none |
| `form_submit` | Valid qualification form submission | `persona`, `use_case`, `budget_range` |
| `faq_open` | FAQ item opened | `faq_id` |
| `scroll_25` | 25% page scroll depth reached | none |
| `scroll_50` | 50% page scroll depth reached | none |
| `scroll_75` | 75% page scroll depth reached | none |
| `scroll_100` | 100% page scroll depth reached | none |

Analytics payloads intentionally do not include name, email, or long free-text model answers.

## Messaging Guardrails

- Do not lead with AMD, TOPS, or chip-first messaging in the hero.
- Do not position the page as a generic mini PC or workstation store.
- Do not claim unlimited AI or guaranteed model performance without validation.
- Use guarded language such as "70B-class quantized workflows" and "validated configurations."
- Make 128GB unified memory and local AI infrastructure the core differentiation.

## Issue Workflow

Each development issue should be implemented separately, reviewed, tested, and committed with a message that references the issue number.
