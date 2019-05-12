"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LetterReg = /^[A-Za-z]+$/;
var LetterOnlyValidator = /** @class */ (function () {
    function LetterOnlyValidator() {
    }
    LetterOnlyValidator.prototype.isAcceptable = function (s) {
        return LetterReg.test(s);
    };
    return LetterOnlyValidator;
}());
exports.LetterOnlyValidator = LetterOnlyValidator;
