# Personal AI Server Landing Page PRD V2.1

## 0. Document Purpose

This document defines the MVP landing page for validating demand for a premium local AI infrastructure product.

The goal is not to sell a computer immediately. The goal is to validate whether AI power users are willing to apply for early access, book a demo, and express willingness to pay for a local AI server in the USD 3,299-3,999 range.

## 1. Product Definition

### Product Name

Personal AI Server

### Core Positioning

Run Large AI Models Locally. Own Your AI. No Cloud GPU Required.

### One-Sentence Description

A private local AI server for LLMs, agents, RAG, image generation, voice models, and personal AI workflows, built around large unified memory.

### What This Is

Personal AI Server is a local AI infrastructure product for AI power users who want to run larger models and private AI workflows on their own machine.

It is positioned as a solution, not as a generic mini PC, AI workstation, or overseas resale listing for AMD hardware.

### What This Is Not

- Not a generic AMD Ryzen AI Max+ 395 product page
- Not a GMKtec or Minisforum-style hardware listing
- Not a gaming PC page
- Not a pure ComfyUI or image-generation machine
- Not a cloud AI subscription replacement for every user
- Not a direct ecommerce page in the first MVP phase

## 2. Strategic Rationale

The hardware configuration has a specific strength:

- AMD Ryzen AI Max+ 395
- 128GB unified memory
- 2TB SSD
- Radeon 8060S integrated graphics

The strongest commercial story is not faster image generation. Users who only care about Flux, SDXL, CUDA, and TensorRT performance may prefer RTX 5080 or RTX 5090 workstations.

The stronger differentiation is:

- Running large quantized models locally
- Handling 70B-class model workflows where ordinary PCs hit memory limits
- Running agents and RAG systems locally
- Supporting multiple AI tools in one local environment
- Avoiding recurring cloud GPU bills
- Keeping private files, prompts, and knowledge bases on local hardware

Therefore, the product should be framed as local AI infrastructure, not as an AI Content Factory. Content generation remains a supported use case, but it should not be the only positioning.

## 3. Validation Objective

### Primary Objective

Validate whether AI power users are interested in a Personal AI Server product and willing to pay a premium price for it.

### Core Question

Will AI power users apply for early access and book demo calls for a USD 3,299-3,999 local AI server that can run large local AI workflows?

### Success Metrics

| Metric | Target |
|---|---:|
| Early access applications | 100 |
| Demo call bookings | 10 |
| Users indicating budget above USD 3,299 | 10+ |
| Landing page form completion rate | 5%+ |
| Demo CTA click rate | 1%+ |
| Model/workflow section view rate | 30%+ |
| FAQ engagement rate | 15%+ |

### Non-Goal Metrics For MVP

- Immediate sales revenue
- Add-to-cart conversion
- Checkout conversion
- SKU configuration usage
- Hardware comparison table clicks

## 4. Target Users

### Primary Audience

AI Power Users

### Target Segments

1. LocalLLaMA Power Users
   - Want to run large models locally
   - Understand quantization, memory limits, and inference tradeoffs
   - May currently rent cloud GPUs or use multiple local devices

2. AI Founders
   - Building AI products, prototypes, agents, or internal tools
   - Need predictable cost and privacy
   - May not want to upload sensitive data to cloud AI tools

3. Agent Developers
   - Running coding agents, tool-using agents, and local automation
   - Need a machine that can stay on and serve local models
   - Care about memory and system stability

4. Small AI Teams
   - Need a shared local AI environment
   - Want RAG, experimentation, demos, and internal AI workflows
   - May not yet justify a full server rack or expensive GPU rig

5. Privacy-Sensitive Builders
   - Work with documents, client data, code, private notes, or internal knowledge bases
   - Prefer local processing and local storage

### Lower Priority For MVP

- Pure TikTok creators
- Pure image generation users
- Gamers
- General office users
- Traditional workstation buyers
- Enterprise procurement departments

## 5. Core User Pain Points

### Pain 1: Cloud GPU Costs Are Unpredictable

Users may start with cloud GPUs because they are easy, but recurring costs grow when experiments, agents, or batch jobs increase.

### Pain 2: Local Machines Cannot Fit Larger Models

Many consumer PCs do not fail because the model is too slow. They fail because the model cannot fit into available memory.

### Pain 3: AI Tools Are Fragmented

Users often maintain separate workflows for local LLMs, RAG, ComfyUI, voice models, agent tools, and web UI tools. This creates setup friction and makes the machine feel like a hobby project instead of an AI workspace.

### Pain 4: Private Data Should Not Always Go To The Cloud

For code, documents, client files, and private research, users want local AI workflows.

### Pain 5: Most AI PCs Are Demo-Oriented

