import { DragEventHandler, useState } from "react";

import { classNames, trpc } from "renderer/shared/lib/helpers";

import { ModFileRow } from "../ModFileRow";

import css from "./ModFileList.module.scss";
import { ModFileListProps, ReadModResult } from "./ModFileList.type";

const ModFileList = ({ className }: ModFileListProps) => {
  const [zipFiles, setZipFiles] = useState<ReadModResult>([]);
  const readFilesMutation = trpc.mod.readMods.useMutation();

  const handleDragOver: DragEventHandler = (event) => {
    event.stopPropagation();

    event.preventDefault();
  };

  const handleDrop: DragEventHandler = async (event) => {
    try {
      event.stopPropagation();

      event.preventDefault();

      const { files } = event.dataTransfer;
      const filePaths = [...files].map(({ path }) => path);
      const result = await readFilesMutation.mutateAsync(filePaths);

      setZipFiles(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className={classNames(css.ModFileList, className)}
      data-testid="ModFileList"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {readFilesMutation.isLoading
        ? "Loading..."
        : zipFiles?.map(({ filePath, info }, index) => (
            <ModFileRow
              key={info?.uuid ?? index}
              modFilePath={filePath}
              modName={info?.name}
              modVersion={info?.version}
            />
          ))}
    </div>
  );
};

export { ModFileList };
