const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

[
  'data-application-form',
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
  'type="submit"',
  'data-success-panel',
  'data-tally-link',
  'data-calendly-link'
].forEach((snippet) => {
  assert(html.includes(snippet), `Missing HTML snippet: ${snippet}`);
});

[
  'Under USD 2,500',
  'USD 2,500-3,299',
  'USD 3,299-3,999',
  'USD 4,000+',
  'Depends on software stack and support'
].forEach((budgetOption) => {
  assert(html.includes(budgetOption), `Missing budget option: ${budgetOption}`);
});

[
  'Complete the required fields before continuing.',
  'Enter a valid email address.',
  'Application details validated. Continue to Tally to save your application.',
  'new FormData(form)',
  'url.searchParams.set'
].forEach((snippet) => {
  assert(script.includes(snippet), `Missing validation script snippet: ${snippet}`);
});

[
  'gtag(',
  'clarity(',
  'dataLayer'
].forEach((outOfScopeSnippet) => {
  assert(!script.includes(outOfScopeSnippet), `Out-of-scope analytics found: ${outOfScopeSnippet}`);
});

assert(!html.includes("Form validation, success state, and data capture will be implemented in Issue #4."), "Stale Issue #4 placeholder copy remains.");

console.log("Issue #4 form checks passed.");
