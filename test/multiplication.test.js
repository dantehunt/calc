//import {multiply} from '../dist/multiplication';
const multiply = require('../dist/multiplication').multiply;


describe("Multiplication Tests", () => {

    //No Error Test Cases
    test('0 * 0 = 0', () => {
      expect(multiply(0, 0)).toBe(0);
    });
    test('100 * 0 = 0', () => {
        expect(multiply(100, 0)).toBe(0);
    });
    test('-2 * 4 = -8', () => {
        expect(multiply(-2, 4)).toBe(-8);
    });
    test('-8 * (-4) = 32', () => {
        expect(multiply(-8, -4)).toBe(32);
    });
    test('-10 * 0 = 0', () => {
        expect(multiply(-10, 0)).toBe(-0);
    });
    //End Of No Error Test Cases

    //Error Test Cases
    test('invalidstr * 4 = NaN', ()=>{
        expect(multiply('invalidstr', 4)).toBe(NaN);
    })
    test('4 * invalidstr = NaN', ()=>{
        expect(multiply(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr * invalidstr = NaN', ()=>{
        expect(multiply('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null * 2 = NaN', ()=>{
        expect(multiply(null, 4)).toBe(NaN);
    })
    test('null * 2 = NaN', ()=>{
        expect(multiply(null, 4)).toBe(NaN);
    })
    test('2 * null = NaN', ()=>{
        expect(multiply(2, null)).toBe(NaN);
    })
    test('null * null = NaN', ()=>{
        expect(multiply(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});