Many AI PC messages focus on TOPS, NPUs, and consumer demos. Power users care more about memory, model fit, workflows, and usable software.

## 6. Value Proposition

### Primary Value

Run large local AI workflows on your own machine with more control, privacy, and predictable cost than cloud-only setups.

### Secondary Values

- Use 70B-class quantized model workflows locally
- Build private RAG systems
- Run local AI agents
- Generate images and voice in the same environment
- Avoid recurring cloud GPU bills for everyday local AI work
- Start faster with a preloaded local AI stack

### Messaging Guardrails

Use:

- 70B-class quantized models
- Validated configurations
- Local AI workflows
- Preloaded AI stack
- No recurring cloud GPU bills for local workflows
- No per-generation cloud limits

Avoid:

- Guaranteed "runs Qwen 70B" without test context
- "Beats RTX 5090"
- "Unlimited AI"
- "No limits" without qualification
- "AMD is the main value"
- "World's best AI workstation"

## 7. MVP Landing Page Information Architecture

Section order:

1. Hero
2. What You Can Run Locally
3. Why 128GB Unified Memory Matters
4. Local AI Infrastructure, Not Another Mini PC
5. Preloaded Local AI Stack
6. Hardware Behind It
7. Who It Is For
8. Who It Is Not For
9. Founding User Program
10. FAQ
11. Final CTA

## 8. Complete Landing Page Copy

### Section 1: Hero

Purpose:

Make the user immediately understand the result: running large local AI workflows on their own machine. Do not lead with the chip.

H1:

Run Large AI Models Locally

Subheadline:

Run 70B-class quantized models, DeepSeek-style reasoning workflows, AI agents, private RAG, image generation, and voice models on your own machine.

Supporting lines:

Own your AI workspace.

No recurring cloud GPU bills.

No per-generation cloud limits.

No private data uploaded by default.

Primary CTA:

Apply for Early Access

Secondary CTA:

Book a Private Demo

Trust microcopy:

Founding user program for AI power users, founders, agent builders, and small AI teams.

Hero visual direction:

Show a premium local AI server/workstation on a desk or studio setup, with UI panels suggesting local LLM chat, agent task runner, RAG knowledge base, and model dashboard.

Avoid chip-only hero, abstract AI waves, gaming PC RGB aesthetic, and ecommerce product-card layout.

### Section 2: What You Can Run Locally

Title:

One Local Machine. Multiple AI Workflows.

Subtitle:

Personal AI Server is designed for local LLMs, agents, private knowledge bases, image generation, voice models, and multimodal experiments.

| Type | Recommended Models / Tools | MVP Status |
|---|---|---|
| LLM | Qwen3 32B | Testing |
| LLM | Qwen3 70B-class quantized workflows | Testing |
| Reasoning | DeepSeek distill / DeepSeek-style workflows | Planned validation |
| Agent | OpenHands, local coding agents | Planned validation |
| RAG | Open WebUI, private knowledge base | Testing |
| Image | Flux, SDXL | Testing |
| Voice | CosyVoice, GPT-SoVITS | Planned validation |
| Vision | Qwen-VL | Planned validation |
| Automation | Local AI workflows, multi-agent tasks | Planned validation |

Disclaimer:

Model support depends on configuration, quantization, software version, and workflow settings. Verified test results will be shared with founding users before final purchase decisions.

### Section 3: Why 128GB Unified Memory Matters

Title:

Built For Models That Ordinary PCs Cannot Fit

Body:

For local AI, memory is often the real bottleneck. Many AI machines are fast enough for demos but limited when you try to run larger models, long-context workflows, RAG systems, or multiple AI tools at the same time.

Personal AI Server is designed around large unified memory, giving local AI builders more room for large quantized models, private knowledge bases, agents, and multi-tool workflows.

Key points:

- Run larger local model workflows
- Keep RAG, LLM, and agent tools in one environment
- Work with private documents and datasets locally
- Reduce dependence on cloud GPU rentals
- Build an always-available personal AI workspace

Highlight:

Most AI PCs are built for demos. Personal AI Server is built for real local AI workflows.

### Section 4: Local AI Infrastructure, Not Another Mini PC

Title:

Not Another Mini PC Listing

Body:

You are not buying a chip. You are building your own local AI infrastructure.

Generic mini PC pages lead with CPU names, TOPS numbers, and product photos. Personal AI Server starts with the workloads AI power users actually care about: local models, agents, RAG, image generation, voice workflows, and private data.

| Generic Mini PC Store | Personal AI Server |
|---|---|
| Hardware specs first | AI workflows first |
| You configure everything | Preloaded local AI stack |
| Generic PC positioning | Local AI infrastructure positioning |
| Competes on price | Competes on AI capability and setup quality |
| Focuses on chip names | Focuses on model and workflow outcomes |

Highlight:

