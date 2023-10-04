import { DragEventHandler, useState } from "react";

import { classNames } from "renderer/shared/lib/helpers";

import { ModFileRow } from "../ModFileRow";

import css from "./ModFileList.module.scss";
import { ModFileListProps } from "./ModFileList.type";

const ModFileList = ({ className }: ModFileListProps) => {
  const [zipFiles, setZipFiles] = useState<File[]>([]);

  const handleDragOver: DragEventHandler = (event) => {
    event.stopPropagation();

    event.preventDefault();
  };

  const handleDrop: DragEventHandler = (event) => {
    event.stopPropagation();

    event.preventDefault();

    const { files } = event.dataTransfer;

    setZipFiles([...files]);
  };

  return (
    <div
      className={classNames(css.ModFileList, className)}
      data-testid="ModFileList"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {zipFiles.map((zipFile) => (
        <ModFileRow key={zipFile.name} file={zipFile} />
      ))}
    </div>
  );
};

export { ModFileList };
