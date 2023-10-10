/**
 * Composes multiple functions into a single function.
 * @template R - The type of the input and output of the composed functions.
 * @param {function(a: R): R} fn1 - The first function in the composition.
 * @param {...Array<function(a: R): R>} fns - Additional functions to be composed.
 * @returns {function(a: R): R} - The composed function.
 * @example
 * // Compose two functions: addOne and multiplyByTwo
 * const addOne = (num) => num + 1;
 * const multiplyByTwo = (num) => num * 2;
 * const composedFn = compose(addOne, multiplyByTwo);
 * console.log(composedFn(2)); // => 6 (multiplyByTwo(addOne(2)))
 */
const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

export { compose };
