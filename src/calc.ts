
type romanNumeral =  {
    [key: number]: string 
}

const numerals: romanNumeral = {
    1: 'I',
    5: 'V',
    10: 'X',
    40: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}
// First solution
export const appendNumeral = (
    startNumeral: string,
    numeral: string,
    from: number,
    to: number
) => {
    if (from > to) return "";

    for (let i = from; i < to; i++) startNumeral += numeral;
    return startNumeral;
};

export const generateTensOnesNumeral = (arrDigits: string[]) => {
    const numTens: number = parseInt(arrDigits[0]);
    
    let result =
        numTens >= 5
            ? appendNumeral("L", "X", 5, numTens)
            : appendNumeral("X", "X", 1, numTens);

    const numOnes: number = parseInt(arrDigits[1]);
    result +=
        numOnes >= 5
            ? appendNumeral("V", "I", 5, numOnes)
            : appendNumeral("I", "I", 1, numOnes);
    return result;
}

export  const convertDigitsToRomanNumeral  = (digits: number): string => {
    const arrDigits = digits.toString().split("");

    let result = "";

    if (digits >= 1 && digits <= 3) {
        return appendNumeral("", "I", 0, digits);
    }

    if (digits === 4) {
        return "IV";
    }

    if (digits >= 5 && digits <= 9) {
        return appendNumeral("V", "I", 5, digits);
    }

    if (digits >= 10 && digits <= 19) {
        return appendNumeral("V", "I", 10, digits);
    }

    if (digits >= 51 && digits <= 99) {
        return generateTensOnesNumeral(arrDigits);
    }

    if (digits >= 100 && digits <= 499) {
        const numHundreds: number = parseInt(arrDigits[0]);
        let result = appendNumeral("C", "C", 1, numHundreds);
        result +=  generateTensOnesNumeral(arrDigits.slice(1))

        return result;
    }

    if (digits >= 500 && digits <= 999) {
        const numHundreds: number = parseInt(arrDigits[0]);
        let result = appendNumeral("D", "C", 5, numHundreds);
        result += generateTensOnesNumeral(arrDigits.slice(1));

        return result;
    }

    if (digits >= 1000 && digits <= 3000) {
        const numThousands: number = parseInt(arrDigits[0]);
        result += appendNumeral("M", "M", 1, numThousands);

        const numHundreds: number = parseInt(arrDigits[1]);
        result += appendNumeral("C", "C", 1, numHundreds);

        const numTens: number = parseInt(arrDigits[2]);
        result += appendNumeral("L", "L", 1, numTens);

        const numOnes: number = parseInt(arrDigits[3]);
        result += appendNumeral("I", "I", 1, numOnes);

        return result;
    }
    return result;
}