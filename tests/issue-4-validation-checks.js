const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

[
  "window.PAS_CONFIG",
  "TALLY_FORM_URL",
  'data-application-form',
  'name="name"',
  'name="email"',
  'name="persona"',
  'name="use_case"',
  'name="budget_range"',
  'name="desired_model"',
  'type="submit"',
  'Apply for Early Access',
  'data-success-panel',
  'data-tally-link'
].forEach((snippet) => {
  assert(html.includes(snippet), `Missing HTML snippet: ${snippet}`);
});

[
  "AI Enthusiast",
  "Developer",
  "Founder",
  "Consultant",
  "Agency",
  "Enterprise Team",
  "Local LLM",
  "AI Agent",
  "RAG",
  "Image Generation",
  "Coding",
  "Research",
  "Other",
  "Less than $2,000",
  "$2,000-$3,000",
  "$3,000-$5,000",
  "More than $5,000",
  "DeepSeek-R1",
  "Qwen3-235B",
  "GPT-OSS",
  "Llama",
  "Custom model"
].forEach((copy) => {
  assert(html.includes(copy), `Missing Issue #10 form copy: ${copy}`);
});

[
  "Complete the required fields before continuing.",
  "Enter a valid email address.",
  "Application details validated. Continue to Tally to save your application.",
  "form_start",
  "form_submit",
  'persona: getTrimmedValue("persona")',
  'use_case: getTrimmedValue("use_case")',
  'budget_range: getTrimmedValue("budget_range")'
].forEach((snippet) => {
  assert(script.includes(snippet), `Missing validation script snippet: ${snippet}`);
});

assert(!html.includes("data-calendly"), "Calendly should not remain in the lead capture funnel.");
assert(!script.includes("calendly"), "Calendly logic should not remain in the lead capture script.");
assert(!script.includes("new FormData(form)"), "The static page should not copy arbitrary form data into outbound URLs.");
assert(!script.includes("searchParams.set"), "Tally URL should stay as the configured single destination without form query params.");
assert(!script.includes("name: getTrimmedValue"), "Analytics payload should not include the applicant name.");
assert(!script.includes("email: getTrimmedValue"), "Analytics payload should not include the applicant email.");
assert(!script.includes("desired_model: getTrimmedValue"), "Analytics payload should not include free-text desired model answers.");
assert(!html.includes("Form validation, success state, and data capture will be implemented in Issue #4."), "Stale Issue #4 placeholder copy remains.");

console.log("Issue #4 form checks passed.");
