# up-to-4095

[![npm version](http://img.shields.io/npm/v/up-to-4095.svg?style=flat)](https://github.com/makotot/up-to-4095)
[![travis](http://img.shields.io/travis/makotot/up-to-4095.svg?style=flat)](https://github.com/makotot/up-to-4095)
[![dependencies](http://img.shields.io/david/makotot/up-to-4095.svg?style=flat)](https://github.com/makotot/up-to-4095)
[![devDependencies](http://img.shields.io/david/dev/makotot/up-to-4095.svg?style=flat)](https://github.com/makotot/up-to-4095)
[![License](http://img.shields.io/npm/l/up-to-4095.svg?style=flat)](https://github.com/makotot/up-to-4095)

> Up to 4095 css limit in IE9 and below.

<img src="screenshot.png" />


## Install

```sh
$ npm i --save up-to-4095
```

or

```sh
$ npm i -g up-to-4095
```

## Usage

```js
var upto4095 = require('up-to-4095');

upto4095('./css/app.css', function (err, num) {
  if (err) {
    throw err;
  }

  console.log(num);
});
```

## CLI

```
$ upto4095 ./css/app.css
```


## License

MIT

