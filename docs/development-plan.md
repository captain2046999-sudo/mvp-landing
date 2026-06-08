# Personal AI Server Landing Page Development Plan

## 1. Current Project State

Repository:

- GitHub: `captain2046999-sudo/mvp-landing`
- Default branch: `main`
- Current page files: `index.html`, `style.css`, `script.js`
- Current page status: placeholder MVP page, not yet aligned with PRD V2.1

The project has a canonical GitHub Issue backlog:

- Issue #2: Migrate PRD and establish project baseline
- Issue #3: Create static landing page shell
- Issue #4: Implement Founding User application form
- Issue #5: Add FAQ accordion and copy guardrails
- Issue #6: Add analytics event hooks
- Issue #7: Visual QA and launch checklist

Issue #1 is a test issue and is not part of the official implementation sequence.

---

## 2. Product Modules

### Content Modules

- Hero positioning
- Local model/workflow matrix
- 128GB unified memory explanation
- Mini PC differentiation section
- Preloaded AI stack
- Hardware support section
- Audience fit section
- Wrong-fit clarification
- Founding User Program form
- FAQ
- Final CTA

### Frontend Modules

- Single-page layout
- Responsive navigation
- Section components
- CTA buttons
- Model/workflow table
- Comparison table
- Application form
- FAQ accordion
- Analytics event hooks

### Data Capture Modules

- Early access form fields
- Budget validation
- Demo interest capture
- Lead quality signals
- Placeholder integration for future Tally, Typeform, Airtable, Notion CRM, or custom backend

### Measurement Modules

- CTA click tracking
- Scroll depth tracking
- Section visibility tracking
- FAQ expand tracking
- Budget option tracking
- Form submission tracking

### QA Modules

- Desktop layout review
- Mobile layout review
- Copy guardrail review
- Accessibility basics
- Form validation
- Analytics event sanity checks
- Page performance check

---

## 3. Development Phases

### Phase 1: Project Baseline

Goal:

Move the PRD, development plan, and QA checklist into the GitHub repository so future implementation is traceable.

Deliverables:

- `README.md`
- `docs/prd-v2.1.md`
- `docs/development-plan.md`
- `docs/qa-launch-checklist.md`

Acceptance Criteria:

- PRD V2.1 exists in the repository
- Development plan uses the actual GitHub Issue numbers
- QA checklist is a pending launch-readiness template, not a false pass report
- A new collaborator can understand the project status and next issue

GitHub Issue:

- #2

### Phase 2: Static MVP Landing Page

Goal:

Replace the placeholder page with a working single-page MVP that follows PRD V2.1.

Deliverables:

- Static HTML landing page
- Responsive CSS
- Page sections aligned with PRD V2.1

Acceptance Criteria:

- Hero says `Run Large AI Models Locally`
- AMD does not appear in the hero
- Page includes all required sections
- CTA uses `Apply for Early Access`
- Mobile layout is readable and usable

GitHub Issue:

- #3

### Phase 3: Form And Validation Flow

Goal:

Implement a realistic founding user application flow that captures lead quality.

Deliverables:

- Early access form
- Required fields
- Budget selection
- Demo interest field
- Success state
- Event-ready field structure

Acceptance Criteria:

- Form captures email, role, setup, models, use case, spend, budget, and demo interest
- Invalid email is rejected
- Submit button shows success state
- Budget choice can be tracked

GitHub Issue:

- #4

### Phase 4: FAQ And Copy Guardrails

Goal:

Add FAQ behavior and ensure the page avoids unsupported claims.

Deliverables:

- FAQ accordion
- 70B-class wording guardrails
- RTX 5090 wrong-fit clarification
- Cloud GPU, agents, and RAG answers

Acceptance Criteria:

- FAQ opens and closes
- RTX 5090 comparison is present
- 70B-class wording is cautious
- No `unlimited AI` claim

GitHub Issue:

- #5

### Phase 5: Analytics And Conversion Readiness

Goal:

Make the MVP measurable before traffic testing.

Deliverables:

- CTA click events
- Form submit event
- FAQ expand event
- Budget selection event
- Section view event placeholders
- Scroll depth events

Acceptance Criteria:

- All PRD-required event names exist in code
- Events can be inspected in browser console
- Future GA4/GTM integration can reuse the same names

GitHub Issue:

- #6

### Phase 6: QA, Review, And Launch Prep

Goal:

Verify the MVP is suitable for first validation traffic.

Deliverables:

- Visual QA
- Mobile responsive review
- Copy guardrail review
- Form validation review
- Analytics event sanity check
- Launch checklist update

Acceptance Criteria:

- No chip-first positioning
- No unsupported absolute performance claims
- No ecommerce/cart language
- Wrong-fit section is present
- Page is ready for no-code form or backend integration

GitHub Issue:

