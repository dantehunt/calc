const fn = require('../dist/functions');

describe("Addition Tests", () => {
    // No Error Test Cases
    test('1 + 2 = 3', () => {
      expect(fn.add(1, 2)).toBe(3);
    });
    test('100 + 0 = 100', () => {
        expect(fn.add(100, 0)).toBe(100);
    });
    test('0 + 0 = 0', () => {
        expect(fn.add(0, 0)).toBe(0);
    });
    test('-8 + 2 = -6', () => {
        expect(fn.add(-8, 2)).toBe(-6);
    });
    //End of No Error Test Cases

    //Error Test Cases
    test('invalidstr + 4 = NaN', ()=>{
        expect(fn.add('invalidstr', 4)).toBe(NaN);
    })
    test('4 + invalidstr = NaN', ()=>{
        expect(fn.add(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr + invalidstr = NaN', ()=>{
        expect(fn.add('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null + 2 = NaN', ()=>{
        expect(fn.add(null, 4)).toBe(NaN);
    })
    test('null + 2 = NaN', ()=>{
        expect(fn.add(null, 4)).toBe(NaN);
    })
    test('2 + null = NaN', ()=>{
        expect(fn.add(2, null)).toBe(NaN);
    })
    test('null + null = NaN', ()=>{
        expect(fn.add(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});



describe("Subtraction Tests", () => {

    //No Error Test Cases
    test('84 + 4 = 80', () => {
      expect(fn.subtract(84, 4)).toBe(80);
    });
    test('100 - 0 = 100', () => {
        expect(fn.subtract(100, 0)).toBe(100);
    });
    test('0 - 0 = 0', () => {
        expect(fn.subtract(0, 0)).toBe(0);
    });
    test('-8 - (-2) = -6', () => {
        expect(fn.subtract(-8, -2)).toBe(-6);
    });
    test('-8 - 2 = -10', () => {
        expect(fn.subtract(-8, 2)).toBe(-10);
    });
    test('100 - 200 = -100', () => {
        expect(fn.subtract(100, 200)).toBe(-100);
    });
    //End of No Error Test Cases

    //Error Test Cases
    test('invalidstr - 4 = NaN', ()=>{
        expect(fn.subtract('invalidstr', 4)).toBe(NaN);
    })
    test('4 - invalidstr = NaN', ()=>{
        expect(fn.subtract(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr - invalidstr = NaN', ()=>{
        expect(fn.subtract('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null - 2 = NaN', ()=>{
        expect(fn.subtract(null, 4)).toBe(NaN);
    })
    test('null - 2 = NaN', ()=>{
        expect(fn.subtract(null, 4)).toBe(NaN);
    })
    test('2 - null = NaN', ()=>{
        expect(fn.subtract(2, null)).toBe(NaN);
    })
    test('null - null = NaN', ()=>{
        expect(fn.subtract(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});



describe("Multiplication Tests", () => {

    //No Error Test Cases
    test('0 * 0 = 0', () => {
      expect(fn.multiply(0, 0)).toBe(0);
    });
    test('100 * 0 = 0', () => {
        expect(fn.multiply(100, 0)).toBe(0);
    });
    test('-2 * 4 = -8', () => {
        expect(fn.multiply(-2, 4)).toBe(-8);
    });
    test('-8 * (-4) = 32', () => {
        expect(fn.multiply(-8, -4)).toBe(32);
    });
    test('-10 * 0 = 0', () => {
        expect(fn.multiply(-10, 0)).toBe(-0);
    });
    //End Of No Error Test Cases

    //Error Test Cases
    test('invalidstr * 4 = NaN', ()=>{
        expect(fn.multiply('invalidstr', 4)).toBe(NaN);
    })
    test('4 * invalidstr = NaN', ()=>{
        expect(fn.multiply(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr * invalidstr = NaN', ()=>{
        expect(fn.multiply('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null * 2 = NaN', ()=>{
        expect(fn.multiply(null, 4)).toBe(NaN);
    })
    test('null * 2 = NaN', ()=>{
        expect(fn.multiply(null, 4)).toBe(NaN);
    })
    test('2 * null = NaN', ()=>{
        expect(fn.multiply(2, null)).toBe(NaN);
    })
    test('null * null = NaN', ()=>{
        expect(fn.multiply(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});



describe("Division Tests", () => {

    //No Error Test Cases
    test('0/0 = 0', () => {
      expect(fn.divide(0, 0)).toBe(0);
    });
    test('8/2 = 4', () => {
        expect(fn.divide(8, 2)).toBe(4);
    });
    //End Of No Error Test Cases

    //Error Test Cases

    test('100/0 = 0', () => {
        expect(fn.divide(100, 0)).toBe(NaN);
    });
    test('invalidstr/4 = NaN', ()=>{
        expect(fn.divide('invalidstr', 4)).toBe(NaN);
    })
    test('4/invalidstr = NaN', ()=>{
        expect(fn.divide(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr/invalidstr = NaN', ()=>{
        expect(fn.divide('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null/2 = NaN', ()=>{
        expect(fn.divide(null, 4)).toBe(NaN);
    })
    test('null/2 = NaN', ()=>{
        expect(fn.divide(null, 4)).toBe(NaN);
    })
    test('2/null = NaN', ()=>{
        expect(fn.divide(2, null)).toBe(NaN);
    })
    test('null/null = NaN', ()=>{
        expect(fn.divide(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});
