//import {add} from '../dist/addition';
const add = require('../dist/addition').add;

describe("Addition Tests", () => {
    // No Error Test Cases
    test('1 + 2 = 3', () => {
      expect(add(1, 2)).toBe(3);
    });
    test('100 + 0 = 100', () => {
        expect(add(100, 0)).toBe(100);
    });
    test('0 + 0 = 0', () => {
        expect(add(0, 0)).toBe(0);
    });
    test('-8 + 2 = -6', () => {
        expect(add(-8, 2)).toBe(-6);
    });
    //End of No Error Test Cases

    //Error Test Cases
    test('invalidstr + 4 = NaN', ()=>{
        expect(add('invalidstr', 4)).toBe(NaN);
    })
    test('4 + invalidstr = NaN', ()=>{
        expect(add(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr + invalidstr = NaN', ()=>{
        expect(add('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null + 2 = NaN', ()=>{
        expect(add(null, 4)).toBe(NaN);
    })
    test('null + 2 = NaN', ()=>{
        expect(add(null, 4)).toBe(NaN);
    })
    test('2 + null = NaN', ()=>{
        expect(add(2, null)).toBe(NaN);
    })
    test('null + null = NaN', ()=>{
        expect(add(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});