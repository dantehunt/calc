import { validateNumber } from "./validator";

/**
 * This function accepts two numbers as parameters and returns the quotient
 * when first parameter is divided by second parameter.
 * If the passed parameters are not numbers, NaN is returned
 * @throws
 * Airthmatic Exception when second parameter is 0
 * @param {number} num1 - The first number that is the Dividend
 * @param {number} num2 - The second number that is the Divisor
 * @example
 * divide(8/2)
 * //returns 4
 * divide(0/9)
 * //returns 0
 * divide(12/0)
 * //throws Airthmatic Exception
 * @returns {number} num1/num2
 */
 export function divide(num1: number, num2: number): number{
    if(num1===0) 
        return 0;
    if(num2 === 0)
        return NaN;
    if(validateNumber(num1) && validateNumber(num2))
        return num1/num2;
    return NaN;
}