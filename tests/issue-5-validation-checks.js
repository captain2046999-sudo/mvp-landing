const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const requiredCopy = [
  "Can it run 70B models locally?",
  "70B-class quantized model workflows",
  "Final support depends on model version, quantization, memory use, context length, and software stack",
  "Why use 128GB unified memory instead of an RTX 5090 workstation?",
  "RTX 5090 workstation may be a better fit",
  "Is this better than renting cloud GPUs?",
  "Can I run AI agents locally?",
  "Can I build a private RAG system?",
  "Not The Right Machine For Everyone"
];

requiredCopy.forEach((copy) => {
  assert(html.includes(copy), `Missing guarded FAQ or wrong-fit copy: ${copy}`);
});

assert((html.match(/<details class="faq-item"/g) || []).length >= 5, "FAQ should use details accordion items.");
assert((html.match(/<summary>/g) || []).length >= 5, "FAQ should use keyboard-accessible summary labels.");
assert(html.includes("<details class=\"faq-item\" open>"), "At least one FAQ item should be open by default.");
assert(css.includes(".faq-item summary:focus-visible"), "FAQ summary focus style is missing.");
assert(css.includes(".faq-item[open] summary::after"), "FAQ open state indicator style is missing.");

[
  "guaranteed",
  "guarantees",
  "unlimited AI",
  "runs every model",
  "always faster than cloud",
  "replaces cloud GPUs"
].forEach((claim) => {
  assert(!html.toLowerCase().includes(claim), `Unsupported claim found: ${claim}`);
});

console.log("Issue #5 FAQ checks passed.");
