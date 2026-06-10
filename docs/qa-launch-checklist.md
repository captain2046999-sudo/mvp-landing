# Personal AI Server MVP QA And Launch Checklist

## 1. QA Scope

This checklist tracks launch readiness for the Personal AI Server landing page MVP.

Current implementation status:

- Issue #2 baseline documentation: complete
- Issue #3 static landing page shell: complete
- Issue #4 founding user form: complete
- Issue #5 FAQ and copy guardrails: complete
- Issue #6 analytics hooks: complete
- Issue #7 final QA pass: in progress
- Issue #9 Vercel deploy and hosted QA: in progress

Launch status:

- Static launch-readiness checks: passed locally
- Vercel production deployment: passed
- Hosted fetch-level QA: passed
- Hosted desktop visual QA: pending manual browser pass
- Hosted mobile visual QA: pending manual browser pass
- Hosted form interaction QA: pending manual browser pass
- First paid traffic: not approved until hosted browser QA is complete

Production URL:

- `https://mvp-landing-iota.vercel.app`

Deployment evidence:

- Project: `mvp-landing`
- Project ID: `prj_9ysKw3aZWSi0AvAmCOY1t9eAGKRb`
- Deployment ID: `dpl_4AeP4EcAP4DYzJH3DFHaFC5zHZZg`
- Deployment state: `READY`
- Target: `production`
- Commit: `37387ed17d9b2ae199c1953856cf26f0cd0491b5`
- Build result: completed, static build output generated in 29ms

---

## 2. Files To Review

Baseline documents:

- `README.md`
- `docs/prd-v2.1.md`
- `docs/development-plan.md`
- `docs/qa-launch-checklist.md`

Landing page files:

- `index.html`
- `style.css`
- `script.js`
- `assets/personal-ai-server-hero.jpg`

Validation files:

- `tests/issue-4-validation-checks.js`
- `tests/issue-5-validation-checks.js`
- `tests/issue-6-validation-checks.js`
- `tests/issue-7-launch-readiness-checks.js`

---

## 3. Automated Static Checks

Status:

Passed locally.

Command:

```text
node tests/issue-4-validation-checks.js
node tests/issue-5-validation-checks.js
node tests/issue-6-validation-checks.js
node tests/issue-7-launch-readiness-checks.js
```

Checks covered:

- Hero H1 is `Run Large AI Models Locally`
- Hero does not mention AMD, Radeon, Ryzen, TOPS, or chip-first messaging
- Primary CTA is `Apply for Early Access`
- Model matrix includes LLM, Agent, RAG, Image, Voice, Vision, and reasoning workflows
- 128GB unified memory section is present
- `Not Another Mini PC Listing` positioning section is present
- Preloaded stack includes Ollama, Open WebUI, ComfyUI, and Pinokio
- AMD Ryzen AI Max+ 395 appears only after solution positioning
- Wrong-fit section includes RTX 5090 / CUDA image-generation clarification
- FAQ includes the required high-risk questions
- Form includes email, role, setup, models, use case, monthly spend, budget, and demo interest
- Analytics hooks exist for CTA clicks, budget selection, form submit, FAQ expand, section view, and scroll depth
- Tally URL does not expose free-text or email answers in query parameters
- Responsive CSS includes desktop-to-mobile layout safeguards

---

## 4. Hosted Fetch-Level QA

Status:

Passed.

Checks completed:

- Production homepage returns `200 OK`
- Production homepage renders expected `Personal AI Server` HTML
- `style.css` returns `200 OK`
- `script.js` returns `200 OK`
- `assets/personal-ai-server-hero.jpg` returns `200 OK`
- Unknown path returns `404 Not Found`
- Main production domain does not return `x-robots-tag: noindex`
- Runtime logs query returned no logs for the static site window checked

Notes:

- This confirms deployment availability and static asset delivery.
- This does not replace real browser visual QA or form interaction QA.

---

## 5. Manual Visual QA

