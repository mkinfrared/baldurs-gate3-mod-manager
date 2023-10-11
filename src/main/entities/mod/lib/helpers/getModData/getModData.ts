import { memoizeTtl } from "@common/lib";

import { ModDataResult } from "./getModData.type";
import { getModDataFromArchive } from "./lib";

const getModData = async (filePath: string) => {
  const { modData, pakFiles } = await getModDataFromArchive(filePath);
  const result: ModDataResult = { modData, filePath, pakFiles };

  return result;
};

const getModDataMemoized = memoizeTtl(getModData);

export { getModDataMemoized as getModData };
