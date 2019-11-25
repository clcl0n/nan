"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compact = function (array) {
    if (array == null) {
        return new Array();
    }
    return array.filter(function (element) { return Boolean(element); });
};
