import { LRUCache } from "lru-cache";

const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 60000,
  updateAgeOnGet: true,
  updateAgeOnHas: true,
});

const memoizeTtl = <T extends (...args: any[]) => any>(func: T): T =>
  ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = func(...args);

    cache.set(key, result);

    return result;
  }) as T;

export { memoizeTtl };
