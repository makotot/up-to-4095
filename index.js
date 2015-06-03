var fs = require('fs'),
  path = require('path'),
  gonzales = require('gonzales-ast'),
  css = require('css');


function getUptoLimit (stylesheet) {
  var ast = css.parse(fs.readFileSync(stylesheet, 'utf8'));

  return ast;
}


module.exports = function (stylesheet, cb) {

  if (!fs.existsSync(path.resolve(stylesheet))) {
    cb(new Error(stylesheet + ' is not found!'));
  }

  cb(null, getUptoLimit(stylesheet));
};
