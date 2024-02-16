import { convertDigitsToRomanNumeral, appendNumeral, generateTensOnesNumeral } from "../src/calc";

describe("convertToRomanNumerals", () => {

    it('it should be 1001 to MI', () => {
        const startNumeral: string = 'M';

        const expectedRomanNumeral: string = 'MI';

        const result: string = appendNumeral(startNumeral,'I',0,1);

        expect(result).toBe(expectedRomanNumeral);
    })


    it('it should be 66 to LXVI', () => {

        const expectedRomanNumeral: string = 'LXVI';
        const input: number  = 66;

        const result: string = generateTensOnesNumeral(input.toString().split(''));

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 3 to III', () => {
        const digits: number = 3;

        const expectedRomanNumeral: string = 'III';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 7 to VII', () => {
        const digits: number = 7;

        const expectedRomanNumeral: string = 'VII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 2001 to MMI', () => {
        const digits: number = 2001;

        const expectedRomanNumeral: string = 'MMI';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 2000 to MM', () => {
        const digits: number = 2000;

        const expectedRomanNumeral: string = 'MM';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })


    it('it should convert 713 to DCCXIII', () => {
        const digits: number = 713;

        const expectedRomanNumeral: string = 'DCCXIII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 999 to DCCCCLXXXXVIIII', () => {
        const digits: number = 999;

        const expectedRomanNumeral: string = 'DCCCCLXXXXVIIII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 444 to CCCCXXXXIIII', () => {
        const digits: number = 444;

        const expectedRomanNumeral: string = 'CCCCXXXXIIII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 478 to CCCCLXXVIII', () => {
        const digits: number = 478;

        const expectedRomanNumeral: string = 'CCCCLXXVIII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 51 to LI', () => {
        const digits: number = 51;

        const expectedRomanNumeral: string = 'LI';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 13 to VIII', () => {
        const digits: number = 13;

        const expectedRomanNumeral: string = 'VIII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 7 to VII', () => {
        const digits: number = 7;

        const expectedRomanNumeral: string = 'VII';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 1 to I', () => {
        const digits: number = 1;

        const expectedRomanNumeral: string = 'I';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

    it('it should convert 89 to LXXXIX', () => {
        const digits: number = 89;

        const expectedRomanNumeral: string = 'LXXXIX';

        const result: string = convertDigitsToRomanNumeral(digits);

        expect(result).toBe(expectedRomanNumeral);
    })

});