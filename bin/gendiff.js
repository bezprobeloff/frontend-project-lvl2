#!/usr/bin/env node
const { Command } = require('commander');

const programm = new Command();
programm.version('0.0.1');
programm.description('Compares two configuration files and shows a difference.');

programm
  .option('-f, --format', 'select format type');

programm.parse(process.argv);
