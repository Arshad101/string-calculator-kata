import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number for a single number input', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum for two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('should handle new lines as a delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  test('should show all negative numbers in the error message', () => {
    expect(() => add('-1,-2,3')).toThrow('Negative numbers not allowed: -1, -2');
  });
});
