// /*
// * Reckon v1.0.0
// * Copyright 2016, Alex Hernandez
// * https://github.com/alexhernandez/reckon
// *
// * Free to use under the MIT license.
// */

'use strict';

function Reckon () {
  this.total = 0;
}

Reckon.prototype.add = function(value) {
  return this.total += value;
};

Reckon.prototype.subtract = function(value) {
  return this.total -= value;
};

Reckon.prototype.multiply = function(value) {
  return this.total *= value;
};

Reckon.prototype.divide = function(value) {
  return this.total /= value;
};

Reckon.prototype.clear = function() {
  return this.total = 0;
};

// module.exports = Reckon;
