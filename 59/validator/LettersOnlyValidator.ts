import { StringValidator } from './validation'

const LetterReg = /^[A-Za-z]+$/

export class LetterOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return LetterReg.test(s)
    }
}