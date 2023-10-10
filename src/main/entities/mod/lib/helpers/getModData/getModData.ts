import { LRUCache } from "lru-cache";

import { ModDataResult } from "./getModData.type";
import { getModDataFromArchive } from "./lib";

const cache = new LRUCache<string, ModDataResult>({
  max: 500,
  ttl: 60000,
  updateAgeOnGet: true,
  updateAgeOnHas: true,
});

const getModData = async (filePath: string) => {
  if (cache.has(filePath)) {
    return cache.get(filePath);
  }

  const { modData, pakFiles } = await getModDataFromArchive(filePath);
  const result: ModDataResult = { modData, filePath, pakFiles };

  cache.set(filePath, result);

  return result;
};

export { getModData };