Status:

Pending manual browser pass.

Automation note:

- Chrome extension automation could list/open tabs but timed out while loading the production page.
- Chrome and Edge headless modes did not emit DOM or screenshot artifacts in this local environment.
- Therefore desktop/mobile visual QA remains a launch gate.

Desktop checks to complete on hosted URL:

- Page does not look like a generic hardware store
- Hero communicates local large-model value within the first viewport
- CTA buttons are visible and clearly tied to early access or demo intent
- Hardware details are visually secondary to solution positioning
- Tables are readable without horizontal clutter
- Form area feels like a founding user program, not ecommerce checkout

Mobile checks to complete on hosted URL:

- Hero text wraps cleanly
- CTA buttons remain easy to tap
- Model/workflow table remains readable or scrolls cleanly
- Form fields are usable on small screens
- FAQ accordion is easy to open and close
- No section overlaps, clipped text, or layout shift

---

## 6. Copy Guardrail QA

Status:

Passed by static and hosted fetch review. Recheck manually before paid traffic.

Required checks:

- No chip-first hero messaging
- No unsupported claim that a specific 70B model always runs well
- Uses cautious wording such as `70B-class quantized workflows`
- No `unlimited AI` claim
- No direct claim that the product beats RTX 5090
- Wrong-fit section explicitly says a dedicated NVIDIA workstation may be better for fastest CUDA image generation
- AMD Ryzen AI Max+ 395 is used as hardware support, not as the main product identity
- Page avoids ecommerce/cart conversion language during the validation phase

---

## 7. Form QA

Status:

Passed by static and hosted fetch checks. Browser interaction pass remains required on hosted URL.

Required browser checks:

- Required fields block empty submission
- Invalid email blocks submission
- Valid submission shows a success state
- Budget options match PRD V2.1
- Demo interest is captured
- Form copy explains the Founding User Program
- Form does not imply immediate checkout
- Official Tally submission link resolves to `https://tally.so/r/81ryAo`
- Demo booking link resolves to the configured Calendly URL

---

## 8. Analytics QA

Status:

Passed by static and hosted fetch review. Browser console sanity check remains required on hosted URL.

Required event checks:

- `view_hero`
- `click_apply_hero`
- `click_demo_hero`
- `click_apply_final`
- `click_demo_final`
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
- Event names are stable enough for GA4 and Clarity review
- Scroll events do not fire repeatedly
- PII and free-text form answers are not appended to outbound Tally URLs

---

## 9. Accessibility Basics

Status:

Passed by static review. Keyboard pass remains required on hosted URL.

Required checks:

- Page has one clear H1
- Buttons and links have clear names
- Form inputs have labels
- Form validation messages are associated with fields
- FAQ controls are keyboard-accessible enough for MVP
- Color contrast is readable
- Focus states are visible or browser-default acceptable

---

## 10. Performance And Launch Readiness

Status:

Conditionally ready for hosted manual QA. Not ready for paid traffic until hosted visual and interaction QA passes.

Required checks:

- Page loads without console errors
- No unnecessary heavy JavaScript
- Hero image is compressed enough for MVP validation
- Third-party scripts are limited to GA4 and Microsoft Clarity
- Page can be hosted as a static site

---

## 11. Final Launch Gate

The MVP is ready for first validation traffic only when:

- Issues #3-#6 are complete
- Issue #7 static launch-readiness checks pass
- Vercel production deployment is live
- Hosted fetch-level QA passes
- Hosted desktop visual QA passes
- Hosted mobile visual QA passes
- Manual form submission to Tally is verified
- Manual Calendly link is verified
- Browser console analytics sanity check is verified
- No blocking visual, form, copy, or analytics issues remain
- The page clearly validates Personal AI Server demand rather than selling a generic workstation

Current decision:

- Static MVP implementation is deployed successfully.
- Production URL is available for manual QA.
- Do not start paid traffic until hosted browser QA is completed.
