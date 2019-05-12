"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeReg = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        // throw new Error("Method not implemented.");
        return ZipCodeReg.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
