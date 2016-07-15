(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
  function Calculator() {
    var screen = arguments.length <= 0 || arguments[0] === undefined ? "calc__total" : arguments[0];

    _classCallCheck(this, Calculator);

    this.val = [];
    this.operator = "";
    this.screen = document.getElementsByClassName(screen)[0];
  }

  _createClass(Calculator, [{
    key: "init",
    value: function init() {
      this.setScreen();
      this.setNumKeyListeners();
      this.setOperatorKeyListeners();
      this.setBackspaceKeyListeners();
    }
  }, {
    key: "setScreen",
    value: function setScreen() {
      this.screen.innerHTML = this.val.length == 0 ? "" : this.val.join('');
      console.log(this);
    }
  }, {
    key: "setNumKeyListeners",
    value: function setNumKeyListeners() {
      var _this = this;

      var numKeys = document.getElementsByClassName("calc__int");

      for (var i = 0; i < numKeys.length; i++) {
        numKeys[i].addEventListener('click', function (event) {
          return _this.pushScreenValue(event.target.innerHTML);
        });
      }
    }
  }, {
    key: "setOperatorKeyListeners",
    value: function setOperatorKeyListeners() {
      var operatorKeys = document.getElementsByClassName("calc__operator");
      // let operators = ["/","*","-","+","="];

      for (var i = 0; i < operatorKeys.length; i++) {
        operatorKeys[i].addEventListener('click', function (event) {
          console.log(event.target.innerHTML);
        });
      }
    }
  }, {
    key: "setBackspaceKeyListeners",
    value: function setBackspaceKeyListeners() {
      var _this2 = this;

      var backspace = document.getElementsByClassName("calc__backspace");
      backspace[0].addEventListener('click', function () {
        return _this2.popScreenValue();
      });
    }
  }, {
    key: "pushScreenValue",
    value: function pushScreenValue(value) {
      this.val.push(value);
      this.setScreen();
    }
  }, {
    key: "popScreenValue",
    value: function popScreenValue(value) {
      this.val.length == 1 ? this.clear() : this.val.pop();
      this.setScreen();
    }
  }, {
    key: "add",
    value: function add(value) {
      return this.val += value;
    }
  }, {
    key: "subtract",
    value: function subtract(value) {
      return this.val -= value;
    }
  }, {
    key: "multiply",
    value: function multiply(value) {
      return this.val *= value;
    }
  }, {
    key: "divide",
    value: function divide(value) {
      return this.val /= value;
    }
  }, {
    key: "clear",
    value: function clear() {
      return this.val = [];
    }
  }]);

  return Calculator;
}();

exports.default = Calculator;

},{}],2:[function(require,module,exports){
'use strict';

var _Calculator = require('./Calculator');

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = new _Calculator2.default();

calc.init();

},{"./Calculator":1}]},{},[2]);

//# sourceMappingURL=reckon.js.map
