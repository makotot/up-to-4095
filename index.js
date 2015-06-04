var fs = require('fs'),
  path = require('path'),
  css = require('css'),
  threshold = 4095;


function getUptoLimit (stylesheet) {
  var ast = css.parse(fs.readFileSync(stylesheet, 'utf8'));

  return threshold - ast.stylesheet.rules.length;
}


module.exports = function (stylesheet, cb) {

  if (!stylesheet || !fs.existsSync(path.resolve(stylesheet))) {
    cb(new Error(stylesheet + ' is not found!'));
  }

  cb(null, getUptoLimit(stylesheet));
};
