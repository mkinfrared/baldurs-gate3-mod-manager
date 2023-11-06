import { ChangeEventHandler, DragEventHandler, useState } from "react";

import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button, Loading } from "@renderer/shared/ui";

import { ModFileList } from "../ModFileList";
import { ModFileRow } from "../ModFileRow";

import css from "./ModFileForm.module.scss";
import { ModFileFormProps, ReadModResult } from "./ModFileForm.type";

const ModFileForm = ({ className }: ModFileFormProps) => {
  const acceptedFileTypes = ["zip", "rar", "7z"];
  const [zipFiles, setZipFiles] = useState<ReadModResult>([]);
  const { isLoading, mutateAsync, error } = trpc.mod.readMods.useMutation();

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

      const result = await mutateAsync(filePaths);

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
        css.ModFileForm,
        className,
        isLoading && css.isLoading,
      )}
      data-testid="ModFileForm"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ModFileRow
        className={css.header}
        modFilePath=""
        modName="Modification Name"
        modVersion="Version"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ModFileList
          acceptedFileTypes={acceptedFileTypes}
          error={error?.message}
          onFilesSelect={handleFilesSelect}
          zipFiles={zipFiles}
        />
      )}
      {!!zipFiles?.length && (
        <Button className={css.clear} onClick={handleClearClick}>
          Clear
        </Button>
      )}
    </div>
  );
};

export { ModFileForm };
