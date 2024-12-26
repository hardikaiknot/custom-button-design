"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    "button",
    { style: { background: props.background, color: props.color, height: props.height, width: props.width } },
    props.label
  );
};

exports.default = Button;