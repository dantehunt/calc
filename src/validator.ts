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