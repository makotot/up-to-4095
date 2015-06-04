#!/usr/bin/env node

var meow = require('meow'),
  figures = require('figures'),
  chalk = require('chalk'),
  upto4095 = require('./');


var cli = meow({
  help: [
    'Usage',
    ' $ upto4095 [stylesheet]',
    '',
    'Example',
    ' $ upto4095 ./css/app.css'
  ].join('\n')
});

if (!cli.input[0]) {
  console.error('Target css is required!');
  process.exit(1);
}

upto4095(cli.input[0], function (err, res) {
  if (err) {
    throw err;
  }

  if (res > 0) {
    console.log(chalk.green(figures.tick), ' ', chalk.bold(res), chalk.gray(' until the threshold.'));
  } else if (res === 0) {
    console.log(chalk.yellow(figures.warning), chalk.gray(' Just '), chalk.bold('4095.'));
  } else {
    console.log(chalk.red(figures.cross), '  ', chalk.bold(Math.abs(res)), chalk.gray(' exceeds the threshold.'));
  }
});