The product is not the processor. The product is the local AI system you can actually use.

### Section 5: Preloaded Local AI Stack

Title:

Preloaded Local AI Stack

Subtitle:

Skip the setup pain. Start with a working local AI environment designed for power users.

Included stack:

- Ollama
- Open WebUI
- ComfyUI
- Pinokio
- Local model management
- Private RAG workspace
- Agent tool setup
- Image workflow templates
- Voice workflow templates
- Setup guide
- Optional onboarding call

Body:

Most local AI setups require hours of installation, driver checks, model downloads, UI configuration, and workflow debugging.

The founding user version of Personal AI Server is designed to include a preloaded AI stack, setup guidance, and validated workflow recipes so early users can focus on building instead of configuring.

Important note:

The final included software stack will be shaped by founding user interviews and validation results.

### Section 6: The Hardware Behind It

Title:

Powered By Hardware Built For Local AI

Body:

Personal AI Server is planned around AMD Ryzen AI Max+ 395, a 128GB unified memory configuration, 2TB SSD storage, and integrated Radeon graphics.

The hardware is selected to support local LLMs, agents, RAG, image generation, voice models, and long-running personal AI workflows in a compact machine.

Hardware bullets:

- AMD Ryzen AI Max+ 395
- 128GB unified memory configuration
- 2TB SSD
- Radeon 8060S integrated graphics
- Compact local AI server form factor

Guardrail copy:

Hardware specifications may vary by final production configuration. The founding user program will validate exact model performance, thermals, workflow stability, and software stack before final release.

### Section 7: Who It Is For

Title:

Built For AI Power Users

Cards:

LocalLLaMA Power Users: Run larger local models and experiment with local inference without renting cloud GPUs for every workflow.

AI Founders: Prototype private AI products, agents, internal tools, and demos on your own machine.

Agent Developers: Run coding agents, tool-using agents, and local automation workflows in a dedicated local environment.

Small AI Teams: Create a shared local AI workspace for RAG, model testing, internal tools, and workflow experiments.

Privacy-Sensitive Builders: Keep documents, prompts, datasets, code, and knowledge bases on hardware you control.

### Section 8: Who It Is Not For

Title:

Not The Right Machine For Everyone

Body:

Personal AI Server is not designed to be the fastest possible Flux or SDXL box.

If your only goal is maximum image generation speed with CUDA, TensorRT, or RTX 5090-class GPU performance, a dedicated NVIDIA workstation may be a better fit.

This product is designed for users who care more about large local models, unified memory, agents, private RAG, multi-workflow AI infrastructure, and owning their AI environment.

### Section 9: Founding User Program

Title:

Apply For The Founding User Program

Subtitle:

We are selecting early users who want to help shape a personal AI server for local LLMs, agents, RAG, image generation, voice workflows, and private AI infrastructure.

Program includes:

- Early access to configuration details
- Model and workflow validation updates
- Private demo opportunity
- Founding user pricing discussion
- Input on preloaded AI stack
- Optional onboarding and setup support

Form fields:

1. Email
2. Role
3. Current AI setup
4. Models you want to run locally
5. Main use case
6. Current monthly AI or cloud GPU spend
7. Expected budget
8. Interested in a private demo call?

Budget options:

- Under USD 2,500
- USD 2,500-3,299
- USD 3,299-3,999
- USD 4,000+
- Depends on software stack and support

CTA:

Apply for Early Access

Secondary CTA:

Book a Private Demo

### Section 10: FAQ

1. Can it run 70B models locally?

It is designed for 70B-class quantized model workflows, but final support depends on model version, quantization, memory use, context length, and software stack. Verified results will be shared with founding users.

2. Why use 128GB unified memory instead of an RTX 5090 workstation?

If your main priority is maximum image generation speed in CUDA workflows, an RTX 5090 workstation may be a better fit. Personal AI Server is designed for large local model workflows, private RAG, agents, and multi-tool AI infrastructure where memory capacity and local ownership matter.

3. Is this better than renting cloud GPUs?

It depends on your workload. Cloud GPUs are useful for peak performance and occasional heavy jobs. Personal AI Server is designed for users who want an always-available local AI environment without recurring cloud GPU bills for everyday workflows.

4. Can I run AI agents on it?

That is one of the target use cases. The founding user program will validate agent workflows such as local coding agents, tool-using agents, and long-running local automation.

5. Can I build a private RAG system?

Yes, private RAG is a core use case. The planned stack includes local model tools, Open WebUI-style workflows, and private knowledge base support.

6. Does it support image generation?

Image generation is a supported workflow, including Flux and SDXL-style workflows. However, this product is not positioned as the fastest image-generation machine against dedicated NVIDIA GPU workstations.

7. Does it support voice models?

