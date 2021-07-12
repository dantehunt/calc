import {validateNumber} from './validator';


/**
 * This function accepts two numbers as parameters and returns their sum.
 * If the passed parameters are not numbers, NaN is returned
 * @param {number} num1 - The first number to be added
 * @param {number} num2 - The second number to be added
 * @example 
 * add(1,3)
 * //returns 4
 * add(9,0)
 * //returns 9
 * add(-4, 23)
 * //returns 19
 * @returns {number} num1 + num2 
 */
 export function add(num1: number, num2: number): number{
    if(validateNumber(num1) && validateNumber(num2))
        return num1 + num2;
    return NaN;
}