import { rm } from "fs/promises";

const deleteBackupHandler = async (filePath: string) => {
  await rm(filePath);
};

export { deleteBackupHandler };
