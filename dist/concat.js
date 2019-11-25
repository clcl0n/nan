"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = function (array) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    if (array === null) {
        return new Array();
    }
    if (values === null) {
        return array;
    }
    return array.concat(values);
};
