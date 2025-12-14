import { describe, test, expect } from 'vitest';
import { sum, isEven } from '../src/math.js';

describe('math', () => {
    test('sum', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 1)).toBe(0);
    });

    test('isEven', () => {
        expect(isEven(8)).toBe(true);
        expect(isEven(7)).toBe(false);
        expect(isEven(0)).toBe(true);
    });

    test('integration: sum + isEven', () => {
        const total = sum(5, 3);
        expect(total).toBe(8);
        expect(isEven(total)).toBe(true);
    });
});
