#!/usr/bin/env node

var meow = require('meow'),
  upto4095 = require('./');


var cli = meow({
  help: [
    'Usage',
    ' $ upto4095 [target stylesheet]'
  ].join('\n')
});

upto4095(cli.input[0], function (err, res) {
  if (err) {
    throw err;
  }

  console.log(JSON.stringify(res, null, 2));
});
