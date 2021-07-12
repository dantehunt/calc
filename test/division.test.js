//import {divide} from '../dist/division';
const divide = require('../dist/division').divide;

describe("Division Tests", () => {

    //No Error Test Cases
    test('0/0 = 0', () => {
      expect(divide(0, 0)).toBe(0);
    });
    test('8/2 = 4', () => {
        expect(divide(8, 2)).toBe(4);
    });
    //End Of No Error Test Cases

    //Error Test Cases

    test('100/0 = 0', () => {
        expect(divide(100, 0)).toBe(NaN);
    });
    test('invalidstr/4 = NaN', ()=>{
        expect(divide('invalidstr', 4)).toBe(NaN);
    })
    test('4/invalidstr = NaN', ()=>{
        expect(divide(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr/invalidstr = NaN', ()=>{
        expect(divide('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null/2 = NaN', ()=>{
        expect(divide(null, 4)).toBe(NaN);
    })
    test('null/2 = NaN', ()=>{
        expect(divide(null, 4)).toBe(NaN);
    })
    test('2/null = NaN', ()=>{
        expect(divide(2, null)).toBe(NaN);
    })
    test('null/null = NaN', ()=>{
        expect(divide(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});