#!/usr/bin/env node
'use strict';

const { pick } = require('../lib/quotes');
const { sleep, header, step, success, footer, box } = require('../lib/display');
const { version } = require('../package.json');

const RESET = '\x1b[0m';
const RED   = '\x1b[31m';
const DIM   = '\x1b[2m';

async function commit() {
  step('›', 'Analyzing commit message...');
  await sleep(120);
  step('›', 'Checking staging area integrity...');
  await sleep(180);
  step('›', 'Applying Rustic Intelligence™ validation...');
  await sleep(150);
  success('Commit validated');
  box(pick());
  footer('Commit pushed to origin. Bonne continuation, mon gars.');
}

async function review() {
  step('›', 'Loading pull request...');
  await sleep(140);
  step('›', 'Parsing diff with agricultural precision...');
  await sleep(200);
  step('›', 'Consulting the cabbage wisdom index...');
  await sleep(160);
  success('Review complete');
  box(pick());
  footer('Review submitted. Un chtit canon pour fêter ça ?');
}

async function build() {
  step('›', 'Scanning dependency tree...');
  await sleep(130);
  step('›', 'Invoking ancient compilation rites...');
  await sleep(220);
  step('›', 'Bundling assets with rural efficiency...');
  await sleep(170);
  success('Build finished');
  box(pick());
  footer('Artifacts ready. La soupe est chaude.');
}

async function status() {
  step('›', 'Querying project metrics...');
  await sleep(110);
  step('›', 'Consulting the nappe phréatique...');
  await sleep(190);
  step('›', 'Cross-referencing with Oxo database...');
  await sleep(140);
  success('Status retrieved');
  box(pick());
  footer('Project health nominal. Tout va bien, bé oui.');
}

async function help() {
  step('›', 'Searching agricultural knowledge base...');
  await sleep(150);
  success('Wisdom located');
  box(pick());

  process.stdout.write('\n' + DIM + '  Available commands:\n\n' + RESET);
  const cmds = [
    ['commit', 'Validate your commit with rustic rigor'],
    ['review', 'Apply Rustic Intelligence™ to your pull request'],
    ['build',  'Compile your project using cabbage-driven architecture'],
    ['status', 'Report project health in peasant terms'],
    ['help',   'Dispense wisdom (limited supply)'],
  ];
  for (const [cmd, desc] of cmds) {
    process.stdout.write(DIM + '    glaude ' + RESET + cmd.padEnd(10) + DIM + '  ' + desc + RESET + '\n');
  }
  process.stdout.write('\n');
}

function unknown(cmd) {
  process.stdout.write(RED + '  ✗ Commande inconnue : "' + (cmd || '') + '"' + RESET + '\n');
  process.stdout.write(DIM + '  Et bah mes cadets, et bah mes petits frères, ça commence bien !\n\n' + RESET);
}

async function main() {
  const cmd = process.argv[2];

  header(version);

  const handlers = { commit, review, build, status, help };

  if (!cmd || !handlers[cmd]) {
    unknown(cmd);
    await help();
    process.exit(1);
  }

  await handlers[cmd]();
}

main().catch(err => {
  process.stderr.write(RED + '  Erreur fatale : ' + err.message + RESET + '\n');
  process.exit(1);
});
