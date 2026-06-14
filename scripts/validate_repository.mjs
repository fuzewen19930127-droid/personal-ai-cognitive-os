import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "package.json",
  "docs/architecture.md",
  "docs/cognitive-model.md",
  "docs/publication-checklist.md",
  "system/00_control/one_page_overview.md",
  "system/00_control/rule_cards.json",
  "system/01_memory/project_handoff.md",
  "system/01_memory/immediate_task_memory_index.md",
  "system/01_memory/error_routes.md",
  "system/02_projects/project_card_template.md",
  "system/06_evolution/README.md",
  "system/07_realtime_research/README.md",
  "examples/sample_project/project_brief.md",
  "examples/sample_project/current_context.md",
  "examples/sample_project/progress_log.md",
  "examples/sample_project/evidence_trace.md",
  "examples/sample_project/acceptance_checklist.md",
  "examples/sample_data/systems.json",
  "examples/sample_data/projects.json",
  "examples/sample_data/events.json",
  "scripts/build_dashboard.mjs",
  "scripts/scan_sensitive.mjs"
];

const requiredJson = [
  "package.json",
  "system/00_control/rule_cards.json",
  "examples/sample_data/systems.json",
  "examples/sample_data/projects.json",
  "examples/sample_data/events.json"
];

const errors = [];

for (const relativePath of requiredFiles) {
  const filePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing required file: ${relativePath}`);
  }
}

for (const relativePath of requiredJson) {
  const filePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(filePath)) continue;
  try {
    JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON: ${relativePath}: ${error.message}`);
  }
}

const ruleCardsPath = path.join(ROOT, "system/00_control/rule_cards.json");
if (fs.existsSync(ruleCardsPath)) {
  const data = JSON.parse(fs.readFileSync(ruleCardsPath, "utf8"));
  if (!Array.isArray(data.cards) || data.cards.length < 5) {
    errors.push("rule_cards.json should contain at least 5 cards");
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Repository structure validated.");
