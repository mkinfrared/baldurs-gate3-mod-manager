const memoizeTtl = <T extends (...args: any[]) => any>(
  func: T,
  ttl = 60000,
): T => {
  const cache = new Map<string, ReturnType<T>>();

  let timeoutId: NodeJS.Timeout | null = null;

  const resetTtl = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cache.clear();
    }, ttl);
  };

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = func(...args);

    cache.set(key, result);

    resetTtl();

    return result;
  }) as T;
};

export { memoizeTtl };
