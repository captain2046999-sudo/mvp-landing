const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

[
  "https://www.googletagmanager.com/gtag/js?id=G-V81RVYZK5H",
  'gtag("config","G-V81RVYZK5H")',
  "https://www.clarity.ms/tag/",
  '"x3lkfxqt3i"',
  'data-section-event="view_hero"',
  'data-section-event="view_model_matrix"',
  'data-section-event="view_memory_section"',
  'data-section-event="view_stack_section"',
  'data-analytics-event="click_apply_hero"',
  'data-analytics-event="click_demo_hero"',
  'data-analytics-event="click_book_demo"',
  'data-budget-select'
].forEach((snippet) => {
  assert(html.includes(snippet), `Missing analytics HTML snippet: ${snippet}`);
});

[
  "trackEvent",
  'console.info("[analytics]"',
  "window.dataLayer.push",
  'window.gtag("event"',
  'window.clarity("event"',
  'window.clarity("set"',
  "getSafeDestination",
  "IntersectionObserver",
  "viewedSections",
  "trackedScrollDepths",
  "trackedFaqQuestions",
  "trackedBudgetRanges",
  'eventName: "scroll_50"',
  'eventName: "scroll_90"',
  '"select_budget_range"',
  '"submit_early_access"',
  '"faq_expand"'
].forEach((snippet) => {
  assert(script.includes(snippet), `Missing analytics script snippet: ${snippet}`);
});

[
  "view_hero",
  "click_apply_hero",
  "click_demo_hero",
  "view_model_matrix",
  "view_memory_section",
  "view_stack_section",
  "select_budget_range",
  "submit_early_access",
  "click_book_demo",
  "faq_expand",
  "scroll_50",
  "scroll_90"
].forEach((eventName) => {
  assert(html.includes(eventName) || script.includes(eventName), `Missing PRD analytics event: ${eventName}`);
});

[
  "role: getTrimmedValue(\"role\")",
  "use_case: getTrimmedValue(\"use_case\")",
  "monthly_spend: getTrimmedValue(\"monthly_spend\")",
  "budget_range: getTrimmedValue(\"budget\")",
  "demo_interest: selectedDemoInterest"
].forEach((safeField) => {
  assert(script.includes(safeField), `Missing safe lead quality field: ${safeField}`);
});

assert(!script.includes("email: getTrimmedValue"), "Analytics payload should not include email.");
assert(!script.includes("current_setup: getTrimmedValue"), "Analytics payload should not include long current setup text.");
assert(!script.includes("desired_models: getTrimmedValue"), "Analytics payload should not include long desired model text.");
assert(!script.includes("new FormData(form)"), "Tally URL should not be prefilled with form data because outbound URL capture may leak PII.");
assert(!script.includes("url.searchParams.set(key"), "Tally URL should not copy arbitrary form fields into query parameters.");
assert(script.includes('url.searchParams.set("source", "personal-ai-server-landing")'), "Tally URL should keep only non-PII campaign metadata.");
assert(script.includes('url.searchParams.set("intent", "founding-user-application")'), "Tally URL should keep only non-PII intent metadata.");
assert(!html.includes('data-analytics-event="click_submit_tally"'), "Tally link click should not be tracked because its URL may contain application context.");
assert(!html.includes('data-tally-link data-analytics-event'), "Tally outbound link should not carry analytics attributes.");
assert(!script.includes("href: element.getAttribute"), "Analytics should not send raw link href values.");
assert(!script.includes("destination: element.getAttribute"), "Analytics should not send unfiltered link destinations.");
assert(script.includes('destination: getSafeDestination(element.getAttribute("href") || "")'), "Click analytics should use sanitized link destinations.");
assert(script.includes("return `${url.origin}${url.pathname}`;"), "Safe link destinations should exclude query strings and fragments.");
assert(script.includes("trackedScrollDepths.add(eventName)"), "Scroll depth events should be guarded against repeat firing.");
assert(script.includes("sectionObserver.unobserve(entry.target)"), "Section view events should stop observing after first view.");
assert(script.includes("trackedFaqQuestions.add(question)"), "FAQ expand events should be guarded per question.");
assert(script.includes("trackedBudgetRanges.add(budgetRange)"), "Budget selection events should be guarded per selected range.");

console.log("Issue #6 analytics checks passed.");
