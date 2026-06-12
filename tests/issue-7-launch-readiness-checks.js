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
  "window.PAS_CONFIG",
  "TALLY_FORM_URL",
  'name="name"',
  'name="email"',
  'name="persona"',
  'name="use_case"',
  'name="budget_range"',
  'name="desired_model"',
  "AI Enthusiast",
  "Enterprise Team",
  "Local LLM",
  "AI Agent",
  "Less than $2,000",
  "$3,000-$5,000",
  "More than $5,000",
  "DeepSeek-R1",
  "Apply for Early Access"
]), "Founding user form fields and Issue #10 qualification options are present.");

check(!index.includes("calendly.com"), "Calendly should not remain in the lead funnel.");
check(!index.includes("data-calendly"), "Calendly data attributes should not remain in the lead funnel.");

const tallyLinks = index.match(/href="https:\/\/tally\.so\/r\/81ryAo"/g) || [];
check(tallyLinks.length >= 5, "Lead-generation CTAs have the same Tally fallback href.");
check(index.includes('data-lead-cta data-cta-location="hero_primary"'), "Hero primary CTA is tracked as a lead CTA.");
check(index.includes('data-lead-cta data-cta-location="footer_primary"'), "Footer primary CTA is tracked as a lead CTA.");

check((index.match(/<details class="faq-item"/g) || []).length >= 10, "FAQ includes at least ten guardrail questions.");
check((index.match(/<h1\b/g) || []).length === 1, "Page has exactly one H1.");

check(includesAll(index + script, [
  "G-V81RVYZK5H",
  "x3lkfxqt3i",
  "cta_click",
  "form_start",
  "form_submit",
  "faq_open",
  "scroll_25",
  "scroll_50",
  "scroll_75",
  "scroll_100"
]), "Analytics IDs and Issue #10 event names are present.");

check(script.includes("window.trackEvent = function"), "Global analytics helper is present.");
check(script.includes('window.gtag("event"'), "GA4 event forwarding is present.");
check(script.includes('window.clarity("event"'), "Clarity event forwarding is present.");
check(script.includes('persona: getTrimmedValue("persona")'), "Form submit sends persona.");
check(script.includes('use_case: getTrimmedValue("use_case")'), "Form submit sends use case.");
check(script.includes('budget_range: getTrimmedValue("budget_range")'), "Form submit sends budget range.");
check(script.includes("faq_id: faqId"), "FAQ open sends faq_id.");
check(script.includes("button_text: getElementLabel(element)"), "CTA click sends button_text.");
check(script.includes("location: element.dataset.ctaLocation"), "CTA click sends location.");
check(!script.includes("new FormData(form)"), "Tally URL builder does not copy arbitrary form data.");
check(!script.includes("searchParams.set"), "Tally URL does not append form query params.");
check(!script.includes("email: getTrimmedValue"), "Analytics payload does not include email.");
check(!script.includes("name: getTrimmedValue"), "Analytics payload does not include name.");
check(!script.includes("desired_model: getTrimmedValue"), "Analytics payload does not include free-text model answer.");

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

check(readme.includes("Primary lead destination: `https://tally.so/r/81ryAo`"), "README documents the single lead destination.");
check(readme.includes("`cta_click`"), "README documents Issue #10 event inventory.");
check(readme.includes("Analytics payloads intentionally do not include name, email, or long free-text model answers."), "README documents analytics privacy guardrails.");
check(checklist.includes("Issue #10 analytics and lead capture setup: implemented, live verification pending"), "QA checklist records Issue #10 implementation status.");
check(checklist.includes("Do not start paid traffic until redeploy, browser QA, GA4 Realtime QA, and Clarity session QA are completed."), "QA checklist keeps analytics and browser QA as launch gates.");

if (failures.length > 0) {
  console.error("Issue #7 launch readiness checks failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Issue #7 launch readiness checks passed.");
}
