/**
 * Find nth Fibonacci number recursively
 *  - Not performant: O(n log n) ?
 */
export function fibonacciRecursive(n: number): number {
  if (n <= 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Find nth Fibonacci number via loop
 *  - More performant: O(n)
 */
export function fibonacciLoop(n: number): number {
  if (n <= 2) return 1;

  // Generate Fibonacci numbers up to n
  const fibonacciNumbers: number[] = [1, 1];
  for (let i = 3; i <= n; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 3]);
  }

  // Return final number
  return fibonacciNumbers.pop();
}

/**
 * Find nth Fibonacci number via loop using cache
 *  - Uses higher order function and closure to increase performance on subsequent calls
 */
function fibonacciGenerator(): (n: number) => number {
  // Fibonacci cache
  const fibonacciNumbers: number[] = [1, 1];

  // Find nth Fibonacci number
  return function fibonacciCached(n: number): number {
    // Fibonacci(n) is cached
    if (n <= fibonacciNumbers.length) return fibonacciNumbers[n - 1];

    // Generate Fibonacci numbers up to n
    for (let i = fibonacciNumbers.length; i < n; i++) {
      fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }

    // Return final number
    return fibonacciNumbers[fibonacciNumbers.length - 1];
  };
}
export const fibonacci = fibonacciGenerator();
