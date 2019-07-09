import {
  fibonacci,
  fibonacciLoop,
  fibonacciRecursive,
} from './fibonacci';

test('Fibonacci n(2) is 1', () => {
  expect(fibonacciRecursive(2)).toBe(1);
  expect(fibonacciLoop(2)).toBe(1);
  expect(fibonacci(2)).toBe(1);
});

test('Fibonacci n(3) is 2', () => {
  expect(fibonacciRecursive(3)).toBe(2);
  expect(fibonacciLoop(3)).toBe(2);
  expect(fibonacci(3)).toBe(2);
});

test('Fibonacci n(5) is 5', () => {
  expect(fibonacciRecursive(5)).toBe(5);
  expect(fibonacciLoop(5)).toBe(5);
  expect(fibonacci(5)).toBe(5);
});

test('Fibonacci n(16) is 987', () => {
  expect(fibonacciRecursive(16)).toBe(987);
  expect(fibonacciLoop(16)).toBe(987);
  expect(fibonacci(16)).toBe(987);
});
