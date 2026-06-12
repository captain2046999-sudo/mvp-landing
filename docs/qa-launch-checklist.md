# Personal AI Server MVP QA And Launch Checklist

## 1. QA Scope

This checklist tracks launch readiness for the Personal AI Server landing page MVP, including Issue #10 analytics and lead capture setup.

Current implementation status:

- Issue #2 baseline documentation: complete
- Issue #3 static landing page shell: complete
- Issue #4 founding user form: complete, updated for Issue #10 qualification fields
- Issue #5 FAQ and copy guardrails: complete
- Issue #6 analytics hooks: complete, updated for Issue #10 event names
- Issue #7 final QA pass: in progress
- Issue #9 Vercel deploy and hosted QA: in progress
- Issue #10 analytics and lead capture setup: implemented, live verification pending

Launch status:

- Static launch-readiness checks: scripts updated, local execution pending
- Vercel production deployment: pending redeploy verification for latest commit
- Hosted fetch-level QA: pending redeploy verification for latest commit
- GA4 Realtime QA: pending browser/dashboard confirmation
- Microsoft Clarity session QA: pending browser/dashboard confirmation
- Hosted desktop visual QA: pending manual Chrome and Edge pass
- Hosted mobile visual QA: pending manual iPhone and Android viewport pass
- Hosted form interaction QA: pending manual browser pass
- First paid traffic: not approved until hosted browser QA and analytics dashboard QA are complete

Production URLs:

- `https://syvidea.com`
- `https://www.syvidea.com`
- `https://mvp-landing-iota.vercel.app`

Analytics IDs:

- GA4 measurement ID: `G-V81RVYZK5H`
- Microsoft Clarity project ID: `x3lkfxqt3i`
- Tally lead destination: `https://tally.so/r/81ryAo`

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

## 3. Issue #10 Acceptance Checklist

GA4:

- GA4 script is present in `index.html`
- `gtag("config", "G-V81RVYZK5H")` is present
- `window.trackEvent(name, params)` wrapper is available in `script.js`
- PageView should fire from GA4 config on page load
- Realtime dashboard confirmation remains required

Microsoft Clarity:

- Official Clarity async loader is present in `index.html`
- Project ID `x3lkfxqt3i` is present
- `script.js` sends event names and safe custom properties to Clarity when available
- Session recording / heatmap dashboard confirmation remains required

CTA audit:

- All lead-generation CTA links use `https://tally.so/r/81ryAo`
- `window.PAS_CONFIG.TALLY_FORM_URL` is the single configurable destination
- No Calendly lead destination remains in the landing page funnel
- No dead lead buttons are expected after redeploy

Lead capture form:

- Required fields: name and email
- Persona single choice: AI Enthusiast, Developer, Founder, Consultant, Agency, Enterprise Team
- Use case single choice: Local LLM, AI Agent, RAG, Image Generation, Coding, Research, Other
- Budget single choice: Less than $2,000, $2,000-$3,000, $3,000-$5,000, More than $5,000
- Long text: desired model to run
- Submit button: `Apply for Early Access`

Analytics events:

- `cta_click` with `location`, `button_text`
- `form_start`
- `form_submit` with `persona`, `use_case`, `budget_range`
- `faq_open` with `faq_id`
- `scroll_25`
- `scroll_50`
- `scroll_75`
- `scroll_100`

Privacy guardrails:

- Analytics payloads do not include name, email, or free-text desired model answers
- Tally URL is not built from arbitrary form fields
- Outbound lead destination is controlled by one config value

---

## 4. Automated Static Checks

Status:

Updated, local execution pending.

Command:

```text
node tests/issue-4-validation-checks.js
node tests/issue-5-validation-checks.js
node tests/issue-6-validation-checks.js
node tests/issue-7-launch-readiness-checks.js
```

Checks covered:

