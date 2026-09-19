// LITE runtime: the server is a host process. The process code itself still lives in server.js.
const { assertRuntime } = require('../core/modules/runtime-contract');

function createRuntime(p) {
  return assertRuntime({
    isRunning: () => !!p.getChild(),
    isReady: () => !!p.getChild() && p.getPhase() === 'ready',
    start: () => p.start(),
    stop: (intent) => p.stop(intent),
    restart: (intent) => p.restart(intent),
    kill: () => p.kill(),
    command: (text) => p.command(text),
    stopAndWait: () => new Promise((resolve) => {
      const child = p.getChild();
      if (!child) { resolve(); return; }
      child.once('exit', () => resolve());
      p.stop();
    }),
  });
}

module.exports = { createRuntime };
