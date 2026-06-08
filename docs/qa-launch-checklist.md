# Personal AI Server MVP QA And Launch Checklist

## 1. QA Scope

This checklist is the launch-readiness template for the Personal AI Server landing page MVP.

Current status:

- Issue #2 baseline documentation: in progress
- Issue #3 static landing page shell: pending
- Issue #4 founding user form: pending
- Issue #5 FAQ and copy guardrails: pending
- Issue #6 analytics hooks: pending
- Issue #7 final QA pass: pending

This checklist must not be marked as passed until the implementation issues are complete and reviewed.

---

## 2. Files To Review

Baseline documents:

- `README.md`
- `docs/prd-v2.1.md`
- `docs/development-plan.md`
- `docs/qa-launch-checklist.md`

Landing page files after implementation:

- `index.html`
- `style.css`
- `script.js`

Additional assets may be added in later issues. They should be listed here when introduced.

---

## 3. Automated Static Checks

Status:

Pending

Checks to run after Issues #3-#6:

- Hero H1 is `Run Large AI Models Locally`
- Hero does not mention AMD, Radeon, TOPS, or chip-first messaging
- Primary CTA is `Apply for Early Access`
- Model matrix includes LLM, Agent, RAG, Image, Voice, Vision, and Automation workflows
- 128GB unified memory section is present
- `Not Another Mini PC Listing` section is present
- Preloaded stack includes Ollama, Open WebUI, ComfyUI, and Pinokio
- AMD Ryzen AI Max+ 395 appears only after the hero
- Wrong-fit section includes RTX 5090 / CUDA image-generation clarification
- FAQ includes the required high-risk questions
- Form includes email, role, setup, models, use case, monthly spend, budget, and demo interest
- Analytics hooks exist for CTA clicks, budget selection, form submit, FAQ expand, section view, and scroll depth

---

## 4. Manual Visual QA

Status:

Pending

Desktop checks:

- Page does not look like a generic hardware store
- Hero communicates local large-model value within the first viewport
- CTA buttons are visible and clearly tied to early access or demo
- Hardware details are visually secondary to solution positioning
- Tables are readable without horizontal clutter
- Form area feels like a founding user program, not ecommerce checkout

Mobile checks:

- Hero text wraps cleanly
- CTA buttons remain easy to tap
- Model/workflow table remains readable or becomes a mobile-friendly layout
- Form fields are usable on small screens
- FAQ accordion is easy to open and close
- No section overlaps, clipped text, or layout shift

---

## 5. Copy Guardrail QA

Status:

Pending

Required checks:

- No chip-first hero messaging
- No unsupported claim that a specific 70B model always runs well
- Uses cautious wording such as `70B-class quantized workflows`
- No `unlimited AI` claim
- No direct claim that the product beats RTX 5090
- Wrong-fit section explicitly says a dedicated NVIDIA workstation may be better for fastest CUDA image generation
- AMD Ryzen AI Max+ 395 is used as hardware support, not as the main product identity
- Page avoids ecommerce/cart language during the validation phase

---

## 6. Form QA

Status:

Pending

Required checks:

- Required fields block empty submission
- Invalid email blocks submission
- Valid submission shows a success state
- Budget options match PRD V2.1
- Demo interest is captured
- Form copy explains the Founding User Program
- Form does not imply immediate checkout

---

## 7. Analytics QA

Status:

Pending

Required event checks:

- `view_hero`
- `click_apply_hero`
- `click_demo_hero`
- `view_model_matrix`
- `view_memory_section`
- `view_stack_section`
- `select_budget_range`
- `submit_early_access`
- `click_book_demo`
- `faq_expand`
- `scroll_50`
- `scroll_90`

Acceptance:

- Events can be inspected in the browser console during MVP QA
- Event names are stable enough for future GA4/GTM integration
- Scroll events do not fire repeatedly

---

## 8. Accessibility Basics

Status:

Pending

Required checks:

- Page has one clear H1
- Buttons and links have clear names
- Form inputs have labels
- FAQ controls are keyboard-accessible enough for MVP
- Color contrast is readable
- Focus states are visible or browser-default acceptable

---

## 9. Performance And Launch Readiness

Status:

Pending

Required checks:

- Page loads without console errors
- No unnecessary heavy JavaScript
- Images are compressed if added
- No third-party scripts are added without a clear validation need
- Page can be hosted as a static site

---

## 10. Final Launch Gate

The MVP is ready for first validation traffic only when:

- Issues #3-#6 are complete
- Issue #7 QA pass is complete
- No blocking visual, form, copy, or analytics issues remain
- The page clearly validates Personal AI Server demand rather than selling a generic workstation
