/**
 * a function returning a promise which resolves
 * after a passed timout in milliseconds
 * @param timeout - a timeout before promise resolves
 * @example
 * delay(500);
 * await delay(700);
 */
const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export { delay };
