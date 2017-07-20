'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Util = require('./Util.es6');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finalutil = {
	getValue: function getValue() {
		return _Util2.default.getValue(Date.now());
	}
};

exports.default = finalutil;
