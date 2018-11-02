'use strict';

module.exports = Math.log10 || /* istanbul ignore next */ function(x) {
  return Math.log(x) * Math.LOG10E;
};
