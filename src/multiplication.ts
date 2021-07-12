import { validateNumber } from "./validator";

/**
 * This function accepts two numbers as parameters and returns their product.
 * If the passed parameters are not numbers, NaN is returned
 * @param {number} num1 - The first number to be multiplied
 * @param {number} num2 - The second number to be multiplied
 * @example
 * multiply(4,8)
 * //returns 32
 * multiply(0, 2)
 * //returns 0
 * multiply(-3, 2)
 * //returns -6
 * @returns {number} - num1 * num2
 */
 export function multiply(num1: number, num2: number): number{
    if(validateNumber(num1) && validateNumber(num2))
        return num1*num2;
    return NaN;
}