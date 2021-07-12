//import {subtract} from '../dist/subtraction';
const subtract = require('../dist/subtraction').subtract;

describe("Subtraction Tests", () => {

    //No Error Test Cases
    test('84 + 4 = 80', () => {
      expect(subtract(84, 4)).toBe(80);
    });
    test('100 - 0 = 100', () => {
        expect(subtract(100, 0)).toBe(100);
    });
    test('0 - 0 = 0', () => {
        expect(subtract(0, 0)).toBe(0);
    });
    test('-8 - (-2) = -6', () => {
        expect(subtract(-8, -2)).toBe(-6);
    });
    test('-8 - 2 = -10', () => {
        expect(subtract(-8, 2)).toBe(-10);
    });
    test('100 - 200 = -100', () => {
        expect(subtract(100, 200)).toBe(-100);
    });
    //End of No Error Test Cases

    //Error Test Cases
    test('invalidstr - 4 = NaN', ()=>{
        expect(subtract('invalidstr', 4)).toBe(NaN);
    })
    test('4 - invalidstr = NaN', ()=>{
        expect(subtract(4, 'invalidstr')).toBe(NaN);
    })
    test('invalidstr - invalidstr = NaN', ()=>{
        expect(subtract('invalidstr', 'invalidstr')).toBe(NaN);
    })
    test('null - 2 = NaN', ()=>{
        expect(subtract(null, 4)).toBe(NaN);
    })
    test('null - 2 = NaN', ()=>{
        expect(subtract(null, 4)).toBe(NaN);
    })
    test('2 - null = NaN', ()=>{
        expect(subtract(2, null)).toBe(NaN);
    })
    test('null - null = NaN', ()=>{
        expect(subtract(null, null)).toBe(NaN);
    })
    //End of Error Test Cases
});