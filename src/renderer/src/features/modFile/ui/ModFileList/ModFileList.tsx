import { ChangeEventHandler, DragEventHandler, useState } from "react";

import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button } from "@renderer/shared/ui";

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

  const submitFiles = async (files: FileList) => {
    try {
      const filePaths = [...files].map(({ path }) => path);
      const result = await readFilesMutation.mutateAsync(filePaths);

      setZipFiles(result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDrop: DragEventHandler = (event) => {
    event.stopPropagation();

    event.preventDefault();

    const { files } = event.dataTransfer;

    submitFiles(files);
  };

  const handleFilesSelect: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    const { files } = event.target;

    if (files) {
      submitFiles(files);
    }
  };

  const handleClearClick = () => {
    setZipFiles([]);
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
            modName={info?.name ?? undefined}
            modVersion={info?.version}
          />
        ))
      ) : (
        <EmptyList onFilesSelect={handleFilesSelect} />
      )}
      {!!zipFiles?.length && (
        <Button className={css.clear} onClick={handleClearClick}>
          Clear
        </Button>
      )}
    </div>
  );
};

export { ModFileList };
