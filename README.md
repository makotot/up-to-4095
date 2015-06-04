# up-to-4095

> Up to 4095 css limit in IE9 and below.


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

