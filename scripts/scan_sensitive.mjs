import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const ignoredDirs = new Set([".git", "node_modules", "public"]);
const ignoredExt = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".mp4", ".mov", ".wav", ".mp3", ".zip", ".7z", ".rar"]);

const patterns = [
  { id: "openai_key", severity: "high", regex: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { id: "github_pat", severity: "high", regex: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g },
  { id: "github_token", severity: "high", regex: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g },
  { id: "slack_token", severity: "high", regex: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g },
  { id: "aws_access_key", severity: "high", regex: /\bAKIA[0-9A-Z]{16}\b/g },
  { id: "private_key_block", severity: "high", regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g },
  { id: "windows_private_path", severity: "medium", regex: /[A-Z]:\\Users\\[^\\\s]+\\/g },
  { id: "email_address", severity: "low", regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi }
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      if (!ignoredExt.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
    }
  }
  return files;
}

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const matches = [];
  const lines = text.split(/\r?\n/);
  for (const pattern of patterns) {
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      pattern.regex.lastIndex = 0;
      if (pattern.regex.test(lines[lineIndex])) {
        matches.push({
          file: path.relative(ROOT, filePath),
          line: lineIndex + 1,
          id: pattern.id,
          severity: pattern.severity
        });
      }
    }
  }
  return matches;
}

const findings = [];
for (const filePath of walk(ROOT)) {
  try {
    findings.push(...scanFile(filePath));
  } catch {
    findings.push({
      file: path.relative(ROOT, filePath),
      line: 0,
      id: "unreadable_text_file",
      severity: "medium"
    });
  }
}

const high = findings.filter((item) => item.severity === "high");
const medium = findings.filter((item) => item.severity === "medium");
const low = findings.filter((item) => item.severity === "low");

console.log(JSON.stringify({ high: high.length, medium: medium.length, low: low.length, findings }, null, 2));

if (high.length > 0) {
  process.exitCode = 1;
}

