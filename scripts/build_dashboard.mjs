import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

const paths = {
  ruleCards: path.join(ROOT, "system", "00_control", "rule_cards.json"),
  systems: path.join(ROOT, "examples", "sample_data", "systems.json"),
  projects: path.join(ROOT, "examples", "sample_data", "projects.json"),
  events: path.join(ROOT, "examples", "sample_data", "events.json"),
  output: path.join(PUBLIC_DIR, "index.html")
};

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function statusClass(status) {
  if (status === "active" || status === "completed") return "ok";
  if (status === "review" || status === "pending") return "warn";
  if (status === "blocked" || status === "failed") return "bad";
  return "muted";
}

function card(title, body, meta = "") {
  return `<section class="card"><div class="card-head"><h2>${escapeHtml(title)}</h2>${meta}</div>${body}</section>`;
}

function renderList(items, renderItem) {
  if (!items?.length) return `<p class="muted">No data yet.</p>`;
  return `<div class="list">${items.map(renderItem).join("")}</div>`;
}

function render() {
  const ruleData = readJson(paths.ruleCards, { cards: [] });
  const systemData = readJson(paths.systems, { systems: [] });
  const projectData = readJson(paths.projects, { projects: [] });
  const eventData = readJson(paths.events, { events: [] });

  const systems = systemData.systems ?? [];
  const rules = ruleData.cards ?? [];
  const projects = projectData.projects ?? [];
  const events = eventData.events ?? [];

  const stats = [
    ["Systems", systems.length],
    ["Rule cards", rules.length],
    ["Projects", projects.length],
    ["Events", events.length]
  ];

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personal AI Cognitive OS Dashboard</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f6f7f9;
      --panel: #ffffff;
      --text: #1f2937;
      --muted: #6b7280;
      --line: #d9dee7;
      --ok: #0f766e;
      --warn: #b45309;
      --bad: #b91c1c;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.55;
    }
    header {
      padding: 28px 32px 20px;
      border-bottom: 1px solid var(--line);
      background: #ffffff;
    }
    h1 { margin: 0 0 8px; font-size: 30px; letter-spacing: 0; }
    h2 { margin: 0; font-size: 18px; letter-spacing: 0; }
    p { margin: 0; }
    main { max-width: 1180px; margin: 0 auto; padding: 24px; }
    .subtitle { color: var(--muted); max-width: 840px; }
    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin: 20px 0 24px;
    }
    .stat {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 14px 16px;
    }
    .stat strong { display: block; font-size: 26px; }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .card {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 18px;
      min-width: 0;
    }
    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }
    .list { display: grid; gap: 10px; }
    .item {
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
      background: #fbfcfd;
    }
    .item-title {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }
    .item-title strong { overflow-wrap: anywhere; }
    .meta, .muted { color: var(--muted); font-size: 13px; }
    .badge {
      display: inline-flex;
      align-items: center;
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 2px 8px;
      font-size: 12px;
      white-space: nowrap;
      background: #fff;
    }
    .ok { color: var(--ok); border-color: #99d5cd; }
    .warn { color: var(--warn); border-color: #f0c37a; }
    .bad { color: var(--bad); border-color: #ef9a9a; }
    .muted.badge { color: var(--muted); }
    code {
      background: #eef1f5;
      border-radius: 4px;
      padding: 1px 4px;
    }
    @media (max-width: 820px) {
      header { padding: 22px 18px 16px; }
      main { padding: 16px; }
      .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Personal AI Cognitive OS Dashboard</h1>
    <p class="subtitle">A generated public dashboard for the local-file AI cognitive memory template. It shows memory layers, rules, projects, error-prevention logic, and evolution events from sample JSON only.</p>
  </header>
  <main>
    <div class="stats">
      ${stats.map(([label, value]) => `<div class="stat"><strong>${value}</strong><span>${escapeHtml(label)}</span></div>`).join("")}
    </div>
    <div class="grid">
      ${card("Systems", renderList(systems, (system) => `
        <div class="item">
          <div class="item-title">
            <strong>${escapeHtml(system.display_name)}</strong>
            <span class="badge ${statusClass(system.status)}">${escapeHtml(system.status)}</span>
          </div>
          <p>${escapeHtml(system.summary)}</p>
          <p class="meta"><code>${escapeHtml(system.system_id)}</code> · ${escapeHtml(system.maturity)} · ${escapeHtml(system.entry_path)}</p>
        </div>`))}
      ${card("Projects", renderList(projects, (project) => `
        <div class="item">
          <div class="item-title">
            <strong>${escapeHtml(project.display_name)}</strong>
            <span class="badge ${statusClass(project.status)}">${escapeHtml(project.status)}</span>
          </div>
          <p>Next action: ${escapeHtml(project.next_action)}</p>
          <p class="meta"><code>${escapeHtml(project.project_id)}</code> · verification: ${escapeHtml(project.verification)}</p>
        </div>`))}
      ${card("Rule Cards", renderList(rules, (rule) => `
        <div class="item">
          <div class="item-title">
            <strong>${escapeHtml(rule.title)}</strong>
            <span class="badge ${statusClass(rule.status)}">P${escapeHtml(rule.priority)}</span>
          </div>
          <p>${escapeHtml(rule.applies_when)}</p>
          <p class="meta"><code>${escapeHtml(rule.rule_id)}</code> · ${escapeHtml(rule.category)}</p>
        </div>`))}
      ${card("Recent Events", renderList(events, (event) => `
        <div class="item">
          <div class="item-title">
            <strong>${escapeHtml(event.event_id)}</strong>
            <span class="badge ${statusClass(event.status)}">${escapeHtml(event.status)}</span>
          </div>
          <p>${escapeHtml(event.summary)}</p>
          <p class="meta">${escapeHtml(event.created_at)} · ${escapeHtml(event.source_trace)}</p>
        </div>`))}
    </div>
  </main>
</body>
</html>`;

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(paths.output, html, "utf8");
  console.log(`Dashboard generated: ${paths.output}`);
}

render();
