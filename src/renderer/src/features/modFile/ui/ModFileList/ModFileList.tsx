import { EmptyList } from "../EmptyList";
import { ModFileRow } from "../ModFileRow";

import { ModFileListProps } from "./ModFileList.type";

const ModFileList = ({
  acceptedFileTypes,
  error,
  game,
  onFilesSelect,
  zipFiles,
}: ModFileListProps) => {
  if (zipFiles?.length) {
    return zipFiles?.map(({ filePath, info }, index) => (
      <ModFileRow
        key={info?.uuid ?? index}
        game={game}
        modFilePath={filePath}
        modName={info?.name ?? info?.fileName}
        modVersion={info?.version}
      />
    ));
  }

  return (
    <EmptyList
      acceptedFileTypes={acceptedFileTypes}
      error={error}
      onFilesSelect={onFilesSelect}
    />
  );
};

export { ModFileList };