Voice workflows such as CosyVoice and GPT-SoVITS are planned for validation. Final recommended workflows will depend on test results.

8. Do I need to configure everything myself?

The goal is to provide a preloaded local AI stack, workflow recipes, setup guidance, and optional onboarding for founding users.

9. Who should not apply?

This is probably not the right fit if you only want a cheap mini PC, a gaming PC, or the fastest CUDA image generation box. It is designed for AI power users who want local AI infrastructure.

10. What price range should I expect?

The expected range is USD 3,299-3,999 depending on final configuration, software stack, and support package. Founding user feedback will help shape the final offer.

### Section 11: Final CTA

Title:

Build Your Own Local AI Infrastructure

Body:

Apply for the founding user program and help shape a personal AI server for large local models, AI agents, private RAG, image generation, voice workflows, and AI automation.

Primary CTA:

Apply for Early Access

Secondary CTA:

Book a Private Demo

## 9. Low-Fidelity Wireframe

Desktop structure:

```text
NAV: Logo, Models, 128GB Memory, Stack, FAQ, Apply
HERO: H1, subheadline, proof lines, primary CTA, secondary CTA, product/UI visual
WHAT YOU CAN RUN: workflow cards and model matrix
128GB MEMORY: explanation plus key benefits
NOT ANOTHER MINI PC: comparison table
PRELOADED STACK: tool badges and setup-pain copy
HARDWARE: AMD appears here only as support
WHO IT IS FOR: audience cards
WHO IT IS NOT FOR: RTX 5090/CUDA wrong-fit clarification
FOUNDING USER PROGRAM: program details and application form
FAQ: accordion list
FINAL CTA: Apply and demo buttons
```

Mobile structure:

```text
NAV: Logo and menu
HERO: H1, subheadline, proof lines, CTAs, visual
WHAT YOU CAN RUN: stacked cards and compact model table
128GB MEMORY: explanation and benefit list
NOT ANOTHER MINI PC: stacked comparison rows
PRELOADED STACK: tool badges
HARDWARE: support section
WHO IT IS FOR: stacked cards
WHO IT IS NOT FOR: credibility copy
FOUNDING USER PROGRAM: program copy and form fields
FAQ: accordion
FINAL CTA
```

## 10. Analytics And Event Tracking

Required events:

| Event | Trigger |
|---|---|
| view_hero | Hero section viewed |
| click_apply_hero | Hero Apply CTA clicked |
| click_demo_hero | Hero Demo CTA clicked |
| view_model_matrix | Model/workflow table viewed |
| view_memory_section | 128GB memory section viewed |
| view_stack_section | Preloaded stack section viewed |
| select_budget_range | Budget field selected |
| submit_early_access | Early access form submitted |
| click_book_demo | Demo CTA clicked |
| faq_expand | FAQ item opened |
| scroll_50 | 50% scroll depth |
| scroll_90 | 90% scroll depth |

Lead quality fields:

- Models the user wants to run
- Current AI setup
- Monthly cloud AI / GPU spend
- Expected budget
- Whether they want a demo call

## 11. Design Direction

Visual tone:

- Premium
- Technical
- Infrastructure-focused
- Calm and credible
- Founder / builder oriented

Avoid:

- Gaming RGB style
- Generic electronics store style
- Abstract AI stock graphics
- Chip-first visual hierarchy
- Heavy orange AMD-style visual identity
- Overly consumer creator-tool aesthetic

Recommended visuals:

- Product render or real machine in a clean desk/server setup
- Local AI dashboard UI mockup
- Memory/model capacity diagram
- Workflow cards
- Tool stack badges
- Application form as a serious early-access program

## 12. Open Questions

1. What exact brand name will appear in the logo?
2. Is Personal AI Server the final product name, or should it be a category name?
3. Will the first offer include onboarding or only preloaded software?
4. Which models can be verified before launch?
5. Can Qwen3 70B-class workflows be shown with screenshots?
6. What operating system will be shipped or recommended?
7. Will the machine run headless, desktop mode, or both?
8. Will there be remote access setup?
9. Is the USD 3,299-3,999 range public on page, or only in the form?
10. What markets are prioritized for the first validation campaign?

## 13. MVP Acceptance Criteria

The landing page is acceptable when:

- The first screen says `Run Large AI Models Locally`
- AMD Ryzen AI Max+ 395 does not appear in the hero
- The page positions the product as Personal AI Server / Local AI Infrastructure
- The 128GB unified memory advantage is clearly explained
- The page does not compete directly against RTX 5090 on image generation speed
- The model/workflow table is more prominent than hardware specs
- The application CTA is `Apply for Early Access`
- The form captures use case, models, budget, and demo intent
- FAQ includes the RTX 5090 comparison and wrong-fit clarification
- The page can validate 100 early access applications and 10 demo calls
