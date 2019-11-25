"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compact = function (array) {
    return array.filter(function (element) { return Boolean(element); });
};
