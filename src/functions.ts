
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


/**
 * This helper function accepts one parameter and checks if that object can be a valid number or not.
 * The method toString() is called automatically before the check
 * @param {number|string} num - Any object to be checked for number validation
 * @example
 * validateNumber("1292")
 * //returns true
 * validateNumber("928.8292")
 * //returns true
 * validateNumber("number")
 * //returns false
 * validateNumber({k1: v1})
 * //returns false
 * @returns {boolean}
 */
export function validateNumber(num: string|number): boolean{
    if(num==null)
        return false;
    if(isNaN(Number(num)))
        return false;
    return true;
}


