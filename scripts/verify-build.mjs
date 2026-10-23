import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("docs/index.html", "utf8");
assert(!html.includes("<!--app-html-->"), "Landing page must be prerendered");
assert(html.includes("Business knowledge."), "Meaningful initial HTML is required");
assert.equal((html.match(/href="https:\/\/datasupply\.ai\/w\/p\/lJnXLDNE"/g) || []).length, 4, "All four join CTAs must use the exact destination");
assert(!/<(?:form|input|textarea|select)\b/.test(html), "No contact form may be included");
assert(!/manus-storage|\/api\/|manus\.computer/.test(html), "No Manus runtime dependency may be shipped");
for (const match of html.matchAll(/(?:src|href|poster)="(\/[^"?#]+)"/g)) {
  assert(existsSync(`docs${match[1]}`), `Local asset missing: ${match[1]}`);
}
assert.equal(readFileSync("docs/CNAME", "utf8").trim(), "dreamsaidata.com");
assert(existsSync("docs/.nojekyll"));
assert(existsSync("docs/media/partner-introduction.png"), "Supplied partner image must be published locally");
assert(html.indexOf('id="opportunity"') < html.indexOf('id="partner-introduction"'), "Partner image must follow What May Matter");
assert(html.indexOf('id="partner-introduction"') < html.indexOf('id="how-it-works"'), "Partner image must precede A Simple First Step");
assert(html.indexOf('id="how-it-works"') < html.indexOf('id="licensing-overview"'));
assert(html.indexOf('id="licensing-overview"') < html.indexOf('id="questions"'));
console.log("Static export checks passed: four signup links, no local form, complete HTML, local media, and custom domain.");
