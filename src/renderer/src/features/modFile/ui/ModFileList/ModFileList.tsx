import { ChangeEventHandler, DragEventHandler, useState } from "react";

import { classNames, trpc } from "@renderer/shared/lib/helpers";

import { EmptyList } from "../EmptyList";
import { ModFileRow } from "../ModFileRow";

import css from "./ModFileList.module.scss";
import { ModFileListProps, ReadModResult } from "./ModFileList.type";

const ModFileList = ({ className }: ModFileListProps) => {
  const acceptedFileTypes = ["zip", "rar", "7z"];
  const [zipFiles, setZipFiles] = useState<ReadModResult>([]);
  const readFilesMutation = trpc.mod.readMods.useMutation();

  const handleDragOver: DragEventHandler = (event) => {
    event.stopPropagation();

    event.preventDefault();
  };

  const submitFiles = async (files: FileList) => {
    try {
      const filePaths = [...files]
        .map(({ path }) => path)
        .filter((path) =>
          acceptedFileTypes.some((type) => {
            const regex = new RegExp(`.${type}$`, "i");

            return regex.test(path);
          }),
        );

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
        <EmptyList
          acceptedFileTypes={acceptedFileTypes}
          onFilesSelect={handleFilesSelect}
        />
      )}
    </div>
  );
};

export { ModFileList };
