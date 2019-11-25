"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = function (array, size) {
    if (size === void 0) { size = 1; }
    var result = new Array();
    var length = array != null ? array.length : 0;
    if (!length || size < 0) {
        return result;
    }
    var i = 0;
    for (i = 0; i + size <= length; i += size) {
        result.push(array.slice(i, i + size));
    }
    i < length && result.push(array.slice(i, length));
    return result;
};
console.warn(exports.chunk([3, 4, 2, 3, 'test'], 3));
