"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateToStringYYYYMMDD = function (date, separator) {
    if (separator === void 0) { separator = '/'; }
    return [date.getFullYear(), date.getMonth(), date.getDay()].join(separator);
};
exports.DateToStringDDMMYYYY = function (date, separator) {
    if (separator === void 0) { separator = '/'; }
    return [date.getDay(), date.getMonth(), date.getFullYear()].join(separator);
};
exports.DateToStringMMDDYYYY = function (date, separator) {
    if (separator === void 0) { separator = '/'; }
    return [date.getMonth(), date.getDay(), date.getFullYear()].join(separator);
};
