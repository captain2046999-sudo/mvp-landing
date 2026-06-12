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
  "https://tally.so/r/81ryAo",
  "data-tally-panel",
  "data-tally-embed",
  "data-tally-link",
  "Submit once in the embedded Tally form above",
  "Open Tally form in a new tab"
].forEach((snippet) => {
  assert(html.includes(snippet), `Missing Tally embed HTML snippet: ${snippet}`);
});

[
  "getTallyEmbedUrl",
  "https://tally.so/widgets/embed.js",
  "configureTallyEmbed",
  "loadTallyWidget",
  "iframe.dataset.tallySrc",
  "Tally.loadEmbeds",
  "tally_embed",
  "form_start",
  "form_submit"
].forEach((snippet) => {
  assert(script.includes(snippet), `Missing Tally embed script snippet: ${snippet}`);
});

assert(!html.includes("data-application-form"), "Local application form should be removed.");
assert(!html.includes("data-success-panel"), "Local fake success panel should be removed.");
assert(!html.includes('name="name"'), "Applicant name should be collected by Tally, not a local form.");
assert(!html.includes('name="email"'), "Applicant email should be collected by Tally, not a local form.");
assert(!html.includes('name="persona"'), "Persona should be collected by Tally, not a local form.");
assert(!html.includes('name="use_case"'), "Use case should be collected by Tally, not a local form.");
assert(!html.includes('name="budget_range"'), "Budget should be collected by Tally, not a local form.");
assert(!html.includes('name="desired_model"'), "Desired model should be collected by Tally, not a local form.");
assert(!script.includes("event.preventDefault()"), "Script should not intercept a local lead form submit.");
assert(!script.includes("form.elements"), "Script should not read local form fields.");
assert(!script.includes("getTrimmedValue"), "Script should not extract local field values.");
assert(!script.includes("new FormData(form)"), "Script should not collect arbitrary form data.");
assert(!script.includes("searchParams.set"), "Tally URL should remain the configured destination without form query params.");
assert(!html.includes("data-calendly"), "Calendly should not remain in the lead capture funnel.");
assert(!script.includes("calendly"), "Calendly logic should not remain in the lead capture script.");

console.log("Issue #4 Tally embed checks passed.");
