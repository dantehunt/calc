import { validateNumber } from "./validator";

/**
 * This function accepts two numbers as parameters and returns their subtraction result.
 * If the passed parameters are not numbers, NaN is returned
 * @param {number} num1 - The first number to be subtracted from
 * @param {number} num2 - The second number to be subtracted
 * @example
 * subtract(9,2)
 * //returns 7
 * subtract(-1,-4)
 * //returns 3
 * subtract(8, -3)
 * //returns 11
 * @returns {number} - num1 - num2
 */
 export function subtract(num1: number, num2: number): number{
    if(validateNumber(num1) && validateNumber(num2))
        return num1-num2;
    return NaN;
}   