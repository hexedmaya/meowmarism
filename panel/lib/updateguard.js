// Update safety net: the previous panel/ stays as panel.old until the new version has run healthily.
const fs = require('fs');
const os = require('os');
const path = require('path');

const MARKER = path.join(os.homedir(), '.meowmarism-update-pending.json');
const RESULT = path.join(os.homedir(), '.meowmarism-update-result.json');
const MAX_BOOTS = 3;
const CONFIRM_AFTER_MS = Number(process.env.MEOW_CONFIRM_MS) || 60000;

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (_) { return null; }
}

function rollbackInstall(installDir, reason, from, to) {
  const live = path.join(installDir, 'panel');
  const old = path.join(installDir, 'panel.old');
  if (!fs.existsSync(old)) return false;
  fs.rmSync(path.join(installDir, 'panel.failed'), { recursive: true, force: true });
  fs.renameSync(live, path.join(installDir, 'panel.failed'));
  fs.renameSync(old, live);
  const oldPkg = path.join(installDir, 'package.json.old');
  if (fs.existsSync(oldPkg)) fs.renameSync(oldPkg, path.join(installDir, 'package.json'));
  fs.writeFileSync(RESULT, JSON.stringify({ rolledBack: true, reason, from, to, at: Date.now() }));
  return true;
}

// Runs first thing on boot: a crash-looping new version is swapped back for the old one.
function bootCheck(panelDir) {
  if (process.env.MEOW_PROBE) return;
  const marker = readJson(MARKER);
  if (!marker) return;
  const installDir = path.resolve(panelDir, '..');
  marker.boots = (marker.boots || 0) + 1;
  try { fs.writeFileSync(MARKER, JSON.stringify(marker)); } catch (_) {}
  if (marker.boots > MAX_BOOTS) {
    try {
      if (rollbackInstall(installDir, 'the new version kept crashing on startup', marker.from, marker.to)) {
        fs.unlinkSync(MARKER);
        process.exit(1);
      }
    } catch (_) {}
    try { fs.unlinkSync(MARKER); } catch (_) {}
  }
}

function confirmHealthy(panelDir) {
  if (process.env.MEOW_PROBE || !fs.existsSync(MARKER)) return;
  const t = setTimeout(() => {
    const installDir = path.resolve(panelDir, '..');
    try { fs.unlinkSync(MARKER); } catch (_) {}
    fs.rmSync(path.join(installDir, 'panel.old'), { recursive: true, force: true });
    fs.rmSync(path.join(installDir, 'package.json.old'), { force: true });
    fs.rmSync(path.join(installDir, 'panel.failed'), { recursive: true, force: true });
  }, CONFIRM_AFTER_MS);
  if (t.unref) t.unref();
}

function writeMarker(from, to) {
  fs.writeFileSync(MARKER, JSON.stringify({ from, to, boots: 0, at: Date.now() }));
}

function lastResult() {
  const r = readJson(RESULT);
  return r && Date.now() - r.at < 7 * 24 * 3600 * 1000 ? r : null;
}
function clearResult() {
  try { fs.unlinkSync(RESULT); } catch (_) {}
}

module.exports = { bootCheck, confirmHealthy, writeMarker, rollbackInstall, lastResult, clearResult };
