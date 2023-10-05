import { DragEventHandler, useState } from "react";

import { classNames, trpc } from "renderer/shared/lib/helpers";

import { EmptyList } from "../EmptyList";
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
      className={classNames(
        css.ModFileList,
        className,
        readFilesMutation.isLoading && css.isLoading,
      )}
      data-testid="ModFileList"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ModFileRow
        className={css.header}
        modFilePath=""
        modName="Modification Name"
        modVersion="Version"
      />
      {zipFiles?.length ? (
        zipFiles?.map(({ filePath, info }, index) => (
          <ModFileRow
            key={info?.uuid ?? index}
            modFilePath={filePath}
            modName={info?.name}
            modVersion={info?.version}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export { ModFileList };
