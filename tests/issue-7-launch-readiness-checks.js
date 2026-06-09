const fs = require("fs");
const path = require("path");

const root = process.cwd();
const read = (filePath) => fs.readFileSync(path.join(root, filePath), "utf8");

const index = read("index.html");
const style = read("style.css");
const script = read("script.js");
const readme = read("README.md");
const checklist = read("docs/qa-launch-checklist.md");

const failures = [];

const check = (condition, message) => {
  if (!condition) {
    failures.push(message);
  }
};

const includesAll = (source, values) => values.every((value) => source.includes(value));

const heroMatch = index.match(/<section class="hero[\s\S]*?<\/section>/);
const hero = heroMatch ? heroMatch[0] : "";
const heroEnd = heroMatch ? heroMatch.index + hero.length : -1;

check(Boolean(heroMatch), "Hero section exists.");
check(hero.includes("<h1>Run Large AI Models Locally</h1>"), "Hero H1 matches positioning.");
check(!/AMD|Ryzen|Radeon|TOPS|8060S/i.test(hero), "Hero avoids chip-first hardware messaging.");
check(index.indexOf("AMD Ryzen AI Max+ 395") > heroEnd, "AMD support appears after hero positioning.");

check(index.includes("Personal AI Server"), "Personal AI Server product name is present.");
check(index.includes("Local AI Infrastructure, Not Another Mini PC Listing"), "Infrastructure positioning section is present.");
check(index.includes("128GB Unified Memory"), "128GB unified memory differentiation is present.");
check(index.includes("Apply for Early Access"), "Primary early access CTA is present.");
check(index.includes("Founding User Program"), "Founding User Program framing is present.");

check(includesAll(index, [
  "Qwen3 32B",
  "Qwen3 70B-class quantized workflows",
  "DeepSeek",
  "OpenHands",
  "Open WebUI",
  "Flux",
  "SDXL",
  "CosyVoice",
  "GPT-SoVITS",
  "Qwen-VL"
]), "Model and workflow matrix includes required examples.");

check(includesAll(index, [
  "Ollama",
  "Open WebUI",
  "ComfyUI",
  "Pinokio"
]), "Preloaded local AI stack includes required tools.");

check(includesAll(index, [
  "Not The Right Machine For Everyone",
  "RTX 5090",
  "CUDA",
  "dedicated NVIDIA workstation may be a better fit"
]), "Wrong-fit section clarifies RTX 5090 / CUDA tradeoff.");

check(!/unlimited ai/i.test(index), "No unsupported unlimited AI claim.");
check(!/beats?\s+(an?\s+)?RTX\s*5090/i.test(index), "No direct claim that the product beats RTX 5090.");
check(!/\b(buy now|add to cart|place order|checkout now|enterprise procurement)\b/i.test(index), "No ecommerce/cart-first launch language.");
check(!/\bVAT\b/i.test(index), "No VAT-first purchase logistics language.");

check(includesAll(index, [
  'data-tally-base-url="https://tally.so/r/81ryAo"',
  'data-calendly-url="https://calendly.com/captain2046999/personal-ai-server-founding-user-call"',
  'name="email"',
  'name="role"',
  'name="current_setup"',
  'name="desired_models"',
  'name="use_case"',
  'name="monthly_spend"',
  'name="budget"',
  'name="demo_interest"',
  "Under USD 2,500",
  "USD 2,500-3,299",
  "USD 3,299-3,999",
  "USD 4,000+",
  "Depends on software stack and support"
]), "Founding user form fields, budget ranges, and destinations are present.");

check((index.match(/<details class="faq-item"/g) || []).length >= 10, "FAQ includes at least ten guardrail questions.");
check((index.match(/<h1\b/g) || []).length === 1, "Page has exactly one H1.");

check(includesAll(index + script, [
  "G-V81RVYZK5H",
  "x3lkfxqt3i",
  "view_hero",
  "click_apply_hero",
  "click_demo_hero",
  "click_apply_final",
  "click_demo_final",
  "view_model_matrix",
  "view_memory_section",
  "view_stack_section",
  "select_budget_range",
  "submit_early_access",
  "click_book_demo",
  "faq_expand",
  "scroll_50",
  "scroll_90"
]), "Analytics IDs and required event names are present.");

check(script.includes("return `${url.origin}${url.pathname}`;"), "Analytics destinations strip query strings and hashes.");
const tallyParamMatches = [...script.matchAll(/searchParams\.set\("([^"]+)"/g)].map((match) => match[1]);
check(!script.includes("new FormData(form)"), "Tally URL builder does not copy arbitrary form data.");
check(
  tallyParamMatches.length === 2 && tallyParamMatches.every((param) => ["source", "intent"].includes(param)),
  "Tally URL query params are restricted to source and intent."
);

check(includesAll(style, [
  "@media (max-width: 980px)",
  "@media (max-width: 720px)",
  ".table-panel",
  "overflow-x: auto",
  "input,",
  "width: 100%;",
  ".hero,",
  "grid-template-columns: 1fr"
]), "Responsive CSS includes mobile and table safeguards.");

check(readme.includes("node tests/issue-7-launch-readiness-checks.js"), "README documents Issue #7 validation command.");
check(checklist.includes("Static launch-readiness checks: passed locally"), "QA checklist records static launch-readiness status.");
check(checklist.includes("Do not start paid traffic until hosted URL QA is completed."), "QA checklist keeps hosted visual QA as a launch gate.");

if (failures.length > 0) {
  console.error("Issue #7 launch readiness checks failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Issue #7 launch readiness checks passed.");
}
