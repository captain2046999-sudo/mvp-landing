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
  'gtag("config", "G-V81RVYZK5H")',
  "https://www.clarity.ms/tag/",
  '"x3lkfxqt3i"',
  "window.PAS_CONFIG",
  "TALLY_FORM_URL",
  "https://tally.so/r/81ryAo",
  "data-lead-cta",
  "data-cta-location",
  "data-tally-embed"
].forEach((snippet) => {
  assert(html.includes(snippet), `Missing analytics HTML snippet: ${snippet}`);
});

[
  "window.trackEvent = function",
  "window.dataLayer.push",
  'window.gtag("event"',
  'window.clarity("event"',
  'window.clarity("set"',
  "configureTallyLinks",
  "configureTallyEmbed",
  "loadTallyWidget",
  "getTallyEmbedUrl",
  'embedUrl.searchParams.set("dynamicHeight", "1")',
  "trackedScrollDepths",
  "scrollDepthEvents",
  "trackedFaqIds",
  "trackTallyInteraction",
  'trackEvent("cta_click"',
  'trackEvent("form_start"',
  'trackEvent("form_submit"',
  'trackEvent("faq_open"'
].forEach((snippet) => {
  assert(script.includes(snippet), `Missing analytics script snippet: ${snippet}`);
});

[
  "cta_click",
  "form_start",
  "form_submit",
  "faq_open",
  "scroll_25",
  "scroll_50",
  "scroll_75",
  "scroll_100"
].forEach((eventName) => {
  assert(script.includes(eventName), `Missing Issue #10 analytics event: ${eventName}`);
});

[
  "location: element.dataset.ctaLocation",
  "button_text: getElementLabel(element)",
  "faq_id: faqId",
  'provider: "tally_embed"'
].forEach((safeField) => {
  assert(script.includes(safeField), `Missing safe analytics field: ${safeField}`);
});

const leadHrefMatches = html.match(/href="https:\/\/tally\.so\/r\/81ryAo"/g) || [];
assert(leadHrefMatches.length >= 5, "All visible lead CTAs should use the configured Tally URL as their fallback href.");
assert(!html.includes("calendly.com"), "Calendly should not remain as a lead destination.");
assert(!html.includes("data-analytics-event"), "Old per-button analytics attributes should be removed.");
assert(!html.includes("data-application-form"), "Local lead form should be removed.");
assert(!html.includes("data-success-panel"), "Local fake success panel should be removed.");
assert(!script.includes("event.preventDefault()"), "Script should not intercept local form submission.");
assert(!script.includes("form.elements"), "Script should not read local form fields.");
assert(!script.includes("getTrimmedValue"), "Script should not extract local field values.");
assert(!script.includes("click_apply_hero"), "Old hero apply event should be removed.");
assert(!script.includes("click_demo_hero"), "Old hero demo event should be removed.");
assert(!script.includes("submit_early_access"), "Old form submit event should be replaced by form_submit.");
assert(!script.includes("faq_expand"), "Old FAQ event should be replaced by faq_open.");
assert(!script.includes("scroll_90"), "Old 90% scroll event should be replaced by 75% and 100% events.");
assert(!script.includes("select_budget_range"), "Budget selection should not emit a separate old event.");
assert(!script.includes("email: getTrimmedValue"), "Analytics payload should not include email.");
assert(!script.includes("name: getTrimmedValue"), "Analytics payload should not include name.");
assert(!script.includes("desired_model: getTrimmedValue"), "Analytics payload should not include long desired model text.");
assert(!script.includes("new FormData(form)"), "Outbound URLs should not be built from arbitrary form data.");
assert(script.includes("trackedScrollDepths.add(eventName)"), "Scroll depth events should be guarded against repeat firing.");
assert(script.includes("trackedFaqIds.add(faqId)"), "FAQ open events should be guarded per FAQ id.");
assert(script.includes("tallyInteractionStarted = true"), "Tally form start should be tracked once per page session.");

console.log("Issue #6 analytics checks passed.");
