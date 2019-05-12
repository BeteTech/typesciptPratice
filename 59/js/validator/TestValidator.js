"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var lettersOnlyValidator_1 = require("./lettersOnlyValidator");
var strArr = ['100', 'wangye', 'okman'];
var validators = {};
validators['zip code'] = new ZipCodeValidator_1.ZipCodeValidator();
validators['letters only'] = new lettersOnlyValidator_1.LetterOnlyValidator();
strArr.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\"- " + (validators[name_1].isAcceptable ? 'matches' : 'do not matches') + " " + name_1);
    }
});
