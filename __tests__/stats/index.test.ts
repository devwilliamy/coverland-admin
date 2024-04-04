// average.js
import '@testing-library/jest-dom';
import { calculateAverage } from '@/util/stats';
import { calculatePercentageChange } from '@/util/stats';
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

describe('calculatePercentageChange', () => {
  it('should calculate the percentage increase correctly', () => {
    const result = calculatePercentageChange(100, 120);
    expect(result).toBe(20);
  });

  it('should calculate the percentage decrease correctly', () => {
    const result = calculatePercentageChange(100, 80);
    expect(result).toBe(-20);
  });

  it('should return NaN if the previous value is 0', () => {
    const result = calculatePercentageChange(100, 0);
    expect(result).toBe(-100);
  });

  it('should return NaN if both values are 0', () => {
    const result = calculatePercentageChange(0, 0);
    expect(result).toBeNaN();
  });

  it('should calculate the percentage change correctly when the current value is 0', () => {
    const result = calculatePercentageChange(0, 100);
    expect(result).toBeNaN();
  });
});
