import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html = await readFile(new URL("../may-20-blessing/index.html", import.meta.url), "utf8");

function includesAll(values) {
  for (const value of values) {
    assert.ok(html.includes(value), `Expected page to include "${value}"`);
  }
}

includesAll([
  "5月20日祝福",
  "西南财经大学",
  "博士毕业",
  "成都理工",
  "教职 offer",
  "开心生活",
  "const STAGES = [",
  "id=\"advanceBtn\"",
  "function advanceStage",
  "canvas.addEventListener(\"click\", advanceStage"
]);

assert.ok(!html.includes("展开信笺"), "The redesign should remove the old letter-panel interaction");
assert.ok(!html.includes("520"), "The page should avoid direct 520 wording");

const stageItems = html.match(/kind: "/g) || [];
assert.ok(stageItems.length >= 5, "Expected at least five click-forward life stages");

const longParagraphs = html.match(/<p[^>]*>[^<]{90,}<\/p>/g) || [];
assert.deepEqual(longParagraphs, [], "Visible paragraphs should stay short");
