import { StringValidator } from './validation'

const ZipCodeReg = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        // throw new Error("Method not implemented.");
        return ZipCodeReg.test(s)
    }

}