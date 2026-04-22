'use strict';

const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';
const DIM    = '\x1b[2m';
const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';
const YELLOW = '\x1b[33m';

const BOX_WIDTH = 70; // total width including border chars

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function header(version) {
  process.stdout.write('\n' + BOLD + CYAN + '  🥬 glaude v' + version + RESET + '\n\n');
}

function step(icon, text) {
  process.stdout.write(DIM + '  ' + icon + ' ' + text + RESET + '\n');
}

function success(text) {
  process.stdout.write(GREEN + '  ✔ ' + text + RESET + '\n');
}

function footer(text) {
  process.stdout.write('\n' + DIM + '  ' + text + RESET + '\n\n');
}

function wordWrap(text, maxLen) {
  const words = text.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    if (current.length === 0) {
      current = word;
    } else if (current.length + 1 + word.length <= maxLen) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current.length > 0) lines.push(current);
  return lines;
}

function box(quote) {
  const innerWidth = BOX_WIDTH - 4; // "║ " + content + " ║"
  const speakerLine = quote.speaker + ' dit :';
  const textLines = wordWrap('"' + quote.text + '"', innerWidth);

  const pad = str => str + ' '.repeat(innerWidth - str.length);
  const bar = '═'.repeat(BOX_WIDTH - 2);

  const lines = [
    YELLOW + '  ╔' + bar + '╗' + RESET,
    YELLOW + '  ║ ' + RESET + BOLD + pad(speakerLine) + YELLOW + ' ║' + RESET,
    YELLOW + '  ║ ' + RESET + pad('') + YELLOW + ' ║' + RESET,
  ];

  for (const line of textLines) {
    lines.push(YELLOW + '  ║ ' + RESET + pad(line) + YELLOW + ' ║' + RESET);
  }

  lines.push(YELLOW + '  ╚' + bar + '╝' + RESET);

  process.stdout.write('\n' + lines.join('\n') + '\n');
}

module.exports = { sleep, header, step, success, footer, box };
