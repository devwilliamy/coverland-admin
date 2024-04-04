// average.js
import '@testing-library/jest-dom';
import { calculateAverage } from '@/util/stats';

describe('calculateAverage', () => {
  it('should return the average of an array of numbers', () => {
    const numbers = [10, 20, 30, 40, 50];
    const expected = 30;
    const result = calculateAverage(numbers);
    expect(result).toBe(expected);
  });

  it('should return NaN for an empty array', () => {
    const numbers: number[] = [];
    const result = calculateAverage(numbers);
    expect(result).toBeNaN();
  });

  it('should handle an array with a single number', () => {
    const numbers = [25];
    const expected = 25;
    const result = calculateAverage(numbers);
    expect(result).toBe(expected);
  });

  it('should handle negative numbers', () => {
    const numbers = [-10, -20, -30];
    const expected = -20;
    const result = calculateAverage(numbers);
    expect(result).toBe(expected);
  });
});
