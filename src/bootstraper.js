var generate = require("./generate");
module.exports = function(source) {
  this.cacheable();
  var output = generate.apply(this, [source]);
  return output;
}