- Hero H1 remains `Run Large AI Models Locally`
- Hero does not mention AMD, Radeon, Ryzen, TOPS, or chip-first messaging
- Primary CTA copy includes `Apply for Early Access`
- Model matrix includes LLM, Agent, RAG, Image, Voice, Vision, and reasoning workflows
- 128GB unified memory section is present
- `Not Another Mini PC Listing` positioning section is present
- Preloaded stack includes Ollama, Open WebUI, ComfyUI, and Pinokio
- AMD Ryzen AI Max+ 395 appears only after solution positioning
- Wrong-fit section includes RTX 5090 / CUDA image-generation clarification
- FAQ includes the required high-risk questions
- Form fields match Issue #10 lead qualification requirements
- All lead-generation CTA links resolve to the configured Tally URL
- Analytics events match the Issue #10 event inventory
- PII and free-text form answers are excluded from analytics payloads
- Responsive CSS includes desktop-to-mobile layout safeguards

---

## 5. Hosted Fetch-Level QA

Status:

Pending redeploy verification for the latest Issue #10 commits.

Required checks:

- Production homepage returns `200 OK`
- Production homepage renders expected `Personal AI Server` HTML
- `style.css` returns `200 OK`
- `script.js` returns `200 OK`
- `assets/personal-ai-server-hero.jpg` returns `200 OK`
- Unknown path returns `404 Not Found`
- Main production domain does not return `x-robots-tag: noindex`
- Source HTML contains GA4, Clarity, and `TALLY_FORM_URL`

Notes:

- Fetch-level QA confirms deployment availability and static asset delivery.
- It does not replace real browser visual QA, form interaction QA, or analytics dashboard QA.

---

## 6. Manual Browser QA

Status:

Pending manual browser pass.

Desktop checks:

- Chrome loads `https://syvidea.com` without console errors
- Edge loads `https://syvidea.com` without console errors
- Hero communicates local large-model value within the first viewport
- CTA buttons are visible and open the same Tally URL
- Hardware details remain visually secondary to solution positioning
- Tables are readable without horizontal clutter
- Form is usable and validation messages are understandable

Mobile checks:

- iPhone viewport: hero text wraps cleanly
- iPhone viewport: CTA buttons are easy to tap
- Android viewport: form fields are usable
- Android viewport: FAQ accordion is easy to open and close
- Model/workflow table remains readable or scrolls cleanly
- No section overlaps, clipped text, or layout shift

---

## 7. Form QA

Status:

Pending hosted browser interaction pass.

Required browser checks:

- Empty submission is blocked
- Invalid email is blocked
- Valid submission shows the success state
- Success state link opens `https://tally.so/r/81ryAo`
- Every lead CTA opens the same Tally URL
- There are no Calendly links in the lead funnel
- Form copy explains the Founding User Program
- Form does not imply immediate checkout

---

## 8. Analytics QA

Status:

Static implementation complete; live dashboard verification pending.

Required browser checks:

- GA4 script loads successfully
- PageView appears in GA4 Realtime
- `cta_click` appears in GA4 Realtime after clicking hero/footer/form-success CTAs
- `form_start` appears after first form interaction
- `form_submit` appears after a valid form submission
- `faq_open` appears after opening an FAQ item
- Scroll depth events fire once per threshold
- No analytics-related console errors appear
- Clarity initializes without JavaScript conflicts
- Clarity receives a session for the test visit

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

Conditionally ready for hosted manual QA. Not ready for paid traffic until hosted visual, interaction, and analytics dashboard QA pass.

Required checks:

- Page loads without console errors
- No unnecessary heavy JavaScript
- Hero image is compressed enough for MVP validation
- Third-party scripts are limited to GA4 and Microsoft Clarity
- Page can be hosted as a static site
- Clarity async loader does not block rendering
- GA4 loader does not block rendering

---

## 11. Final Launch Gate

The MVP is ready for first validation traffic only when:

- Issues #3-#6 are complete
- Issue #10 source implementation is deployed
- Static launch-readiness checks pass
- Vercel production deployment is live
- Hosted fetch-level QA passes
- Hosted desktop visual QA passes in Chrome and Edge
- Hosted mobile visual QA passes in iPhone and Android viewports
- Manual form interaction to Tally is verified
- Browser console analytics sanity check is verified
- GA4 Realtime receives pageview and configured events
- Microsoft Clarity receives at least one test session
- No blocking visual, form, copy, CTA, or analytics issues remain
- The page clearly validates Personal AI Server demand rather than selling a generic workstation

Current decision:

- Issue #10 implementation is complete in source.
- Do not start paid traffic until redeploy, browser QA, GA4 Realtime QA, and Clarity session QA are completed.