- #7

---

## 4. GitHub Issue Backlog

### Issue #2: Migrate PRD and establish project baseline

Priority: P0

Background:

The Personal AI Server landing page has PRD V2.1 and a local development plan. The repository needs source-of-truth documents and a clear baseline structure before feature development starts.

Implementation Scope:

- Add PRD V2.1 to repository documentation
- Add the development plan/backlog to repository documentation
- Add launch/QA checklist
- Establish the initial project structure for the landing page MVP
- Document local development assumptions and recommended commands

Out Of Scope:

- Full landing page UI implementation
- Form backend integration
- Analytics provider integration
- Paid traffic setup

Acceptance Criteria:

- PRD V2.1 exists in the repository
- Development plan/backlog exists in the repository
- Project baseline can be understood by a new collaborator
- Future commits can reference the PRD and Issue backlog

Dependencies:

- None

Parallelizable:

No

### Issue #3: Create static landing page shell

Priority: P0

Background:

The PRD requires a single-page landing page for validating Personal AI Server demand.

Implementation Scope:

- Replace the placeholder landing page with a PRD-aligned static page
- Add all major page sections
- Add responsive layout structure
- Use PRD V2.1 copy

Out Of Scope:

- Real backend form submission
- Payment or ecommerce functionality
- Final product imagery

Acceptance Criteria:

- Page has Hero, model matrix, 128GB memory section, differentiation, AI stack, hardware, audience, wrong-fit, founding user form, FAQ, and final CTA
- AMD is not mentioned in the hero
- CTA is `Apply for Early Access`

Dependencies:

- Issue #2

Parallelizable:

No

### Issue #4: Implement Founding User application form

Priority: P0

Background:

The MVP must validate demand quality, not only collect emails.

Implementation Scope:

- Email field
- Role field
- Current AI setup field
- Desired models field
- Main use case field
- Monthly spend field
- Budget field
- Demo interest field
- Client-side validation
- Success state

Out Of Scope:

- Real CRM integration
- Email automation
- Calendar API integration

Acceptance Criteria:

- Form captures all lead-quality fields
- Budget options match PRD
- Demo interest is captured
- Invalid email is rejected

Dependencies:

- Issue #3

Parallelizable:

No

### Issue #5: Add FAQ accordion and copy guardrails

Priority: P1

Background:

The FAQ must answer the highest-risk questions around 70B-class models, RTX 5090 comparison, cloud GPU alternatives, agents, and RAG.

Implementation Scope:

- Add FAQ accordion behavior
- Include all PRD FAQ items
- Keep guarded language around model support
- Include wrong-fit clarification

Out Of Scope:

- Live support chat
- Full knowledge base

Acceptance Criteria:

- RTX 5090 comparison is present
- 70B-class wording is cautious
- No `unlimited AI` claim

Dependencies:

- Issue #3

Parallelizable:

Yes, after shell exists

### Issue #6: Add analytics event hooks

Priority: P1

Background:

The MVP must measure conversion behavior before traffic testing.

Implementation Scope:

- CTA click events
- Form submit event
- FAQ expand event
- Budget selection event
- Section view event placeholders
- Scroll depth events

Out Of Scope:

- Real GA4 or GTM setup
- Pixel installation

Acceptance Criteria:

- Required analytics events exist
- Future GTM integration can use current event names
- Events appear in browser console during QA

Dependencies:

- Issue #3
- Issue #4
- Issue #5

Parallelizable:

Partially

### Issue #7: Visual QA and launch checklist

Priority: P1

Background:

Before launching traffic tests, the page must be checked for positioning, usability, and conversion readiness.

Implementation Scope:

- Browser visual review
- Mobile responsive review
- Copy guardrail review
- Form validation review
- Analytics event sanity check
- Launch checklist update

Out Of Scope:

- Full user testing
- Paid traffic campaign setup

Acceptance Criteria:

- Page does not look like a generic hardware store
- All CTA paths work for MVP
- Form success state works
- No major layout issues

Dependencies:

- Issue #3
- Issue #4
- Issue #5
- Issue #6

Parallelizable:

No

---

## 5. Recommended Implementation Order

1. Issue #2: Migrate PRD and establish project baseline
2. Issue #3: Create static landing page shell
3. Issue #4: Implement Founding User application form
4. Issue #5: Add FAQ accordion and copy guardrails
5. Issue #6: Add analytics event hooks
6. Issue #7: Visual QA and launch checklist

---

## 6. Commit And Review Rules

- Work one GitHub Issue at a time unless dependencies clearly allow parallel work.
- Keep commits focused on the active Issue.
- Reference the Issue number in commit messages.
- Run the relevant tests or manual checks before marking an Issue complete.
- Use an independent review step before closing an Issue.
- Do not mix unrelated refactors into an Issue commit.
