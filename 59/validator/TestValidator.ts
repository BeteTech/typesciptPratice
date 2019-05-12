import { StringValidator } from "./validation";
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LetterOnlyValidator } from "./lettersOnlyValidator";


let strArr = ['100', 'wangye', 'okman']

let validators: { [s: string]: StringValidator } = {}
validators['zip code'] = new ZipCodeValidator()
validators['letters only'] = new LetterOnlyValidator()

strArr.forEach(s => {
    for (const name in validators) {
        console.log(`"${s}"- ${validators[name].isAcceptable ? 'matches' : 'do not matches'} ${name}`)
    }
})
