import { readFile } from "fs/promises";

const copyBackupContentHandler = async (filePath: string) => {
  const content = await readFile(filePath);

  return content.toString();
};

export { copyBackupContentHandler };
