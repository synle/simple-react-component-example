'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Util = require('Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finalutil = {
	getValue: function getValue() {
		var a = _Util2.default.getValue(Date.now());
		var b = _Util2.default.getValue(Date.now());

		return a + ' ' + b;
	}
}; //import "babel-register";
exports.default = finalutil;