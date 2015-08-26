var postcss = require('postcss'),
  threshold = 4095;


function getUptoLimit (stylesheet) {
  var root = postcss.parse(stylesheet);

  return threshold - root.nodes.length;
}


module.exports = function (stylesheet, cb) {

  cb(null, getUptoLimit(stylesheet));
};
